import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import styles from './page.module.css';

const posts = [
    { id: 'design-trends', title: 'Web Design Trends 2024', date: 'Oct 12, 2023' },
    { id: 'framer-vs-webflow', title: 'Framer vs Webflow: Which to Choose?', date: 'Sep 28, 2023' },
    { id: 'minimalism', title: 'The Power of Minimalism in UI', date: 'Aug 15, 2023' }
];

export default function BlogPage() {
    return (
        <PageLayout>
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.list}>
                {posts.map(post => (
                    <Link href={`/blog/${post.id}`} key={post.id} className={styles.item}>
                        <div className={styles.image}>
                            <img src={`https://placehold.co/150x150/333/fff?text=Post`} alt="" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{post.date}</span>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
