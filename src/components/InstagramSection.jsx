import { useEffect } from 'react';
import './InstagramSection.css';

export default function InstagramSection() {
  useEffect(() => {
    // Load Elfsight platform script once
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="instagram-section" id="instagram">
      <div className="container text-center">
        <div className="section-label" style={{ justifyContent: 'center' }}>Follow Along</div>
        <h2>@thelittlegreeneschoolhouse</h2>
        <p className="ig-sub">
          Daily doses of critical thinking, talent development, and educator encouragement on Instagram.
        </p>

        <div className="ig-embed-wrapper">
          <div
            className="elfsight-app-8fe69861-16df-4fa2-9472-fa5b891f1d99"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
