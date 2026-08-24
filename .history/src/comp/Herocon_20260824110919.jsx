import './herocon.css'
import Hero from '../assets/hero3.jpg'
import bg from '../assets/workshop/bg.png'
const stats = [
  { value: '500+', label: 'Lives Impacted' },
  { value: '15+', label: 'Years Experience' },
  { value: '6',   label: 'Specialists' },
]

export const Herocon = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="hero-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* layered overlay */}
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* eyebrow badge */}
        <span className="hero-badge">Mental Health &amp; Life Skills</span>

        {/* quote */}
        <p className="hero-quote">
          &ldquo;Doctors Dress The Wound, God Heals It.&rdquo;
        </p>

        {/* headline */}
        <h1 className="hero-headline">
          Well-Being Requires<br />
          <span className="hero-headline-accent">a Safe Space to Heal</span>
        </h1>

        {/* sub-text */}
        <p className="hero-sub">
          Mental health is the foundation of a healthy life. Through compassion,
          professional support, and faith, we help you find hope, build
          resilience, and take meaningful steps toward lasting well-being.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button
            id="hero-contact-btn"
            className="hero-btn hero-btn--primary"
            onClick={() => scrollTo('contact')}
          >
            Contact Us
          </button>
          <button
            id="hero-services-btn"
            className="hero-btn hero-btn--ghost"
            onClick={() => scrollTo('services')}
          >
            Our Services
          </button>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div className="hero-stat" key={i}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}