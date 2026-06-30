import styles from './SourceSection.module.css';
import Image from 'next/image';
export default function SourceSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        {/* ── Headline spanning full width ── */}
        <h2 className={styles.headline}>
          <em>Strategic Hiring.</em><br />
          End-to-End Recruitment.
        </h2>

        {/* ── Two-column body ── */}
        <div className={styles.body}>
          {/* Left: text + CTA */}
          <div className={styles.left}>
            <p className={styles.para}>
              Whether you're hiring a single leader or building an entire team, we manage the journey from talent mapping and candidate sourcing to assessment, interview coordination, and successful on-boarding.
            </p>
            <p className={styles.para}>
              Our research-driven approach identifies professionals who possess not only the right skills and experience, but also the mindset and cultural alignment to create lasting business impact.
            </p>
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
              Explore our Portfolio
            </button>
          </div>

          {/* Right: image placeholder + badge */}
          <div className={styles.right}>
            <div className={styles.imageCard}>
              {/* Grey placeholder — swap with <Image> when ready */}
              <img src="/wone pics/wBJk7LNXvTESOO4yMsT90pxUM.avif" alt="Product screenshot" className={styles.image} />

              {/* Floating badge */}
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </span>
                <span className={styles.badgeText}>Excellent match</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
