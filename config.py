
# --- Site repo location (where Next.js lives & deploys run) ---
import os as _os
SITE_REPO_DIR = _os.getenv("SITE_REPO_DIR", "/home/ec2-user/deploy-fromzerotoai")
