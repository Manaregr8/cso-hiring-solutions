'use client';

import { motion } from 'framer-motion';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              A recruitment process <em>built around your business</em>.
            </h2>
            <p className={styles.subheading}>
              Hiring is most effective when every stakeholder is aligned. We provide a structured, transparent recruitment process with regular progress updates, coordinated interview management, and continuous collaboration—keeping your team informed from the initial search through the final offer.
              <br />
              <span className={styles.highlight}>Our streamlined approach reduces hiring delays, improves decision-making, and ensures every engagement moves forward with clarity and confidence.</span>
            </p>
          </div>
          <button className={styles.ctaButton}>
            Talk to an Expert
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className={styles.chart}>
          {/* Greenhouse */}
          <div className={styles.barColumn}>
            <motion.div
              className={styles.barHeader}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className={styles.time}>45-50 days</div>
              <div className={styles.brand} style={{ fontFamily: 'Georgia, serif' }}>In house</div>
            </motion.div>
            <motion.div
              className={styles.bar}
              initial={{ height: '0%' }}
              whileInView={{ height: '70%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Ashby */}
          <div className={styles.barColumn}>
            <motion.div
              className={styles.barHeader}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <div className={styles.time}>40+ days</div>
              <div className={styles.brand}>Hiring Agency</div>
            </motion.div>
            <motion.div
              className={styles.bar}
              initial={{ height: '0%' }}
              whileInView={{ height: '60%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* LinkedIn */}
          <div className={styles.barColumn}>
            <motion.div
              className={styles.barHeader}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className={styles.time}>36+ days</div>
              <div className={styles.brand}>
                Linked<span style={{ backgroundColor: '#0077b5', color: 'white', padding: '0 2px', borderRadius: '2px', fontWeight: 'bold', marginLeft: '1px' }}>in</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.bar}
              initial={{ height: '0%' }}
              whileInView={{ height: '50%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* CSO */}
          <div className={styles.woneBarColumn}>
            <motion.div
              className={styles.barHeader}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <div className={styles.woneTime}>~48 hours</div>
              <div className={styles.brand}>
                <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
                  <rect x="0" y="0" width="14" height="10" rx="5" fill="#999" opacity="0.6" />
                  <rect x="10" y="0" width="14" height="10" rx="5" fill="#999" opacity="0.6" />
                </svg>
                <span style={{ fontWeight: 500 }}>cso</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.woneBarContainer}
              initial={{ scaleY: 0, transformOrigin: 'bottom' }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
