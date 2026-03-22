import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mt-10 flex justify-center">
      <a
        href="https://github.com/neupanedipen/youtube-playlist-duration"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
      >
        Fork on GitHub
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    </footer>
  );
}
