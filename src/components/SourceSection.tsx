import styles from './SourceSection.module.css';

export default function SourceSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        {/* ── Headline spanning full width ── */}
        <h2 className={styles.headline}>
          <em>Source, track and hire</em><br />
          talent in one place.
        </h2>

        {/* ── Two-column body ── */}
        <div className={styles.body}>
          {/* Left: text + CTA */}
          <div className={styles.left}>
            <p className={styles.para}>
              All you need to start sourcing is a job description. CSO will
              find and qualify talent within one minute so you don&apos;t have
              to sift through hundreds of resumes.
            </p>
            <p className={styles.para}>
              Candidates are qualified and ranked, so you&apos;re not wasting
              time weeding out unqualified talent.
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
              Get early access
            </button>
          </div>

          {/* Right: image placeholder + badge */}
          <div className={styles.right}>
            <div className={styles.imageCard}>
              {/* Grey placeholder — swap with <Image> when ready */}
              <div className={styles.imagePlaceholder} />

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
