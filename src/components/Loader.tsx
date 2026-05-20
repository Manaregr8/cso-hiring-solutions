'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  onFinish: () => void;
}

const loaderLetters = ['C', 'S', 'O'];

export default function Loader({ onFinish }: LoaderProps) {
  const [showText, setShowText] = useState(false);
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [shrinkIcon, setShrinkIcon] = useState(false);

  const iconRef = useRef<SVGSVGElement | null>(null);
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // load the provided small logo SVG instead of the previous loader
    let cancelled = false;
    fetch('/logoImageLets.svg')
      .then((r) => r.text())
      .then((text) => {
        if (!cancelled) setSvgMarkup(text);
      })
      .catch(() => {
        /* ignore */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!svgMarkup) return;
    const container = svgContainerRef.current;
    if (!container) return;
    const svgEl = container.querySelector('svg');
    if (!svgEl) return;

    // ensure the inlined SVG gets the CSS module class so selectors apply
    try {
      svgEl.classList.add((styles as any).iconSvg || 'iconSvg');
    } catch (e) {
      // ignore if adding class fails
    }

    // for the provided logo, animate these path ids in order with fade-in
    const circleIds = ['path6', 'path5', 'path2', 'path1'];
    const revealClass = (styles as any).reveal || 'reveal';
    const circleTimers: number[] = [];
    
    // log for debugging
    console.log('Loader: SVG loaded, paths to animate:', circleIds, 'reveal class:', revealClass);
    
    circleIds.forEach((id, i) => {
      const p = svgEl.querySelector(`#${id}`) as SVGPathElement | null;
      if (!p) {
        console.warn(`Loader: path #${id} not found`);
        return;
      }
      console.log(`Loader: found path #${id}, will reveal at ${i * 300}ms`);
      const t = window.setTimeout(() => {
        p.classList.add(revealClass);
        console.log(`Loader: revealed path #${id}`);
      }, i * 300); // 300ms stagger for clear fade-in
      circleTimers.push(t);
    });

    // finish after last reveal + brief pause
    const finishT = window.setTimeout(() => onFinish(), circleIds.length * 300 + 300);
    circleTimers.push(finishT);

    return () => circleTimers.forEach((t) => window.clearTimeout(t));
  }, [svgMarkup, onFinish]);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.loaderBackdrop}>
      <div className={styles.loaderCard}>
        <motion.div className={styles.iconWrapper} transition={{ duration: 0.4 }}>
          <div ref={svgContainerRef} dangerouslySetInnerHTML={svgMarkup ? { __html: svgMarkup } : undefined} />
        </motion.div>

        <div className={styles.textWrap} aria-hidden>
          {/* letters are rendered inside the injected SVG; CSS/JS reveals them */}
        </div>
      </div>
    </div>
  );
}

// reveal non-circle paths sequentially when `showText` becomes true
// using a small DOM effect rather than rendering letters separately.
export function animateBrandPaths(root: SVGSVGElement | null, delay = 0, stagger = 90) {
  if (!root) return;
  const paths = Array.from(root.querySelectorAll('path')).filter(p => !p.classList.contains((styles as any).circlePath?.toString?.() || 'circlePath'));
  paths.forEach((p, i) => {
    const t = window.setTimeout(() => {
      p.classList.add((styles as any).reveal || 'reveal');
    }, delay + i * stagger);
    // clear timers on element removal (best-effort)
    (p as any).__revealTimer = t;
  });
}
