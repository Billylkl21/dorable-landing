'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isAbeillePage = pathname === '/abeille';
    const isEnglish = pathname.startsWith('/en');

    return (
        <footer className={styles.footer}>
            {!isAbeillePage && (
                <div className={styles.statementWrapper}>
                    <motion.p
                        className={styles.statement}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {isEnglish ? "Life is too short" : "La vie est trop belle"}<br />
                        <span className={styles.statementHighlight}>
                            {isEnglish ? "to live it behind a screen." : "pour la vivre derrière un écran."}
                        </span>
                    </motion.p>
                </div>
            )}

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
                <div style={{ marginBottom: '1rem', fontSize: '0.8rem', opacity: 0.5, textAlign: 'center' }}>
                    {isEnglish ? "Candidate - La Fabrique Abeille Assurances • Fighting Loneliness" : "Candidat - La Fabrique Abeille Assurances • Lutter contre la solitude"}
                </div>
                <div className={styles.links}>
                    <a href={isEnglish ? "/en/legal" : "/legal"} className={styles.link}>{isEnglish ? "Legal Notice" : "Mentions Légales"}</a>
                    <a href={isEnglish ? "/en/privacy" : "/privacy"} className={styles.link}>{isEnglish ? "Privacy Policy" : "Confidentialité"}</a>
                    <a href={isEnglish ? "/en/health-privacy" : "/health-privacy"} className={styles.link}>{isEnglish ? "Health Data" : "Santé"}</a>
                    <a href={isEnglish ? "/en/terms" : "/terms"} className={styles.link}>{isEnglish ? "Terms/EULA" : "CGU"}</a>
                    <a href={isEnglish ? "/en/support" : "/support"} className={styles.link}>{isEnglish ? "Support" : "Support"}</a>
                    <a href={isEnglish ? "/en/cookies" : "/cookies"} className={styles.link}>{isEnglish ? "Cookies" : "Cookies"}</a>
                </div>
                <p className={styles.copyright}>© 2025 Dorable. Paris.</p>
            </div>
        </footer>
    );
}
