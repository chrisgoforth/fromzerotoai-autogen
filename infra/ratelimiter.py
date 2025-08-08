import os, sqlite3, time
from contextlib import contextmanager
from pathlib import Path

# Use STATE_DB_PATH if provided, else default to ./data/state.db
DB_PATH = Path(os.getenv("STATE_DB_PATH", "./data/state.db"))
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

def _conn():
    con = sqlite3.connect(DB_PATH)
    con.execute("""CREATE TABLE IF NOT EXISTS events(
        name TEXT NOT NULL,
        ts   REAL NOT NULL
    )""")
    con.commit()
    return con

def _prune(con, name, window_seconds):
    cutoff = time.time() - window_seconds
    con.execute("DELETE FROM events WHERE name=? AND ts<?", (name, cutoff))
    con.commit()

def count_in_window(name: str, window_seconds: int) -> int:
    con = _conn()
    _prune(con, name, window_seconds)
    cur = con.execute("SELECT COUNT(*) FROM events WHERE name=?", (name,))
    (n,) = cur.fetchone()
    con.close()
    return int(n)

def record(name: str) -> None:
    con = _conn()
    con.execute("INSERT INTO events(name, ts) VALUES(?, ?)", (name, time.time()))
    con.commit()
    con.close()

def next_reset_epoch(window_seconds: int = 86400) -> float:
    # Simplest reset hint: now + window (not strict “top of window”, but good for UX)
    return time.time() + window_seconds

class LimitExceeded(Exception):
    pass

@contextmanager
def allow_if_under_limit(name: str, max_events: int, window_seconds: int = 86400):
    """
    Usage:
        with allow_if_under_limit("openai_call", 5, 86400):
            do_the_thing()
    If limit reached, raises LimitExceeded.
    """
    n = count_in_window(name, window_seconds)
    if n >= max_events:
        raise LimitExceeded(f"limit_reached:{name}:{max_events}/24h")
    try:
        yield
        record(name)
    finally:
        pass

if __name__ == "__main__":
    # quick self-test
    W = 5  # seconds window for a quick smoke test
    key = "selftest_event"
    print("Initial count:", count_in_window(key, W))
    with allow_if_under_limit(key, 2, W):
        print("Event 1 recorded")
    with allow_if_under_limit(key, 2, W):
        print("Event 2 recorded")
    try:
        with allow_if_under_limit(key, 2, W):
            print("This should not print")
    except LimitExceeded as e:
        print("LimitExceeded as expected:", e)
    print("Count now:", count_in_window(key, W))
