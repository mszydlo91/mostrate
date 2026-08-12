import Link from "next/link";
import { profesional } from "@/lib/templates/profesional";

const { business, footer, nav } = profesional;

export default function Footer() {
  return (
    <footer className="border-t border-[#E6E8F0] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] font-syne text-xs font-extrabold text-[var(--accent-contrast)]">
            {business.initials}
          </span>
          <div>
            <div className="font-syne text-sm font-bold text-[#16182B]">
              {business.name}
            </div>
            <div className="text-xs text-[#5A5F73]">{footer.tagline}</div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#5A5F73] hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#E6E8F0]">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4 sm:px-8">
          <Link
            href="/#templates"
            className="text-xs text-[#9BA0B3] transition-colors hover:text-[var(--accent)]"
          >
            Sitio de demostración · hecho con Mostrate ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
