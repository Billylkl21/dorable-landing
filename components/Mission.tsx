'use client';

import { motion } from 'framer-motion';
import styles from './Mission.module.css';

export default function Mission() {
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
                        <span>ÉDITION GLOBALE</span>
                        <span>VOL. 01 — NO. 001</span>
                        <span>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</span>
                    </div>
                    <motion.h2
                        className={styles.masthead}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        LES ADORABLES
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
                        <h5 className={styles.sectionLabel}>À La Une</h5>
                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h4 className={styles.smallHeadline}>Pourquoi ils envahissent nos villes ?</h4>
                            <p className={styles.textSmall}>
                                Pour sauver nos bistrots, nos théâtres, ou même partir camper en montagne sur un coup de tête. Ils transforment leurs passions en prétexte.
                                Plutôt que de liker, ils sortent. Ils redonnent du souffle à l'économie locale et de l'âme à la <span className="serif italic">culture de quartier</span>.
                            </p>
                            <span className={styles.readTime}>14 SEC READ</span>
                        </motion.article>

                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h4 className={styles.smallHeadline}>À quoi les reconnaît-on ?</h4>
                            <p className={styles.textSmall}>
                                Des rebelles de la connexion authentique. Ils ont une app pour limiter leur temps d'écran, sont toujours partants pour une nouvelle expo, et fuient les "dates" scénarisés.
                                Ils sont <span className="serif italic">imparfaits, curieux, et vivants</span>.
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
                                Le lien social spontané, nouvelle richesse des métropoles modernes. <span className={styles.credit}>Photo: Billy Lukale</span>
                            </p>
                        </div>

                        {/* Main Article Text */}
                        <div className={styles.mainArticleContent}>
                            <h3 className={styles.headline}>Qui sont les Adorables ?</h3>
                            <div className={styles.content}>
                                <span className={styles.dropCap}>C</span>'est une insurrection douce contre la tyrannie du prévu.
                                Une génération qui refuse d'être spectatrice de sa propre jeunesse derrière un écran.
                                Ils boycottent la perfection digitale pour le grain du réel, préférant une galère mémorable à une soirée "parfaite" mais vide.
                                Ce ne sont pas des utilisateurs, ce sont les nouveaux dissidents du lien social qui réclament le droit à l'imprévu.
                                Leur QG ? La rue. Leur arme ? L'audace.
                                Ils ne cherchent pas à matcher, ils cherchent à exister, maintenant.
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
                            <h4 className={styles.smallHeadline}>La Fin du "Swipe"</h4>
                            <p className={styles.textSmall}>
                                Pas de vitrine, pas de performance. La rencontre ne se <span className="serif italic">consomme</span> pas, elle s'incarne.
                            </p>
                            <span className={styles.readTime}>5 SEC READ</span>
                        </motion.article>

                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <h4 className={styles.smallHeadline}>Le Cercle des Initiés</h4>
                            <p className={styles.textSmall}>
                                Rejoindre Dorable est un acte de résistance.
                                Une communauté pour ceux qui savent encore <span className="serif italic">provoquer le destin</span>.
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
