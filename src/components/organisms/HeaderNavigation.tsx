'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './HeaderNavigation.module.css';
import { NavigationItem, SearchForm } from '../molecules';
import { Icon } from '../atoms';

export const HeaderNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Icon name="map-pin" size={28} />
        <span>Pangasinan</span>
      </Link>
      
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <NavigationItem href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
        <NavigationItem href="#sites" label="Heritage Sites" onClick={() => setIsMenuOpen(false)} />
        <NavigationItem href="#about" label="About" onClick={() => setIsMenuOpen(false)} />
      </nav>
      
      <div className={styles.actions}>
        <SearchForm />
      </div>

      <button 
        className={styles.menuBtn} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Icon name={isMenuOpen ? 'close' : 'menu'} />
      </button>
    </header>
  );
};
