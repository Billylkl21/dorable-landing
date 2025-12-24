'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LifestyleGrid.module.css';

const items = [
    {
        id: 1,
        type: 'image',
        src: '/images/mission_paris_social_v2.png',
        alt: 'Parisian Rooftop',
        size: 'tall',
        label: 'Rooftops'
    },
    {
        id: 2,
        type: 'text',
        title: 'Paris est une fête',
        subtitle: 'Et vous êtes invité.',
        bg: 'var(--brand-pink)',
        color: 'white',
        size: 'square'
    },
    {
        id: 3,
        type: 'image',
        src: '/images/mission_paris_group.png',
        alt: 'Terrace Culture',
        size: 'wide',
        label: 'Terrasses'
    },
    {
        id: 4,
        type: 'image',
        src: '/images/mission_culture.png',
        alt: 'Art & Gallery',
        size: 'square',
        label: 'Vernissages'
    },
    {
        id: 5,
        type: 'text',
        title: 'Vivre',
        subtitle: 'Sans filtre.',
        bg: 'var(--brand-indigo)',
        color: 'white',
        size: 'tall'
    },
    {
        id: 6,
        type: 'image',
        src: '/images/mission_local.png',
        alt: 'Hidden Spots',
        size: 'wide',
        label: 'Secrets'
    }
];

export default function LifestyleGrid() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.gridContainer}`}>
                <div className={styles.header}>
                    <motion.h2
                        className="title-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        L'Art de Vivre <br />
                        <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>Ensemble</span>
                    </motion.h2>
                </div>

                <div className={styles.carouselWrapper}>
                    <div className={styles.carouselTrack}>
                        {[
                            { name: 'Paris', image: '/images/mission_paris_social_v2.png' },
                            { name: 'New York', image: '/images/mission_paris_social.png' },
                            { name: 'Rome', image: '/images/mission_paris_group.png' },
                            { name: 'Milan', image: '/images/mission_culture.png' },
                            { name: 'Lisbonne', image: '/images/mission_local.png' },
                            { name: 'Londres', image: '/images/mission_paris_social_v2.png' },
                            { name: 'Seoul', image: '/images/mission_paris_social.png' },
                            { name: 'Tokyo', image: '/images/mission_paris_group.png' },
                            { name: 'Bali', image: '/images/mission_culture.png' },
                            // Duplicates for infinity
                            { name: 'Paris', image: '/images/mission_paris_social_v2.png' },
                            { name: 'New York', image: '/images/mission_paris_social.png' },
                            { name: 'Rome', image: '/images/mission_paris_group.png' },
                            { name: 'Milan', image: '/images/mission_culture.png' }
                        ].map((city, index) => (
                            <div key={index} className={styles.cityCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={city.image}
                                        alt={city.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className={styles.cityImage}
                                    />
                                    <div className={styles.cityOverlay}>
                                        <span className={styles.cityName}>{city.name}</span>
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
