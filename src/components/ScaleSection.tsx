'use client';

import { motion } from 'framer-motion';
import styles from './ScaleSection.module.css';

export default function ScaleSection() {
  const industries = ["Software Product", "Software Services", "Fintech", "Edtech", "Electronics", "Furniture", "BFSI"];
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.grid}>
          {/* Left Column: Stats */}
          <motion.div 
            className={styles.statsColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.statBox}>
              <span className={styles.statNumber}>600+</span>
              <span className={styles.statLabel}>Active Mandates</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>7+</span>
              <span className={styles.statLabel}>Industries Served</span>
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
              <em>600+ Active Mandates,</em><br />Across 7+ Industries
            </h2>
            <p className={styles.para}>
              We're currently managing 600+ live hiring mandates for clients spanning Software Product, Software Services, Fintech, Edtech, Electronics, Furniture, and BFSI - and expanding into new sectors every quarter.
            </p>
            <ul className={styles.bulletList}>
              <li>600+ active mandates running at any given time</li>
              <li>Presence across 7+ industry verticals</li>
              <li>Continuously expanding into new sectors</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Row: Industry Tags */}
        <motion.div 
          className={styles.tagsContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {industries.map((industry, index) => (
            <div key={index} className={styles.tag}>
              {industry}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
