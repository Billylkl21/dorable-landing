import styles from '../page.module.css';
import HeroEn from '@/components/en/HeroEn';
import MissionEn from '@/components/en/MissionEn';
import FeaturesEn from '@/components/en/FeaturesEn';
import LifestyleGridEn from '@/components/en/LifestyleGridEn';
import TestimonialsEn from '@/components/en/TestimonialsEn';

export default function HomeEn() {
  return (
    <main className={styles.main}>
      <HeroEn />
      <FeaturesEn />
      <TestimonialsEn />
      <MissionEn />
      <div id="lifestyle">
        <LifestyleGridEn />
      </div>
    </main>
  );
}
