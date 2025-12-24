'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.statementWrapper}>
                <motion.p
                    className={styles.statement}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    La vie est trop belle<br />
                    <span className={styles.statementHighlight}>pour la vivre derrière un écran.</span>
                </motion.p>
            </div>

            <div className={styles.bigTitleWrapper}>
                <motion.h1
                    className={styles.bigTitle}
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    DORABLE
                </motion.h1>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.links}>
                    <a href="/legal" className={styles.link}>Mentions Légales</a>
                    <a href="/privacy" className={styles.link}>Confidentialité</a>
                    <a href="/terms" className={styles.link}>CGU</a>
                </div>
                <p className={styles.copyright}>© 2025 Dorable. Paris.</p>
            </div>
        </footer>
    );
}
