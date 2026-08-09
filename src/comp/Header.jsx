import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import '../App.css'
import '../Index.css'

const navLinks = [
  { label: 'Home',      id: 'home' },
  { label: 'Our Story', id: 'story' },
  { label: 'Services',  id: 'services' },
  { label: 'Our Team',  id: 'team' },
  { label: 'Contact',   id: 'contact' },
]

export const Header = () => {
  const [active,  setActive]  = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Shrink header + close menu on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (window.scrollY > 20) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (id) => {
    setActive(id)
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        {/* ── Logo ── */}
        <div className="logo-container">
          <img className="logo-img" src={logo} alt="Life-Logo" />
          <span className="logo-text">Life-Logo</span>
        </div>

        {/* ── Desktop nav ── */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-${link.id}`}
              className={`nav-item ${active === link.id ? 'active' : ''}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* ── Hamburger toggle (mobile only) ── */}
        <button
          id="hamburger-btn"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={`mobile-backdrop ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            id={`mob-nav-${link.id}`}
            className={`mobile-nav-item ${active === link.id ? 'active' : ''}`}
            onClick={() => handleNav(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </>
  )
}