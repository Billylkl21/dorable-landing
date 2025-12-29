import styles from './page.module.css';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import LifestyleGrid from '@/components/LifestyleGrid';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <Testimonials />
      <Mission />
      <div id="lifestyle">
        <LifestyleGrid />
      </div>
    </main>
  );
}
