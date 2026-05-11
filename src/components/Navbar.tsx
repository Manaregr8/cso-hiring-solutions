import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          CSM<span className={styles.dot}>.</span>
        </Link>
        <div className={styles.links}>
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <button className={styles.cta}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
