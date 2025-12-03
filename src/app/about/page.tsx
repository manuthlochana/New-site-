import PageLayout from '@/components/Layout/PageLayout';
import styles from './page.module.css';
import content from '@/data/content.json';

export default function AboutPage() {
    const { about } = content;
    return (
        <PageLayout>
            <section className={styles.hero}>
                <div className={styles.avatar}>
                    <img src="https://placehold.co/100x100/333/fff?text=EN" alt="Elias" />
                </div>
                <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: about.intro.replace(/\n/g, '<br/>') }}></h1>
                <p className={styles.description}>{about.description}</p>
            </section>

            <div className={styles.mainImage}>
                {/* Large portrait image */}
                <img src="https://placehold.co/400x300/222/666?text=Portrait" alt="Elias Portrait" />
            </div>

            <section className={styles.awards}>
                <h2 className={styles.sectionTitle}>Awards<br />& Recognitions</h2>
                <p className={styles.awardsIntro}>
                    I'm honored to have my work recognized by industry leaders, celebrating creativity, innovation, and excellence in web design.
                </p>
                <div className={styles.awardsList}>
                    {about.awards.map((award, index) => (
                        <div key={index} className={styles.awardItem}>
                            <span className={styles.awardTitle}>{award.title}</span>
                            <span className={styles.awardYear}>{award.year}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.socials}>
                {about.socials.map((social, index) => (
                    <a key={index} href={social.url} className={styles.socialLink}>
                        {social.platform}
                        <span className={styles.arrow}>↗</span>
                    </a>
                ))}
            </section>

            <div className={styles.bookCall}>
                <button className={styles.bookBtn}>
                    Book a Call
                    <span className={styles.phoneIcon}>📞</span>
                </button>
            </div>
        </PageLayout>
    );
}
