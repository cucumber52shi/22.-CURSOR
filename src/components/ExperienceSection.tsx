import { workExperience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Work Experience</h2>
      <div className="mt-8 space-y-10">
        {workExperience.map((job) => (
          <article key={job.org} className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-extrabold text-zinc-900">{job.org}</h3>
            <p className="mt-1 text-sm font-semibold text-accent">{job.role}</p>
            <p className="mt-1 text-sm text-zinc-500">{job.period}</p>
            <p className="mt-4 leading-relaxed text-zinc-600">{job.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
