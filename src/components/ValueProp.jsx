import { trackEvent } from '../utils/analytics';
import './ValueProp.css';

const PERKS = [
  {
    icon: '💭',
    title: 'Critical Thinking Frameworks',
    desc: 'Practical protocols you can bring into your classroom Monday morning — no PD required.',
  },
  {
    icon: '🔍',
    title: 'Talent Spotting Strategies',
    desc: 'How to identify high-potential learners beyond test scores — especially in underrepresented populations.',
  },
  {
    icon: '🏗️',
    title: 'Program Building Guides',
    desc: 'Step-by-step approaches to launching or strengthening GT and enrichment programs at your school.',
  },
  {
    icon: '📖',
    title: 'Research Digests',
    desc: 'The latest in talent development research, translated into language you can share with your team.',
  },
  {
    icon: '🤝',
    title: 'Equity in Gifted Ed',
    desc: 'Honest conversations about access, identification bias, and building truly inclusive programming.',
  },
  {
    icon: '☕',
    title: 'Sip & Think Reflections',
    desc: 'Short prompts for professional reflection — small sips of thinking that lead to big shifts in practice.',
  },
];

export default function ValueProp() {
  return (
    <section className="value-prop" id="newsletter">
      <div className="container text-center">
        <div className="section-label section-label--light">The Newsletter</div>
        <h2>
          What You'll Get From<br />
          <em>The Little Greene Schoolhouse</em>
        </h2>
        <p className="value-prop-sub">
          Strategies, frameworks, and fresh thinking for educators who believe
          talent lives in every classroom — not just the gifted roster.
        </p>

        <div className="perks-grid">
          {PERKS.map(({ icon, title, desc }) => (
            <a href="#signup" className="perk-card" key={title}>
              <div className="perk-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </a>
          ))}
        </div>

        <a
          href="#signup"
          className="btn btn-primary btn-lg value-prop-cta"
          onClick={() => trackEvent('cta_click', { location: 'value_prop' })}
        >
          Subscribe Free — Join the Conversation
        </a>
      </div>
    </section>
  );
}
