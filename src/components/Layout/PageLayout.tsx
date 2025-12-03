import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './PageLayout.module.css';

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
