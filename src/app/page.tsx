import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import TechStackMarquee from '@/components/Home/TechStackMarquee';
import styles from './page.module.css';
import content from '@/data/content.json';

export default function Home() {
  const { home, work } = content;

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: home.hero.title }}></h1>
          <p className={styles.heroSubtitle}>{home.hero.subtitle}</p>
          <div className={styles.heroButtons}>
            <Link href="/work" className={styles.btnPrimary}>{home.hero.ctaPrimary}</Link>
            <Link href="/contact" className={styles.btnSecondary}>{home.hero.ctaSecondary}</Link>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src="/images/elias-portrait.png"
            alt="Elias Norden"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Selected Work */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
          <Link href="/work" className={styles.linkArrow}>View All ↗</Link>
        </div>
        <div className={styles.workGrid}>
          {work.slice(0, 2).map((project) => (
            <Link href={`/work/${project.id}`} key={project.id} className={styles.workCard}>
              <div className={styles.workImage}>
                <img src={`https://placehold.co/600x450/222/fff?text=${project.title}`} alt={project.title} />
              </div>
              <div className={styles.workInfo}>
                <h3 className={styles.workTitle}>{project.title}</h3>
                <span className={styles.workCat}>{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <div className={styles.servicesGrid}>
          {home.services.map((service, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {home.testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.testimonialAuthor}>
                <span className={styles.authorName}>{t.author}</span>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pricing</h2>
        <div className={styles.pricingGrid}>
          {home.pricing.map((plan, i) => (
            <div key={i} className={styles.pricingCard}>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <div className={styles.planPrice}>{plan.price}</div>
              <ul className={styles.planFeatures}>
                {plan.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
              <Link href="/contact" className={styles.planBtn}>Get Started</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqList}>
          {home.faq.map((item, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{item.question}</summary>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
