import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidthMobile?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidthMobile = true, 
  className = '', 
  ...props 
}) => {
  const btnClasses = [
    styles.button,
    variant === 'outline' ? styles.outline : '',
    fullWidthMobile ? styles.fullWidthMobile : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};
