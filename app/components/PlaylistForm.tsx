import {
  LinkIcon,
  ArrowPathIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type PlaylistFormProps = {
  playlistUrl: string;
  setPlaylistUrl: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => Promise<void>;
  loading: boolean;
};

export default function PlaylistForm({
  playlistUrl,
  setPlaylistUrl,
  handleClick,
  loading,
}: PlaylistFormProps) {
  const onKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleClick();
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
        <SparklesIcon className="h-5 w-5 text-red-400" />
        Paste your YouTube playlist link below
      </div>

      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <LinkIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={playlistUrl}
            onChange={(e) => setPlaylistUrl(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="https://www.youtube.com/playlist?list=..."
            className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/70 pl-12 pr-4 text-sm text-white outline-none ring-0 placeholder:text-slate-500 transition focus:border-red-400/50 focus:bg-slate-900"
          />
        </div>

        <button
          type="button"
          onClick={handleClick}
          disabled={loading}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <ArrowPathIcon className="h-5 w-5 animate-spin" />
              Calculating...
            </>
          ) : (
            "Get Length"
          )}
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-slate-300">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Example
        </span>
        <p className="break-all text-slate-200">
          https://www.youtube.com/playlist?list=PLTxhk835mIdJgdTORxj8xPOkb-ceoue7A
        </p>
      </div>
    </div>
  );
}
