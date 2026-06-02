import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10">
        <Logo />
        <p className="text-sm text-zinc-500">
          Portfolio ·{" "}
          <span className="font-semibold text-accent">정규리</span> · National Policy Researcher
        </p>
      </div>
    </footer>
  );
}
