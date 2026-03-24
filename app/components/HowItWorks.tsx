const steps = [
  {
    title: "Paste a YouTube playlist URL",
    description:
      "Enter the link to any public YouTube playlist you want to analyze.",
  },
  {
    title: "Calculate total playlist watch time",
    description:
      "The tool processes all available videos in the playlist and computes the full duration.",
  },
  {
    title: "View playback-speed estimates",
    description:
      "Check how long the playlist takes at 1x, 1.25x, 1.5x, 1.75x, and 2x speed.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          How this YouTube playlist time calculator works
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          This tool is designed to help users calculate playlist duration
          quickly and accurately. Instead of manually adding video lengths one
          by one, you can use the playlist URL to get the total duration of a
          YouTube playlist instantly.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10 text-sm font-semibold text-red-200">
              {index + 1}
            </div>
            <h3 className="text-base font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <h3 className="text-lg font-semibold text-white">
          Why people use a playlist length calculator
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
          A playlist length calculator is useful for students following long
          course playlists, professionals reviewing educational content, and
          viewers who want to plan their time before starting a large video
          series. It is also helpful when you want to know how long a YouTube
          playlist is before watching it at normal or faster speeds.
        </p>
      </div>
    </section>
  );
}
