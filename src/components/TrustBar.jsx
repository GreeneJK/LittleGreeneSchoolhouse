import './TrustBar.css';

const TRUST_ITEMS = [
  { icon: '🎓', text: 'Written by a Practicing Educator' },
  { icon: '📬', text: 'Free Forever, No Spam' },
  { icon: '🌍', text: 'Teachers Across North America' },
  { icon: '💡', text: 'Research-Backed Strategies' },
];

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust signals">
      <div className="container">
        <div className="trust-items">
          {TRUST_ITEMS.map(({ icon, text }) => (
            <div className="trust-item" key={text}>
              <span className="trust-icon" aria-hidden="true">{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
