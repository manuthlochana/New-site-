'use client';

import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import TechStackMarquee from '@/components/Home/TechStackMarquee';
import styles from './page.module.css';
import content from '@/data/content.json';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { home, work, about } = content;

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.heroTitle} variants={fadeInUp} dangerouslySetInnerHTML={{ __html: home.hero.title }}></motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeInUp}>{home.hero.subtitle}</motion.p>
          <motion.div className={styles.heroButtons} variants={fadeInUp}>
            <Link href="/work" className={styles.btnPrimary}>{home.hero.ctaPrimary}</Link>
            <Link href="/contact" className={styles.btnSecondary}>{home.hero.ctaSecondary}</Link>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={about.image}
            alt="Manuth Lochana"
            className={styles.heroImage}
          />
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Selected Work */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.sectionHeader}>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>Selected Work</motion.h2>
          <Link href="/work" className={styles.linkArrow}>View All ↗</Link>
        </div>
        <div className={styles.workGrid}>
          {work.slice(0, 2).map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link href={`/work/${project.id}`} className={styles.workCard}>
                <div className={styles.workImage}>
                  <img src={project.images[0]} alt={project.title} />
                </div>
                <div className={styles.workInfo}>
                  <h3 className={styles.workTitle}>{project.title}</h3>
                  <span className={styles.workCat}>{project.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>Services</motion.h2>
        <div className={styles.servicesGrid}>
          {home.services.map((service, i) => (
            <motion.div key={i} className={styles.serviceCard} variants={fadeInUp}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>Testimonials</motion.h2>
        <div className={styles.testimonialsGrid}>
          {home.testimonials.map((t, i) => (
            <motion.div key={i} className={styles.testimonialCard} variants={fadeInUp}>
              <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.testimonialAuthor}>
                <span className={styles.authorName}>{t.author}</span>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>Pricing</motion.h2>
        <div className={styles.pricingGrid}>
          {home.pricing.map((plan, i) => (
            <motion.div key={i} className={styles.pricingCard} variants={fadeInUp}>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <div className={styles.planPrice}>{plan.price}</div>
              <ul className={styles.planFeatures}>
                {plan.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
              <Link href="/contact" className={styles.planBtn}>Get Started</Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>FAQ</motion.h2>
        <div className={styles.faqList}>
          {home.faq.map((item, i) => (
            <motion.details key={i} className={styles.faqItem} variants={fadeInUp}>
              <summary className={styles.faqQuestion}>{item.question}</summary>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </motion.section>
    </PageLayout>
  );
}
