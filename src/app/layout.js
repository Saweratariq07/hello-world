import './globals.css';
import { Poppins, Great_Vibes } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-signature',
  display: 'swap',
});

export const metadata = {
  title: 'Hello World Technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${greatVibes.variable}`}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
