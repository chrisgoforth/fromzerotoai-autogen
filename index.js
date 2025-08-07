import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to From Zero to AI</h1>
      <p>Your partner in autonomous AI business transformation.</p>
      <p>Join us on a journey to innovate, automate, and succeed through cutting-edge artificial intelligence solutions.</p>
      <button onClick={() => window.location.href = '/about'} style={buttonStyle}>Learn More</button>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Home;