import {
  BoltIcon,
  ClockIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 backdrop-blur">
        <BoltIcon className="h-4 w-4" />
        Fast, clean and accurate playlist duration calculator
      </div>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        <span className="text-red-500">YouTube</span> Playlist Length
      </h1>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        Paste any public YouTube playlist URL to instantly calculate total watch
        time, average video duration, and duration at different playback speeds.
      </p>

      <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
          <PlayCircleIcon className="mb-3 h-5 w-5 text-red-400" />
          <h3 className="text-sm font-semibold text-white">Playlist based</h3>
          <p className="mt-1 text-sm text-slate-400">
            Works by extracting all videos from the playlist.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
          <ClockIcon className="mb-3 h-5 w-5 text-sky-400" />
          <h3 className="text-sm font-semibold text-white">Speed breakdown</h3>
          <p className="mt-1 text-sm text-slate-400">
            View watch time at 1x, 1.25x, 1.5x, 1.75x and 2x.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
          <BoltIcon className="mb-3 h-5 w-5 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white">Responsive UI</h3>
          <p className="mt-1 text-sm text-slate-400">
            Clean experience across desktop, tablet and mobile.
          </p>
        </div>
      </div>
    </section>
  );
}
