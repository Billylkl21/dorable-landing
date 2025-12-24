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
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
            >
                {/* Newspaper Header */}
                <div className={styles.newspaperHeader}>
                    <div className={styles.metaRow}>
                        <span>ÉDITION GLOBALE</span>
                        <span>VOL. 01 — NO. 83</span>
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
                            <h4 className={styles.smallHeadline}>L'Inattendu comme Luxe</h4>
                            <p className={styles.textSmall}>
                                Dans un monde scripté, la véritable élégance est de laisser faire le hasard.
                                Dorable est une <span className="serif italic">boussole vers l'imprévu</span>.
                            </p>
                            <span className={styles.readTime}>2 MIN READ</span>
                        </motion.article>

                        <motion.article
                            className={styles.sideArticle}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h4 className={styles.smallHeadline}>Qui sont les Adorables ?</h4>
                            <p className={styles.textSmall}>
                                Une nouvelle bohème urbaine. Ils fuient les plans surchargés pour l'adrénaline de l'instant.
                                Ce sont ceux qui disent "oui" à une expo de dernière minute, ceux pour qui la ville est un <span className="serif italic">terrain de jeu infini</span>.
                            </p>
                            <span className={styles.readTime}>4 MIN READ</span>
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
                            <h3 className={styles.headline}>Redonner vie à la ville</h3>
                            <div className={styles.content}>
                                <p className={styles.text}>
                                    <span className={styles.dropCap}>V</span>otre ville n'est pas un musée à ciel ouvert. C'est un organisme vivant, électrique, chaotique.
                                    Pourtant, au cœur de cette densité, la solitude n'a jamais été aussi bruyante.
                                    Nous sommes <span className="serif italic">hyper-connectés</span>, mais déconnectés de l'essentiel : l'Autre.
                                    Il est temps de briser la glace.
                                </p>
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
                            <span className={styles.readTime}>3 MIN READ</span>
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
                            <span className={styles.readTime}>5 MIN READ</span>
                        </motion.article>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
