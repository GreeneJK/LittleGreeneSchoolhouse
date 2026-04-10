import { trackEvent } from '../utils/analytics';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand" aria-label="The Little Greene Schoolhouse — home">
            <div className="brand-icon" aria-hidden="true">🏠</div>
            The Little Greene Schoolhouse
          </a>
          <a
            href="#signup"
            className="btn btn-primary nav-cta"
            onClick={() => trackEvent('cta_click', { location: 'nav' })}
          >
            Subscribe Free
          </a>
        </div>
      </div>
    </nav>
  );
}
