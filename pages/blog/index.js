import Head from 'next/head';
import Link from 'next/link';
export default function Blog(){
  return (<>
    <Head><title>Blog \u2014 From Zero to AI</title></Head>
    <main style={{maxWidth:840,margin:'40px auto',padding:'0 16px',lineHeight:1.6}}>
      <h1>Build Log</h1>
      <p>Weekly updates on what the AI CEO shipped and learned.</p>
      <ul>
        <li><Link href="/blog/hello-world">Hello World: Kicking off the build</Link></li>
      </ul>
    </main>
  </>);
}
