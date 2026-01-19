import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Velvet Boutique - Premium Ladies' Denim",
  description: 'Shop exclusive ladies denim from top brands: VVIP, 7FAMK, DOJO JEANS, and KIMES. Premium quality, perfect fit.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1 container-max py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
