import { useCallback } from 'react';
import useSubscribe from '../hooks/useSubscribe';
import { trackEvent } from '../utils/analytics';
import './SignupForm.css';

export default function SignupForm() {
  const {
    firstName, setFirstName,
    email, setEmail,
    status, errors, serverError,
    handleSubmit,
  } = useSubscribe();

  const onEmailFocus = useCallback(() => {
    trackEvent('signup_start');
  }, []);

  if (status === 'success') {
    return (
      <section className="signup-section" id="signup">
        <div className="container">
          <div className="signup-box">
            <div className="success-state">
              <div className="success-icon" aria-hidden="true">🌱</div>
              <h2>You're In!</h2>
              <p className="sub-text">
                Welcome to The Little Greene Schoolhouse, {firstName}! Check your
                inbox for a confirmation email. We can't wait to grow thinkers together.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="signup-section" id="signup">
      <div className="container">
        <div className="signup-box">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 8 }}>
            Free Newsletter
          </div>
          <h2>Start Growing Thinkers<br />in Your Inbox</h2>
          <p className="sub-text">
            Join educators across North America getting practical strategies for
            gifted education and critical thinking — free, every other week.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot field — hidden from real users, catches bots */}
            <div className="form-hp" aria-hidden="true" tabIndex={-1}>
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" autoComplete="off" tabIndex={-1} />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Your first name"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={errors.firstName ? 'error' : ''}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && (
                <div className="error-msg" id="firstName-error" role="alert">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@school.edu"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={onEmailFocus}
                className={errors.email ? 'error' : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <div className="error-msg" id="email-error" role="alert">{errors.email}</div>
              )}
            </div>

            {serverError && (
              <div className="server-error" role="alert">{serverError}</div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Signing you up...' : 'Yes! Send Me Thinking Strategies →'}
            </button>
          </form>

          <p className="form-disclaimer">
            Free forever. Unsubscribe anytime. We never share your email.<br />
            By signing up you agree to our <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
