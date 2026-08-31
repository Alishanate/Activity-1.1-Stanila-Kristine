import React from 'react';
import Link from 'next/link';
import styles from './NavigationItem.module.css';

interface NavigationItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ href, label, onClick }) => {
  return (
    <Link href={href} className={styles.navItem} onClick={onClick}>
      {label}
    </Link>
  );
};
