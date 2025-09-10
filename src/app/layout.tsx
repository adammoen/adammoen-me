import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  description: "Mental health keynote speaker, creator of Avalochat free mental health app, author of 'Prescribed to Fail', and founder of The Family Operating System and Children's Health Snack Supplement.",
  keywords: ["mental health speaker", "keynote speaker", "Avalochat", "mental health app", "prescribed to fail book", "family operating system", "children health supplement", "Adam Moen"],
  authors: [{ name: "Adam Moen" }],
  creator: "Adam Moen",
  publisher: "Adam Moen",
  metadataBase: new URL('https://adammoen.me'),
  openGraph: {
    title: "Adam Moen - Mental Health Speaker & Entrepreneur", 
    description: "Mental health keynote speaker, creator of Avalochat free mental health app, author of 'Prescribed to Fail', and founder of The Family Operating System and Children's Health Snack Supplement.",
    url: "https://adammoen.me",
    siteName: "Adam Moen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Adam Moen - Mental Health Speaker & Entrepreneur",
    description: "Mental health keynote speaker, creator of Avalochat free mental health app, author of 'Prescribed to Fail', and founder of The Family Operating System and Children's Health Snack Supplement.",
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
        <Analytics />
      </body>
    </html>
  );
}
