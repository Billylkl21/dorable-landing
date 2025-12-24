import styles from './page.module.css';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import Header from '@/components/Header';
import LifestyleGrid from '@/components/LifestyleGrid';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Mission />
      <div id="lifestyle">
        <LifestyleGrid />
      </div>

      {/* Footer Placeholder */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: '0.9rem',
        marginTop: 'auto',
        borderTop: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>Confidentialité</a>
          <a href="/terms" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>CGU</a>
        </div>
        <p>&copy; 2025 Dorable. Fabriqué avec ❤️ à Paris.</p>
      </footer>
    </main>
  );
}
