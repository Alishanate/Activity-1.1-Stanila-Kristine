import React from 'react';
import styles from './HeritageGrid.module.css';
import { HeritageCard } from '../molecules';

interface HeritageSite {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface HeritageGridProps {
  sites: HeritageSite[];
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({ sites }) => {
  return (
    <section className={styles.grid}>
      {sites.map(site => (
        <HeritageCard key={site.id} {...site} />
      ))}
    </section>
  );
};
