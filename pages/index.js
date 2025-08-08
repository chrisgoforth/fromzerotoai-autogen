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
        <h1>H1: Go from idea to an autonomous AI-run business — fast</h1>
        <p>Subhead: From Zero to AI helps founders and curious builders demo, productize, and monetize an AI product in weeks, not months — no ML PhD required.</p>
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