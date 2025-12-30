'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Header.module.css';
import Link from 'next/link';

import Image from 'next/image';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <nav className={styles.nav}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/images/logo_final.png"
                        alt="Dorable"
                        width={150}
                        height={45}
                        priority
                        className={styles.logo}
                    />
                </Link>
                <div className={styles.linksWrapper}>
                    <Link href="/#concept" className={styles.link}>Le Concept</Link>
                    <Link href="/#esprit" className={styles.link}>L'Esprit</Link>
                    <Link href="/#lifestyle" className={styles.link}>L'Art de Vivre</Link>
                    <Link href="/#join" className={styles.cta}>Télécharger</Link>
                </div>
            </nav>
        </motion.header>
    );
}
