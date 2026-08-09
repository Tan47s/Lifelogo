import React from 'react'
import './Counsellors.css'
import c1 from '../assets/counsellor1.png'
import c2 from '../assets/counsellor2.png'
import c3 from '../assets/counsellor3.png'
import c4 from '../assets/counsellor4.png'
import c5 from '../assets/counsellor5.png'
import c6 from '../assets/counsellor6.png'

const counsellors = [
  {
    img: c1,
    name: 'Dr. Grace Owusu',
    role: 'Lead Counsellor & Founder',
    bio: 'Dr. Owusu brings over 15 years of experience in mental health counselling, specialising in grief recovery, trauma, and faith-based therapy. She is passionate about creating safe, compassionate spaces for healing.',
  },
  {
    img: c2,
    name: 'Mr. James Mensah',
    role: 'Life Skills & Resilience Coach',
    bio: 'James is a certified life coach and counsellor with expertise in stress management, workplace wellbeing, and building personal resilience. He equips clients with practical tools for lasting transformation.',
  },
  {
    img: c3,
    name: 'Ms. Ruth Acheampong',
    role: 'Youth & Family Counsellor',
    bio: 'Ruth specialises in adolescent mental health, family dynamics, and emotional regulation. She partners with young people and families to foster healthier relationships and stronger coping strategies.',
  },
  {
    img: c4,
    name: 'Dr. Samuel Boateng',
    role: 'Senior Trauma Therapist',
    bio: 'Dr. Boateng has over two decades of experience supporting individuals through complex trauma, PTSD, and grief. His calm, structured approach helps clients reclaim a sense of safety and self-worth.',
  },
  {
    img: c5,
    name: 'Ms. Abena Darko',
    role: 'Couples & Relationship Counsellor',
    bio: 'Abena works with couples and individuals navigating relational challenges, communication breakdowns, and emotional disconnection. Her warm style helps clients rebuild trust and deepen their bonds.',
  },
  {
    img: c6,
    name: 'Mr. Kofi Asante',
    role: 'Community & Group Therapist',
    bio: 'Kofi leads group therapy sessions and community outreach programmes. He is passionate about making mental health support accessible and reducing stigma within local communities.',
  },
]

export const Counsellors = () => {
  return (
    <section id="team" className="counsellors-section">
      {/* Section Header */}
      <div className="counsellors-header">
        <span className="section-badge">Our Team</span>
        <h2>Meet the Counsellors</h2>
        <p className="counsellors-subtitle">
          Our qualified, compassionate professionals are dedicated to walking
          alongside you on your journey to wholeness.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="counsellors-grid">
        {counsellors.map((c, i) => (
          <div className="counsellor-card" key={i}>
            <div className="counsellor-img-wrap">
              <img src={c.img} alt={c.name} className="counsellor-img" />
              <div className="counsellor-img-overlay" />
            </div>
            <div className="counsellor-info">
              <h3>{c.name}</h3>
              <span className="counsellor-role">{c.role}</span>
              <p>{c.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
