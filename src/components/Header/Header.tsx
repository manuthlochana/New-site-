'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import MenuOverlay from '../Menu/MenuOverlay';
import styles from './Header.module.css';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}></span>
                        Norden
                    </Link>
                    <div className={styles.toggles}>
                        <button onClick={toggleTheme} className={styles.themeBtn}>
                            {theme === 'dark' ? '☀' : '☾'}
                        </button>
                        <div className={styles.status}>
                            <span className={styles.statusDot}></span>
                            Available
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsMenuOpen(true)} className={styles.menuBtn}>
                    Menu
                </button>
            </header>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
