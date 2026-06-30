'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './SourcingSection.module.css';

const CANVAS_WIDTH = 1600;

export default function SourcingSection() {
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

        <span className={styles.label}>Sourcing</span>

        <h2 className={styles.headline}>
          Find <em>exceptional talent</em><br />
          others never reach.
        </h2>

        <div className={styles.textRow}>
          <div className={styles.textLeft}>
            <p className={styles.bodyText}>
              The best candidates aren't always actively looking for their next opportunity. Through extensive research, talent mapping, executive search, and industry networks, we identify and engage professionals who are often beyond the reach of traditional recruitment methods.
            </p>
            <p className={styles.bodyText}>
              Every shortlist is carefully evaluated for expertise, leadership potential, cultural alignment, and long-term business impact—so you meet candidates worth hiring, not just those available.
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
                <span className={styles.pillTitle}>Our search methodology</span>
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

        {/* Mockup: wrapper holds 16:10 ratio, canvas scales inside via JS */}
        <div
          ref={wrapperRef}
          className={styles.mockupScaleWrapper}
        >
          <div
            ref={canvasRef}
            className={styles.mockupCanvas}
          >
            <div className={styles.mockupBg} />

            <div className={styles.browser}>
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
                <p className={styles.breadcrumb}>Goldman careers</p>
                <h3 className={styles.jobTitle}>Chief Technical Officer, Payments</h3>
                <div className={styles.jobMeta}>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Boston, US
                  </span>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Contract
                  </span>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    $159,000 – $246,500
                  </span>
                </div>

                <div className={styles.tabs}>
                  {['Search', 'Candidates', 'Details'].map((t, i) => (
                    <span key={t} className={`${styles.tab} ${i === 0 ? styles.tabActive : ''}`}>{t}</span>
                  ))}
                  <div className={styles.tabActions}>
                    <button className={styles.tabBtn}>Preview</button>
                    <button className={styles.tabBtn}>Edit</button>
                  </div>
                </div>

                <p className={styles.sectionLabel}>Excellent matches</p>

                <div className={styles.candidateCard}>
                  <div className={styles.candidateLeft}>
                    <div className={styles.candidateAvatar} style={{ background: '#c8b8a8' }} />
                    <div>
                      <p className={styles.candidateName}>Lydia Watson</p>
                      <p className={styles.candidateRole}>Software Engineer at Pulid · Boston, USA</p>
                      <div className={styles.candidateTags}>
                        <span className={styles.tagGreen}>✦ Excellent match</span>
                        <span className={styles.tagBlue}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={styles.tagIcon}>
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                          Highly likely to move
                        </span>
                      </div>
                      <p className={styles.candidateDesc}>
                        Created ML infrastructure at Pulid, transaction processing over $100B per year, led a team of 30 engineers,
                        extensive experience with compliance, financial security and distributed systems.
                        Exceeds financial systems scaling requirements.
                      </p>
                      <div className={styles.weakness}>
                        <span>▼ Weaknesses</span>
                        <p>Financial compliance experience not highlighted, but probably has it considering extensive experience with large systems.</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.candidateActions}>
                    <button className={styles.actionBtn}>LinkedIn</button>
                    <button className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}>Invite to apply</button>
                  </div>
                </div>

                <div className={styles.candidateCard}>
                  <div className={styles.candidateLeft}>
                    <div className={styles.candidateAvatar} style={{ background: '#b8c8d8' }} />
                    <div>
                      <p className={styles.candidateName}>Peter Samson</p>
                      <p className={styles.candidateRole}>Chief Technical Officer at Meta · New York, USA</p>
                      <div className={styles.candidateTags}>
                        <span className={styles.tagGreen}>✦ Excellent match</span>
                        <span className={styles.tagBlue}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={styles.tagIcon}>
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                          Highly likely to move
                        </span>
                      </div>
                      <p className={styles.candidateDesc}>
                        We think Peter is likely to move since he has been at Meta for almost 2 years, following the recent team
                        restructuring in their AI division. Peter has specialized backend infrastructure experience that hasn&apos;t been
                        fully utilized in his current role.
                      </p>
                      <div className={styles.weakness}>
                        <span>▼ Weaknesses</span>
                        <p>Financial compliance experience not highlighted, but probably has it considering extensive experience with large systems.</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.candidateActions}>
                    <button className={styles.actionBtn}>LinkedIn</button>
                    <button className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}>Invite to apply</button>
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
