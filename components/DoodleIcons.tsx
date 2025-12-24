import React from 'react';

export const DoodleSparkle = ({ color = "currentColor", size = 32 }: { color?: string, size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15 C50 15 55 40 85 50 C55 60 50 85 50 85 C50 85 45 60 15 50 C45 40 50 15 50 15 Z"
            stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M50 15 C52 42 58 48 85 50" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
    </svg>
);

export const DoodleGroup = ({ color = "currentColor", size = 32 }: { color?: string, size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Person 1 */}
        <path d="M30 40 C30 35 34 30 38 30 C42 30 46 35 46 40 C46 45 42 50 38 50 C34 50 30 45 30 40 Z" stroke={color} strokeWidth="3" />
        <path d="M20 80 C20 65 28 60 38 60 C48 60 56 65 56 80" stroke={color} strokeWidth="3" strokeLinecap="round" />

        {/* Person 2 */}
        <path d="M60 35 C60 30 64 25 68 25 C72 25 76 30 76 35 C76 40 72 45 68 45 C64 45 60 40 60 35 Z" stroke={color} strokeWidth="3" />
        <path d="M52 75 C52 60 60 55 68 55 C76 55 84 60 84 75" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
);

export const DoodleShop = ({ color = "currentColor", size = 32 }: { color?: string, size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 L80 40 L75 80 L25 80 Z" stroke={color} strokeWidth="3" strokeLinejoin="round" />
        <path d="M20 40 L10 40 L15 20 L85 20 L90 40 L80 40" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="35" y1="40" x2="35" y2="80" stroke={color} strokeWidth="3" />
        <path d="M45 60 C45 60 50 55 55 60" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
);

export const DoodleMusic = ({ color = "currentColor", size = 32 }: { color?: string, size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="70" r="10" stroke={color} strokeWidth="3" />
        <circle cx="70" cy="65" r="10" stroke={color} strokeWidth="3" />
        <path d="M45 70 L45 30 L80 25 L80 65" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 40 L80 35" stroke={color} strokeWidth="3" />
        <path d="M15 40 Q25 30 15 20" stroke={color} strokeWidth="2" fill="none" strokeDasharray="4 4" />
    </svg>
);
