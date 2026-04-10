import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">🏠 The Little Greene Schoolhouse</div>
        <p>Grow every thinker. Develop every talent.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#newsletter">Newsletter</a>
          <a href="#about">About</a>
          <a
            href="https://www.instagram.com/thelittlegreeneschoolhouse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
        <div className="footer-copy">&copy; {new Date().getFullYear()} The Little Greene Schoolhouse. All rights reserved.</div>
      </div>
    </footer>
  );
}
