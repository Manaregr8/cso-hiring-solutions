'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          {/* Two overlapping circles icon */}
          <svg width="30" height="18" viewBox="0 0 30 18" fill="none">
            <circle cx="9" cy="9" r="8" fill="#0a0a0a" />
            <circle cx="21" cy="9" r="8" fill="#0a0a0a" fillOpacity="0.5" />
          </svg>
          <span className={styles.brandName}>cso</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/sourcing">Sourcing</Link>
          <Link href="/evaluation">Evaluation</Link>
          <Link href="/tracking">Tracking</Link>
          <Link href="/communication">Communication</Link>
          <Link href="/early-access" className={styles.ctaLink}>Early access</Link>
        </div>

        {/* Unique Mobile Menu Toggle Button */}
        <button
          className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.hamburger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer (Slides left-to-right) */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none">
              <circle cx="9" cy="9" r="8" fill="#0a0a0a" />
              <circle cx="21" cy="9" r="8" fill="#0a0a0a" fillOpacity="0.5" />
            </svg>
            <span className={styles.brandName}>cso</span>
          </Link>
        </div>

        <div className={styles.drawerMenu}>
          <span className={styles.menuLabel}>Navigation</span>
          <div className={styles.drawerLinks}>
            <div className={styles.staggerLink}>
              <Link href="/" onClick={closeMenu}>Home</Link>
            </div>
            <div className={styles.staggerLink}>
              <Link href="/sourcing" onClick={closeMenu}>Sourcing</Link>
            </div>
            <div className={styles.staggerLink}>
              <Link href="/evaluation" onClick={closeMenu}>Evaluation</Link>
            </div>
            <div className={styles.staggerLink}>
              <Link href="/tracking" onClick={closeMenu}>Tracking</Link>
            </div>
            <div className={styles.staggerLink}>
              <Link href="/communication" onClick={closeMenu}>Communication</Link>
            </div>
          </div>
        </div>

        <div className={styles.drawerFooter}>
          <Link href="/early-access" className={styles.drawerCta} onClick={closeMenu}>
            Request Early Access
          </Link>
          <div className={styles.footerInfo}>
            <p>Ready to revolutionize your hiring?</p>
            <span>cso.ai © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

