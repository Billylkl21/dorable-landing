'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Hero.module.css';
import IPhoneMockup from '../IPhoneMockup';
import Countdown from '../Countdown';

export default function HeroEn() {
    const [email, setEmail] = useState('');
    const [sponsor, setSponsor] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.includes('@')) {
            try {
                await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: '', email, sponsor }),
                });
                setSubmitted(true);
            } catch (error) {
                console.error('Failed to submit:', error);
                // Optionally handle error state here
                setSubmitted(true); // Show success anyway for now to not break flow
            }
        }
    };

    return (
        <section id="join" className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/abeille" className={styles.badgeLink}>
                            <span className={styles.badge}>
                                🐝 Candidat <strong>La Fabrique Abeille Assurances</strong>
                            </span>
                        </Link>
                    </motion.div>

                    <h1 className="title-xl reveal delay-1">
                        Your Desires. <br />
                        <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>In Good Company.</span>
                    </h1>

                    <motion.p
                        className={`subtitle-lg reveal delay-2 ${styles.subtitle}`}
                        style={{ marginTop: '1.5rem' }}
                    >
                        <strong>Our answer to loneliness: organizing spontaneous outings around social experiences.</strong> <br className="hidden md:block" />
                        Dorable instantly transforms your desires and favorite places into real outings. <br className="hidden md:block" />
                        <span className={styles.activityLine}>
                            Craving sushi? <span className={styles.icon3d}>🍣</span> An art exhibition? <span className={styles.icon3d}>🎨</span> A quick run? <span className={styles.icon3d}>🏃</span> Pilates? <span className={styles.icon3d}>🧘‍♀️</span>
                        </span>
                        <br />
                        Let's rediscover the joy of experiencing the city together, simply and right now.
                    </motion.p>

                    {/* <Countdown /> */}

                    <motion.div
                        className="reveal delay-3"
                        style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                    >
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={styles.badge}
                                    style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#15803d', borderColor: '#86efac', marginBottom: 0 }}
                                >
                                    🎉 Vous êtes sur la liste !
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className={styles.waitlistForm}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={styles.waitlistInput}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)' }}></div>
                                    <input
                                        type="text"
                                        placeholder="Sponsor"
                                        className={styles.waitlistInput}
                                        value={sponsor}
                                        onChange={(e) => setSponsor(e.target.value)}
                                        style={{ width: '70px', flexShrink: 0 }}
                                    />
                                    <button type="submit" className={styles.waitlistButton}>
                                        Join the list
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>

                        <div className={styles.socialProof}>
                            <div className={styles.marqueeWrapper}>
                                <div className={styles.avatarGroup + " " + styles.marquee}>
                                    {/* Set 1 */}
                                    <div className={styles.avatar} style={{ background: '#bfdbfe', color: '#1d4ed8' }}>J</div>
                                    <div className={styles.avatar} style={{ background: '#fbcfe8', color: '#db2777' }}>L</div>
                                    <div className={styles.avatar} style={{ background: '#c7d2fe', color: '#4f46e5' }}>M</div>
                                    <div className={styles.avatar} style={{ background: '#fde047', color: '#854d0e' }}>A</div>
                                    <div className={styles.avatar} style={{ background: '#bbf7d0', color: '#166534' }}>S</div>
                                    <div className={styles.avatar} style={{ background: '#fed7aa', color: '#9a3412' }}>C</div>
                                    {/* Set 2 (Duplicate for loop) */}
                                    <div className={styles.avatar} style={{ background: '#bfdbfe', color: '#1d4ed8' }}>J</div>
                                    <div className={styles.avatar} style={{ background: '#fbcfe8', color: '#db2777' }}>L</div>
                                    <div className={styles.avatar} style={{ background: '#c7d2fe', color: '#4f46e5' }}>M</div>
                                    <div className={styles.avatar} style={{ background: '#fde047', color: '#854d0e' }}>A</div>
                                    <div className={styles.avatar} style={{ background: '#bbf7d0', color: '#166534' }}>S</div>
                                    <div className={styles.avatar} style={{ background: '#fed7aa', color: '#9a3412' }}>C</div>
                                </div>
                            </div>
                            <span className={styles.socialText}>
                                <span style={{ fontWeight: 700 }}>+10k</span> parisians interested
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 2, duration: 1 }}
                            style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-sans)',
                                color: 'var(--text-muted)',
                                background: 'rgba(255,255,255,0.5)',
                                padding: '0.4rem 1rem',
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <span style={{ fontWeight: 500 }}>The real-world social network is here.</span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.visualContent}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.phoneStage}>
                        {/* Narrative Step 1: Context (Location) */}
                        <motion.div
                            className={styles.floatingCard}
                            style={{ top: '15%', left: '-30%' }}
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { delay: 0.5, duration: 0.5 },
                                x: { delay: 0.5, duration: 0.5 },
                                scale: { delay: 0.5, duration: 0.5, type: "spring" },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                        >
                            <span className={styles.floatingIcon}>📍</span>
                            <div className={styles.floatingMeta}>
                                <span className={styles.floatingLabel}>1. Location</span>
                                <span>Le Marais, Paris</span>
                            </div>
                        </motion.div>

                        {/* Narrative Step 2: Desire (Interest) */}
                        <motion.div
                            className={styles.floatingCard}
                            style={{ top: '25%', right: '-25%' }}
                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { delay: 1.2, duration: 0.5 },
                                x: { delay: 1.2, duration: 0.5 },
                                scale: { delay: 1.2, duration: 0.5, type: "spring" },
                                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                            }}
                        >
                            <span className={styles.floatingIcon}>🎨</span>
                            <div className={styles.floatingMeta}>
                                <span className={styles.floatingLabel}>2. Interest</span>
                                <span>Expo Photo</span>
                            </div>
                        </motion.div>

                        {/* Narrative Step 3: Connection (Match) */}
                        <motion.div
                            className={styles.floatingCard}
                            style={{ bottom: '20%', left: '-28%' }}
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { delay: 1.9, duration: 0.5 },
                                x: { delay: 1.9, duration: 0.5 },
                                scale: { delay: 1.9, duration: 0.5, type: "spring" },
                                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.9 }
                            }}
                        >
                            <span className={styles.floatingIcon}>👋</span>
                            <div className={styles.floatingMeta}>
                                <span className={styles.floatingLabel}>3. Activity Joined</span>
                                <span>Marie loves it too!</span>
                            </div>
                        </motion.div>

                        {/* Narrative Step 4: Action (Invite) */}
                        <motion.div
                            className={styles.floatingCard}
                            style={{ bottom: '25%', right: '-35%' }}
                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { delay: 2.6, duration: 0.5 },
                                x: { delay: 2.6, duration: 0.5 },
                                scale: { delay: 2.6, duration: 0.5, type: "spring" },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.6 }
                            }}
                        >
                            <span className={styles.floatingIcon}>🥂</span>
                            <div className={styles.floatingMeta}>
                                <span className={styles.floatingLabel}>4. The Outing</span>
                                <span>Let's go together?</span>
                            </div>
                        </motion.div>

                        <div className={styles.phoneWrapper}>
                            <IPhoneMockup videoSrc="/videos/app-demo.mp4" />
                        </div>
                        {/* Decorative Studio Element */}
                        <div className={styles.aura} />
                    </div>

                    {/* Download Buttons below the phone (Outside 3D stage) */}
                    <div className={styles.downloadButtons}>
                        <div className={styles.storeImageWrapper}>
                            <Image
                                src="/images/app_stores.png"
                                alt="Disponible sur Google Play et App Store"
                                width={300}
                                height={80}
                                className={styles.storeImage}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
