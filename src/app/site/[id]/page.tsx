import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HeaderNavigation } from '@/components/organisms';
import { Typography, Image, Icon } from '@/components/atoms';
import { HERITAGE_SITES } from '@/data/sites';
import styles from './page.module.css';

export function generateStaticParams() {
  return HERITAGE_SITES.map((site) => ({
    id: site.id,
  }));
}

export default function SiteDetails({ params }: { params: { id: string } }) {
  const site = HERITAGE_SITES.find(s => s.id === params.id);

  if (!site) {
    notFound();
  }

  return (
    <>
      <HeaderNavigation />
      <main className={styles.main}>
        <div className={styles.backLink}>
          <Link href="/">
            <Icon name="arrow-left" size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <article className={styles.article}>
          <div className={styles.imageContainer}>
            <Image 
              src={site.imageSrc} 
              alt={site.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <div className={styles.content}>
            <div className={styles.header}>
              <Typography variant="h1" className={styles.title}>{site.title}</Typography>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <Icon name="map-pin" size={18} />
                  <span>{site.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <Icon name="calendar" size={18} />
                  <span>Established: {site.established}</span>
                </div>
              </div>
            </div>

            <div className={styles.description}>
              <Typography variant="h2" className={styles.sectionTitle}>About</Typography>
              <Typography variant="p">{site.fullDescription}</Typography>
            </div>

            <div className={styles.features}>
              <Typography variant="h2" className={styles.sectionTitle}>Highlights</Typography>
              <ul className={styles.featureList}>
                {site.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <Icon name="search" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
