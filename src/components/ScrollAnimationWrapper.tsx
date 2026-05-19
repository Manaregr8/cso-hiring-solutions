'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScrollAnimationWrapper({ 
  children,
  delay = 0 
}: { 
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for a smooth "spring-like" ease out
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}
