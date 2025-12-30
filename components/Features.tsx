'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './Features.module.css';

const featureData = [
    {
        id: 1,
        title: "Explorez votre ville",
        text: "La carte interactive est votre nouveau terrain de jeu. Repérez en un clin d'œil les événements, les lieux insolites et les personnes connectées autour de vous.",
        image: "/images/map.png",
        number: "01"
    },
    {
        id: 2,
        title: "Proposez une sortie",
        text: "Une envie subite ? Un café, une expo, un jogging ? Créez une activité en 30 secondes et laissez la magie opérer. Les intéressés vous rejoindront.",
        image: "/images/activity_popup.png",
        number: "02"
    },
    {
        id: 3,
        title: "Rencontrez pour de vrai",
        text: "Le but ultime. Ici, la messagerie ne sert qu'à fixer le rendez-vous. Rangez votre téléphone et vivez l'instant présent.",
        image: "/images/messages.png",
        number: "03"
    }
];

export default function Features() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const steps = document.querySelectorAll('[data-feature-step]');
            const viewportHeight = window.innerHeight;
            const centerPoint = viewportHeight / 2;

            // Default to keeping the current state if no step is active (hysteresis)
            // But we need to use a functional state update or a ref to know the 'current'
            // state inside this closure if we want true hysteresis without deps.
            // Actually, querying the active generic logic is simpler:
            // Find the step that is currently crossing the center line.

            let foundActive = -1;

            steps.forEach((step, index) => {
                const rect = step.getBoundingClientRect();
                // Check if the step overlaps the center line
                if (rect.top <= centerPoint && rect.bottom >= centerPoint) {
                    foundActive = index;
                }
            });

            // If we found a step crossing the center, update.
            // If we are in a gap (foundActive === -1), do NOT update (keep previous image).
            if (foundActive !== -1) {
                setActiveStep(foundActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="concept" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Mode d'Emploi</span>
                <h2 className="title-xl" style={{ fontSize: '2.5rem' }}>
                    Comment ça marche
                </h2>
            </div>
            <div className={styles.container}>
                {/* Sticky Visuals (Desktop) */}
                <div className={styles.stickyContainer}>
                    <div className={styles.visualWrapper}>
                        {featureData.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                className={styles.visual}
                                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                                animate={{
                                    opacity: activeStep === index ? 1 : 0,
                                    scale: activeStep === index ? 1 : 0.9,
                                    rotateY: activeStep === index ? 0 : 20,
                                    zIndex: activeStep === index ? 10 : 0
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className={`${styles.mockupContainer} glass-strong`}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={320}
                                        height={640}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scrolling Text */}
                <div className={styles.scrollContent}>
                    {featureData.map((feature, index) => (
                        <div
                            key={feature.id}
                            data-feature-step
                            className={`${styles.step} ${activeStep === index ? styles.stepActive : ''}`}
                        >
                            {/* Mobile Visual - Only visible on small screens */}
                            <div className={styles.mobileVisual}>
                                <div className={`${styles.mockupContainer} glass-strong`}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={320}
                                        height={640}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>

                            <div className={styles.number}>0{feature.id}</div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureText}>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
