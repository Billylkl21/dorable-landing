'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CountdownTimer.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date('2026-03-13T00:00:00') - +new Date();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <div className={styles.title}>Fin des votes dans</div>
            <div className={styles.countdownContainer}>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.days}</span>
                    <span className={styles.label}>Jours</span>
                </div>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.hours}</span>
                    <span className={styles.label}>Heures</span>
                </div>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.minutes}</span>
                    <span className={styles.label}>Min</span>
                </div>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.seconds}</span>
                    <span className={styles.label}>Sec</span>
                </div>
            </div>
        </motion.div>
    );
}
