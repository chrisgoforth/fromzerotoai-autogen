import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About LearnAI Hub</title>
        <meta name="description" content="Discover the mission and vision of LearnAI Hub." />
      </Head>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>At LearnAI Hub, we strive to make AI education accessible to all.</p>
        </section>
        <section>
          <h2>Our Vision</h2>
          <p>We envision a world where AI technology is harnessed for the good of all humanity, with awareness and understanding spreading globally.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 LearnAI Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}