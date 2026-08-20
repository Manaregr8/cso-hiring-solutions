'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './TrackingSection.module.css';

const CANVAS_WIDTH = 1600;

export default function TrackingSection() {
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
        <span className={styles.label}>Tracking</span>

        {/* ── Headline ── */}
        <h2 className={styles.headline}>
          <em>Orchestrate your pipeline</em><br />
          without the busywork.
        </h2>

        {/* ── Two-column row ── */}
        <div className={styles.textRow}>
          <div className={styles.textLeft}>
            <p className={styles.bodyText}>
              Move candidates through recruitment stages with automated triggers. Keep your hiring team aligned with centralized collaborative feedback, scheduling, and instant updates.
            </p>
            <p className={styles.bodyText}>
              Reduce time-to-hire by as much as{' '}
              <span className={styles.highlightPurple}>42%</span> with clean smart pipeline automation.
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
                <span className={styles.pillTitle}>Learn about Tracking</span>
                <span className={styles.pillSub}>Pipeline & Workflow automation</span>
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
                <p className={styles.breadcrumb}>Goldman careers / Recruitment Pipeline</p>

                {/* Job title */}
                <h3 className={styles.jobTitle}>Chief Technical Officer, Payments</h3>
                <div className={styles.jobMeta}>
                  <span className={styles.metaTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Mumbai, India
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
                    ₹13,00,000 – ₹25,00,000
                  </span>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                  {['Search', 'Candidates', 'Details'].map((t, i) => (
                    <span key={t} className={`${styles.tab} ${i === 1 ? styles.tabActive : ''}`}>{t}</span>
                  ))}
                  <div className={styles.tabActions}>
                    <button className={styles.tabBtn}>Pipeline Settings</button>
                    <button className={styles.tabBtn}>Add Stage</button>
                  </div>
                </div>

                {/* Kanban Board Dashboard */}
                <p className={styles.sectionLabel}>Active Recruitment Pipeline</p>

                <div className={styles.kanbanBoard}>
                  
                  {/* Column 1: Applied */}
                  <div className={styles.kanbanCol}>
                    <div className={styles.kanbanHeader}>
                      <span className={styles.kanbanTitle}>Applied</span>
                      <span className={styles.kanbanCount}>12</span>
                    </div>
                    <div className={styles.kanbanCardList}>
                      <div className={styles.kanbanCard}>
                        <span className={styles.kanbanCardName}>Amit Verma</span>
                        <span className={styles.kanbanCardRole}>Software Engineer at TCS</span>
                        <div className={styles.kanbanCardTags}>
                          <span className={styles.tagBlue}>Pro</span>
                        </div>
                        <div className={styles.kanbanCardFooter}>
                          <div className={styles.kanbanCardAvatar} style={{ background: '#d4b4a8' }} />
                          <span className={styles.kanbanCardDate}>May 18</span>
                        </div>
                      </div>
                      <div className={styles.kanbanCard}>
                        <span className={styles.kanbanCardName}>Priya Mehta</span>
                        <span className={styles.kanbanCardRole}>ML Specialist at Wipro</span>
                        <div className={styles.kanbanCardTags}>
                          <span className={styles.tagAmber}>Hot</span>
                        </div>
                        <div className={styles.kanbanCardFooter}>
                          <div className={styles.kanbanCardAvatar} style={{ background: '#a8b0c8' }} />
                          <span className={styles.kanbanCardDate}>May 17</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Screened */}
                  <div className={styles.kanbanCol}>
                    <div className={styles.kanbanHeader}>
                      <span className={styles.kanbanTitle}>Screened</span>
                      <span className={styles.kanbanCount}>4</span>
                    </div>
                    <div className={styles.kanbanCardList}>
                      <div className={styles.kanbanCard}>
                        <span className={styles.kanbanCardName}>Neha Gupta</span>
                        <span className={styles.kanbanCardRole}>Senior Product Designer</span>
                        <div className={styles.kanbanCardTags}>
                          <span className={styles.tagGreen}>Top Match</span>
                        </div>
                        <div className={styles.kanbanCardFooter}>
                          <div className={styles.kanbanCardAvatar} style={{ background: '#c8b8a8' }} />
                          <span className={styles.kanbanCardDate}>May 16</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Interviewing */}
                  <div className={styles.kanbanCol}>
                    <div className={styles.kanbanHeader}>
                      <span className={styles.kanbanTitle}>Interviewing</span>
                      <span className={styles.kanbanCount}>3</span>
                    </div>
                    <div className={styles.kanbanCardList}>
                      <div className={styles.kanbanCard}>
                        <span className={styles.kanbanCardName}>Vikram Nair</span>
                        <span className={styles.kanbanCardRole}>Engineering Manager</span>
                        <div className={styles.kanbanCardTags}>
                          <span className={styles.tagPurple}>Moving</span>
                        </div>
                        <div className={styles.kanbanCardFooter}>
                          <div className={styles.kanbanCardAvatar} style={{ background: '#b8c8d8' }} />
                          <span className={styles.kanbanCardDate}>May 15</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 4: Offered */}
                  <div className={styles.kanbanCol}>
                    <div className={styles.kanbanHeader}>
                      <span className={styles.kanbanTitle}>Offered</span>
                      <span className={styles.kanbanCount}>2</span>
                    </div>
                    <div className={styles.kanbanCardList}>
                      <div className={styles.kanbanCard}>
                        <span className={styles.kanbanCardName}>Anjali Singh</span>
                        <span className={styles.kanbanCardRole}>Lead Data Scientist</span>
                        <div className={styles.kanbanCardTags}>
                          <span className={styles.tagGreen}>Offer Sent</span>
                        </div>
                        <div className={styles.kanbanCardFooter}>
                          <div className={styles.kanbanCardAvatar} style={{ background: '#c8a888' }} />
                          <span className={styles.kanbanCardDate}>May 14</span>
                        </div>
                      </div>
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
