import React from 'react'
import './Contents2.css'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Compassion First',
    desc: 'Every person who walks through our doors is met with unconditional empathy and respect — no judgement, only care.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
      </svg>
    ),
    title: 'Professional Support',
    desc: 'Our qualified counsellors bring years of clinical experience to provide structured, evidence-informed therapeutic care.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Faith-Centred Hope',
    desc: 'We integrate faith, resilience, and purpose-driven living to help you find lasting meaning beyond your circumstances.',
  },
]

export const Contents2 = () => {
  return (
    <section id="story" className="story-section">
      <div className="story-inner">

        {/* ---- Left column: text ---- */}
        <div className="story-text">
          <span className="section-badge">Our Story</span>
          <h2>Helping You Find Meaning, Hope &amp; Purpose</h2>
          <p className="story-lead">
            Life-Logo Mental Health Support &amp; Life Skills Training Unit was
            founded on a simple but powerful belief: every person deserves access
            to compassionate, professional support on their path to wholeness.
          </p>
          <p className="story-body">
            Since our founding, we have walked alongside hundreds of individuals,
            couples, and families — helping them navigate grief, anxiety, relational
            challenges, and the pressures of everyday life. We combine professional
            counselling with practical life skills training to equip our clients not
            just to cope, but to truly thrive.
          </p>
        </div>

        {/* ---- Right column: pillars ---- */}
        <div className="story-pillars">
          {pillars.map((p, i) => (
            <div className="story-pillar" key={i}>
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
