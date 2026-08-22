import React from 'react'
import ser1 from '../assets/ser1.png'
import ser2 from '../assets/ser2.png'
import ser3 from '../assets/ser3.png'
import ser4 from '../assets/ser4.png'
import './Service2.css'

const services = [
  {
    img: ser1,
    title: 'Individual Counselling',
    tag: 'One-on-One',
    desc: 'A private, confidential space where you can explore personal challenges, process emotions, and develop healthier coping strategies with the guidance of a qualified counsellor.',
  },
  {
    img: ser2,
    title: 'Couple Counselling',
    tag: 'Relationships',
    desc: 'Helping couples navigate conflict, rebuild trust, and strengthen communication so they can grow together in a healthy, supportive partnership.',
  },
  {
    img: ser3,
    title: 'Family Counselling',
    tag: 'Family Dynamics',
    desc: 'We work with families to address relational tensions, improve understanding, and foster a home environment rooted in compassion and mutual respect.',
  },
  {
    img: ser4,
    title: 'Life Skills Training',
    tag: 'Personal Growth',
    desc: 'Practical workshops and coaching sessions that equip you with tools for resilience, emotional regulation, goal-setting, and purposeful living.',
  },
]

export const Service2 = () => {
  return (
    <section id="services" className="services-section">
      {/* Section Header */}
      <div className="services-header">
        <span className="section-badge">What We Offer</span>
        <h2>Our Services</h2>
        <p className="services-subtitle">
          We provide compassionate mental health counselling and life skills
          training to support your well-being and personal growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-img-wrap">
              <img src={s.img} alt={s.title} className="service-img" />
              <div className="service-img-overlay" />
            </div>
            <div className="service-info">
              <span className="service-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}