'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import styles from './WaitlistModal.module.css';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [email, setEmail] = useState('');
    const [sponsor, setSponsor] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.includes('@')) {
            try {
                await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: '', email, sponsor }),
                });
                setSubmitted(true);
                setTimeout(() => {
                    onClose();
                    setSubmitted(false);
                    setEmail('');
                    setSponsor('');
                }, 2000);
            } catch (error) {
                console.error(error);
                setSubmitted(true);
            }
        }
    };

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

                            <h2 className={styles.title}>Rejoindre l&apos;aventure</h2>
                            <p className={styles.subtitle}>
                                Inscrivez-vous pour un accès en avant-première et bénéficiez de <strong>tarifs exceptionnels à vie</strong> réservés aux premiers membres.
                            </p>

                            {submitted ? (
                                <motion.div
                                    className={styles.successMessage}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    🎉 Merci ! Vous êtes sur la liste.
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Email</label>
                                        <input
                                            type="email"
                                            className={styles.input}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Code Parrain (Optionnel)</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={sponsor}
                                            onChange={(e) => setSponsor(e.target.value)}
                                            placeholder="Ex: LUCAS10"
                                        />
                                    </div>
                                    <button type="submit" className={styles.submitButton}>
                                        S&apos;inscrire sur la liste
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
