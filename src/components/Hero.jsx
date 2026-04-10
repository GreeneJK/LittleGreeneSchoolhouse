import { trackEvent } from '../utils/analytics';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="dot" aria-hidden="true"></div>
            Critical Thinking Advocate
          </div>

          <h1>Grow <em>Every</em> Thinker<br />in Your Building</h1>

          <p className="hero-sub">
            Practical strategies for elementary educators and administrators building
            <strong> gifted &amp; talented programs</strong> and <strong>critical thinking culture</strong> that
            reach every learner.
          </p>

          <div className="hero-ctas">
            <a
              href="#signup"
              className="btn btn-primary btn-lg"
              onClick={() => trackEvent('cta_click', { location: 'hero_primary' })}
            >
              Join the Free Newsletter
            </a>
            <a
              href="#newsletter"
              className="btn btn-outline btn-lg"
              onClick={() => trackEvent('cta_click', { location: 'hero_secondary' })}
            >
              See What You'll Get &rarr;
            </a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Key facts">
          <div className="hero-stat">
            <div className="hero-stat-num">K–6</div>
            <div className="hero-stat-label">Grade Focus</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2x/mo</div>
            <div className="hero-stat-label">Newsletter</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">Free</div>
            <div className="hero-stat-label">Always</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num" aria-hidden="true">🌱</div>
            <div className="hero-stat-label">Talent in Every Child</div>
          </div>
        </div>
      </div>
    </section>
  );
}
