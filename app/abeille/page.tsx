'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion';
import {
    Users,
    ShieldCheck,
    TrendingUp,
    Globe,
    Smartphone,
    MessageCircle,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import IPhoneMockup from '@/components/IPhoneMockup';
import ContactModal from '@/components/ContactModal';
import styles from './abeille.module.css';

function Counter({ value, suffix = '', prefix = '', decimals = 0 }: { value: number; suffix?: string; prefix?: string; decimals?: number }) {
    const [displayValue, setDisplayValue] = React.useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
                onUpdate(latest) {
                    setDisplayValue(latest);
                },
            });
            return () => controls.stop();
        }
    }, [inView, value]);

    return (
        <span ref={ref}>
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default function AbeillePage() {
    const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <div className={styles.page}>

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <motion.div
                        className={styles.container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.span variants={itemVariants} className={styles.badge}>
                            Concours La Fabrique Abeille Assurances
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="serif">
                            DORABLE : L&apos;application qui défie le géant Instagram pour recréer du lien social.
                        </motion.h1>
                        <motion.p variants={itemVariants}>
                            Transformer l&apos;isolement numérique en vitalité réelle pour nos territoires.
                        </motion.p>
                        <motion.div variants={itemVariants} className={styles.heroImageContainer}>
                            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                                <IPhoneMockup videoSrc="/videos/app-demo.mp4" />
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Problem Section */}
                <section className={styles.problemSection}>
                    <div className={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className={styles.tagline}>La Problématique</span>
                            <h2>Comment transformer nos commerces en hubs de cohésion sociale ?</h2>
                            <p>
                                Aujourd&apos;hui, l&apos;isolement numérique gagne du terrain.
                                Dorable convertit cette solitude en vitalité réelle pour nos territoires,
                                en faisant du digital un simple levier vers le monde physique.
                            </p>


                            <motion.div
                                className={styles.deathStat}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <span className={styles.deathNumber}>100 décès</span>
                                <span className={styles.deathLabel}>Par heure liés à la solitude</span>
                                <p className={styles.deathDescription}>
                                    Entre 2014 et 2019, plus de 871 000 décès par an ont été directement liés à l&apos;isolement social.
                                    Une preuve irréfutable que la <strong>santé sociale</strong> est un pilier vital.
                                </p>
                            </motion.div>

                            <div className={styles.healthPillars}>
                                <div className={styles.pillar}>
                                    <h5>Pillier 01</h5>
                                    <p>Santé Physique</p>
                                </div>
                                <div className={styles.pillar}>
                                    <h5>Pillier 02</h5>
                                    <p>Santé Mentale</p>
                                </div>
                                <div className={`${styles.pillar} ${styles.pillarActive}`}>
                                    <h5>Pillier 03</h5>
                                    <p>Santé Sociale</p>
                                </div>
                            </div>

                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Notre capacité à former et à entretenir des liens humains qui ont du sens est tout aussi essentielle à notre bien-être que la santé physique et mentale.
                                Pourtant, pendant trop longtemps, les systèmes de santé et les décideurs ne s&apos;en sont pas préoccupés.
                            </p>

                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <div className={styles.projectImageWrapper}>
                                        <Image src="/images/problem_stat_isolation.jpg" alt="Solitude" width={200} height={200} className={styles.projectImage} style={{ objectPosition: 'left' }} />
                                    </div>
                                    <div className={styles.statContent}>
                                        <h4><Counter value={1} suffix=" sur 4" /></h4>
                                        <p>Isolement Social</p>
                                        <div className={styles.statDescription}>Un quart des Français déclarent souffrir de solitude, soulignant l&apos;importance cruciale des lieux de proximité pour la sociabilité.</div>
                                        <span className={styles.statSource}>Source : <a href="https://www.fondationdefrance.org/fr/les-solitudes-en-france/etude-solitudes-2025-les-liens-de-proximite-pivots-de-la-sociabilite" target="_blank" rel="noopener noreferrer">Fondation de France, 2025</a></span>
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.projectImageWrapper}>
                                        <Image src="/images/problem_solitude.png" alt="Jeunes Actifs" width={200} height={200} className={styles.projectImage} />
                                    </div>
                                    <div className={styles.statContent}>
                                        <h4><Counter value={1} suffix=" sur 3" /></h4>
                                        <p>Jeunes Actifs (25-39)</p>
                                        <div className={styles.statDescription}>Plus d&apos;1 sur 3 se sent particulièrement seul, soit deux fois plus que les 60-69 ans. Un pic d&apos;isolement au coeur de la vie active.</div>
                                        <span className={styles.statSource}>Source : <a href="https://www.fondationdefrance.org/fr/les-solitudes-en-france" target="_blank" rel="noopener noreferrer">Fondation de France, 2024</a></span>
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.projectImageWrapper}>
                                        <Image src="/images/problem_remote.png" alt="University" width={200} height={200} className={styles.projectImage} />
                                    </div>
                                    <div className={styles.statContent}>
                                        <h4><Counter value={40} suffix="%" /></h4>
                                        <p>Détresse Etudiante</p>
                                        <div className={styles.statDescription}>40% des 18-24 ans ressentent une solitude profonde dès leur premier semestre à l&apos;université, faute de liens d&apos;intégration solides.</div>
                                        <span className={styles.statSource}>Source : <a href="https://www.letudiant.fr/etudes/fac/la-solitude-je-lai-ressentie-tout-au-long-de-mon-premier-semestre-les-etudiants-temoignent-de-leur-isolement-a-luniversite.html" target="_blank" rel="noopener noreferrer">L&apos;Etudiant, 2024</a></span>
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.projectImageWrapper}>
                                        <Image src="/images/problem_local.png" alt="Local" width={200} height={200} className={styles.projectImage} />
                                    </div>
                                    <div className={styles.statContent}>
                                        <h4><Counter value={-5.5} decimals={1} suffix="%" /></h4>
                                        <p>Fragilité Locale</p>
                                        <div className={styles.statDescription}>Forte baisse de la fréquentation des magasins en 2025, fragilisant le tissu social de nos quartiers et le commerce spécialisé.</div>
                                        <span className={styles.statSource}>Source : <a href="https://www.lsa-conso.fr/commerce-specialise-forte-baisse-de-la-frequentation-des-magasins-en-septembre-2025,462660" target="_blank" rel="noopener noreferrer">LSA Conso, 2025</a></span>
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.projectImageWrapper}>
                                        <Image src="/images/problem_screens.png" alt="Screens" width={200} height={200} className={styles.projectImage} />
                                    </div>
                                    <div className={styles.statContent}>
                                        <h4><Counter value={5} />h<Counter value={21} /></h4>
                                        <p>Consommation Vidéo</p>
                                        <div className={styles.statDescription}>Les 15-24 ans passent en moyenne 5h21 par jour devant des vidéos, une immersion digitale qui réduit drastiquement les opportunités de rencontres réelles.</div>
                                        <span className={styles.statSource}>Source : <a href="https://www.leparisien.fr/societe/ecrans-les-francais-de-15-a-24-ans-regardent-5h21-de-videos-par-jour-en-moyenne-03-04-2025-TURR7GWH2BFOFGKOVNVNOR65UI.php" target="_blank" rel="noopener noreferrer">Le Parisien, 2025</a></span>
                                    </div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.projectImageWrapper}>
                                        <Image src="/images/problem_remote.png" alt="Remote" width={200} height={200} className={styles.projectImage} />
                                    </div>
                                    <div className={styles.statContent}>
                                        <h4><Counter value={33} suffix="%" /></h4>
                                        <p>Isolement Pro</p>
                                        <div className={styles.statDescription}>33% des collaborateurs estiment qu&apos;il est plus complexe de nouer des liens à distance, une situation qui pousse 1 Français sur 4 à se sentir esseulé en télétravail.</div>
                                        <span className={styles.statSource}>Source : <a href="https://owllabs.fr/state-of-hybrid-work/2025" target="_blank" rel="noopener noreferrer">Owl Labs, 2025</a></span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Pitch Section */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.pitchContent}>
                            <motion.div
                                className={styles.pitchText}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className={styles.tagline}>Le Concept</span>
                                <h2 className="serif">Les réseaux sociaux captent notre attention, Dorable crée des connexions.</h2>
                                <p>
                                    Une carte interactive qui transforme l&apos;élan numérique en rencontre réelle.
                                    L&apos;utilisateur crée une sortie : &quot;J&apos;ai envie de...&quot;, visible sous forme d&apos;émoji.
                                    Dorable bâtit la passerelle manquante : nous convertissons le temps d&apos;écran solitaire en vitalité économique.
                                </p>
                            </motion.div>

                            <div className={styles.grid}>
                                <motion.div className={styles.card} whileHover={{ scale: 1.02 }}>
                                    <div className={styles.cardInnerImage}>
                                        <Image src="/images/map.png" alt="Carte" width={300} height={400} className={styles.projectCardImage} />
                                    </div>
                                    <h3>Carte Interactive</h3>
                                    <p>Visualisez les intentions de sorties autour de vous en temps réel.</p>
                                    <span className={styles.number}>01</span>
                                </motion.div>
                                <motion.div className={styles.card} whileHover={{ scale: 1.02 }}>
                                    <div className={styles.cardInnerImage}>
                                        <Image src="/images/activity_popup.png" alt="Activités" width={300} height={400} className={styles.projectCardImage} />
                                    </div>
                                    <h3>Matching Affinitaire</h3>
                                    <p>Connectez-vous selon vos envies communes et disponibilités réelles.</p>
                                    <span className={styles.number}>02</span>
                                </motion.div>
                                <motion.div className={styles.card} whileHover={{ scale: 1.02 }}>
                                    <div className={styles.cardInnerImage}>
                                        <Image src="/images/messages.png" alt="Messagerie" width={300} height={400} className={styles.projectCardImage} />
                                    </div>
                                    <h3>Rencontre Réelle</h3>
                                    <p>Une technologie au service de l&apos;expérience humaine concrète.</p>
                                    <span className={styles.number}>03</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategy Section */}
                <section className={styles.section} style={{ background: '#f8fafc' }}>
                    <div className={styles.container}>
                        <div className={styles.pitchText} style={{ margin: '0 auto 4rem' }}>
                            <span className={styles.tagline}>Stratégie & Impact</span>
                            <h2 className="serif">Un modèle de croissance maîtrisé</h2>
                        </div>
                        <div className={styles.strategyGrid}>
                            <motion.div
                                className={styles.strategyCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>Indicateurs Clés (KPIs)</h3>
                                <div className={styles.strategyItem}>
                                    <div className={styles.strategyHeader}>
                                        <div className={styles.strategyLabel}>🎯 Rencontres Réelles</div>
                                        <div className={styles.strategyValue}>Priorité #1</div>
                                    </div>
                                    <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.5 }} /></div>
                                    <p className={styles.strategyDescription}>Mesure de l&apos;impact concret vs solitude numérique.</p>
                                </div>
                                <div className={styles.strategyItem}>
                                    <div className={styles.strategyHeader}>
                                        <div className={styles.strategyLabel}>📈 Flux Commerces</div>
                                        <div className={styles.strategyValue}>Croissance</div>
                                    </div>
                                    <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.6 }} /></div>
                                    <p className={styles.strategyDescription}>Volume de passage généré dans les lieux partenaires.</p>
                                </div>
                                <div className={styles.strategyItem}>
                                    <div className={styles.strategyHeader}>
                                        <div className={styles.strategyLabel}>🤳 Engagement Créateurs</div>
                                        <div className={styles.strategyValue}>Expansion</div>
                                    </div>
                                    <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: '70%' }} transition={{ duration: 1, delay: 0.7 }} /></div>
                                    <p className={styles.strategyDescription}>Validation du modèle par les leaders d&apos;opinion.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.strategyCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3>Utilisation des Fonds</h3>
                                <div className={styles.strategyItem}>
                                    <div className={styles.strategyHeader}>
                                        <div className={styles.strategyLabel}>🚀 Acquisition & Growth</div>
                                        <div className={styles.strategyValue}>50%</div>
                                    </div>
                                    <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: '50%' }} transition={{ duration: 1, delay: 0.8 }} /></div>
                                    <p className={styles.strategyDescription}>Saturation des villes pilotes et marketing d&apos;influence.</p>
                                </div>
                                <div className={styles.strategyItem}>
                                    <div className={styles.strategyHeader}>
                                        <div className={styles.strategyLabel}>💻 R&D Tech & Data</div>
                                        <div className={styles.strategyValue}>30%</div>
                                    </div>
                                    <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: '30%' }} transition={{ duration: 1, delay: 0.9 }} /></div>
                                    <p className={styles.strategyDescription}>Optimisation de l&apos;IA de matching et intégration POI.</p>
                                </div>
                                <div className={styles.strategyItem}>
                                    <div className={styles.strategyHeader}>
                                        <div className={styles.strategyLabel}>👥 Talent Acquisition</div>
                                        <div className={styles.strategyValue}>20%</div>
                                    </div>
                                    <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: '20%' }} transition={{ duration: 1, delay: 1.0 }} /></div>
                                    <p className={styles.strategyDescription}>Recrutement des profils clés pour le scale-up.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Multidimensional Impact */}
                <section className={styles.problemSection} style={{ background: 'var(--brand-indigo)' }}>
                    <div className={styles.container}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="serif" style={{ color: 'white' }}>Un Impact Multidimensionnel</h2>
                            <div className={styles.impactGrid}>
                                <div className={styles.impactItem}>
                                    <div className={styles.impactImageWrapper}>
                                        <Image src="/images/mission_local.png" alt="Emploi" width={100} height={100} className={styles.impactImage} />
                                    </div>
                                    <h4 style={{ color: '#d97706' }}>Soutenir l&apos;Emploi</h4>
                                    <p>Revitalisation du commerce de proximité et pérennisation des emplois locaux dans nos quartiers.</p>
                                </div>
                                <div className={styles.impactItem}>
                                    <div className={styles.impactImageWrapper}>
                                        <Image src="/images/mission_inclusivity.png" alt="Lien Social" width={100} height={100} className={styles.impactImage} />
                                    </div>
                                    <h4 style={{ color: '#0d9488' }}>Lien Social</h4>
                                    <p>Transformation de l&apos;isolement numérique en rencontres physiques et solidaires au cœur de la ville.</p>
                                </div>
                                <div className={styles.impactItem}>
                                    <div className={styles.impactImageWrapper}>
                                        <Image src="/images/mission_paris_social.png" alt="Santé" width={100} height={100} className={styles.impactImage} />
                                    </div>
                                    <h4 style={{ color: '#881337' }}>Agir pour la Santé</h4>
                                    <p>Promotion de la santé sociale et mentale par le renforcement des interactions humaines réelles.</p>
                                </div>
                                <div className={styles.impactItem}>
                                    <div className={styles.impactImageWrapper}>
                                        <Image src="/images/mission_connection.png" alt="Environnement" width={100} height={100} className={styles.impactImage} />
                                    </div>
                                    <h4 style={{ color: '#15803d' }}>Environnement</h4>
                                    <p>Promotion de la ville du quart d&apos;heure et réduction de l&apos;empreinte carbone liée aux longs trajets.</p>
                                </div>
                                <div className={styles.impactItem}>
                                    <div className={styles.impactImageWrapper}>
                                        <Image src="/images/louvre.png" alt="Culture" width={100} height={100} className={styles.impactImage} />
                                    </div>
                                    <h4 style={{ color: '#6d28d9' }}>Culture & Patrimoine</h4>
                                    <p>Valorisation et réappropriation du patrimoine local par des sorties culturelles collectives.</p>
                                </div>
                                <div className={styles.impactItem}>
                                    <div className={styles.impactImageWrapper}>
                                        <Image src="/images/mission_paris_group.png" alt="Inclusion" width={100} height={100} className={styles.impactImage} />
                                    </div>
                                    <h4 style={{ color: 'var(--brand-pink)' }}>Inclusion & Mixité</h4>
                                    <p>Création de ponts entre les générations et les cultures pour une ville plus inclusive.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Team & Vision */}
                <section className={styles.teamSection}>
                    <div className={styles.container}>
                        <div className={styles.teamGrid}>
                            <motion.div
                                className={styles.memberCard}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.memberHeader}>
                                    <h3 className="serif">Umumbu Billy Lukale</h3>
                                    <span className={styles.role}>CEO & Fondateur</span>
                                </div>
                                <div className={styles.profileWrapper}>
                                    <Image src="/images/billy-profile.jpg" alt="Billy Lukale" width={400} height={500} className={styles.profileImage} priority style={{ transform: 'scale(2.0)', objectPosition: '46% 10%' }} />
                                </div>
                                <div className={styles.bioGroup}>
                                    <h4>Parcours</h4>
                                    <ul className={styles.bioList}>
                                        <li className={styles.bioItem}>
                                            <span>Expérience Corporate</span>
                                            <span>Ex-contrôleur de gestion (10 ans) Orange — Vinci Construction</span>
                                        </li>
                                        <li className={styles.bioItem}>
                                            <span>Écosystème Influence</span>
                                            <span>Agence E-ICONS</span>
                                        </li>
                                        <li className={styles.bioItem}>
                                            <span>Vision & Tech</span>
                                            <span>Développeur & Fondateur Dorable</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.bioGroup}>
                                    <h4>Vision</h4>
                                    <p className={styles.bioText}>Bâtir un écosystème où la technologie efface les écrans pour magnifier les rencontres réelles.</p>
                                </div>
                                <div className={styles.bioGroup}>
                                    <h4>Ambassadeurs</h4>
                                    <div className={styles.ambassadors}>
                                        <span className={styles.ambassadorTag}>Léna Situations</span>
                                        <span className={styles.ambassadorTag}>Salutbrian</span>
                                        <span className={styles.ambassadorTag}>Impératricewu</span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className={styles.pitchText}>
                                <span className={styles.tagline}>Pourquoi Dorable ?</span>
                                <h2 className="serif">Une structure prête pour le changement d&apos;échelle.</h2>

                                <div className={styles.whyUsGrid}>
                                    <motion.div
                                        className={styles.whyUsItem}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className={styles.whyIcon}><ShieldCheck color="var(--brand-pink)" /></div>
                                        <div className={styles.whyContent}>
                                            <h4>Souveraineté des Données</h4>
                                            <p>Une alternative éthique aux algorithmes d&apos;attention, centrée sur le consentement et l&apos;utilité sociale.</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className={styles.whyUsItem}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className={styles.whyIcon}><Users color="var(--brand-pink)" /></div>
                                        <div className={styles.whyContent}>
                                            <h4>Réseau d&apos;Influence</h4>
                                            <p>Capacité de saturation immédiate via un réseau de 10 000 créateurs de contenu engagés.</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className={styles.whyUsItem}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className={styles.whyIcon}><TrendingUp color="var(--brand-pink)" /></div>
                                        <div className={styles.whyContent}>
                                            <h4>Modèle Économique Vertueux</h4>
                                            <p>Réactivation de l&apos;économie locale par l&apos;apport de flux physiques qualifiés dans les commerces.</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="serif">Merci d&apos;avoir pris le temps de découvrir Dorable.</h2>
                            <p>
                                Nous serions honorés de débuter cette aventure à vos côtés et de créer, ensemble, un impact social d&apos;envergure pour La Fabrique Abeille Assurances.
                                Cliquez ci-dessous pour nous soutenir ou échanger directement avec moi.
                            </p>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="button-premium"
                                style={{ border: 'none', cursor: 'pointer' }}
                            >
                                Devenir mon Parrain & Me contacter <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div >
    );
}
