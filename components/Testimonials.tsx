'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        text: "Dorable rend les sorties tellement plus simples. Je ne me prends plus la tête pour organiser, je rejoins juste ce qui me plaît.",
        name: "Clara M.",
        role: "Membre depuis Janvier",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        rating: 5.0
    },
    {
        id: 2,
        text: "J'adore la communauté. Ça fait du bien de savoir qu'on n'est pas seul à vouloir sortir spontanément à Paris.",
        name: "Thomas R.",
        role: "Membre Fondateur",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        rating: 5.0
    },
    {
        id: 3,
        text: "L'interface est super fluide et clean. Rien de compliqué, on va à l'essentiel : la rencontre.",
        name: "Sarah L.",
        role: "Paris 11ème",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        rating: 5.0
    },
    {
        id: 4,
        text: "Franchement utile. Ça me permet de découvrir des expos que j'aurais ratées et de rencontrer des gens qui ont les mêmes goûts.",
        name: "Julie B.",
        role: "Membre VIP",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", // Reusing for consistency style but distinct
        rating: 5.0
    },
    {
        id: 5,
        text: "Le concept est génial. J'ai rencontré ma partenaire de tennis grâce à l'app en 2 heures. Efficacité redoutable.",
        name: "Lucas P.",
        role: "Membre Actif",
        avatar: "https://i.pravatar.cc/150?u=1234566",
        rating: 5.0
    }
];

const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Avis</span>
                    <h2 className={styles.title}>Ils adorent l'expérience</h2>
                </div>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={`${t.id}-${i}`} className={styles.card}>
                                <p className={styles.text}>"{t.text}"</p>
                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                                    <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.6, fontWeight: 500 }}>{t.rating}</span>
                                </div>
                                <div className={styles.footer}>
                                    <div className={styles.avatar}>
                                        <Image src={t.avatar} alt={t.name} width={40} height={40} />
                                    </div>
                                    <div className={styles.meta}>
                                        <span className={styles.name}>{t.name}</span>
                                        <span className={styles.role}>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
