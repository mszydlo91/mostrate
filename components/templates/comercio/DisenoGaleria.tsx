"use client";

/**
 * Comercio — Diseño 3 "Galería" (base: opción C de Stitch). Tienda como sala
 * de exposición: mucho aire, serif liviana, foto del local a todo el ancho,
 * categorías como chips y productos en formato vertical con ficha mínima.
 */
import Image from "next/image";
import { comercio } from "@/lib/templates/comercio";
import { ArrowIcon, MenuIcon, WhatsAppIcon, mapsHref, useMobileMenu, waHref, waTarget } from "./shared";

const { business, announcement, whatsapp, nav, hero, categorias, productos, promo, beneficios, comoComprar, local, footer } =
  comercio;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const wrap = "mx-auto max-w-7xl px-6 sm:px-8 lg:px-12";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.25em]";

function Nav() {
  const menu = useMobileMenu();
  return (
    <>
      <aside className="border-b border-[var(--line)] bg-[var(--primary-alt)] px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ink-a80)]">
        <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {announcement.split(" · ").map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />}
              {t}
            </span>
          ))}
        </span>
      </aside>
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--primary-a90)] backdrop-blur-md">
        <div className={`${wrap} grid h-20 grid-cols-[1fr_auto_1fr] items-center`}>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-[var(--ink-a80)] md:flex">
            {nav.links.slice(0, 2).map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--accent)]">{l.label}</a>
            ))}
          </nav>
          <button type="button" onClick={menu.toggle} aria-label={menu.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={menu.open} className="flex h-10 w-10 items-center justify-center text-[var(--ink)] md:hidden">
            <MenuIcon open={menu.open} className="h-5 w-5" />
          </button>
          <a href="#top" onClick={menu.close} className="text-center">
            <span className={`${heading} block text-2xl font-medium tracking-tight text-[var(--ink)] md:text-3xl`}>{business.name}</span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-[var(--ink-a60)]">{business.tagline}</span>
          </a>
          <div className="flex items-center justify-end gap-8">
            <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-[var(--ink-a80)] lg:flex">
              {nav.links.slice(2).map((l) => (
                <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--accent)]">{l.label}</a>
              ))}
            </nav>
            <a href={waHref()} {...waTarget} aria-label={nav.cta.label} className="inline-flex items-center gap-2 rounded-full border border-[var(--ink-a20)] px-3 py-2 text-xs font-medium tracking-wide text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] sm:px-4">
              <WhatsAppIcon className="h-3.5 w-3.5" /> <span className="hidden sm:inline">{nav.cta.label}</span>
            </a>
          </div>
        </div>
        {menu.open && (
          <div className="border-t border-[var(--line)] px-6 pb-8 pt-4 md:hidden">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={menu.close} className={`${heading} block border-b border-[var(--line)] py-4 text-3xl text-[var(--ink)]`}>{l.label}</a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="pb-20 pt-12 md:pb-28 md:pt-20">
      <div className={wrap}>
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className={`${eyebrow} mb-6 flex items-center gap-2 text-[var(--ink-a60)]`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> {hero.badge}
          </p>
          <h1 className={`${heading} mb-6 text-[clamp(2.6rem,6.5vw,5.2rem)] font-medium leading-[1.04] tracking-tight text-[var(--ink)]`}>
            {hero.title.before}
            <em className="font-normal">{hero.title.highlight}</em>
            {hero.title.after}
          </h1>
          <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--ink-a70)]">{hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={hero.primary.href} className="rounded-full bg-[var(--ink)] px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-[var(--primary)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">
              {hero.primary.label}
            </a>
            <a href={waHref()} {...waTarget} className="rounded-full border border-[var(--ink-a40)] px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-[var(--ink)] transition-colors hover:border-[var(--ink)]">
              {hero.secondary.label}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] pt-8 text-xs text-[var(--ink-a60)]">
            {hero.trust.map((t) => (
              <li key={t.title} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink-a40)]" /> {t.title}
              </li>
            ))}
          </ul>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)] sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-right text-[11px] uppercase tracking-widest text-[var(--ink-a60)]">{hero.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <section id="categorias" className="border-y border-[var(--line)] bg-[var(--primary-alt)] py-16">
      <div className={wrap}>
        <div className="mb-8 flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div>
            <p className={`${eyebrow} text-[var(--ink-a60)]`}>{categorias.label}</p>
            <h2 className={`${heading} mt-1 text-3xl font-medium text-[var(--ink)] sm:text-4xl`}>{categorias.title}</h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--ink-a60)] md:text-right">{categorias.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {categorias.items.map((c) => (
            <a key={c.name} href="#productos" className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--primary)]">
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Productos() {
  return (
    <section id="productos" className="py-24 md:py-32">
      <div className={wrap}>
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className={`${eyebrow} text-[var(--accent)]`}>{productos.label}</p>
          <h2 className={`${heading} mb-4 mt-2 text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium leading-tight text-[var(--ink)]`}>{productos.title}</h2>
          <p className="text-sm text-[var(--ink-a60)]">{productos.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {productos.items.map((p, i) => (
            <article key={p.name} className={`group flex flex-col ${i % 3 === 1 ? "lg:translate-y-12" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[var(--line)]">
                {p.tag && (
                  <span className={`absolute left-4 top-4 z-10 rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${p.tag === "Oferta" ? "bg-[var(--accent)] text-[var(--accent-contrast)]" : "bg-[var(--card)] text-[var(--ink)]"}`}>
                    {p.tag}
                  </span>
                )}
                <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[var(--ink-a50)]">{p.category}</p>
              <div className="mt-1 flex items-baseline justify-between gap-4">
                <h3 className={`${heading} text-2xl font-medium text-[var(--ink)]`}>{p.name}</h3>
                <span className="flex-shrink-0 text-sm font-medium text-[var(--ink)]">{p.price}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--ink-a60)]">{p.desc}</p>
              <a href={waHref(p.name)} {...waTarget} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--card-alt)] px-4 py-3 text-xs font-medium uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">
                <WhatsAppIcon className="h-4 w-4" /> {whatsapp.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--primary-alt)] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-5 inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{promo.badge}</span>
        <h2 className={`${heading} mb-4 text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-tight text-[var(--ink)]`}>{promo.title}</h2>
        <p className="mx-auto mb-8 max-w-xl font-light text-[var(--ink-a70)]">
          {promo.subtitle.split(promo.code)[0]}
          <span className="rounded border border-[var(--line)] bg-[var(--card)] px-2 py-0.5 font-mono font-medium text-[var(--ink)]">{promo.code}</span>
          {promo.subtitle.split(promo.code)[1]}
        </p>
        <a href={waHref(promo.title)} {...waTarget} className="inline-block rounded-full bg-[var(--accent)] px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]">
          {promo.cta.label}
        </a>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section id="como-comprar" className="py-24">
      <div className={wrap}>
        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className={`${eyebrow} text-[var(--accent)]`}>{comoComprar.label}</p>
            <h2 className={`${heading} mt-2 text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-[var(--ink)]`}>{comoComprar.title}</h2>
          </div>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-7">
            {comoComprar.steps.map((s) => (
              <li key={s.num}>
                <span className={`${heading} text-4xl italic text-[var(--accent)]`}>{s.num}</span>
                <h3 className="mt-2 font-medium text-[var(--ink)]">{s.title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-a60)]">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="grid grid-cols-1 gap-10 border-t border-[var(--line)] pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {beneficios.items.map((b, i) => (
            <div key={b.title} className="border-l border-[var(--line)] pl-6">
              <span className="mb-3 block font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
              <h3 className={`${heading} mb-2 text-xl font-medium text-[var(--ink)]`}>{b.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--ink-a60)]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Local() {
  return (
    <section id="local" className="border-t border-[var(--line)] bg-[var(--primary-alt)] py-24">
      <div className={`${wrap} grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <p className={`${eyebrow} text-[var(--accent)]`}>{local.label}</p>
          <h2 className={`${heading} mt-2 text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium leading-tight text-[var(--ink)]`}>{local.title}</h2>
          <p className="mt-4 font-light text-[var(--ink-a70)]">{local.subtitle}</p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className={`${eyebrow} mb-1 text-[var(--ink-a50)]`}>{local.labels.address}</dt>
              <dd className="text-[var(--ink)]">{local.address}</dd>
            </div>
            <div>
              <dt className={`${eyebrow} mb-1 text-[var(--ink-a50)]`}>{local.labels.hours}</dt>
              {local.hours.map((h) => (
                <dd key={h.day} className="flex justify-between border-b border-[var(--line)] py-1.5 text-[var(--ink)]">
                  <span>{h.day}</span> <span className="text-[var(--ink-a70)]">{h.time}</span>
                </dd>
              ))}
            </div>
            <div>
              <dt className={`${eyebrow} mb-1 text-[var(--ink-a50)]`}>{local.labels.contact}</dt>
              <dd className="text-[var(--ink)]">{local.instagram} · {local.email}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-xs font-medium uppercase tracking-widest text-[var(--primary)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">
              {local.mapsLabel} <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
            </a>
            <a href={waHref()} {...waTarget} className="inline-flex items-center gap-2 rounded-full border border-[var(--ink-a40)] px-6 py-3 text-xs font-medium uppercase tracking-widest text-[var(--ink)] transition-colors hover:border-[var(--ink)]">
              <WhatsAppIcon className="h-3.5 w-3.5" /> {nav.cta.label}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--line)] lg:col-span-7 lg:aspect-[5/4]">
          <Image src={local.image.src} alt={local.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--primary)]">
      <div className={`${wrap} py-16 text-center`}>
        <p className={`${heading} text-4xl font-medium md:text-5xl`}>{business.name}</p>
        <p className="mx-auto mt-4 max-w-md text-sm opacity-70">{footer.description}</p>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-70 transition-opacity hover:opacity-100">{l.label}</a>
          ))}
        </nav>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-[11px] uppercase tracking-widest opacity-50">
        © {new Date().getFullYear()} {business.name} · {footer.tagline}
      </p>
    </footer>
  );
}

export default function DisenoGaleria() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-[family-name:var(--font-jakarta)] text-[var(--ink)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Categorias />
        <Productos />
        <Promo />
        <Beneficios />
        <Local />
      </main>
      <Footer />
    </div>
  );
}
