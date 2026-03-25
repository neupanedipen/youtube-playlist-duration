import {
  TableCellsIcon,
  PhotoIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function OtherToolsSection() {
  return (
    <section className="mx-auto w-full max-w-5xl my-8">
      <h2 className="mb-6 text-center text-xl font-bold tracking-tight text-white sm:text-2xl">
        Explore <span className="text-red-500">Other Tools</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href="https://ytplaylistexport.neupanedipendra.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-red-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 ring-1 ring-inset ring-red-500/20">
              <TableCellsIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              YouTube Playlist Export
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Export your entire YouTube playlists instantly. Save detailed video data to CSV, Excel, or JSON formats effortlessly.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-400 opacity-80 transition-all group-hover:translate-x-1 group-hover:opacity-100">
            Try it out <ArrowRightIcon className="h-4 w-4" />
          </div>
        </a>

        <a
          href="https://ytthumbpreview.neupanedipendra.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-sky-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-sky-500/10"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/20">
              <PhotoIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              YouTube Thumbnail Preview
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Preview your YouTube titles and thumbnails exactly as they will appear across all devices before publishing.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-400 opacity-80 transition-all group-hover:translate-x-1 group-hover:opacity-100">
            Try it out <ArrowRightIcon className="h-4 w-4" />
          </div>
        </a>
      </div>
    </section>
  );
}
