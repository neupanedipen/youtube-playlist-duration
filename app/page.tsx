"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "@/app/components/HeroSection";
import PlaylistForm from "@/app/components/PlaylistForm";
import LoadingCard from "@/app/components/LoadingCard";
import ResultsGrid from "@/app/components/ResultsGrid";
import Footer from "@/app/components/Footer";
import ToolOverviewSection from "./components/ToolOverviewSection";
import HowItWorksSection from "./components/HowItWorks";
import PlaylistDurationFaqSection from "./components/PlaylistDurationFaqSection";

type TimeFormat = {
  hours: number;
  min: number;
  seconds: number;
};

type AllDetails = {
  oneX: TimeFormat;
  onePointTwoFiveX: TimeFormat;
  onePointFiveX: TimeFormat;
  onePointSevenFiveX: TimeFormat;
  twoX: TimeFormat;
  average: TimeFormat;
  noOfVids: number;
};

export default function Page() {
  const [playlistUrl, setPlaylistUrl] = useState<string>("");
  const [allDetails, setAllDetails] = useState<AllDetails | null>(null);
  const [display, setDisplay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const resultsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (display && resultsRef.current) {
      const yOffset = -80;
      const y =
        resultsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [display]);

  const handleClick = async () => {
    if (!playlistUrl) {
      alert("Enter a valid URL");
      return;
    }

    try {
      setAllDetails(null);
      setDisplay(false);
      setLoading(true);

      const response = await fetch("/api/playlist-duration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlistUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to calculate playlist duration.",
        );
      }

      setAllDetails(data);
      setDisplay(true);
      setPlaylistUrl("");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to calculate playlist duration.";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />

        <section className="mx-auto w-full max-w-5xl my-8 rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">
          <PlaylistForm
            playlistUrl={playlistUrl}
            setPlaylistUrl={setPlaylistUrl}
            handleClick={handleClick}
            loading={loading}
          />

          {loading && <LoadingCard />}

          {!loading && display && allDetails && (
            <div ref={resultsRef}>
              <ResultsGrid allDetails={allDetails} />
            </div>
          )}
        </section>
        <section className="mx-auto w-full max-w-5xl my-8 rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="space-y-6">
            <ToolOverviewSection />
            <HowItWorksSection />
            <PlaylistDurationFaqSection />
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
