'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './EvaluationSection.module.css';

const CANVAS_WIDTH = 1600;

export default function EvaluationSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const observer = new ResizeObserver(([entry]) => {
      const scale = entry.contentRect.width / CANVAS_WIDTH;
      canvas.style.transform = `scale(${scale})`;
    });

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Label ── */}
        <span className={styles.label}>Evaluation</span>

        {/* ── Headline ── */}
        <h2 className={styles.headline}>
          <em>Evaluate beyond</em> the Résumé.
        </h2>

        {/* ── Two-column row ── */}
        <div className={styles.textRow}>
          <div className={styles.textLeft}>
            <p className={styles.bodyText}>
              Exceptional hiring goes beyond. Our structured process assesses technical expertise, leadership capability, cultural alignment, and long-term potential to ensure every shortlisted candidate is equipped to succeed in your organization.
            </p>
            <p className={styles.bodyText}>
              With in-depth interviews, market insights, and role-specific assessments, we provide the clarity you need to make confident hiring decisions.
            </p>
          </div>
          <div className={styles.textRight}>
            <motion.button 
              className={styles.darkPill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.pillContent}>
                <span className={styles.pillTitle}>Learn about Evaluation</span>
              </div>
              <span className={styles.pillArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </motion.button>
          </div>
        </div>

        {/* ── Mockup card ── */}
        <div
          ref={wrapperRef}
          className={styles.mockupScaleWrapper}
        >
          <div
            ref={canvasRef}
            className={styles.mockupCanvas}
          >
            {/* Gradient background */}
            <div className={styles.mockupBg} />

            {/* Browser chrome */}
            <div className={styles.browser}>
              {/* Browser top bar */}
              <div className={styles.browserBar}>
                <div className={styles.browserNav}>
                  <div className={styles.logo}>
                    <svg width="18" height="12" viewBox="0 0 30 18" fill="none">
                      <circle cx="9" cy="9" r="8" fill="#0a0a0a" />
                      <circle cx="21" cy="9" r="8" fill="#0a0a0a" fillOpacity="0.4" />
                    </svg>
                    <span className={styles.logoText}>cso</span>
                  </div>
                  <div className={styles.navLinks}>
                    {['Openings', 'Interviews', 'Inbox', 'Contacts', 'Company'].map(l => (
                      <span key={l} className={styles.navLink}>{l}</span>
                    ))}
                  </div>
                  <div className={styles.navRight}>
                    <span className={styles.workspace}>Workspace ▾</span>
                    <div className={styles.avatar} />
                  </div>
                </div>
              </div>

              {/* Browser content */}
              <motion.div 
                className={styles.browserContent}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Breadcrumb */}
                <p className={styles.breadcrumb}>Candidate Profiles / OpenAI</p>

                {/* Job title */}
                <h3 className={styles.jobTitle}>Sarah Connor · Senior ML Engineer</h3>
                <div className={styles.jobMeta}>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    New Delhi, India
                  </span>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Technical Screening
                  </span>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    98% Fit Score
                  </span>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                  {['AI Screening', 'Technical Assessment', 'Resume'].map((t, i) => (
                    <span key={t} className={`${styles.tab} ${i === 0 ? styles.tabActive : ''}`}>{t}</span>
                  ))}
                  <div className={styles.tabActions}>
                    <button className={styles.tabBtn}>Print Scorecard</button>
                    <button className={styles.tabBtn}>Share</button>
                  </div>
                </div>

                {/* Scorecard content split */}
                <p className={styles.sectionLabel}>AI Evaluation Summary</p>

                <div className={styles.scorecardContainer}>
                  {/* Left: profile text card */}
                  <div className={styles.profileLeft}>
                    <div className={styles.profileAvatar} style={{ background: '#a8c8b8' }} />
                    <div>
                      <p className={styles.profileName}>Sneha Kapoor</p>
                      <p className={styles.profileRole}>Senior ML Research Engineer at Razorpay · Bengaluru, India</p>
                      
                      <div className={styles.profileTags}>
                        <span className={styles.tagGreen}>✦ Excellent match</span>
                        <span className={styles.tagBlue}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={styles.tagIcon}>
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                          Highly proficient in PyTorch
                        </span>
                      </div>

                      <p className={styles.profileDesc}>
                        Led the development of memory-efficient attention layers, saving 35% GPU VRAM during training of a 70B parameter LLM. Exceptional depth in CUDA kernels, Triton, and JAX-based scaling. Prior experience at Nvidia optimizing deep learning frameworks.
                      </p>

                      <div className={styles.evalNotes}>
                        <span>▼ Evaluation Notes</span>
                        <p>Very strong system architectures candidate. Mentions preference for backend scaling/engineering over data operations. Exceptional communicator during screening chat.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: metrics progress bars & skills */}
                  <div className={styles.profileRight}>
                    {/* Category Scores */}
                    <span className={styles.metricsTitle}>Category Scores</span>
                    <div className={styles.scoreList}>
                      <div className={styles.scoreItem}>
                        <div className={styles.scoreLabelRow}>
                          <span>Coding Depth</span>
                          <span>96%</span>
                        </div>
                        <div className={styles.progressBarBg}>
                          <div className={styles.progressBarFill} style={{ width: '96%' }} />
                        </div>
                      </div>

                      <div className={styles.scoreItem}>
                        <div className={styles.scoreLabelRow}>
                          <span>System Design</span>
                          <span>94%</span>
                        </div>
                        <div className={styles.progressBarBg}>
                          <div className={styles.progressBarFill} style={{ width: '94%' }} />
                        </div>
                      </div>

                      <div className={styles.scoreItem}>
                        <div className={styles.scoreLabelRow}>
                          <span>Communication</span>
                          <span>92%</span>
                        </div>
                        <div className={styles.progressBarBg}>
                          <div className={styles.progressBarFill} style={{ width: '92%' }} />
                        </div>
                      </div>
                    </div>

                    {/* Skill Checklist */}
                    <span className={styles.skillsTitle}>Verified Skill Strengths</span>
                    <div className={styles.skillsGrid}>
                      <div className={styles.skillItem}>
                        <span className={styles.skillCheck}>✓</span> PyTorch & JAX
                      </div>
                      <div className={styles.skillItem}>
                        <span className={styles.skillCheck}>✓</span> CUDA & Triton
                      </div>
                      <div className={styles.skillItem}>
                        <span className={styles.skillCheck}>✓</span> Distributed Scaling
                      </div>
                      <div className={styles.skillItem}>
                        <span className={styles.skillCheck}>✓</span> LLM Architecture
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className={styles.rightActions}>
                      <button className={styles.actionBtn}>View Transcript</button>
                      <button className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}>Invite to Onsite</button>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
