import { useState, useCallback } from 'react';
import { trackEvent } from '../utils/analytics';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Hook that manages the signup form state, validation, and API submission.
 *
 * States: 'idle' | 'submitting' | 'success' | 'error'
 */
export default function useSubscribe() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');      // idle | submitting | success | error
  const [errors, setErrors] = useState({});           // { firstName?: string, email?: string }
  const [serverError, setServerError] = useState('');

  const validate = useCallback(() => {
    const next = {};
    if (!firstName.trim()) next.firstName = 'First name is required.';
    if (!email.trim()) next.email = 'Email address is required.';
    else if (!EMAIL_RE.test(email)) next.email = 'Please enter a valid email.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [firstName, email]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerError('');
    trackEvent('signup_submit');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      trackEvent('signup_success');
    } catch (err) {
      setStatus('error');
      setServerError(err.message);
      trackEvent('signup_error', { message: err.message });
    }
  }, [firstName, email, validate]);

  return {
    firstName, setFirstName,
    email, setEmail,
    status, errors, serverError,
    handleSubmit,
  };
}
