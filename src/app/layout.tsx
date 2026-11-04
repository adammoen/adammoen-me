import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "./components/Navigation";
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
  title: "Adam Moen - Mental Health Speaker & Entrepreneur",
  description: "Mental health keynote speaker, creator of Veisund, author of 'Prescribed to Fail', and founder of The Family Operating System.",
  keywords: ["mental health speaker", "keynote speaker", "Veisund", "mental health app", "prescribed to fail book", "family operating system", "children health supplement", "Adam Moen"],
  authors: [{ name: "Adam Moen" }],
  creator: "Adam Moen",
  publisher: "Adam Moen",
  metadataBase: new URL('https://www.adammoen.me'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: "Adam Moen - Mental Health Speaker & Entrepreneur", 
    description: "Mental health keynote speaker, creator of Veisund, author of 'Prescribed to Fail', and founder of The Family Operating System.",
    url: "./",
    siteName: "Adam Moen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Adam Moen - Mental Health Speaker & Entrepreneur",
    description: "Mental health keynote speaker, creator of Veisund, author of 'Prescribed to Fail', and founder of The Family Operating System.",
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
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
