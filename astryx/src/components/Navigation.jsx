import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav-bar');
      const hamburger = document.querySelector('.hamburger');
      
      if (isMenuOpen && nav && hamburger && 
          !nav.contains(event.target) && 
          !hamburger.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <img 
        src="/Copilot_20260222_091225.png" 
        alt="Astryx Logo" 
        className={`site-logo ${isScrolled ? 'scrolled' : ''}`}
      />
      
      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav-bar ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/behind-the-scenes" onClick={closeMenu}>Behind The Scenes</NavLink></li>
          <li><NavLink to="/our-work" onClick={closeMenu}>Our Work</NavLink></li>
          <li><NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;