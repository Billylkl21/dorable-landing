'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        text: "Dorable makes going out so much easier. No more headaches organizing, I just join what sounds good to me.",
        name: "Clara M.",
        role: "Member since Dec 2025",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5.0
    },
    {
        id: 2,
        text: "I love the community. It feels great knowing you aren't alone wanting to spontaneously go out in the city.",
        name: "Thomas R.",
        role: "Active Member",
        avatar: "https://i.pravatar.cc/150?img=8",
        rating: 5.0
    },
    {
        id: 3,
        text: "The interface is super smooth and clean. Nothing complicated, it gets straight to the point: the outing.",
        name: "Sarah L.",
        role: "Member since Nov 2025",
        avatar: "https://i.pravatar.cc/150?img=10",
        rating: 5.0
    },
    {
        id: 4,
        text: "Honestly super useful. It allows me to discover exhibitions I would have missed and to share these moments with other curious people.",
        name: "Julie B.",
        role: "Member since Dec 2025",
        avatar: "https://i.pravatar.cc/150?img=16",
        rating: 5.0
    },
    {
        id: 5,
        text: "The concept is brilliant. I found a tennis partner through the app in 2 hours. Formidable efficiency.",
        name: "Lucas P.",
        role: "Active Member",
        avatar: "https://i.pravatar.cc/150?img=11",
        rating: 5.0
    }
];

const StarIcon = () => (
    <svg className={styles.starIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

export default function TestimonialsEn() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>What they say about us</span>
                    <h2 className={styles.title}>They love the experience</h2>
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
