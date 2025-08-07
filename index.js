import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to From Zero to AI</h1>
      <img src="/images/hero-placeholder.jpg" alt="AI illustration" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p>Your trusted partner in AI solutions, committed to driving growth through cutting-edge technologies.</p>
      <button onClick={() => window.location.href='/services'} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Explore Our Services
      </button>
    </div>
  );
}