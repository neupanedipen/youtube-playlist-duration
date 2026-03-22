import {
  ClockIcon,
  FilmIcon,
  ForwardIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

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

type ResultsGridProps = {
  allDetails: AllDetails;
};

const formatDisplay = (time: TimeFormat) =>
  `${time.hours}h ${time.min}m ${time.seconds}s`;

export default function ResultsGrid({ allDetails }: ResultsGridProps) {
  const items = [
    {
      title: "Total Duration",
      value: formatDisplay(allDetails.oneX),
      icon: ClockIcon,
      featured: true,
    },
    {
      title: "Number of Videos",
      value: `${allDetails.noOfVids}`,
      icon: FilmIcon,
      featured: false,
    },
    {
      title: "At 1.25×",
      value: formatDisplay(allDetails.onePointTwoFiveX),
      icon: ForwardIcon,
      featured: false,
    },
    {
      title: "At 1.5×",
      value: formatDisplay(allDetails.onePointFiveX),
      icon: ForwardIcon,
      featured: false,
    },
    {
      title: "At 1.75×",
      value: formatDisplay(allDetails.onePointSevenFiveX),
      icon: ForwardIcon,
      featured: false,
    },
    {
      title: "At 2×",
      value: formatDisplay(allDetails.twoX),
      icon: ForwardIcon,
      featured: false,
    },
    {
      title: "Average Per Video",
      value: formatDisplay(allDetails.average),
      icon: ChartBarIcon,
      featured: true,
    },
  ];

  return (
    <section className="mt-8">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Playlist breakdown
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Here is the total watch time and the estimated duration at different
          playback speeds.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`rounded-3xl border p-5 backdrop-blur transition hover:-translate-y-0.5 ${
                item.featured
                  ? "border-red-400/20 bg-red-500/10 shadow-lg shadow-red-950/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>

              <p className="text-sm font-medium text-slate-300">{item.title}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
