import './Testimonials.css';

const TESTIMONIALS = [
  {
    text: "This is the newsletter I didn't know I needed. Finally, someone talking about GT education in a way that's practical AND inclusive.",
    author: 'Sarah M.',
    role: '3rd Grade Teacher · Minnesota',
  },
  {
    text: "The Sip & Think reflections alone are worth subscribing for. I share them with my whole team during our PLC meetings.",
    author: 'James T.',
    role: 'Elementary Principal · Ontario',
  },
  {
    text: "As a GT coordinator trying to build a more equitable identification process, this has been an incredible resource.",
    author: 'Dr. Angela R.',
    role: 'GT Coordinator · Texas',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container text-center">
        <div className="section-label" style={{ justifyContent: 'center' }}>
          What Educators Are Saying
        </div>
        <h2>Trusted by Teachers &amp; Administrators</h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ text, author, role }) => (
            <div className="testimonial-card" key={author}>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testimonial-text">"{text}"</p>
              <div className="testimonial-author">{author}</div>
              <div className="testimonial-role">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
