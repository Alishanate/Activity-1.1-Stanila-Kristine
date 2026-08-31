import React from 'react';
import styles from './DesignSystemManual.module.css';
import { Typography, Icon, Button } from '../atoms';
import { NavigationItem, SearchForm, HeritageCard } from '../molecules';
import { HeaderNavigation } from './HeaderNavigation';

export const DesignSystemManual: React.FC = () => {
  return (
    <div className={styles.manualContainer}>
      <header className={styles.header}>
        <div className={styles.superTitle}>BRAD FROST'S METHODOLOGY</div>
        <Typography variant="h1" className={styles.title}>Atomic Design System Manual</Typography>
        <Typography variant="p" className={styles.description}>
          This document outlines the modular hierarchy built for the Pangasinan Heritage Digital Showcase. Each component is
          structured to support accessibility (WCAG 2.1 AA), responsive layouts, and lighting-fast load times on 3G/4G connections.
        </Typography>
      </header>

      <section className={styles.levelSection}>
        <div className={styles.levelHeader}>
          <span className={styles.badge}>Atoms</span>
          <Typography variant="h2" className={styles.levelTitle}>Level 1: Basic Building Blocks</Typography>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Color Tokens</Typography>
          <Typography variant="p" className={styles.groupDesc}>
            Our color palette is curated to match the coastal atmosphere of Pangasinan. Click any card to copy its HEX value.
          </Typography>
          
          <div className={styles.colorGrid}>
            <div className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ backgroundColor: '#0d9488' }}></div>
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>Heritage Teal (Primary)</div>
                <div className={styles.colorHex}>#0d9488</div>
                <div className={styles.colorClass}>bg-teal-600</div>
              </div>
              <div className={styles.colorDesc}>Represents the coastal waters of Alaminos' Hundred Islands and Bolinao.</div>
            </div>

            <div className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ backgroundColor: '#115e59' }}></div>
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>Deep Ocean (Teal Dark)</div>
                <div className={styles.colorHex}>#115e59</div>
                <div className={styles.colorClass}>bg-teal-800</div>
              </div>
              <div className={styles.colorDesc}>Used for dark headings, headers, and emphasis.</div>
            </div>

            <div className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ backgroundColor: '#f0fdfa' }}></div>
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>Sea Foam (Teal Light)</div>
                <div className={styles.colorHex}>#f0fdfa</div>
                <div className={styles.colorClass}>bg-teal-50</div>
              </div>
              <div className={styles.colorDesc}>Background light highlights, active navigation items.</div>
            </div>

            <div className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ backgroundColor: '#f59e0b' }}></div>
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>Sunlit Gold (Secondary)</div>
                <div className={styles.colorHex}>#f59e0b</div>
                <div className={styles.colorClass}>bg-amber-500</div>
              </div>
              <div className={styles.colorDesc}>Represents the sun, sand, and warmth of Pangasinan.</div>
            </div>

            <div className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ backgroundColor: '#b45309' }}></div>
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>Lighthouse Clay</div>
                <div className={styles.colorHex}>#b45309</div>
                <div className={styles.colorClass}>bg-amber-700</div>
              </div>
              <div className={styles.colorDesc}>Action buttons, warnings, and brick-textured badges.</div>
            </div>

            <div className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ backgroundColor: '#0f172a' }}></div>
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>Slate Dark (Charcoal)</div>
                <div className={styles.colorHex}>#0f172a</div>
                <div className={styles.colorClass}>bg-slate-900</div>
              </div>
              <div className={styles.colorDesc}>Primary typography color and dark interfaces.</div>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Interactive Buttons</Typography>
          <Typography variant="p" className={styles.groupDesc}>
            Interactive button states supporting variants, sizes, loading spinners, and disabled states.
          </Typography>
          <div className={styles.demoBox}>
            <div className={styles.buttonGrid}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>Primary Action</button>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>Secondary Action</button>
              <button className={`${styles.btn} ${styles.btnOutline}`}>Outline Border</button>
              <button className={`${styles.btn} ${styles.btnText}`}>Text Button</button>
            </div>
            <div className={styles.buttonGrid} style={{ marginTop: '20px' }}>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}>Small Size</button>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>Medium (Default)</button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>Large Scale</button>
            </div>
            <div className={styles.buttonGrid} style={{ marginTop: '20px' }}>
              <button className={`${styles.btn} ${styles.btnDisabled}`} disabled>
                 Loading State
              </button>
              <button className={`${styles.btn} ${styles.btnDisabled}`} disabled>Disabled State</button>
              <button className={`${styles.btn} ${styles.btnOutline}`}>
                <Icon name="search" size={16} /> With Left Icon
              </button>
              <button className={`${styles.btn} ${styles.btnOutline}`}>
                With Right Icon <Icon name="search" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Aria-Accessible Icons</Typography>
          <Typography variant="p" className={styles.groupDesc}>
            Vector SVG icons with responsive scaling and screen-reader accessibility configs.
          </Typography>
          <div className={styles.demoBox}>
            <div className={styles.iconGrid}>
              {['search', 'map-pin', 'external-link', 'calendar', 'menu', 'close', 'arrow-right', 'arrow-left', 'sun', 'info', 'compass', 'anchor', 'flame'].map(icon => (
                <div key={icon} className={styles.iconItem}>
                  {/* Using standard icon for mocked ones to prevent errors if not all exist in Icon.tsx */}
                  <Icon name={icon as any} size={24} />
                  <span className={styles.iconName}>{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.levelSection}>
        <div className={styles.levelHeader}>
          <span className={styles.badge}>Molecules</span>
          <Typography variant="h2" className={styles.levelTitle}>Level 2: Compound Elements</Typography>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Navigation Item Link</Typography>
          <div className={styles.demoBox}>
             <div className={styles.navDemo}>
               <div>
                 <div className={styles.navLabel}>STANDARD LINK</div>
                 <NavigationItem href="#" label="Bolinao Lighthouse" />
               </div>
               <div>
                 <div className={styles.navLabel}>ACTIVE LINK STATE</div>
                 <NavigationItem href="#" label="Hundred Islands" />
               </div>
             </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Search & Filter Form</Typography>
          <div className={styles.demoBox}>
             <SearchForm />
          </div>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Heritage Media Card</Typography>
          <div className={styles.demoBox}>
            <div style={{ maxWidth: '400px' }}>
              <HeritageCard 
                id="demo"
                title="Hundred Islands National Park"
                description="A protected area located in Alaminos, Pangasinan."
                imageSrc="/Alaminos.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.levelSection}>
        <div className={styles.levelHeader}>
          <span className={styles.badge}>Organisms</span>
          <Typography variant="h2" className={styles.levelTitle}>Level 3: Layout Modules</Typography>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Header Navigation Navbar</Typography>
          <Typography variant="p" className={styles.groupDesc}>
            Combines logo branding, page navigation list, and toggle triggers into a unified navigation bar header. (See top of the current page layout).
          </Typography>
        </div>

        <div className={styles.componentGroup}>
          <Typography variant="h3" className={styles.groupTitle}>Interactive Grid Organizer</Typography>
          <Typography variant="p" className={styles.groupDesc}>
            Houses dynamic state filtering logic, card assembly grids, empty result sets, and modal popup drawers. (Demonstrated on the homepage).
          </Typography>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2026 Pangasinan Provincial Tourism. Brad Frost Atomic Design System Manual.
      </footer>
    </div>
  );
};
