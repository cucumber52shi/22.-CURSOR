import { skills } from "@/data/portfolio";
import { StarRating } from "./StarRating";

export function SkillsSection() {
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, (typeof skills)[number][]>
  );

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Skills</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-4 text-lg font-extrabold text-zinc-900">{category}</h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between border-b border-zinc-100 pb-3"
                >
                  <span className="font-medium text-zinc-700">{skill.name}</span>
                  <StarRating level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
