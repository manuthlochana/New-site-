import Link from 'next/link';
import styles from './Footer.module.css';
import content from '@/data/content.json';

export default function Footer() {
    const { footer } = content.site;
    return (
        <footer className={styles.footer}>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src="https://placehold.co/100x100/333/fff?text=EN" alt="Elias Norden" />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>Elias Norden</div>
                    <div className={styles.role}>Digital Designer</div>
                </div>
            </div>

            <div className={styles.linksGrid}>
                <div className={styles.column}>
                    <h4 className={styles.colTitle}>Pages</h4>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.colTitle}>CMS</h4>
                    <Link href="/work">Work</Link>
                    <Link href="/work/hanssen">Work Single</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/blog/design-trends">Blog Single</Link>
                </div>
            </div>

            <div className={styles.copyright}>
                {footer.copyright}
            </div>
        </footer>
    );
}
