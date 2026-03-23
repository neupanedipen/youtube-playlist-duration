import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTube Playlist Length Calculator",
  description:
    "Calculate the total duration of any YouTube playlist instantly. View watch time at different playback speeds and average video length.",
  keywords: [
    "youtube playlist duration",
    "playlist length calculator",
    "youtube time calculator",
    "video duration tool",
    "playlist watch time",
  ],
  metadataBase: new URL("https://ytplaylistduration.neupanedipendra.com.np/"),

  openGraph: {
    title: "YouTube Playlist Length Calculator",
    description:
      "Find total playlist duration, playback speed breakdown, and average video length instantly.",
    url: "https://ytplaylistduration.neupanedipendra.com.np/",
    siteName: "YouTube Playlist Length",
    type: "website",
    images: [
      {
        url: "/ytduration.png",
        width: 1200,
        height: 630,
        alt: "YouTube Playlist Length Calculator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Playlist Length Calculator",
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
