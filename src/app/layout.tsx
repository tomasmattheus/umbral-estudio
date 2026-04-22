import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.umbralestudiojuridico.com.ar')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${lato.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
