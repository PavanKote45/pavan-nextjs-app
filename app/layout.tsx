import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'My frontend Journey by Pavan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-red-900">{children}</body>
    </html>
  );
}