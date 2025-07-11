import Header from '@/components/Header/Header';
import './globals.scss';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'My App',
  description: 'My cool app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
