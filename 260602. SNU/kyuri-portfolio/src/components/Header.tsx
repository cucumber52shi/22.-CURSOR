"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { navItems } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <Logo />
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="flex flex-col items-end gap-1.5 p-2 text-zinc-500 hover:text-zinc-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-7 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
        <nav className="hidden gap-8 md:flex" aria-label="주요 섹션">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-semibold text-zinc-500 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="border-t border-zinc-100 px-6 py-4 md:hidden" aria-label="모바일 메뉴">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-1 text-base font-semibold text-zinc-700 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
