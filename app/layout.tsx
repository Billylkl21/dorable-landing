import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SecurityWrapper from '@/components/SecurityWrapper';
import { outfit, playfair } from './fonts';

export const metadata: Metadata = {
  title: 'Dorable - Rencontrez-vous par les lieux',
  description: 'Lutter contre la solitude urbaine par le lien social spontané.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <SecurityWrapper>
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
            <CookieConsent />
          </SmoothScroll>
        </SecurityWrapper>
      </body>
    </html>
  );
}
