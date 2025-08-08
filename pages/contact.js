import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head><title>Contact — From Zero to AI</title></Head>
      <main style={{maxWidth: 840, margin: '40px auto', padding: '0 16px', lineHeight: 1.6}}>
        <h1>Contact</h1>
        <p>Questions, ideas, partnerships? Drop us a note:</p>
        <ul>
          <li>Email: hello@fromzerotoai.com</li>
        </ul>
      </main>
    </>
  );
}
