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
        url: process.env.NEXT_PUBLIC_BASE_URL + "/og-image.jpg", // Directly use process.env.NEXT_PUBLIC_BASE_URL
        width: 1920,
        height: 1080,
      },
    ],
    url: process.env.NEXT_PUBLIC_BASE_URL, // Directly use process.env.NEXT_PUBLIC_BASE_URL
    type: "website",
    siteName: "IDEmpire",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@idempire",
    title: "IDEmpire",
    description: "#1 Trusted Vendor for Premium Fake IDs.",
    images: [process.env.NEXT_PUBLIC_BASE_URL + "/twitter-image.jpg"], // Directly use process.env.NEXT_PUBLIC_BASE_URL
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL, // Directly use process.env.NEXT_PUBLIC_BASE_URL
    languages: {
      "en-US": process.env.NEXT_PUBLIC_BASE_URL, // Directly use process.env.NEXT_PUBLIC_BASE_URL
      es: process.env.NEXT_PUBLIC_BASE_URL + "/es", // Directly use process.env.NEXT_PUBLIC_BASE_URL
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IDEmpire" />
        <meta property="og:description" content="#1 Trusted Vendor for Premium Fake IDs." />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_BASE_URL + "/og-image.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDEmpire" />
        <meta name="twitter:description" content="#1 Trusted Vendor for Premium Fake IDs." />
        <meta name="twitter:image" content={process.env.NEXT_PUBLIC_BASE_URL + "/twitter-image.jpg"} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
      </Head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>
    </>
  );
}