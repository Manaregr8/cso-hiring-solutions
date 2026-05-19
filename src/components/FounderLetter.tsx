import styles from './FounderLetter.module.css';

export default function FounderLetter() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          An open letter from our founder — the future of hiring is human-first.
        </h2>
        
        <p className={styles.paragraph}>
          The rise of AI has brought us to a crossroads in recruitment. Many are choosing to replace human judgment with automation. We've taken a different path at Wone. We believe deeply in the irreplaceable value of human connection in hiring.
        </p>
        
        <p className={styles.paragraph}>
          Our mission isn't to automate people out of the process, it's to amplify what makes us human. Our platform automates the time-intensive tasks that drain a recruiter's day so they can focus on what matters most, building relationships and strengthening employer brands.
        </p>

        <p className={styles.paragraph}>
          What sets us apart? Our system learns from every interaction, adapting to your organization's specific needs while providing context on why each candidate is a strong match. While many tech solutions minimize human involvement, we're maximizing human potential.
        </p>

        <p className={styles.paragraph}>
          For job seekers, we're ending the frustrating void of unanswered applications that has become all too common. Everyone deserves to be seen, heard, and respected throughout their career journey. Through personalized feedback and guidance, we're helping people navigate a changing world of work with confidence and dignity.
        </p>

        <h3 className={styles.subheading}>
          A future where everyone wins.
        </h3>

        <p className={styles.paragraph}>
          We're building a future where recruiters connect with diverse talent more effectively, companies find the right people faster and job seekers receive the guidance they need to succeed.
        </p>

        <p className={styles.paragraph}>
          This is hiring reimagined. Where technology elevates human potential and handles the routine so people can focus on the remarkable.
        </p>

        <p className={styles.paragraph}>
          Join us in building this future.
        </p>

        <div className={styles.signoffContainer}>
          <p className={styles.signoffText}>
            Sincerely,<br />
            Darko Stanimirov
          </p>
          <div className={styles.signature}>
            <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 45 C15 15, 30 5, 40 20 C45 30, 40 45, 25 45 C15 45, 35 30, 45 40 C55 50, 50 25, 60 25 C65 25, 65 40, 70 40 C80 40, 70 20, 80 20 C85 20, 85 35, 95 30 C105 25, 100 15, 115 15 C125 15, 110 35, 125 35 C135 35, 125 20, 140 25 C150 30, 140 40, 155 35 C165 30, 160 40, 175 40 C185 40, 195 35, 200 35" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
