import styles from './page.module.css';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import Header from '@/components/Header';
import LifestyleGrid from '@/components/LifestyleGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

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

      <Footer />
    </main>
  );
}
