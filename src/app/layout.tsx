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
  title: "Adam Moen - Mental Health Speaker & Entrepreneur",
  description: "Mental health keynote speaker, creator of AvaLoChat free mental health app, author of 'Broken', and founder of The Family Operating System and IGF One children's nutrition.",
  keywords: ["mental health speaker", "keynote speaker", "AvaLoChat", "mental health app", "broken book", "family operating system", "IGF One", "children nutrition", "Adam Moen"],
  authors: [{ name: "Adam Moen" }],
  creator: "Adam Moen",
  publisher: "Adam Moen",
  metadataBase: new URL('https://adammoen.me'),
  openGraph: {
    title: "Adam Moen - Mental Health Speaker & Entrepreneur", 
    description: "Mental health keynote speaker, creator of AvaLoChat free mental health app, author of 'Broken', and founder of The Family Operating System and IGF One children's nutrition.",
    url: "https://adammoen.me",
    siteName: "Adam Moen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Adam Moen - Mental Health Speaker & Entrepreneur",
    description: "Mental health keynote speaker, creator of AvaLoChat free mental health app, author of 'Broken', and founder of The Family Operating System and IGF One children's nutrition.",
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
