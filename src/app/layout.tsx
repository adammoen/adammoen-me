import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Moen - AI Automation & Content Strategy Expert",
  description: "Building viral content systems and AI-powered automation solutions that scale businesses and transform digital presence.",
  keywords: ["AI automation", "content strategy", "viral content", "business automation", "digital marketing", "Adam Moen"],
  authors: [{ name: "Adam Moen" }],
  creator: "Adam Moen",
  publisher: "Adam Moen",
  metadataBase: new URL('https://adammoen.me'),
  openGraph: {
    title: "Adam Moen - AI Automation & Content Strategy Expert",
    description: "Building viral content systems and AI-powered automation solutions that scale businesses and transform digital presence.",
    url: "https://adammoen.me",
    siteName: "Adam Moen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Moen - AI Automation & Content Strategy Expert",
    description: "Building viral content systems and AI-powered automation solutions that scale businesses and transform digital presence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
