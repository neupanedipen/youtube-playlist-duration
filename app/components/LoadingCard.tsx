import { ArrowPathIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function LoadingCard() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
        <ArrowPathIcon className="h-8 w-8 animate-spin text-red-400" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        Calculating playlist duration
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        We are fetching all playlist videos and summing their durations. Large
        playlists may take a little longer.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-xs text-slate-300">
        <ClockIcon className="h-4 w-4" />
        Please keep this tab open while the calculation finishes
      </div>
    </div>
  );
}
