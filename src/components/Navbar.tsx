'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  onContactClick?: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="CSO"
            width={183}
            height={30}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.links}>
          <Link href="#overview">Home</Link>
          <Link href="#sourcing">Sourcing</Link>
          <Link href="#evaluation">Evaluation</Link>
          <Link href="#tracking">Tracking</Link>
          <Link href="#communication">Communication</Link>
          <button id="navbar-early-access-btn" onClick={onContactClick} className={styles.ctaLink}>Early access</button>
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Drawer Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="CSO"
              width={183}
              height={30}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.drawerMenu}>
          <span className={styles.menuLabel}>Navigation</span>
          <div className={styles.drawerLinks}>
            <div className={styles.staggerLink}><Link href="#overview" onClick={closeMenu}>Home</Link></div>
            <div className={styles.staggerLink}><Link href="#sourcing" onClick={closeMenu}>Sourcing</Link></div>
            <div className={styles.staggerLink}><Link href="#evaluation" onClick={closeMenu}>Evaluation</Link></div>
            <div className={styles.staggerLink}><Link href="#tracking" onClick={closeMenu}>Tracking</Link></div>
            <div className={styles.staggerLink}><Link href="#communication" onClick={closeMenu}>Communication</Link></div>
          </div>
        </div>

        <div className={styles.drawerFooter}>
          <button id="drawer-request-access-btn" className={styles.drawerCta} onClick={() => { closeMenu(); onContactClick?.(); }}>
            Request Early Access
          </button>
          <div className={styles.footerInfo}>
            <p>Ready to revolutionize your hiring?</p>
            <span>cso.ai © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
