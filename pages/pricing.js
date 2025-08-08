import Head from 'next/head';
export default function Pricing(){
  return (<>
    <Head><title>Pricing \u2014 From Zero to AI</title></Head>
    <main style={{maxWidth:960,margin:'40px auto',padding:'0 16px',lineHeight:1.6}}>
      <h1>Pricing</h1>
      <p>Early access pricing while we build in public.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginTop:16}}>
        <div style={{border:'1px solid #eee',borderRadius:12,padding:16}}>
          <h3>Starter</h3>
          <p><b>$0</b>/mo</p>
          <ul><li>Weekly updates</li><li>Public roadmap</li></ul>
        </div>
        <div style={{border:'1px solid #000',borderRadius:12,padding:16}}>
          <h3>Builder</h3>
          <p><b>$29</b>/mo</p>
          <ul><li>Full playbook access</li><li>Email summaries</li><li>Templates</li></ul>
        </div>
        <div style={{border:'1px solid #eee',borderRadius:12,padding:16}}>
          <h3>Partner</h3>
          <p><b>$199</b>/mo</p>
          <ul><li>Priority updates</li><li>Q&A window</li></ul>
        </div>
      </div>
      <h2 style={{marginTop:32}}>FAQ</h2>
      <p><b>What am I paying for?</b> Access to the evolving playbook, tooling, and results.</p>
      <form method="POST" action="/api/subscribe" style={{display:'flex',gap:8,marginTop:12}}><input type="email" name="email" placeholder="Your email" required style={{flex:1,padding:'10px'}} /><button type="submit" style={{padding:'10px 14px',border:'1px solid #000',borderRadius:8}}>Get updates</button></form>
    </main>
  </>);
}
