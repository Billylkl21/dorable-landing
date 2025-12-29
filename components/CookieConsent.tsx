'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('dorable-cookie-consent');
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('dorable-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('dorable-cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0, y: 100, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 100, x: "-50%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.content}>
                        <h3 className={styles.title}>🍪 On grignote un biscuit ?</h3>
                        <p className={styles.text}>
                            Dorable utilise des cookies pour améliorer votre expérience et analyser notre trafic.
                            En savoir plus sur notre <Link href="/cookies" className={styles.link}>Politique des Cookies</Link>.
                        </p>
                    </div>
                    <div className={styles.actions}>
                        <button onClick={handleDecline} className={styles.buttonDecline}>
                            Refuser
                        </button>
                        <button onClick={handleAccept} className={styles.buttonAccept}>
                            Accepter tout
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
