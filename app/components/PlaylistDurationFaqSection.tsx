const faqs = [
  {
    question: "What is a YouTube playlist duration calculator?",
    answer:
      "A YouTube playlist duration calculator is a tool that calculates the total length of all videos inside a playlist. It helps you find the full watch time of a playlist without manually adding the duration of each video.",
  },
  {
    question: "Can I calculate YouTube playlist duration at different speeds?",
    answer:
      "Yes. This tool shows estimated playlist duration at multiple playback speeds, including 1x, 1.25x, 1.5x, 1.75x, and 2x. This helps you estimate actual viewing time based on how you watch videos.",
  },
  {
    question: "How do I find the total duration of a YouTube playlist?",
    answer:
      "Paste the playlist URL into the calculator and the tool will estimate the total playlist duration, video count, and playback-speed based watch times.",
  },
  {
    question: "Who is this playlist time calculator useful for?",
    answer:
      "This tool is useful for students, online learners, researchers, creators, and regular YouTube viewers who want to calculate playlist watch time before starting a playlist.",
  },
  {
    question: "Does this work for study playlists and course playlists?",
    answer:
      "Yes. It works especially well for tutorial playlists, programming courses, recorded lectures, interview playlists, and educational content where knowing the total duration matters.",
  },
];

export default function PlaylistDurationFaqSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Common questions about calculating YouTube playlist duration, total
          watch time, and playback-speed estimates.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <h3 className="text-base font-semibold text-white">
              {faq.question}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
