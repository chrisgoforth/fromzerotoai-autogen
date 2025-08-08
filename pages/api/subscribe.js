export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  const email = (req.body?.email || req.query?.email || '').toString().trim();
  if (!email) return res.status(400).json({error:'Email required'});
  try {
    const fs = await import('fs');
    const path = '/tmp/subscribers.csv';
    const row = `${new Date().toISOString()},${email}\n`;
    try { fs.appendFileSync(path, row); } catch(e) { fs.writeFileSync(path, row); }
  } catch(e) {}
  return res.status(200).json({ok:true});
}
