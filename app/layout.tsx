import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Head from 'next/head'; 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDEmpire",
  description: "#1 Trusted Vendor for Premium Fake IDs",
  openGraph: {
    title: "IDEmpire",
    description: "#1 Trusted Vendor for Premium Fake IDs.",
    images: [
      {
        url: "https://www.idempire.us/og-image.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    url: "https://www.idempire.us",
    type: "website",
    siteName: "IDEmpire",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@idempire",
    title: "IDEmpire",
    description: "#1 Trusted Vendor for Premium Fake IDs.",
    images: ["https://www.idempire.us/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.idempire.us",
    languages: {
      "en-US": "https://idempire.us",
      es: "https://www.IDEmpire.us/es",
    },
  },
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
      </Head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
