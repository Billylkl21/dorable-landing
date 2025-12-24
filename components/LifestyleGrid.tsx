'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LifestyleGrid.module.css';

// Unused items array removed

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
                            { name: 'Paris', image: '/images/city_paris.png' },
                            { name: 'New York', image: '/images/city_newyork.png' },
                            { name: 'Rome', image: '/images/city_rome.png' },
                            { name: 'Londres', image: '/images/city_london.png' },
                            { name: 'Tokyo', image: '/images/city_tokyo.png' },
                            // Duplicates for infinity loop
                            { name: 'Paris', image: '/images/city_paris.png' },
                            { name: 'New York', image: '/images/city_newyork.png' },
                            { name: 'Rome', image: '/images/city_rome.png' },
                            { name: 'Londres', image: '/images/city_london.png' },
                            { name: 'Tokyo', image: '/images/city_tokyo.png' }
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
