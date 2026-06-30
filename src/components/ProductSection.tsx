import Image from 'next/image';
import styles from './ProductSection.module.css';

export default function ProductSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Technology accelerates hiring. <em>People make it exceptional.</em>
        </h2>
        <p className={styles.subheading}>
          The future of recruitment is built on the right balance of technology, market intelligence, and human expertise.
        </p>

        <div className={styles.logos}>
          <div className={styles.logo}>
            <img src="./wone pics/image1.png" alt="Xebia" style={{ height: '36px', width: 'auto', opacity: 0.7 }} />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image2.png" alt="WNS" style={{ height: '36px', width: 'auto', opacity: 0.7 }} />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image3.png" alt="QNU" style={{ height: '36px', width: 'auto', opacity: 0.7 }} />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image4.png" alt="social" style={{ height: '36px', width: 'auto', opacity: 0.7 }} />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image5.png" alt="coverself" style={{ height: '36px', width: 'auto', opacity: 0.7 }} />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/team.png"
            alt="CSO Team"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
