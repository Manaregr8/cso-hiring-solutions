'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const line1 = "Recruiting system that helps you";
  const line2 = "hire better talent faster.";

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={styles.hero}>
      {/* ── Text Content ── */}
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.02 }}
        >
          {line1.split(' ').map((word, wordIdx) => (
            <span key={`l1w-${wordIdx}`} style={{ display: 'inline-block', marginRight: '0.22em' }}>
              {word.split('').map((char, charIdx) => (
                <motion.span key={`l1c-${charIdx}`} variants={charVariants} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
          <br />
          {line2.split(' ').map((word, wordIdx) => (
            <span key={`l2w-${wordIdx}`} style={{ display: 'inline-block', marginRight: '0.22em' }}>
              {word.split('').map((char, charIdx) => (
                <motion.span key={`l2c-${charIdx}`} variants={charVariants} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Source and evaluate extraordinary talent, automatically.<br />
          Cut weeks off your hiring process.
        </motion.p>
        
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className={styles.cta}>
            <span className={styles.arrowCircle}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            Get early access
          </button>
        </motion.div>
      </div>

      {/* ── Fan Cards ── */}
      <div className={styles.visualContainer}>
        <div className={styles.cardsTrack}>
          {[1, 2, 3, 4, 5].map((num, i) => (
            <motion.div
              key={num}
              className={`${styles.card} ${styles[`card${num}`]}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* ── Two-Column Info Section ── */}
      <div className={styles.infoSection}>
        <motion.div 
          className={`${styles.infoCol} ${styles.infoFirst}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.infoothercontainer}>
            <h2 className={styles.infoTitle}>
              Your own, personal recruiter.<br />
              Completely automated.
            </h2>
            <p className={styles.infoText}>
              Wone manages your entire hiring process. Attract, source, qualify
              and interview candidates automatically with contextual AI that
              understands your needs beyond tags and keywords and leaves you only
              with the best.
            </p>
          </div>
        </motion.div>
        <div className={styles.infoDivider} />
        <motion.div 
          className={styles.infoCol}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <h2 className={styles.infoTitle}>
            Win back time.<br />
            Improve your results.
          </h2>
          <p className={styles.infoText}>
            Save weeks on repetitive work. Just post a job description and let
            Wone do the hard work. Take over only when the candidates have been
            qualified, so you&apos;re not wasting time weeding out unqualified
            talent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
