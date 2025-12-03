import PageLayout from '@/components/Layout/PageLayout';
import styles from './page.module.css';
import content from '@/data/content.json';

export default function ContactPage() {
    const { contact } = content;

    return (
        <div className={styles.lightThemeWrapper}>
            <PageLayout>
                <section className={styles.header}>
                    <h1 className={styles.title}>{contact.title}</h1>
                    <p className={styles.subtitle}>{contact.subtitle}</p>
                </section>

                <form className={styles.form}>
                    <div className={styles.row}>
                        <input type="text" placeholder="Your Name" className={styles.input} />
                        <input type="email" placeholder="Your Email" className={styles.input} />
                    </div>
                    <textarea placeholder="Your Message" className={styles.textarea} rows={6}></textarea>
                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>

                <div className={styles.socials}>
                    <div className={styles.socialItem}>Instagram <span>📷</span></div>
                    <div className={styles.socialItem}>Pinterest <span>📌</span></div>
                    <div className={styles.socialItem}>Behance <span>Be</span></div>
                    <div className={styles.socialItem}>Twitter <span>🐦</span></div>
                </div>

                <div className={styles.bookCall}>
                    <button className={styles.bookBtn}>
                        Book a Call
                        <span>📞</span>
                    </button>
                </div>
            </PageLayout>
        </div>
    );
}
