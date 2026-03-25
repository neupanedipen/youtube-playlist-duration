import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Script from "next/script";
import FloatingBuyMeACoffee from "./components/FloatingBuyMeACoffee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free YouTube Playlist Length Calculator",
  description:
    "Calculate the total duration of any YouTube playlist instantly for free. View watch time at different playback speeds and average video length.",
  keywords: [
    "youtube playlist duration",
    "playlist length calculator",
    "youtube time calculator",
    "video duration tool",
    "playlist watch time",
    "free youtube playlist length calculator",
    "free youtube playlist duration calculator",
    "youtube playlist duration calculator online",
    "calculate youtube playlist length",
    "youtube playlist time calculator",
    "playlist duration calculator free",
    "youtube playlist length tool",
    "youtube playlist duration checker",
    "youtube playlist duration estimator",
    "youtube playlist duration breakdown",
    "youtube playlist duration by speed",
    "youtube playlist average video length",
  ],
  metadataBase: new URL("https://ytplaylistduration.neupanedipendra.com.np/"),

  openGraph: {
    title: "Free YouTube Playlist Length Calculator",
    description:
      "Find total playlist duration, playback speed breakdown, and average video length instantly.",
    url: "https://ytplaylistduration.neupanedipendra.com.np/",
    siteName: "Free YouTube Playlist Length Calculator",
    type: "website",
    images: [
      {
        url: "/ytduration.png",
        width: 1200,
        height: 630,
        alt: "Free YouTube Playlist Length Calculator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Playlist Length Calculator",
    description:
      "Calculate playlist duration and optimize your watch time with speed breakdowns.",
    images: ["/ytduration.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingBuyMeACoffee />
        <GoogleAnalytics gaId="G-4DKFSM84GW" />
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8870933206128492"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
