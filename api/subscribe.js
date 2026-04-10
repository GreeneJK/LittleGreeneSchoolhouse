/**
 * Vercel Serverless Function — POST /api/subscribe
 *
 * Accepts { firstName, email } and creates a BeeHiiv subscriber.
 * Keeps the API key server-side so it's never exposed to the browser.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, email, website } = req.body || {};

  // Honeypot — if the hidden "website" field has a value, it's a bot
  if (website) {
    // Respond with fake success so bots think it worked
    return res.status(200).json({ success: true });
  }

  // --- Validation ---
  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    return res.status(400).json({ error: 'First name is required.' });
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  // --- Environment ---
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !pubId) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars');
    return res.status(500).json({ error: 'Server configuration error. Please try again later.' });
  }

  // --- BeeHiiv API call ---
  try {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          first_name: firstName.trim(),
          utm_source: 'website',
          referring_site: req.headers.referer || req.headers.origin || '',
          send_welcome_email: true,
        }),
      }
    );

    if (!beehiivRes.ok) {
      const errBody = await beehiivRes.text();
      console.error('BeeHiiv API error:', beehiivRes.status, errBody);

      // Surface user-friendly message for common issues
      if (beehiivRes.status === 409) {
        return res.status(200).json({ success: true, message: "You're already subscribed!" });
      }
      return res.status(502).json({ error: 'Unable to subscribe right now. Please try again.' });
    }

    const data = await beehiivRes.json();
    return res.status(200).json({ success: true, subscriberId: data?.data?.id });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}
