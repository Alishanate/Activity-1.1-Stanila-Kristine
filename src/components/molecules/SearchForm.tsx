'use client';
import React from 'react';
import styles from './SearchForm.module.css';
import { Button, Icon } from '../atoms';

export const SearchForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search heritage sites..." 
        className={styles.input} 
        aria-label="Search"
      />
      <Button type="submit" variant="primary" className={styles.submitBtn} aria-label="Submit Search" fullWidthMobile={false}>
        <Icon name="search" size={20} />
      </Button>
    </form>
  );
};
