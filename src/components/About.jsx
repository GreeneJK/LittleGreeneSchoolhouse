import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrapper">
            <img
              src="/kimberly-greene.jpg"
              alt="Kimberly Greene — The Little Greene Schoolhouse"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <div className="section-label">Meet Mrs. Greene</div>
            <h2>A Schoolhouse<br />Without Walls</h2>
            <p>
              I'm an elementary educator on sabbatical, spending my time researching
              and sharing what I've learned about building inclusive talent development
              programs that don't leave kids behind.
            </p>
            <p>
              After years of watching critical thinking get squeezed out of the school day,
              I started The Little Greene Schoolhouse to give educators a place to think
              deeply about how we identify, nurture, and challenge <em>every</em> learner.
            </p>
            <blockquote className="about-quote">
              "Every child has talent waiting to be developed. Our job is to build systems
              that find it — not wait for it to announce itself."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
