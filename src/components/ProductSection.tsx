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
            <img src="./wone pics/image1.png" alt="Xebia" style={{ padding: '6px' }} />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image2.png" alt="WNS" style={{ padding: '6px' }} />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image3.png" alt="QNU" />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image4.png" alt="Social" />
          </div>
          <div className={styles.logo}>
            <img src="./wone pics/image5.png" alt="Coverself" />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/Amazon-Logo-StartupTalky.jpg" alt="Amazon" style={{ padding: '6px' }} />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/images (2).jpg" alt="Brand" />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/images (1).jpg" alt="Brand" />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/images.png" alt="Brand" />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/opendeskinc_logo.jpg" alt="OpenDesk" />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/Oracle_Logo.jpg" alt="Oracle" />
          </div>
          <div className={styles.logo}>
            <img src="./brands raw/PwC_logo_rgb_colour_pos.png" alt="PwC" />
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
