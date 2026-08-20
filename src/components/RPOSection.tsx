'use client';

import { motion } from 'framer-motion';
import styles from './RPOSection.module.css';

export default function RPOSection() {
  const steps = [
    { 
      name: "Source", 
      desc: "Identify and engage top-tier talent.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    { 
      name: "Screen", 
      desc: "Rigorous technical and cultural fit evaluations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    { 
      name: "Coordinate", 
      desc: "Seamless interview scheduling and management.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    { 
      name: "Close", 
      desc: "Offer negotiation and smooth onboarding.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <motion.div 
            className={styles.contentColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.headline}>
              <em>Full-Cycle RPO —</em><br />We Become Your Hiring Team
            </h2>
            <p className={styles.para}>
              For startups and companies without an in-house recruitment function, our RPO model lets us take complete ownership of your hiring - from sourcing and screening to coordination and closure - so you don't need to build an internal team to scale headcount.
            </p>
            
            <ul className={styles.bulletList}>
              <li>End-to-end ownership of the hiring process, not just candidate sourcing</li>
              <li>Ideal for startups scaling fast without an internal TA (talent acquisition) team</li>
              <li>Acts as an extension of your team, aligned to your hiring bar and timelines</li>
              <li>Flexible engagement - scale up or down as your hiring needs change</li>
            </ul>
          </motion.div>

          {/* Right Column: Process Flow */}
          <motion.div 
            className={styles.processColumn}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.processCard}>
              <h3 className={styles.processTitle}>The RPO Process</h3>
              <div className={styles.stepsContainer}>
                {steps.map((step, i) => (
                  <div key={i} className={styles.stepWrapper}>
                    <div className={styles.stepBox}>
                      <span className={styles.stepIcon}>{step.icon}</span>
                    </div>
                    <div className={styles.stepText}>
                      <span className={styles.stepName}>{step.name}</span>
                      <span className={styles.stepDesc}>{step.desc}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={styles.connector}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
