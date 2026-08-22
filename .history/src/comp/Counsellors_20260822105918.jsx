import React from 'react'
import './Counsellors.css'
import c1 from '../assets/counsellor1.jpg'
import c2 from '../assets/counsellor2.jpg'
import c3 from '../assets/counsellor3.jpeg'
import c4 from '../assets/counsellor4.jpeg'
import c5 from '../assets/counsellor5.jpeg'
import c6 from '../assets/counsellor6.jpg'
import c7 from '../assets/c7.jpeg'
import c8 from '../assets/c8.jpeg'
import c9 from '../assets/c9.jpeg'

const counsellors = [
  {
    img: c1,
    name: 'Sunjeda Parvin',
    role: 'Founder - Life Logo',
    bio: 'Sunjeda Parvin is a Parent Training Facilitator(Uk) and holds an Ms in Counselling Psychology(Du). She serves as the Founder - Life Logo and Advisor - Super Kid Initiatives. She has 16+ Years of Experience in Mental Health Area and 300+ Case Solved.',
  },
  {
    img: c2,
    name: 'Sabina Islam',
    role: 'Psychologist - LifeLogo',
    bio: 'Sabina Islam holds an MS in Social Psychology from the University of Dhaka. She has 4+ Years of Experience with expertise in Psychotherapy (CBT & DBT), Couple & Family Counselling, Addiction Counselling, and Parenting Counselling.',
  },
  {
    img: c3,
    name: 'Israt Jahan Labone',
    role: 'Psychologist - LifeLogo(On-Demand)',
    bio: 'Israt Jahan Labone holds an MS in School Psychology (DU) and is a Master Trainer (Ministry of Education and SESIP). She has 5+ Years of Experience and Special Training on CBT, NVC, Anger management, Stress Management, Mindfulness.',
  },
  {
    img: c4,
    name: 'Md. Shahin Alam',
    role: 'Psychologist - LifeLogo (On-Demand)',
    bio: 'Md. Shahin Alam holds an MSc in Educational Psychology from the University of Dhaka and a B.Sc in Psychology from Jagannath University. He has training in Cognitive Behaviour Therapy.',
  },
  {
    img: c5,
    name: 'Karima Khatun',
    role: 'Psychologist - LifeLogo',
    bio: 'Karima Khatun holds an MS in Clinical Psychology (DU). She has Special Training on Cognitive Behavior Therapy (CBT) & Dialectical Behaviour Therapy (DBT), Crisis Intervention & Suicide Prevention And Other Evidence Based Approaches.',
  },
  {
    img: c6,
    name: 'Md. Rasidul Alam',
    role: 'Psychologist - LifeLogo (On-Demand)',
    bio: 'Md. Rasidul Alam holds an M.Sc. in Organisational and Management Psychology. He has 8+ Years of Experience and Special Training on CBT, DBT, Substance Use Disorder, Family Counselling, Psychosexual problem with Porn Addiction and Suicide Prevention.',
  },
    {
    img: c7,
    name: 'Md. Rasidul Alam',
    role: 'Psychologist - LifeLogo (On-Demand)',
    bio: 'Md. Rasidul Alam holds an M.Sc. in Organisational and Management Psychology. He has 8+ Years of Experience and Special Training on CBT, DBT, Substance Use Disorder, Family Counselling, Psychosexual problem with Porn Addiction and Suicide Prevention.',
  },
    {
    img: c8,
    name: 'Md. Rasidul Alam',
    role: 'Psychologist - LifeLogo (On-Demand)',
    bio: 'Md. Rasidul Alam holds an M.Sc. in Organisational and Management Psychology. He has 8+ Years of Experience and Special Training on CBT, DBT, Substance Use Disorder, Family Counselling, Psychosexual problem with Porn Addiction and Suicide Prevention.',
  },
    {
    img: c6,
    name: 'Md. Rasidul Alam',
    role: 'Psychologist - LifeLogo (On-Demand)',
    bio: 'Md. Rasidul Alam holds an M.Sc. in Organisational and Management Psychology. He has 8+ Years of Experience and Special Training on CBT, DBT, Substance Use Disorder, Family Counselling, Psychosexual problem with Porn Addiction and Suicide Prevention.',
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
