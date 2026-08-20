'use client';

import { motion } from 'framer-motion';
import styles from './LocationsSection.module.css';

export default function LocationsSection() {
  const cities = ["Bengaluru", "Pune", "Hyderabad", "Mumbai", "Gurugram", "Noida", "Delhi"];
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>7 Key Indian Cities</div>
            <h2 className={styles.headline}>
              Deep Roots Across <em>India's Top Talent Hubs</em>
            </h2>
            <p className={styles.para}>
              Our strongest sourcing and delivery capability spans Bengaluru, Pune, Hyderabad, Mumbai, Gurugram, Noida, and Delhi — India's leading tech, finance, and business hubs.
            </p>
          </motion.div>
          
          <div className={styles.citiesGrid}>
            {cities.map((city, i) => (
              <motion.div 
                key={city}
                className={styles.cityCard}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)", borderColor: "rgba(0,0,0,0.15)" }}
              >
                <div className={styles.pinIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className={styles.cityName}>{city}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
