'use client';

import { useEffect } from 'react';

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // 1. Disable Right Click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // 2. Disable Keyboard Shortcuts for Inspect/Copy
        const handleKeyDown = (e: KeyboardEvent) => {
            // Disable F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Disable Ctrl+Shift+I / Cmd+Opt+I (Inspect)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'i') {
                e.preventDefault();
            }
            // Disable Ctrl+Shift+C / Cmd+Opt+C (Inspect Element)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'c') {
                e.preventDefault();
            }
            // Disable Ctrl+Shift+J / Cmd+Opt+J (Console)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'j') {
                e.preventDefault();
            }
            // Disable Ctrl+U / Cmd+U (View Source)
            if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
                e.preventDefault();
            }
            // Disable Ctrl+S / Cmd+S (Save Page)
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
            }
            // Disable PrintScreen / Cmd+Shift+4 etc (Partial deterrence)
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText(''); // Clear clipboard
                alert('La capture d\'écran est désactivée sur ce site pour protéger le contenu.');
            }
        };

        // 3. Detect PrintScreen on release (for some browsers)
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText('');
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return <>{children}</>;
}
