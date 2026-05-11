import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      
      {/* Additional sections can be added here */}
      <section id="features" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Revolutionizing Business Operations</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Smart Analytics</h3>
              <p>Real-time data processing with predictive insights for better decision making.</p>
            </div>
            <div className={styles.card}>
              <h3>Automation</h3>
              <p>Eliminate repetitive tasks with intelligent workflow automation systems.</p>
            </div>
            <div className={styles.card}>
              <h3>Global Reach</h3>
              <p>Connect with your customers anywhere in the world with localized AI support.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} CSM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
