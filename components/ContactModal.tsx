import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User } from 'lucide-react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith('/en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeButton} onClick={onClose}>
                                <X size={20} />
                            </button>

                            <div className={styles.header}>
                                <div className={styles.avatarWrapper}>
                                    <User size={32} color="var(--brand-pink)" />
                                </div>
                                <h2 className={styles.title}>{isEnglish ? "Contact the Founder" : "Contacter le Porteur de Projet"}</h2>
                                <p className={styles.subtitle}>
                                    {isEnglish ? (
                                        <>Want to support <strong>Dorable</strong> or discuss our vision? Billy is at your disposal.</>
                                    ) : (
                                        <>Vous souhaitez soutenir <strong>Dorable</strong> ou échanger sur notre vision ? Billy est à votre entière disposition.</>
                                    )}
                                </p>
                            </div>

                            <div className={styles.contactInfo}>
                                <div className={styles.contactCard}>
                                    <div className={styles.iconWrapper}>
                                        <User size={20} />
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.label}>{isEnglish ? "Founder" : "Porteur de Projet"}</span>
                                        <span className={styles.value}>Billy Lukale</span>
                                    </div>
                                </div>

                                <a href="mailto:dorableapp@gmail.com" className={styles.contactCard}>
                                    <div className={styles.iconWrapper} style={{ background: 'rgba(13, 148, 136, 0.1)', color: '#0d9488' }}>
                                        <Mail size={20} />
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.label}>Email</span>
                                        <span className={styles.value}>dorableapp@gmail.com</span>
                                    </div>
                                </a>

                                <a href="tel:+33648982210" className={styles.contactCard}>
                                    <div className={styles.iconWrapper} style={{ background: 'rgba(191, 137, 132, 0.1)', color: 'var(--brand-pink)' }}>
                                        <Phone size={20} />
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.label}>{isEnglish ? "Phone" : "Téléphone"}</span>
                                        <span className={styles.value}>06 48 98 22 10</span>
                                    </div>
                                </a>
                            </div>

                            <div className={styles.footer}>
                                <p>Dorable — {isEnglish ? "The Real-World Social Network" : "Le Réseau Social du Monde Réel"}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
