import styles from './FounderLetter.module.css';

export default function FounderLetter() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Built locally. <em>Trusted globally.</em>
        </h2>
        
        <p className={styles.paragraph}>
          Since 2018, CorpSourceOne has helped startups, high-growth companies, and global enterprises build exceptional teams across India, Australia & North America. With specialist recruiters, multi-region operations, and deep industry expertise, we deliver recruitment solutions that scale with your business.
        </p>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h3>30+</h3>
            <p>in-house specialists</p>
          </div>
          <div className={styles.card}>
            <h3>Global</h3>
            <p>recruitment reach</p>
          </div>
          <div className={styles.card}>
            <h3>Scalable</h3>
            <p>hiring solutions</p>
          </div>
          <div className={styles.card}>
            <h3>30%</h3>
            <p>Average cost optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
