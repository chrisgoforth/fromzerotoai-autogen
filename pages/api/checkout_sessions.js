/**
 * Placeholder Stripe Checkout endpoint.
 * TODO: set STRIPE_SECRET_KEY and PRICE_ID* in env; validate payload; create checkout session.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  // TODO: integrate Stripe SDK; create session with price IDs; return url
  return res.status(200).json({ok:true, note:'Stripe placeholder'});
}
