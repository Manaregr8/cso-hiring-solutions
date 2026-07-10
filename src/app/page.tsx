 'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import SourceSection from '@/components/SourceSection';
import SourcingSection from '@/components/SourcingSection';
import EvaluationSection from '@/components/EvaluationSection';
import TrackingSection from '@/components/TrackingSection';
import ProcessSection from '@/components/ProcessSection';
import FounderLetter from '@/components/FounderLetter';
import Footer from '@/components/Footer';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import Loader from '@/components/Loader';
import ContactPopup from '@/components/ContactPopup';
import styles from './page.module.css';

export default function Home() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleLoaderFinish = () => {
    setLoaderVisible(false);
  };

  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <main className={styles.main}>
      <Navbar onContactClick={openPopup} />
      <ContactPopup isOpen={popupOpen} onClose={closePopup} />

      {loaderVisible && <Loader onFinish={handleLoaderFinish} />}
      {!loaderVisible && (
        <>
          <section id="overview">
            <ScrollAnimationWrapper>
              <Hero onContactClick={openPopup} />
            </ScrollAnimationWrapper>
          </section>

          <section id="sourcing">
            <ScrollAnimationWrapper>
              <SourceSection />
            </ScrollAnimationWrapper>
          </section>
          <section id="evaluation">
            <ScrollAnimationWrapper>
              <SourcingSection />
            </ScrollAnimationWrapper>
          </section>
          <section id="tracking">
            <ScrollAnimationWrapper>
              <EvaluationSection />
            </ScrollAnimationWrapper>
          </section>
          <section id="communication">
            <ScrollAnimationWrapper>
              <TrackingSection />
            </ScrollAnimationWrapper>
          </section>
          <section id="product">
            <ScrollAnimationWrapper>
              <ProductSection />
            </ScrollAnimationWrapper>
          </section>
          <ScrollAnimationWrapper>
            <FounderLetter />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <ProcessSection />
          </ScrollAnimationWrapper>
          <Footer onContactClick={openPopup} />
        </>
      )}
    </main>
  );
}
