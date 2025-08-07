import React from 'react';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to From Zero to AI</h1>
        <p>Your resource hub to start your AI journey.</p>
      </header>
      <section style={styles.section}>
        <h2>Featured Courses</h2>
        <div style={styles.courses}>
          {/* Placeholder for course items */}
          <div style={styles.courseItem}>
            <h3>Introduction to AI</h3>
            <p>Learn the basics of AI and machine learning.</p>
          </div>
          <div style={styles.courseItem}>
            <h3>Advanced AI Techniques</h3>
            <p>Explore complex AI algorithms and models.</p>
          </div>
        </div>
      </section>
      <section style={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>"This platform is a game-changer for AI enthusiasts!" - Jane Doe</p>
        </blockquote>
      </section>
      <footer style={styles.footer}>
        <button style={styles.button}>Explore Courses</button>
        <button style={styles.button}>Sign Up for Updates</button>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  courses: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  courseItem: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '45%',
  },
  testimonials: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  footer: {
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    color: 'white',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};