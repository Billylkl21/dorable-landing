'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WaitlistModal from './WaitlistModal';
import ContactModal from './ContactModal';

import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();
    const isAbeillePage = pathname === '/abeille';
    const [scrolled, setScrolled] = useState(false);
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
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
                <div className={`${styles.linksWrapper} ${isAbeillePage ? styles.linksWrapperAbeille : ''}`}>
                    {isAbeillePage ? (
                        <>
                            <Link href="/abeille#enjeu" className={styles.link}>L&apos;Enjeu</Link>
                            <Link href="/abeille#concept" className={styles.link}>Concept</Link>
                            <Link href="/abeille#strategie" className={styles.link}>Stratégie</Link>
                            <Link href="/abeille#impacts" className={styles.link}>Impacts</Link>
                            <Link href="/abeille#equipe" className={styles.link}>L&apos;Équipe</Link>
                            <button onClick={() => setIsContactOpen(true)} className={styles.cta}>
                                Devenir Parrain de Billy
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/#concept" className={styles.link}>Le Concept</Link>
                            <Link href="/#esprit" className={styles.link}>L&apos;adorable</Link>
                            <Link href="/#lifestyle" className={styles.link}>L&apos;Art de Vivre</Link>
                            <button onClick={() => setIsWaitlistOpen(true)} className={styles.cta}>
                                Rejoindre la liste
                            </button>
                        </>
                    )}
                </div>
            </nav>
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </motion.header>
    );
}
