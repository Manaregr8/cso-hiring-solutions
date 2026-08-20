'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {


  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.callToAction} id="contact">
          <h2 className={styles.heading}>
            Better recruitment isn't faster. It's smarter.
          </h2>
          <p className={styles.subheading} style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
            Hiring the right person isn't about filling vacancies quickly—it's about making decisions that create long-term business value. Every search is guided by insight, precision, and partnership—not shortcuts.
          </p>
          <button id="footer-talk-expert-btn" className={styles.ctaButton} onClick={onContactClick}>
            <div className={styles.buttonIcon}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 1.5L7 5L3.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Talk to an Expert
          </button>
        </div>



        <div className={styles.bottomSection}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>
              <Image 
                src="/logo.png" 
                alt="CSO" 
                width={183} 
                height={30} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.brandDesc}>
              Building teams that build Businesses.
            </p>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeading}>Features</h4>
              <Link href="#overview" className={styles.linkItem}>Overview</Link>
              <Link href="#sourcing" className={styles.linkItem}>Sourcing</Link>
              <Link href="#evaluation" className={styles.linkItem}>Evaluation</Link>
              <Link href="#tracking" className={styles.linkItem}>Tracking</Link>
              <Link href="#communication" className={styles.linkItem}>Communication</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeading}>Reach us</h4>
              <a href="mailto:info@corpsourceone.com" className={styles.linkItem}>Email: info@corpsourceone.com</a>
              <button id="footer-book-call-btn" onClick={onContactClick} className={styles.linkItem} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit' }}>Book a discovery call</button>
              <a
                href="https://in.linkedin.com/company/corp-source-one-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow us on LinkedIn
              </a>
              <span className={styles.linkItem} style={{ color: '#a0a0a0', lineHeight: 1.6 }}>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>CSO HR Services Pvt Ltd</strong>
                Address: Basement, DESEIN HOUSE, Greater Kailash II, Chittaranjan Park, New Delhi, Delhi 110048
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
