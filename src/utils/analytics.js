/**
 * Track custom events via Vercel Analytics.
 * Vercel Analytics auto-tracks page views; this helper is for conversion events.
 *
 * Usage:  trackEvent('signup_success', { source: 'hero_cta' })
 */
export function trackEvent(name, properties = {}) {
  // Vercel Analytics exposes window.va if the script is loaded
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', { name, ...properties });
  }
}
