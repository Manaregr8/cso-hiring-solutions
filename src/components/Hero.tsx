'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const line1 = "Recruiting system that helps you";
  const line2 = "hire better talent faster.";
  const highlightWords = new Set(['hire', 'better', 'talent', 'faster']);

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const shouldHighlight = (word: string) => {
    return highlightWords.has(word.replace(/[.,!?]/g, '').toLowerCase());
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
          {line1.split(' ').map((word, wordIdx) => {
            const highlighted = shouldHighlight(word);
            const wordNode = (
              <span key={`l1w-${wordIdx}`} style={{ display: 'inline-block', marginRight: '0.22em' }}>
                {word.split('').map((char, charIdx) => (
                  <motion.span key={`l1c-${charIdx}`} variants={charVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            );

            return highlighted ? <em key={`em1-${wordIdx}`}>{wordNode}</em> : wordNode;
          })}
          <br />
          {line2.split(' ').map((word, wordIdx) => {
            const highlighted = shouldHighlight(word);
            const wordNode = (
              <span key={`l2w-${wordIdx}`} style={{ display: 'inline-block', marginRight: '0.22em' }}>
                {word.split('').map((char, charIdx) => (
                  <motion.span key={`l2c-${charIdx}`} variants={charVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            );

            return highlighted ? <em key={`em-${wordIdx}`}>{wordNode}</em> : wordNode;
          })}
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
            <span className={styles.ctaText}>Get early access</span>
          </button>
        </motion.div>
      </div>

      {/* ── Fan Cards ── */}
 {/* ── Fan Cards ── */}
{/* ── Fan Cards ── */}
<div className={styles.visualContainer}>
  <div className={styles.cardsTrack}>
    {[
  { id: 1, src: '/wone pics/IC3Wd8F0sSQJVtmLR5CNaSN8Y8.avif', alt: 'Candidate 1', rotate: -4, hoverRotate: -3, hoverY: -12 },
  { id: 2, src: '/wone pics/Jjj802l1XItdAJpCXoQW54TS7FM.avif', alt: 'Candidate 2', rotate: 2.5, hoverRotate: 2, hoverY: -18 },
  { id: 3, src: '/wone pics/LStCqvHOrjJLuyvdLl8aSQ0MaLc.avif', alt: 'Candidate 3', rotate: -1.5, hoverRotate: -1.5, hoverY: -14 },
  { id: 4, src: '/wone pics/qRJcad58tbyBsZ6lW7GYv2OfI.avif', alt: 'Candidate 4', rotate: 3.5, hoverRotate: 3, hoverY: -10 },
  { id: 5, src: '/wone pics/vhibGHpSOhwSaXXHs6Jrjul0pRg.avif', alt: 'Candidate 5', rotate: -2.5, hoverRotate: -2, hoverY: -16 },
].map((card, i) => (
  <motion.div
    key={card.id}
    className={`${styles.card} ${styles[`card${card.id}`]}`}
    initial={{ opacity: 0, y: 30, rotate: card.rotate }}
    animate={{ opacity: 1, y: 0, rotate: card.rotate }}
    transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
    whileHover={{
      rotate: card.hoverRotate,
      y: card.hoverY,
      scale: 1.04,
      transition: { duration: 0.3, ease: 'easeOut' }
    }}
  >
    <img
      src={card.src}
      alt={card.alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
    />
  </motion.div>
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
              Your own, <em>personal recruiter</em>.<br />
              Completely automated.
            </h2>
            <p className={styles.infoText}>
              CSO manages your entire hiring process. Attract, source, qualify
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
            <em>Win back time.</em><br />
            Improve your results.
          </h2>
          <p className={styles.infoText}>
            Save weeks on repetitive work. Just post a job description and let
            CSO do the hard work. Take over only when the candidates have been
            qualified, so you&apos;re not wasting time weeding out unqualified
            talent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
