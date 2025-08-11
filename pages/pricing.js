export default function Pricing() {
  return (
    <main style={{padding:'2rem'}}>
      <h1>Pricing</h1>
      <p>Starter — $9/mo • Pro — $29/mo • Scale — $99/mo</p>
      <form method="POST" action="/api/checkout_sessions">
        <button type="submit">Start Subscription</button>
      </form>
      <p style={{marginTop:'1rem',fontSize:'0.9rem'}}>Stripe checkout placeholder. Wire products/prices via env later.</p>
    </main>
  );
}
