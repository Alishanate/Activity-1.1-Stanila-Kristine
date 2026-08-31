import React from 'react';
import Link from 'next/link';
import styles from './HeritageCard.module.css';
import { Image, Typography, Button } from '../atoms';

interface HeritageCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({ id, title, description, imageSrc }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <Typography variant="h3">{title}</Typography>
        <div className={styles.description}>
          <Typography variant="p">{description}</Typography>
        </div>
        <Link href={`/site/${id}`} className={styles.detailsLink}>
          View Details
        </Link>
      </div>
    </article>
  );
};
