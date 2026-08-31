import React from 'react';
import { HeaderNavigation, HeritageGrid, DesignSystemManual } from '@/components/organisms';
import { Typography, Image } from '@/components/atoms';
import { HERITAGE_SITES } from '@/data/sites';

export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative', isolation: 'isolate', textAlign: 'center', marginBottom: '4rem', marginTop: '1rem', padding: '6rem 2rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src="/Front.jpg" 
            alt="Discover Pangasinan Background" 
            fill 
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ objectFit: 'cover', zIndex: -2 }} 
            priority 
          />
          {/* Light overlay to make dark text readable */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.65)', zIndex: -1 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h1" style={{ color: '#0f172a', marginBottom: '1rem' }}>Discover Pangasinan</Typography>
            <Typography variant="p" style={{ color: '#334155', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem', fontWeight: 500 }}>
              Explore the rich cultural heritage and breathtaking natural wonders of Pangasinan. From pristine beaches to historic landmarks.
            </Typography>
          </div>
        </div>
        
        <div id="sites">
          <Typography variant="h2" style={{ borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
            Featured Heritage Sites
          </Typography>
          <HeritageGrid sites={HERITAGE_SITES} />
        </div>

        <section id="about" style={{ marginTop: '5rem' }}>
          <Typography variant="h2" style={{ borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
            About The Design System
          </Typography>
          <DesignSystemManual />
        </section>
      </main>
    </>
  );
}
