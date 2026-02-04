'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';
import { motion } from 'framer-motion';

export default function Countdown() {
    const targetDate = new Date('2026-02-14T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <motion.div
            className={styles.countdownContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            <TimeUnit value={timeLeft.days} label="Jours" />
            <div className={styles.separator}>:</div>
            <TimeUnit value={timeLeft.hours} label="Heures" />
            <div className={styles.separator}>:</div>
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <div className={styles.separator}>:</div>
            <TimeUnit value={timeLeft.seconds} label="Sec" />
        </motion.div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className={styles.timeUnit}>
            <span className={styles.value}>{value < 10 ? `0${value}` : value}</span>
            <span className={styles.label}>{label}</span>
        </div>
    );
}
