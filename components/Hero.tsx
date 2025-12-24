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
                            LE SOCIAL CLUB NOUVELLE GÉNÉRATION
                        </span>
                    </motion.div>

                    <h1 className="title-xl reveal delay-1">
                        Vos Envies. <br />
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

                        {/* Download Buttons below the phone */}
                        <div className={styles.downloadButtons}>
                            <a href="#" className={styles.storeButton}>
                                <svg className={styles.storeIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.63-.03 2.76.96 3.65.96.94 0 2.45-1.16 4.13-1 2.15.2 3.8 1.45 4.83 2.97-4.14 2-3.47 7.7 1.28 9.68zM13 3.5c.86-1.12 1.55-2.58 1.34-4-.42.06-1.92.54-2.67 1.42-.69.81-1.28 2.05-1.1 3.23.47.04 1.58-.53 2.43-.65z" fill="currentColor" />
                                </svg>
                                <div className={styles.storeText}>
                                    <span className={styles.storeLabel}>Télécharger sur</span>
                                    <span className={styles.storeName}>App Store</span>
                                </div>
                            </a>

                            <a href="#" className={styles.storeButton}>
                                <svg className={styles.storeIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.42L15.12,13.17L17.38,10.92L20.3,13.84C20.59,14.13,20.59,14.61,20.3,14.9L20.3,12.5M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" fill="currentColor" />
                                </svg>
                                <div className={styles.storeText}>
                                    <span className={styles.storeLabel}>DISPO SUR</span>
                                    <span className={styles.storeName}>Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
