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
                            { name: 'Paris', image: '/images/illu_paris.jpg' },
                            { name: 'New York', image: '/images/illu_newyork.jpg' },
                            { name: 'Pékin', image: '/images/illu_pekin.jpg' },
                            { name: 'Londres', image: '/images/illu_cinema.jpg' },
                            { name: 'Tokyo', image: '/images/illu_tokyo.jpg' },
                            { name: 'Rome', image: '/images/illu_rome.jpg' },
                            { name: 'Rio', image: '/images/illu_rio.jpg' },
                            { name: 'Le Caire', image: '/images/illu_cairo.jpg' },
                            // Duplicates for infinity loop
                            { name: 'Paris', image: '/images/illu_paris.jpg' },
                            { name: 'New York', image: '/images/illu_newyork.jpg' },
                            { name: 'Pékin', image: '/images/illu_pekin.jpg' },
                            { name: 'Londres', image: '/images/illu_cinema.jpg' },
                            { name: 'Tokyo', image: '/images/illu_tokyo.jpg' },
                            { name: 'Rome', image: '/images/illu_rome.jpg' },
                            { name: 'Rio', image: '/images/illu_rio.jpg' },
                            { name: 'Le Caire', image: '/images/illu_cairo.jpg' }
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
