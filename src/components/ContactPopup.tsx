'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ContactPopup.module.css';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'form' | 'success';
type Intent = 'I want to hire' | 'I want to apply for a job' | '';

// ─── Replace this with your deployed Google Apps Script Web App URL ───────────
const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [step, setStep] = useState<Step>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [intent, setIntent] = useState<Intent>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  /* ── Lock body scroll while open ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form when closed
      setTimeout(() => {
        setStep('form');
        setName('');
        setEmail('');
        setIntent('');
        setError('');
      }, 350);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ── Close on Escape ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* ── Backdrop click ── */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  /* ── Submit to Google Sheets ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !intent) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('email', email.trim());
      formData.append('intent', intent);
      formData.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Google Apps Script requires no-cors
      });

      setStep('success');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const intentOptions: Intent[] = ['I want to hire', 'I want to apply for a job'];

  return (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-label="Contact us"
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
        {/* ── Close Button ── */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
          id="popup-close-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Left: Form ── */}
        <div className={styles.formSide}>
          {step === 'form' ? (
            <>
              <h2 className={styles.heading}>Contact us</h2>
              <form onSubmit={handleSubmit} noValidate id="contact-popup-form">
                {/* Name */}
                <div className={styles.fieldGroup}>
                  <input
                    id="popup-name"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoComplete="name"
                    autoFocus
                  />
                </div>

                {/* Email */}
                <div className={styles.fieldGroup}>
                  <input
                    id="popup-email"
                    type="email"
                    className={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                {/* Intent type */}
                <div className={styles.radioGroup}>
                  <p className={styles.radioLabel}>I am looking to…</p>
                  {intentOptions.map(option => (
                    <label
                      key={option}
                      className={`${styles.radioItem} ${intent === option ? styles.radioItemSelected : ''}`}
                      htmlFor={`popup-radio-${option.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <span className={`${styles.radioCircle} ${intent === option ? styles.radioCircleSelected : ''}`}>
                        {intent === option && <span className={styles.radioDot} />}
                      </span>
                      <input
                        id={`popup-radio-${option.replace(/\s+/g, '-').toLowerCase()}`}
                        type="radio"
                        name="intent"
                        value={option}
                        checked={intent === option}
                        onChange={() => setIntent(option)}
                        className={styles.radioInput}
                      />
                      {option}
                    </label>
                  ))}
                </div>

                {error && <p className={styles.errorMsg}>{error}</p>}

                <button
                  type="submit"
                  id="popup-submit-btn"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <span className={styles.spinnerWrapper}>
                      <span className={styles.spinner} />
                      Sending…
                    </span>
                  ) : (
                    'NEXT'
                  )}
                </button>
              </form>
            </>
          ) : (
            /* ── Success State ── */
            <div className={styles.successWrapper}>
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#302fbc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className={styles.heading}>We got it!</h2>
              <p className={styles.successText}>
                Thanks <strong>{name}</strong>! We'll reach out to <strong>{email}</strong> shortly.
              </p>
              <button
                id="popup-close-after-success"
                className={styles.submitBtn}
                onClick={onClose}
                style={{ marginTop: '2rem' }}
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* ── Right: Full-cover Image ── */}
        <div className={styles.imageSide}>
          <img
            src="/wone pics/Jjj802l1XItdAJpCXoQW54TS7FM.avif"
            alt="Team collaboration"
            className={styles.blobImg}
          />
          <div className={styles.imageBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Trusted by 200+ companies
          </div>
        </div>
      </div>
    </div>
  );
}
