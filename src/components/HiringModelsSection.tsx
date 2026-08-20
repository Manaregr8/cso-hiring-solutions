'use client';

import { motion } from 'framer-motion';
import styles from './HiringModelsSection.module.css';

export default function HiringModelsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.grid}>
          {/* Left Column: Graphic Callout */}
          <motion.div 
            className={styles.graphicColumn}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.zeroCard}>
              <span className={styles.zeroNumber}>0</span>
              <span className={styles.zeroLabel}>Local Office Required<br/>to Hire in India</span>
              
              <div className={styles.flagsRow}>
                <div className={styles.flagBadge}>🇺🇸 USA</div>
                <div className={styles.flagBadge}>🇬🇧 UK</div>
                <div className={styles.flagBadge}>🇦🇪 UAE</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className={styles.contentColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.headline}>
              <em>Hire From India —</em><br />Without an India Entity
            </h2>
            <p className={styles.para}>
              We offer both contractual and permanent hiring, giving startups and companies in the USA, UK, and UAE a way to build their India team without registering a local entity, renting office space, or managing local HR and compliance overhead. We become your on-ground hiring arm - you get the talent, we handle the rest.
            </p>
            
            <div className={styles.bullets}>
              <div className={styles.bulletItem}>
                <div className={styles.bulletIcon}>✓</div>
                <p>Contractual hiring for flexible, project-based, or trial-to-hire needs</p>
              </div>
              <div className={styles.bulletItem}>
                <div className={styles.bulletIcon}>✓</div>
                <p>Permanent hiring for long-term core team roles</p>
              </div>
              <div className={styles.bulletItem}>
                <div className={styles.bulletIcon}>✓</div>
                <p>No need to set up a legal entity or office in India to hire</p>
              </div>
              <div className={styles.bulletItem}>
                <div className={styles.bulletIcon}>✓</div>
                <p>Significantly lower cost and faster time-to-hire vs. setting up independently</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
