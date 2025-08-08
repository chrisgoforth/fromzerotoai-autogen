import React from 'react';

export default function Home() {
  return (
    <main>

<nav style={{display:'flex',gap:'16px',padding:'12px 16px',borderBottom:'1px solid #eee'}}>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

      <section>
        <h1>H1</h1>
        <p>From Zero to AI — Build an autonomous business that runs itself</p>
      </section>
      <section>
        <h2>Our Services</h2>
        <p>Explore our range of AI solutions tailored to your needs.</p>
      </section>
      <section>
        <h2>Testimonials</h2>
        <p>Read what our satisfied clients have to say.</p>
      </section>
      <section>
        <button>Get the Playbook</button>
      </section>
    </main>
  );
}