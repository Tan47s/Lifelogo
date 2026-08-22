import React from 'react'
import './Contact.css'

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Our Location',
    value: 'House-19, Road-14, Sector-13, Uttara, Dhaka-1230, Bangladesh.',
    link: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.07 6.07l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.04z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+88 01716919271\n+88 01616190907',
    link: 'tel:+88 01716919271',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'lifelogo111@gmail.com',
    link: 'mailto:lifelogo111@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.532 5.856L.057 23.5l5.826-1.527A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.026-1.384l-.36-.214-3.732.979.997-3.643-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    link: 'https://wa.me/+8801716919271',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 11:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Section Header */}
      <div className="contact-header">
        <span className="section-badge">Get In Touch</span>
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          We are here to listen. Reach out through any of the channels below
          and one of our team members will respond warmly and promptly.
        </p>
      </div>

      <div className="contact-body">
        {/* Contact Cards */}
        <div className="contact-cards">
          {contactItems.map((item, i) => (
            <div className="contact-card" key={i}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-text">
                <span className="contact-label">{item.label}</span>
                {item.link ? (
                  <a href={item.link} className="contact-value link" target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-value">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours */}
        <div className="hours-panel">
          <h3 className="hours-title">
            <svg className="hours-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Office Hours
          </h3>
          <ul className="hours-list">
            {hours.map((h, i) => (
              <li key={i} className={`hours-row ${h.time === 'Closed' ? 'closed' : ''}`}>
                <span className="hours-day">{h.day}</span>
                <span className="hours-time">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="hours-note">
            💬 For urgent pastoral or crisis support, please call our emergency
            line during office hours.
          </p>
        </div>
      </div>
    </section>
  )
}
