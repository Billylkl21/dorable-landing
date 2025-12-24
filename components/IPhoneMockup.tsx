'use client';

import React from 'react';
import styles from './IPhoneMockup.module.css';

interface IPhoneMockupProps {
    videoSrc: string;
}

export default function IPhoneMockup({ videoSrc }: IPhoneMockupProps) {
    return (
        <div className={styles.mockupContainer}>
            {/* Buttons */}
            <div className={`${styles.sideButton} ${styles.mute}`} />
            <div className={`${styles.sideButton} ${styles.volUp}`} />
            <div className={`${styles.sideButton} ${styles.volDown}`} />
            <div className={`${styles.sideButton} ${styles.power}`} />

            <div className={styles.bezel} />
            <div className={styles.dynamicIsland} />

            <div className={styles.screenWrapper}>
                <video
                    className={styles.video}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className={styles.gloss} />
            </div>
        </div>
    );
}
