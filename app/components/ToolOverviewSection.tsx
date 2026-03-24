import {
  ClockIcon,
  PlayIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    title: "Calculate YouTube playlist duration instantly",
    description:
      "Use this YouTube playlist duration calculator to find the total length of any public playlist in seconds, minutes, and hours. It is useful for tutorials, music playlists, lecture series, podcasts, and online courses.",
    icon: ClockIcon,
  },
  {
    title: "Check playlist time at different playback speeds",
    description:
      "See how long a playlist takes at 1x, 1.25x, 1.5x, 1.75x, and 2x speed. This helps you estimate your real watch time and plan study sessions or binge watching more efficiently.",
    icon: PlayIcon,
  },
  {
    title: "Track total videos and average video length",
    description:
      "Along with the total playlist watch time, the tool also helps you understand playlist size, total number of videos, and average duration across the playlist.",
    icon: ListBulletIcon,
  },
];

export default function ToolOverviewSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          YouTube Playlist Duration Calculator
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          This free YouTube playlist duration calculator helps you calculate the
          total duration of any YouTube playlist in one place. Paste a playlist
          URL to instantly find the full playlist length, total watch time,
          number of videos, and estimated duration at different playback speeds.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
          Whether you want to calculate YouTube playlist time for a study
          course, tutorial series, music queue, podcast list, or lecture
          collection, this tool makes it easy to estimate how long the playlist
          will take to finish.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5 text-red-300" />
              </div>

              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
