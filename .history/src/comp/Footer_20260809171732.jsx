import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'

export const Footer = () => {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Life-Logo" className="footer-logo" />
            <span className="footer-name">Life-Logo</span>
          </div>
          <p className="footer-tagline">
            Mental Health Support &amp; Life Skills Training Unit — helping
            people discover meaning, hope, and purpose.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {[
              { label: 'Home',        id: 'home' },
              { label: 'Our Story',   id: 'story' },
              { label: 'Services',    id: 'services' },
              { label: 'Our Team',    id: 'team' },
              { label: 'Contact',     id: 'contact' },
            ].map((l) => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)} className="footer-link">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="fc-icon">📍</span>
              House-19, Road-14, Sector-13, Uttara, Dhaka-1230, Bangladesh.
            </li>
            <li>
              <span className="fc-icon">📞</span>
              <a href="tel:01616190907">01616190907</a>
            </li>
            <li>
              <span className="fc-icon">✉️</span>
              <a href="mailto:hello@lifelogo.org">hello@lifelogo.org</a>
            </li>
            <li>
              <span className="fc-icon">💬</span>
              <a href="https://wa.me/233244567890" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {year} Life-Logo Mental Health &amp; Life Skills. All rights reserved.</p>
        <p className="footer-note">Built with compassion 💚</p>
      </div>
    </footer>
  )
}
