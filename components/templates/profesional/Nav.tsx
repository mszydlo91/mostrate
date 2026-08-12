"use client";

import { useState } from "react";
import { profesional } from "@/lib/templates/profesional";

const { business, nav } = profesional;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-[#E6E8F0] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] font-syne text-sm font-extrabold text-[var(--accent-contrast)]">
            {business.initials}
          </span>
          <span className="font-syne text-lg font-bold tracking-[-0.02em] text-[#16182B]">
            {business.name}
          </span>
        </a>

        {/* Links desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5A5F73] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
          >
            {nav.cta.label}
          </a>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded bg-[#16182B] transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-[#16182B] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-[#16182B] transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Panel mobile */}
      <div
        className={`overflow-hidden border-t border-[#E6E8F0] transition-all md:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#16182B] hover:bg-[var(--accent-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-[var(--accent)] px-3 py-2.5 text-center text-sm font-semibold text-[var(--accent-contrast)]"
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
