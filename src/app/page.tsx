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
import styles from './page.module.css';
import WorldMap from '@/components/worldmap';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ScrollAnimationWrapper>
        <Hero />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <SourceSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <SourcingSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <EvaluationSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TrackingSection />
      </ScrollAnimationWrapper>
      {/*  <ScrollAnimationWrapper>
        <WorldMap />
      </ScrollAnimationWrapper>*/}
      <ScrollAnimationWrapper>
        <ProductSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <FounderLetter />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ProcessSection />
      </ScrollAnimationWrapper>
      <Footer />
    </main>
  );
}
