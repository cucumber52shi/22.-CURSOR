import { site } from "@/data/portfolio";

export function ProfileSection() {
  return (
    <section id="profile" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Profile</h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">{site.profile}</p>
    </section>
  );
}
