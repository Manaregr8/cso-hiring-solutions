import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.callToAction}>
          <h2 className={styles.heading}>
            Hire better. Faster.<br />Take your time back.
          </h2>
          <p className={styles.subheading}>
            Make hiring easier than ever.
          </p>
          <button className={styles.ctaButton}>
            <div className={styles.buttonIcon}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 1.5L7 5L3.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Get early access
          </button>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>
              <svg width="28" height="12" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="14" height="10" rx="5" fill="#FFFFFF"/>
                <rect x="10" y="0" width="14" height="10" rx="5" fill="#FFFFFF" opacity="0.8"/>
              </svg>
              <span className={styles.logoText}>wone</span>
            </div>
            <p className={styles.brandDesc}>
              Your own, personal recruiter.<br />
              Completely automated.
            </p>
            <div className={styles.socialLine}></div>
            <Link href="#" className={styles.socialLink}>
              Follow us on LinkedIn
            </Link>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeading}>Features</h4>
              <Link href="#" className={styles.linkItem}>Overview</Link>
              <Link href="#" className={styles.linkItem}>Sourcing</Link>
              <Link href="#" className={styles.linkItem}>Evaluation</Link>
              <Link href="#" className={styles.linkItem}>Tracking</Link>
              <Link href="#" className={styles.linkItem}>Communication</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkHeading}>Product</h4>
              <Link href="#" className={styles.linkItem} style={{ color: '#666' }}>Pricing</Link>
              <Link href="#" className={styles.linkItem}>Early access</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
