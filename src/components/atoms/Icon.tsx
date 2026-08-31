import React from 'react';

export type IconName = 
  | 'search' 
  | 'menu' 
  | 'map-pin' 
  | 'close' 
  | 'arrow-left' 
  | 'arrow-right' 
  | 'calendar' 
  | 'external-link' 
  | 'sun' 
  | 'info' 
  | 'compass' 
  | 'anchor' 
  | 'flame';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const getPath = () => {
    switch (name) {
      case 'search':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />;
      case 'menu':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />;
      case 'map-pin':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />;
      case 'close':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />;
      case 'arrow-left':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 19-7-7 7-7M19 12H5" />;
      case 'arrow-right':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />;
      case 'calendar':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
      case 'external-link':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />;
      case 'sun':
        return (
          <>
            <circle cx="12" cy="12" r="4" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </>
        );
      case 'info':
        return (
          <>
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4M12 8h.01" />
          </>
        );
      case 'compass':
        return (
          <>
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16.24 7.76-4.24 4.24-4.24-4.24 4.24 4.24M12 12l4.24 4.24M12 12l-4.24 4.24" />
          </>
        );
      case 'anchor':
        return (
          <>
            <circle cx="12" cy="5" r="3" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
          </>
        );
      case 'flame':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3q1 4 4 6.5t3 5.5a1 1 0 01-14 0 5 5 0 011-3 1 1 0 005 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />;
      default:
        return null;
    }
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      className={className}
    >
      {getPath()}
    </svg>
  );
};
