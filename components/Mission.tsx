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
                            <h4 className={styles.smallHeadline}>Redonner vie à la ville</h4>
                            <p className={styles.textSmall}>
                                Nos métropoles ne sont pas des musées, mais des organismes vivants.
                                Finie l'ère de la solitude au milieu de la foule : Dorable réactive les <span className="serif italic">connexions spontanées</span>.
                            </p>
                            <span className={styles.readTime}>2 MIN READ</span>
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
                                <p className={styles.text}>
                                    <span className={styles.dropCap}>L</span>es Adorables sont le pouls oublié de nos villes.
                                    Dans une époque qui filtre tout, ils choisissent l'audace du réel.
                                    Ce sont ceux qui préfèrent le frisson d'un regard échangé à la sécurité d'un écran, le chaos joyeux d'une rencontre improvisée aux agendas surchargés.
                                    Ils ne consomment pas la ville, ils l'habitent. Ils ne cherchent pas à plaire, ils cherchent à vibrer.
                                    Être Adorable, c'est une résistance poétique contre la solitude moderne. C'est se promettre de ne plus jamais attendre pour vivre.
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
