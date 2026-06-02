import { educations, languages } from "@/data/portfolio";
import { StarRating } from "./StarRating";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Education</h2>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <th className="pb-3 pr-4">Degree</th>
              <th className="pb-3 pr-4">University</th>
              <th className="pb-3 pr-4">Major</th>
              <th className="pb-3">Period</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((edu) => (
              <tr key={edu.university + edu.degree} className="border-b border-zinc-100">
                <td className="py-4 pr-4 font-semibold text-zinc-800">{edu.degree}</td>
                <td className="py-4 pr-4 text-zinc-700">{edu.university}</td>
                <td className="py-4 pr-4 text-zinc-600">{edu.major}</td>
                <td className="py-4 text-zinc-500">{edu.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-sm font-bold uppercase tracking-widest text-accent">Languages</h2>
      <ul className="mt-6 flex flex-wrap gap-8">
        {languages.map((lang) => (
          <li key={lang.language}>
            <p className="font-extrabold text-zinc-900">{lang.language}</p>
            <StarRating level={lang.level} />
          </li>
        ))}
      </ul>
    </section>
  );
}
