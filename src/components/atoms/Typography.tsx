import React from 'react';
import styles from './Typography.module.css';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'p', children, className = '', style }) => {
  const Component = variant.startsWith('h') ? variant : 'p';
  return (
    <Component className={`${styles[variant]} ${className}`.trim()} style={style}>
      {children}
    </Component>
  );
};
