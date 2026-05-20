import Link from 'next/link';
import Image from 'next/image';
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
              <Image 
                src="/logo.png" 
                alt="CSO" 
                width={183} 
                height={30} 
                className={styles.logoImage}
              />
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
