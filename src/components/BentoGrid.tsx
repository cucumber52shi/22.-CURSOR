import { educations, languages, skills, workExperience } from "@/data/portfolio";
import { StarRating } from "./StarRating";

const tileColors = {
  orange: "bg-tile-orange",
  sky: "bg-tile-sky",
  teal: "bg-tile-teal",
  slate: "bg-tile-slate",
  gray: "bg-tile-gray",
  coral: "bg-tile-coral",
} as const;

export function BentoGrid() {
  const [exp0, exp1, exp2] = workExperience;
  const topSkills = skills.filter((s) => s.category === "컴퓨터기술").slice(0, 4);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[minmax(120px,auto)]">
        {/* Top left - first job */}
        <article
          className={`col-span-2 row-span-1 flex flex-col justify-between rounded-sm p-6 text-white md:col-span-1 ${tileColors[exp0.color]}`}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider opacity-80">Experience</p>
            <h3 className="mt-2 text-lg font-extrabold leading-tight">{exp0.org}</h3>
            <p className="mt-1 text-sm font-medium opacity-90">{exp0.role}</p>
          </div>
          <p className="mt-4 text-xs leading-relaxed opacity-90 line-clamp-3">{exp0.summary}</p>
        </article>

        {/* Center tall - GIS focus */}
        <article
          className={`col-span-2 row-span-2 flex flex-col items-center justify-center rounded-sm p-8 text-white md:col-span-1 md:row-span-2 ${tileColors.teal}`}
        >
          <div className="text-center">
            <svg
              className="mx-auto mb-4 h-16 w-16"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden
            >
              <circle cx="32" cy="28" r="14" />
              <path d="M20 44c4 8 20 8 24 0" strokeLinecap="round" />
              <path d="M32 14v-4M32 42v6M18 28h-4M46 28h4" strokeLinecap="round" />
            </svg>
            <p className="text-4xl font-extrabold">GIS</p>
            <p className="mt-2 text-sm font-semibold opacity-90">Spatial Analysis</p>
          </div>
        </article>

        {/* Top right - education badge */}
        <article
          className={`col-span-2 flex flex-col items-center justify-center rounded-sm p-6 md:col-span-1 ${tileColors.gray}`}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900 text-center">
            <p className="px-2 text-[10px] font-extrabold uppercase leading-tight tracking-wide text-white">
              Urban
              <br />
              Policy
            </p>
          </div>
          <p className="mt-3 text-center text-xs font-bold text-zinc-600">{educations[0].university}</p>
        </article>

        {/* Bottom left - second job */}
        <article
          className={`col-span-1 flex flex-col justify-between rounded-sm p-5 text-zinc-800 ${tileColors[exp1.color]}`}
        >
          <div>
            <h3 className="text-sm font-extrabold leading-tight">{exp1.org}</h3>
            <p className="mt-1 text-xs font-medium opacity-80">{exp1.role}</p>
          </div>
        </article>

        {/* Coral - skills shout */}
        <article
          className={`col-span-1 flex flex-col justify-center rounded-sm p-5 text-white ${tileColors.coral}`}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Tools</p>
          <p className="mt-1 text-2xl font-black leading-none tracking-tighter">
            {topSkills.map((s) => s.name.slice(0, 3)).join(" ")}
          </p>
        </article>

        {/* Bottom center - languages / mood tile style */}
        <article
          className={`col-span-2 flex items-center justify-around rounded-sm px-4 py-6 text-white md:col-span-2 ${tileColors.slate}`}
        >
          {languages.map((lang) => (
            <div key={lang.language} className="text-center">
              <p className="text-xs font-bold uppercase opacity-70">{lang.language}</p>
              <StarRating level={lang.level} />
            </div>
          ))}
        </article>

        {/* Third job - spans on mobile */}
        <article
          className={`col-span-2 flex flex-col justify-between rounded-sm p-6 text-white md:col-span-1 ${tileColors[exp2.color]}`}
        >
          <div>
            <h3 className="text-base font-extrabold">{exp2.org}</h3>
            <p className="mt-1 text-sm opacity-90">{exp2.role}</p>
            <p className="mt-1 text-xs opacity-75">{exp2.period}</p>
          </div>
          <p className="mt-3 text-xs leading-relaxed opacity-90">{exp2.summary}</p>
        </article>
      </div>
    </section>
  );
}
