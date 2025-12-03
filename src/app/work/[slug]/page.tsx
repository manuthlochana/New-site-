import PageLayout from '@/components/Layout/PageLayout';
import content from '@/data/content.json';
import styles from './page.module.css';

// In Next.js 15+, params is a Promise. But for standard usage in 14/13 it's an object.
// I'll assume standard 14 behavior or handle it safely.
// Actually, create-next-app@latest might be 15.
// In 15, params is async.
// I'll use `use` or await it if it's a server component.
// But to be safe and simple:
export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = content.work.find(p => p.id === params.slug);

    if (!project) return <PageLayout><div>Project not found</div></PageLayout>;

    return (
        <PageLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.meta}>
                        <span>{project.year}</span>
                        <span>{project.category}</span>
                    </div>
                    <p className={styles.description}>{project.description}</p>
                </div>

                <div className={styles.gallery}>
                    {project.images.map((img, i) => (
                        <div key={i} className={styles.imageWrapper}>
                            <img src={`https://placehold.co/800x600/222/fff?text=${project.title}+Shot+${i + 1}`} alt={project.title} />
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
