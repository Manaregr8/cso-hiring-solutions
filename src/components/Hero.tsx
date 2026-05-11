import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>Coming Soon</span>
        <h1 className={styles.title}>
          Elevate Your Business with <span className={styles.highlight}>AI Intelligence</span>
        </h1>
        <p className={styles.description}>
          The next generation platform for automated business management and customer engagement. 
          Built for scale, designed for excellence.
        </p>
        <div className={styles.actions}>
          <button className={styles.primary}>Join Waitlist</button>
          <button className={styles.secondary}>Learn More</button>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.glow}></div>
      </div>
    </section>
  );
}
