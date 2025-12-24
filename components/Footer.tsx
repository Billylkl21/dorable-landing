'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* The Big Statement */}
            <div className={styles.statement}>
                <motion.h2
                    className={styles.provocation}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Votre écran ne vous rendra pas heureux. <br />
                    <span style={{ fontStyle: 'italic', color: '#db2777' }}>Sortez.</span>
                </motion.h2>

                <div className={styles.ctaWrapper}>
                    <motion.a
                        href="#join"
                        className="button-premium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: '#000', color: '#fff' }} // Black contrast
                    >
                        Télécharger Dorable
                    </motion.a>
                </div>
            </div>

            {/* Massive Brand Watermark */}
            <h1 className={styles.bigBrand}>DORABLE</h1>

            {/* Legal Footer */}
            <div className={styles.legalRow}>
                <span>&copy; {new Date().getFullYear()} Dorable Paris.</span>

                <div className={styles.links}>
                    <a href="/privacy" className={styles.link}>Confidentialité</a>
                    <a href="/terms" className={styles.link}>CGU</a>
                    <a href="mailto:hello@dorable.app" className={styles.link}>Contact</a>
                </div>
            </div>
        </footer>
    );
}
