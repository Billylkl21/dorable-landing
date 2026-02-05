'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User } from 'lucide-react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
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
                                <h2 className={styles.title}>Contacter le Porteur de Projet</h2>
                                <p className={styles.subtitle}>
                                    Vous souhaitez soutenir <strong>Dorable</strong> ou échanger sur notre vision ? Billy est à votre entière disposition.
                                </p>
                            </div>

                            <div className={styles.contactInfo}>
                                <div className={styles.contactCard}>
                                    <div className={styles.iconWrapper}>
                                        <User size={20} />
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.label}>Porteur de Projet</span>
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
                                        <span className={styles.label}>Téléphone</span>
                                        <span className={styles.value}>06 48 98 22 10</span>
                                    </div>
                                </a>
                            </div>

                            <div className={styles.footer}>
                                <p>Dorable — Le Réseau Social du Monde Réel</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
