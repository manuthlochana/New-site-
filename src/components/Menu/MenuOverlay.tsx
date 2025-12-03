import Link from 'next/link';
import styles from './MenuOverlay.module.css';
import content from '@/data/content.json';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    const { footer } = content.site;

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <button className={styles.closeBtn} onClick={onClose}>
                Close
            </button>
            <nav className={styles.nav}>
                {footer.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={styles.link}
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
