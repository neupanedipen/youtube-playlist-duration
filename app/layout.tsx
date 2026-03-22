import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  authors: [{ name: "Dipendra Neupane" }],
  creator: "Dipendra Neupane",
  metadataBase: new URL("https://ytplaylistduration.neupanedipendra.com.np/"),

  openGraph: {
    title: "YouTube Playlist Length Calculator",
    description:
      "Find total playlist duration, playback speed breakdown, and average video length instantly.",
    url: "https://ytplaylistduration.neupanedipendra.com.np/",
    siteName: "YouTube Playlist Length",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Playlist Length Calculator",
    description:
      "Calculate playlist duration and optimize your watch time with speed breakdowns.",
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
