import Link from "next/link";
import { comercio } from "@/lib/templates/comercio";

const { business, footer, nav } = comercio;

export default function Footer() {
  return (
    <footer className="border-t border-[#E7DECF] bg-[#EFE7DA]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div>
          <div className="font-syne text-lg font-extrabold text-[#2A211A]">
            {business.name}
            <span className="text-[var(--accent)]">.</span>
          </div>
          <div className="text-xs text-[#6E6152]">{footer.tagline}</div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6E6152] hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#E0D6C4]">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4 sm:px-8">
          <Link
            href="/#templates"
            className="text-xs text-[#9C8F7C] transition-colors hover:text-[var(--accent)]"
          >
            Sitio de demostración · hecho con Mostrate ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
