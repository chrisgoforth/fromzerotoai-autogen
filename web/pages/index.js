import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LearnAI Hub - Home</title>
        <meta name="description" content="Your destination for learning and exploring artificial intelligence." />
      </Head>
      <header>
        <h1>Welcome to LearnAI Hub</h1>
        <p>Your destination for learning and exploring artificial intelligence.</p>
      </header>
      <main>
        <section>
          <h2>Featured Articles</h2>
          <p>Explore our latest blog posts and articles about AI advancements.</p>
          {/* Placeholder for blog post teasers */}
        </section>
        <section>
          <h2>Online Courses</h2>
          <p>Enroll in our AI courses, tailored for both beginners and experts.</p>
          {/* Placeholder for course highlights */}
        </section>
        <section>
          <h2>Interactive Demos</h2>
          <p>Experience AI first-hand with our interactive demos.</p>
          {/* Placeholder for demo links */}
        </section>
      </main>
      <footer>
        <p>&copy; 2025 LearnAI Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}