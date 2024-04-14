import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDEmpire - #1 Trusted Vendor for Premium Fake IDs",
  description: "Shop for premium fake IDs that feature scannable barcodes, microprint, OVI ink, OVD holograms, laser engraving & more. Available for nearly all states with fast shipping and reliable support. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shop for premium fake IDs with scannable barcodes, microprint, and more. Available for nearly all states with fast shipping and reliable support." />
        <link rel="icon" href="/favicon.ico" />
        <title>IDEmpire - #1 Trusted Vendor for Premium Fake IDs</title>
        <meta property="og:title" content="IDEmpire - #1 Trusted Vendor for Premium Fake IDs" />
        <meta property="og:description" content="Shop for premium fake IDs that feature scannable barcodes, microprint, OVI ink, OVD holograms, laser engraving & more. Available for nearly all states with fast shipping and reliable support." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>a
    </html>
  );
}
