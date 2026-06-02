import { Logo } from "./Logo";
import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:gap-16 md:px-10 md:py-20">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
          {site.tagline}
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          <span className="text-accent">We&apos;re </span>
          <span className="text-zinc-900">{site.hero.black[0]} </span>
          <span className="text-accent">We Research </span>
          <span className="text-zinc-900">{site.hero.black[1]} </span>
          <span className="text-accent">Policy</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-500">{site.hero.subtitle}</p>
        <p className="mt-4 text-2xl font-extrabold text-zinc-900">{site.name}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-sm bg-accent p-10 shadow-lg shadow-accent/20">
          <p className="mb-6 self-start text-3xl font-extrabold text-white">Hey.</p>
          <div className="rounded-full border-4 border-white p-6">
            <Logo showText={false} className="scale-[3] text-white [&_path:first-child]:fill-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
