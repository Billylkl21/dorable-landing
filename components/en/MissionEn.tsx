'use client';

import { motion } from 'framer-motion';
import styles from '../Mission.module.css';

export default function MissionEn() {
    return (
        <section id="esprit" className={styles.section}>
            <motion.div
                className={styles.paperContainer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, translateY: -8, boxShadow: "0 40px 80px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
            >
                {/* Metro Illustration */}
                <motion.div
                    className={styles.metroIllustration}
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, -2, 0, 2, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <img src="/images/icons/metro.png" alt="Métro Parisien" />
                </motion.div>
                {/* Newspaper Header */}
                <div className={styles.newspaperHeader}>
                    <div className={styles.metaRow}>
                        <span>GLOBAL EDITION</span>
                        <span>VOL. 01 — NO. 001</span>
                        <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</span>
                    </div>
                    <motion.h2
                        className={styles.masthead}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        THE DORABLES
                    </motion.h2>
                    <motion.div
                        className={styles.dividerDouble}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </div>

                {/* Newspaper Grid - 3 Columns (NYT Style) */}
                <div className={styles.grid}>
                    {/* Left Column - "More News" */}
                    <div className={styles.sideColumnLeft}>
                        <h5 className={styles.sectionLabel}>Headlines</h5>
                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h4 className={styles.smallHeadline}>Why are they taking over our cities?</h4>
                            <p className={styles.textSmall}>
                                To save our bistros, our theaters, or even go camping in the mountains on a whim. They turn their passions into an excuse.
                                Rather than liking, they go out. They breathe life back into the local economy and soul into the <span className="serif italic">neighborhood culture</span>.
                            </p>
                            <span className={styles.readTime}>14 SEC READ</span>
                        </motion.article>

                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h4 className={styles.smallHeadline}>How do you recognize them?</h4>
                            <p className={styles.textSmall}>
                                Rebels of authentic connection. They have an app to limit their screen time, are always up for a new exhibition, and avoid predictable outings.
                                They are <span className="serif italic">imperfect, curious, and alive</span>.
                            </p>
                            <span className={styles.readTime}>12 SEC READ</span>
                        </motion.article>
                    </div>

                    {/* Center Column - Main Feature (Image + Story) */}
                    <motion.div
                        className={styles.centerColumn}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Main Image */}
                        <div className={styles.mainImageWrapper}>
                            <img
                                src="/images/mission_paris_social.png"
                                alt="Urban Lifestyle"
                                className={styles.mainImage}
                            />
                            <p className={styles.imageCaption}>
                                Spontaneous social connection, new wealth of modern metropolis. <span className={styles.credit}>Photo: Billy Lukale</span>
                            </p>
                        </div>

                        {/* Main Article Text */}
                        <div className={styles.mainArticleContent}>
                            <h3 className={styles.headline}>Who are the Dorables?</h3>
                            <div className={styles.content}>
                                <span className={styles.dropCap}>I</span>t's a gentle insurrection against the tyranny of the predictable.
                                A generation that refuses to be spectators of their own youth behind a screen.
                                They boycott digital perfection for the grit of reality, preferring a memorable mess to a "perfect" but empty night out.
                                They are not users, they are the new dissidents of social connection demanding the right to the unexpected.
                                Their HQ? The streets. Their weapon? Audacity.
                                They don't seek to scroll endlessly, they seek to exist, right now.
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Briefs */}
                    <div className={styles.sideColumnRight}>
                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <h4 className={styles.smallHeadline}>The End of Scrolling</h4>
                            <p className={styles.textSmall}>
                                No showcase, no performance. An activity is not <span className="serif italic">consumed</span>, it is embodied.
                            </p>
                            <span className={styles.readTime}>5 SEC READ</span>
                        </motion.article>

                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <h4 className={styles.smallHeadline}>The Inner Circle</h4>
                            <p className={styles.textSmall}>
                                Joining Dorable is an act of resistance.
                                A community for those who still know how to <span className="serif italic">invite fate</span>.
                            </p>
                            <span className={styles.readTime}>5 SEC READ</span>
                        </motion.article>
                    </div>
                </div>

                {/* Floating Wine Glass Doodle */}
                <motion.div
                    className={styles.wineIllustration}
                    animate={{
                        rotate: [0, 5, 0, -5, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <img src="/images/icons/wine_glass.png" alt="" />
                </motion.div>
            </motion.div>
        </section>
    );
}
