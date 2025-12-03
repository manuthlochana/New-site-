import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import styles from './page.module.css';
import content from '@/data/content.json';

export default function WorkPage() {
    const { work } = content;
    return (
        <PageLayout>
            <section className={styles.header}>
                <h1 className={styles.title}>Work</h1>
                <p className={styles.description}>
                    Showcasing my latest projects crafted with creativity and precision.
                </p>
            </section>

            <div className={styles.grid}>
                {work.map((project) => (
                    <Link href={`/work/${project.id}`} key={project.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.projectName}>{project.title}</span>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={`https://placehold.co/600x450/222/fff?text=${project.title}`} alt={project.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
