import './InstagramSection.css';

const IG_POSTS = [
  'Sip & Think #12',
  'Talent in Every Child',
  'Critical Thinking Tips',
  'Equity in GT Ed',
];

export default function InstagramSection() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container text-center">
        <div className="section-label" style={{ justifyContent: 'center' }}>Follow Along</div>
        <h2>@thelittlegreeneschoolhouse</h2>
        <p className="ig-sub">
          Daily doses of critical thinking, talent development, and educator encouragement on Instagram.
        </p>

        <div className="ig-grid">
          {IG_POSTS.map((label) => (
            <div className="ig-card" key={label}>
              {label}
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/thelittlegreeneschoolhouse/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline ig-follow-btn"
        >
          Follow on Instagram &rarr;
        </a>
      </div>
    </section>
  );
}
