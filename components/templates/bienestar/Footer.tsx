import Link from "next/link";
import { bienestar } from "@/lib/templates/bienestar";

const { business, footer, nav } = bienestar;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div>
          <div className="font-[family-name:var(--tpl-font-heading)] text-sm font-extrabold uppercase tracking-tight text-[#F5F5F5]">
            {business.name}
          </div>
          <div className="mt-0.5 text-xs text-[#F5F5F5]/40">{footer.tagline}</div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.06em] text-[#F5F5F5]/45 hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4 sm:px-8">
          <Link href="/#templates" className="text-xs text-[#F5F5F5]/30 transition-colors hover:text-[var(--accent)]">
            Sitio de demostración · hecho con Mostrate ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
