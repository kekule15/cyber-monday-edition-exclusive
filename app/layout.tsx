import type {Metadata} from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['500', '700', '800'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CYBER MONDAY | Une Journée. Des Offres Exceptionnelles.',
  description:
    "Le Cyber Monday est arrivé. Découvrez une sélection d'offres pensées pour aujourd'hui, et seulement aujourd'hui.",
  openGraph: {
    title: 'CYBER MONDAY | Le Grand Rendez-Vous Shopping',
    description:
      "Une journée. Des offres exceptionnelles. Découvrez une sélection d'offres pensées pour aujourd'hui, et seulement aujourd'hui.",
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CYBER MONDAY | Le Grand Rendez-Vous Shopping',
    description:
      "Une journée. Des offres exceptionnelles. Découvrez une sélection d'offres pensées pour aujourd'hui, et seulement aujourd'hui.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${syne.variable} ${plusJakarta.variable} dark`}>
      <body
        className="bg-[#0B0B0D] text-[#F5F5F5] font-sans antialiased selection:bg-[#FF6A00] selection:text-black overflow-x-hidden min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
