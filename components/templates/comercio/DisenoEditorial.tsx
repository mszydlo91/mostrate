"use client";

/**
 * Comercio — Diseño 1 "Editorial" (base: opción A de Stitch). Catálogo cálido
 * de tienda de diseño: serif grande con itálica de acento, foto del local en
 * el hero, cards de producto con foto y ficha, y pasos de compra.
 */
import Image from "next/image";
import { comercio } from "@/lib/templates/comercio";
import {
  ArrowIcon,
  ClockIcon,
  InstagramIcon,
  MenuIcon,
  PinIcon,
  WhatsAppIcon,
  iconFor,
  mapsHref,
  useMobileMenu,
  waHref,
  waTarget,
} from "./shared";

const { business, announcement, whatsapp, nav, hero, categorias, productos, promo, beneficios, comoComprar, local, footer } =
  comercio;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const wrap = "mx-auto max-w-7xl px-6 md:px-10";
const eyebrow = "mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]";

function Nav() {
  const menu = useMobileMenu();
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[var(--ink)] px-4 py-2 text-center text-[12px] font-medium text-[var(--primary)]">{announcement}</div>
      <div className="border-b border-[var(--line)] bg-[var(--primary-a90)] backdrop-blur-md">
        <div className={`${wrap} flex h-20 items-center justify-between`}>
          <a href="#top" onClick={menu.close} className="flex items-baseline gap-3">
            <span className={`${heading} text-2xl text-[var(--ink)]`}>{business.name}</span>
            <span className="hidden text-[11px] uppercase tracking-[0.16em] text-[var(--ink-a60)] sm:inline">{business.tagline}</span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-wider md:flex">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="text-[var(--ink-a70)] transition-colors hover:text-[var(--accent)]">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={waHref()}
              {...waTarget}
              className="hidden items-center gap-2 rounded bg-[var(--ink)] px-4 py-2.5 text-[13px] font-semibold text-[var(--primary)] transition-opacity hover:opacity-85 sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {nav.cta.label}
            </a>
            <button type="button" onClick={menu.toggle} aria-label={menu.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={menu.open} className="flex h-10 w-10 items-center justify-center text-[var(--ink)] md:hidden">
              <MenuIcon open={menu.open} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {menu.open && (
          <div className="border-t border-[var(--line)] px-6 pb-6 md:hidden">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={menu.close} className={`${heading} block border-b border-[var(--line)] py-4 text-2xl text-[var(--ink)]`}>
                {l.label}
              </a>
            ))}
            <a href={waHref()} {...waTarget} onClick={menu.close} className="mt-5 flex items-center justify-center gap-2 rounded bg-[var(--ink)] py-3.5 text-sm font-semibold text-[var(--primary)]">
              <WhatsAppIcon className="h-4 w-4" /> {nav.cta.label}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-[var(--line)] bg-[var(--primary)] py-16 md:py-24">
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink-a80)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {hero.badge}
          </span>
          <h1 className={`${heading} mb-6 text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.08] tracking-tight text-[var(--ink)]`}>
            {hero.title.before}
            <span className="italic text-[var(--accent)]">{hero.title.highlight}</span>
            {hero.title.after}
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--ink-a70)]">{hero.subtitle}</p>
          <div className="mb-10 flex flex-wrap gap-3">
            <a href={hero.primary.href} className="inline-flex items-center gap-2 rounded bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]">
              {hero.primary.label}
              <ArrowIcon className="h-4 w-4 rotate-90" />
            </a>
            <a href={waHref()} {...waTarget} className="inline-flex items-center gap-2 rounded border border-[var(--ink-a20)] bg-[var(--card)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]">
              <WhatsAppIcon className="h-4 w-4" />
              {hero.secondary.label}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
            {hero.trust.map((t) => {
              const Icon = iconFor[t.icon];
              return (
                <div key={t.title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
                  <span>
                    <span className="block text-sm font-semibold text-[var(--ink)]">{t.title}</span>
                    <span className="text-xs text-[var(--ink-a60)]">{t.desc}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <figure className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
            <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded bg-[var(--card)] px-4 py-3 shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{local.label}</span>
            <span className={`${heading} text-sm text-[var(--ink)]`}>{hero.imageCaption.split("· ")[1]}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <section id="categorias" className="border-b border-[var(--line)] bg-[var(--primary)] py-20 md:py-24">
      <div className={wrap}>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className={eyebrow}>{categorias.label}</span>
            <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] tracking-tight text-[var(--ink)]`}>{categorias.title}</h2>
          </div>
          <p className="max-w-sm text-[var(--ink-a70)]">{categorias.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.items.map((c) => {
            const Icon = iconFor[c.icon];
            return (
              <a key={c.name} href="#productos" className="group flex flex-col items-center rounded-lg border border-[var(--line)] bg-[var(--card-alt)] px-4 py-6 text-center transition-colors hover:border-[var(--accent)]">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--card)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className={`${heading} text-lg text-[var(--ink)]`}>{c.name}</span>
                <span className="mt-0.5 text-xs text-[var(--ink-a60)]">{c.desc}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Productos() {
  return (
    <section id="productos" className="bg-[var(--primary)] py-20 md:py-28">
      <div className={wrap}>
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--line)] pb-6 md:flex-row md:items-end">
          <div>
            <span className={eyebrow}>{productos.label}</span>
            <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] tracking-tight text-[var(--ink)]`}>{productos.title}</h2>
            <p className="mt-2 text-[var(--ink-a70)]">{productos.subtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productos.items.map((p) => (
            <article key={p.name} className="group flex flex-col rounded-lg border border-[var(--line)] bg-[var(--card)] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded">
                <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                {p.tag && (
                  <span className={`absolute left-3 top-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${p.tag === "Oferta" ? "bg-[var(--accent)] text-[var(--accent-contrast)]" : "bg-[var(--ink)] text-[var(--primary)]"}`}>
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-a50)]">{p.category}</span>
                <h3 className={`${heading} mt-1 text-xl text-[var(--ink)]`}>{p.name}</h3>
                <p className="mt-1 flex-1 text-sm text-[var(--ink-a70)]">{p.desc}</p>
                <div className="mt-4 flex items-end justify-between gap-3 border-t border-[var(--line)] pt-4">
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-[var(--ink-a50)]">{productos.priceLabel}</span>
                    <span className={`${heading} text-2xl text-[var(--ink)]`}>{p.price}</span>
                  </span>
                  <a href={waHref(p.name)} {...waTarget} className="inline-flex items-center gap-1.5 rounded border border-[var(--line)] bg-[var(--primary)] px-3 py-2 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    <WhatsAppIcon className="h-4 w-4" />
                    {whatsapp.label}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section className="bg-[var(--primary-alt)] py-16">
      <div className={wrap}>
        <div className="relative overflow-hidden rounded-lg bg-[var(--accent)] px-8 py-12 text-[var(--accent-contrast)] md:px-14">
          <span className="mb-4 inline-block bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">{promo.badge}</span>
          <h2 className={`${heading} mb-3 text-[clamp(2rem,4vw,3.2rem)] leading-tight`}>{promo.title}</h2>
          <p className="mb-8 max-w-xl opacity-90">
            {promo.subtitle.split(promo.code)[0]}
            <span className="mx-1 rounded bg-white px-2 py-0.5 font-mono text-sm font-bold text-[var(--ink)]">{promo.code}</span>
            {promo.subtitle.split(promo.code)[1]}
          </p>
          <a href={waHref(promo.title)} {...waTarget} className="inline-flex items-center gap-2 rounded bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-opacity hover:opacity-90">
            {promo.cta.label} <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section className="bg-[var(--primary-alt)] pb-20">
      <div className={`${wrap} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        {beneficios.items.map((b) => {
          const Icon = iconFor[b.icon];
          return (
            <div key={b.title} className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-6">
              <Icon className="mb-4 h-6 w-6 text-[var(--accent)]" />
              <h3 className={`${heading} text-lg text-[var(--ink)]`}>{b.title}</h3>
              <p className="mt-1 text-sm text-[var(--ink-a70)]">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ComoComprar() {
  return (
    <section id="como-comprar" className="border-y border-[var(--line)] bg-[var(--primary)] py-20 md:py-24">
      <div className={wrap}>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className={eyebrow}>{comoComprar.label}</span>
          <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] tracking-tight text-[var(--ink)]`}>{comoComprar.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {comoComprar.steps.map((s) => (
            <div key={s.num} className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-8">
              <span className={`${heading} text-4xl italic text-[var(--accent)]`}>{s.num}</span>
              <h3 className={`${heading} mt-4 text-xl text-[var(--ink)]`}>{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-a70)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Local() {
  return (
    <section id="local" className="bg-[var(--primary)] py-20 md:py-28">
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={local.image.src} alt={local.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <span className={eyebrow}>{local.label}</span>
          <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] tracking-tight text-[var(--ink)]`}>{local.title}</h2>
          <p className={`${heading} mt-2 text-lg italic text-[var(--ink-a70)]`}>“{local.subtitle}”</p>
          <dl className="mt-8 space-y-5">
            <div className="flex gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
              <div>
                <dt className="text-sm font-semibold text-[var(--ink)]">{local.labels.address}</dt>
                <dd className="text-sm text-[var(--ink-a70)]">{local.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
              <div>
                <dt className="text-sm font-semibold text-[var(--ink)]">{local.labels.hours}</dt>
                <dd className="text-sm text-[var(--ink-a70)]">{local.hours.map((h) => `${h.day} ${h.time}`).join(" · ")}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <InstagramIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
              <div>
                <dt className="text-sm font-semibold text-[var(--ink)]">{local.labels.contact}</dt>
                <dd className="text-sm text-[var(--ink-a70)]">
                  {local.instagram} · <a href={`mailto:${local.email}`} className="hover:text-[var(--accent)]">{local.email}</a>
                </dd>
              </div>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded border border-[var(--ink-a20)] px-5 py-3 text-sm font-semibold text-[var(--ink)] hover:border-[var(--ink)]">
              <PinIcon className="h-4 w-4" /> {local.mapsLabel}
            </a>
            <a href={waHref()} {...waTarget} className="inline-flex items-center gap-2 rounded bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--primary)] hover:opacity-85">
              <WhatsAppIcon className="h-4 w-4" /> {nav.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--primary-alt)]">
      <div className={`${wrap} grid grid-cols-1 gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-6">
          <span className={`${heading} text-3xl text-[var(--ink)]`}>{business.name}</span>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{footer.tagline}</p>
          <p className="mt-4 max-w-sm text-sm text-[var(--ink-a70)]">{footer.description}</p>
        </div>
        <nav className="flex flex-wrap content-start gap-x-8 gap-y-3 text-sm text-[var(--ink-a70)] md:col-span-6 md:justify-end">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--accent)]">{l.label}</a>
          ))}
        </nav>
      </div>
      <p className={`${wrap} border-t border-[var(--line)] py-6 text-xs text-[var(--ink-a50)]`}>
        © {new Date().getFullYear()} {business.name} · {footer.tagline}
      </p>
    </footer>
  );
}

export default function DisenoEditorial() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-[family-name:var(--font-jakarta)] text-[var(--ink)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Categorias />
        <Productos />
        <Promo />
        <Beneficios />
        <ComoComprar />
        <Local />
      </main>
      <Footer />
    </div>
  );
}
