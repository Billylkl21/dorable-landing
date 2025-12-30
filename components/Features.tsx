'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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

function FeatureStep({ feature, index, activeStep }: { feature: typeof featureData[0], index: number, activeStep: number }) {
    const stepRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stepRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.02, 0.1, 0.1, 0.02]);

    return (
        <div
            ref={stepRef}
            data-feature-step
            data-index={index}
            className={`${styles.step} ${activeStep === index ? styles.stepActive : ''}`}
        >
            {/* Mobile Visual */}
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

            <motion.div
                className={styles.number}
                style={{ y, opacity }}
            >
                0{feature.id}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
            </motion.div>
        </div>
    );
}

export default function Features() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const steps = containerRef.current.querySelectorAll('[data-feature-step]');
            const centerPoint = window.innerHeight / 2;

            let currentStep = 0;
            let minDistance = Infinity;

            steps.forEach((step, index) => {
                const rect = step.getBoundingClientRect();
                const stepCenter = rect.top + rect.height / 2;
                const distance = Math.abs(centerPoint - stepCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    currentStep = index;
                }
            });

            setActiveStep(currentStep);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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
            <div className={styles.container} ref={containerRef}>
                {/* Sticky Visuals (Desktop) */}
                <div className={styles.stickyContainer}>
                    <div className={styles.visualWrapper}>
                        <div className={`${styles.mockupContainer} glass-strong`} style={{ overflow: 'hidden' }}>
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Image
                                        src={featureData[activeStep].image}
                                        alt={featureData[activeStep].title}
                                        width={320}
                                        height={640}
                                        priority
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Scrolling Text */}
                <div className={styles.scrollContent}>
                    {featureData.map((feature, index) => (
                        <FeatureStep
                            key={feature.id}
                            feature={feature}
                            index={index}
                            activeStep={activeStep}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
