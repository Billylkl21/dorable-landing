'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import IPhoneMockup from './IPhoneMockup';

export default function Hero() {
    return (
        <section id="join" className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.badge}>
                            LE PHÉNOMÈNE SOCIAL DE L'ANNÉE
                        </span>
                    </motion.div>

                    <h1 className="title-xl reveal delay-1">
                        Vos Envies. <br className={styles.desktopHidden} />
                        <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>En Bonne Compagnie.</span>
                    </h1>

                    <motion.p
                        className={`subtitle-lg reveal delay-2 ${styles.subtitle}`}
                        style={{ marginTop: '1.5rem' }}
                    >
                        Fini les agendas rigides et les dîners imposés. <br className="hidden md:block" />
                        Avec Dorable, <strong>vous donnez le tempo</strong>. <br className="hidden md:block" />
                        <span className={styles.activityLine}>
                            Une envie de Japonais ? <span className={styles.icon3d}>🍣</span> D'une expo ? <span className={styles.icon3d}>🎨</span> D'un jogging ? <span className={styles.icon3d}>🏃</span> D'un Pilates ? <span className={styles.icon3d}>🧘‍♀️</span>
                        </span>
                        <br />
                        Quand les centres d’intérêt deviennent des rencontres.
                        C'est la spontanéité d'un claquement de doigts, la qualité d'un club privé.
                    </motion.p>

                    <motion.div
                        className="reveal delay-3"
                        style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                    >
                        <a href="#join" className={`${styles.button} button-premium`}>
                            Rejoindre
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.8rem' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>

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
                                <span style={{ fontWeight: 700 }}>+10k</span> parisiens intéressés
                            </span>
                        </div>
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
                                <span className={styles.floatingLabel}>1. Localisation</span>
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
                                <span className={styles.floatingLabel}>3. Nouvelle Connexion</span>
                                <span>Marie adore aussi !</span>
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
                                <span className={styles.floatingLabel}>4. Rencontre</span>
                                <span>On y va ensemble ?</span>
                            </div>
                        </motion.div>

                        <div className={styles.phoneWrapper}>
                            <IPhoneMockup videoSrc="/videos/app-demo.mp4" />
                        </div>
                        {/* Decorative Studio Element */}
                        <div className={styles.aura} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
