"use client";

/**
 * Comercio — Diseño 2 "Pop" (base: opción B de Stitch). Concept store
 * enérgico: bordes gruesos en tinta, sombras sólidas desplazadas, stickers,
 * grotesca pesada con itálica serif de acento y botones verdes de WhatsApp.
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

const { business, announcement, whatsapp, nav, hero, categorias, productos, promo, beneficios, comunidad, local, footer } =
  comercio;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const serif = "font-[family-name:var(--font-instrument)]";
const wrap = "mx-auto max-w-7xl px-5 md:px-8";
const pop = "border-2 border-[var(--ink)] shadow-[4px_4px_0_0_var(--ink)]";
const popHover = "transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--ink)]";
// Colores "sticker" fijos del diseño (no dependen del tema).
const MUSTARD = "bg-[#F3B749]";
const BLUSH = "bg-[#F7D6C8]";
const WA = "bg-[#25D366] hover:bg-[#20BA59]";
const tileTones = [BLUSH, MUSTARD, "bg-[var(--accent-soft)]", "bg-[#D9F2E3]", "bg-[var(--card-alt)]", "bg-[#FBE7C6]"];

function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border-2 border-[var(--ink)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide ${className}`}>
      {children}
    </span>
  );
}

function Nav() {
  const menu = useMobileMenu();
  const items = announcement.split(" · ");
  return (
    <header className="sticky top-0 z-50">
      <div className="overflow-hidden border-b-2 border-[var(--ink)] bg-[var(--ink)] py-2 text-[12px] font-bold uppercase tracking-wide text-[var(--primary)]">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 motion-reduce:animate-none">
          {[...items, ...items, ...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              {t} <span className="text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="border-b-2 border-[var(--ink)] bg-[var(--primary)]">
        <div className={`${wrap} flex h-[72px] items-center justify-between`}>
          <a href="#top" onClick={menu.close} className="group flex items-center gap-3">
            <span className={`${heading} flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-2xl font-extrabold text-[var(--accent-contrast)] ${pop}`}>
              {business.name[0]}
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`${heading} text-lg font-extrabold uppercase text-[var(--ink)]`}>{business.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">{business.tagline}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="text-[var(--ink)] underline-offset-4 hover:underline">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={waHref()} {...waTarget} className={`hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold text-[var(--ink)] sm:inline-flex ${WA} ${pop} ${popHover}`}>
              <WhatsAppIcon className="h-4 w-4" /> {nav.cta.label}
            </a>
            <button type="button" onClick={menu.toggle} aria-label={menu.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={menu.open} className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--card)] text-[var(--ink)] md:hidden ${pop}`}>
              <MenuIcon open={menu.open} className="h-5 w-5" />
            </button>
          </div>
        </div>
        {menu.open && (
          <div className="border-t-2 border-[var(--ink)] px-5 pb-6 pt-2 md:hidden">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={menu.close} className={`${heading} block py-3 text-3xl font-extrabold text-[var(--ink)]`}>{l.label}</a>
            ))}
            <a href={waHref()} {...waTarget} onClick={menu.close} className={`mt-4 flex items-center justify-center gap-2 rounded-full py-3.5 font-extrabold text-[var(--ink)] ${WA} ${pop}`}>
              <WhatsAppIcon className="h-5 w-5" /> {nav.cta.label}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b-2 border-[var(--ink)] bg-[var(--primary)] py-14 md:py-20">
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
        <div className="relative">
          <span className={`absolute -left-2 -top-10 hidden h-20 w-20 rotate-[-12deg] flex-col items-center justify-center rounded-full text-center text-[10px] font-extrabold uppercase leading-tight text-[var(--ink)] sm:flex ${MUSTARD} ${pop} px-2`}>
            {hero.sticker}
          </span>
          <div className="mb-6 flex flex-wrap gap-2 sm:pl-20">
            <Chip className="bg-[var(--accent)] text-[var(--accent-contrast)]">{hero.badge}</Chip>
          </div>
          <h1 className={`${heading} mb-6 text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--ink)]`}>
            {hero.title.before}
            <span className={`${serif} relative inline-block font-normal italic text-[var(--accent)]`}>
              {hero.title.highlight}
              <span aria-hidden className="absolute -bottom-1 left-0 h-2 w-full -skew-x-12 bg-[var(--accent)] opacity-25" />
            </span>
            {hero.title.after}
          </h1>
          <p className="mb-8 max-w-lg text-lg text-[var(--ink-a80)]">{hero.subtitle}</p>
          <div className="mb-10 flex flex-wrap gap-4">
            <a href={hero.primary.href} className={`inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 font-extrabold text-[var(--accent-contrast)] ${pop} ${popHover}`}>
              {hero.primary.label} <ArrowIcon className="h-4 w-4 rotate-90" />
            </a>
            <a href={waHref()} {...waTarget} className={`inline-flex items-center gap-2 rounded-full bg-[var(--card)] px-7 py-3.5 font-extrabold text-[var(--ink)] ${pop} ${popHover}`}>
              {hero.secondary.label} <span className="h-2 w-2 rounded-full bg-[#25D366]" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {hero.trust.map((t, i) => {
              const Icon = iconFor[t.icon];
              return (
                <span key={t.title} className="flex items-center gap-2.5 rounded-2xl border-2 border-[var(--ink)] bg-[var(--card)] px-3 py-2">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg border-2 border-[var(--ink)] ${[BLUSH, MUSTARD, "bg-[var(--card-alt)]"][i]}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-extrabold text-[var(--ink)]">{t.title}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className={`relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-[var(--ink)] p-3 ${pop} shadow-[8px_8px_0_0_var(--ink)]`}>
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
              <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
          <span className={`absolute -bottom-5 left-6 rotate-[-4deg] rounded-2xl px-4 py-2 text-sm font-extrabold text-[var(--ink)] ${MUSTARD} ${pop}`}>
            {hero.imageCaption.split(",")[0]}
          </span>
        </div>
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <section id="categorias" className="border-b-2 border-[var(--ink)] bg-[var(--primary-alt)] py-16 md:py-20">
      <div className={wrap}>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Chip className="mb-3 bg-[var(--card)] text-[var(--ink)]">{categorias.label}</Chip>
            <h2 className={`${heading} text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{categorias.title}</h2>
          </div>
          <p className="max-w-sm text-[var(--ink-a70)]">{categorias.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.items.map((c, i) => {
            const Icon = iconFor[c.icon];
            return (
              <a key={c.name} href="#productos" className={`group flex flex-col items-center rounded-3xl bg-[var(--card)] p-5 text-center ${pop} transition-all hover:-translate-y-1`}>
                <span className={`mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[var(--ink)] transition-transform group-hover:rotate-6 ${tileTones[i % tileTones.length]}`}>
                  <Icon className="h-7 w-7 text-[var(--ink)]" />
                </span>
                <span className="font-extrabold text-[var(--ink)]">{c.name}</span>
                <span className="text-xs text-[var(--ink-a60)]">{c.desc}</span>
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
    <section id="productos" className="border-b-2 border-[var(--ink)] bg-[var(--primary)] py-16 md:py-24">
      <div className={wrap}>
        <Chip className="mb-3 bg-[var(--accent)] text-[var(--accent-contrast)]">{productos.label}</Chip>
        <h2 className={`${heading} text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{productos.title}</h2>
        <p className="mb-10 mt-3 inline-block rounded-2xl border-2 border-[var(--ink)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink-a80)]">{productos.subtitle}</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productos.items.map((p) => (
            <article key={p.name} className={`group flex flex-col overflow-hidden rounded-[1.75rem] bg-[var(--card)] ${pop} transition-all hover:-translate-y-1`}>
              <div className="relative aspect-[4/3] border-b-2 border-[var(--ink)]">
                <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                {p.tag && (
                  <Chip className={`absolute left-4 top-4 ${p.tag === "Oferta" ? "bg-[#D9F2E3]" : "bg-[var(--accent)] text-[var(--accent-contrast)]"}`}>{p.tag}</Chip>
                )}
                <span className="absolute bottom-3 right-3 rounded-full border-2 border-[var(--ink)] bg-[var(--card)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--ink)]">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className={`${heading} text-xl font-extrabold text-[var(--ink)]`}>{p.name}</h3>
                <p className="mt-1 flex-1 text-sm text-[var(--ink-a70)]">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className={`${heading} text-2xl font-extrabold text-[var(--ink)]`}>{p.price}</span>
                  <a href={waHref(p.name)} {...waTarget} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold text-[var(--ink)] ${WA} border-2 border-[var(--ink)] shadow-[3px_3px_0_0_var(--ink)] ${popHover}`}>
                    <WhatsAppIcon className="h-4 w-4" /> {whatsapp.label}
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

// Título partido en "20% OFF" + resto en itálica; el código se resalta dentro del texto.
const [promoHead, promoTail] = [promo.title.slice(0, promo.title.indexOf(" en ")), promo.title.slice(promo.title.indexOf(" en ") + 1)];
const [promoBefore, promoAfter] = promo.subtitle.split(promo.code);

function Promo() {
  return (
    <section className="border-b-2 border-[var(--ink)] bg-[var(--accent)] py-14">
      <div className={wrap}>
        <div className={`flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[var(--ink)] p-8 text-[var(--primary)] md:flex-row md:items-center md:p-12 ${pop}`}>
          <div>
            <Chip className={`mb-4 text-[var(--ink)] ${MUSTARD}`}>{promo.badge}</Chip>
            <h2 className={`${heading} text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-none`}>
              {promoHead} <span className={`${serif} font-normal italic text-[var(--accent)]`}>{promoTail}</span>
            </h2>
            <p className="mt-4 opacity-80">
              {promoBefore}
              <span className="mx-1 rounded-md bg-[var(--accent)] px-2 py-0.5 font-mono font-bold text-[var(--accent-contrast)]">{promo.code}</span>
              {promoAfter}
            </p>
          </div>
          <a href={waHref(promo.title)} {...waTarget} className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full px-8 py-4 text-lg font-extrabold text-[var(--ink)] ${MUSTARD} border-2 border-[var(--ink)] shadow-[4px_4px_0_0_var(--accent)] transition-all hover:translate-x-0.5 hover:translate-y-0.5`}>
            {promo.cta.label} <ArrowIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section id="como-comprar" className="border-b-2 border-[var(--ink)] bg-[var(--primary-alt)] py-16 md:py-20">
      <div className={wrap}>
        <div className="mb-10 text-center">
          <Chip className="mb-3 bg-[var(--card)] text-[var(--ink)]">{beneficios.label}</Chip>
          <h2 className={`${heading} text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{beneficios.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.items.map((b, i) => {
            const Icon = iconFor[b.icon];
            return (
              <div key={b.title} className={`rounded-[1.75rem] bg-[var(--card)] p-7 ${pop}`}>
                <span className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[var(--ink)] ${tileTones[i]}`}>
                  <Icon className="h-6 w-6 text-[var(--ink)]" />
                </span>
                <h3 className="text-lg font-extrabold text-[var(--ink)]">{b.title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-a70)]">{b.desc}</p>
                <span className="mt-4 block text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent)]">Paso 0{i + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Local() {
  return (
    <section id="local" className="border-b-2 border-[var(--ink)] bg-[var(--primary)] py-16 md:py-24">
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
        <div>
          <Chip className={`mb-3 text-[var(--ink)] ${MUSTARD}`}>{local.label}</Chip>
          <h2 className={`${heading} text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{local.title}</h2>
          <p className={`${serif} mt-2 text-2xl italic text-[var(--ink-a80)]`}>“{local.subtitle}”</p>
          <div className="mt-8 space-y-4">
            {[
              { icon: PinIcon, title: local.labels.address, body: local.address, tone: "bg-[var(--accent)] text-[var(--accent-contrast)]" },
              { icon: ClockIcon, title: local.labels.hours, body: local.hours.map((h) => `${h.day}: ${h.time}`).join(" · "), tone: MUSTARD },
              { icon: InstagramIcon, title: local.labels.contact, body: `${local.instagram} · ${local.email}`, tone: BLUSH },
            ].map((row) => (
              <div key={row.title} className={`flex items-start gap-4 rounded-2xl bg-[var(--card)] p-4 ${pop}`}>
                <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border-2 border-[var(--ink)] ${row.tone}`}>
                  <row.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-extrabold text-[var(--ink)]">{row.title}</span>
                  <span className="text-sm text-[var(--ink-a70)]">{row.body}</span>
                </span>
              </div>
            ))}
          </div>
          <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={`mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-extrabold text-[var(--primary)] ${pop}`}>
            {local.mapsLabel} <ArrowIcon className="h-4 w-4 -rotate-45" />
          </a>
        </div>
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${pop} shadow-[8px_8px_0_0_var(--ink)]`}>
          <Image src={local.image.src} alt={local.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function Comunidad() {
  return (
    <section className="bg-[var(--primary-alt)] py-16">
      <div className={wrap}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className={`${heading} text-3xl font-extrabold text-[var(--ink)]`}>{comunidad.title}</h2>
            <p className="text-sm text-[var(--ink-a70)]">{comunidad.subtitle}</p>
          </div>
          <span className="inline-flex items-center gap-2 font-extrabold text-[var(--accent)]">
            <InstagramIcon className="h-5 w-5" /> {local.instagram}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {comunidad.images.map((img) => (
            <div key={img.src} className={`relative aspect-square overflow-hidden rounded-2xl border-2 border-[var(--ink)] shadow-[3px_3px_0_0_var(--ink)]`}>
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--primary)]">
      <div className={`${wrap} grid grid-cols-1 gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-6">
          <span className="flex items-center gap-3">
            <span className={`${heading} flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-xl font-extrabold text-[var(--accent-contrast)]`}>{business.name[0]}</span>
            <span className={`${heading} text-xl font-extrabold uppercase`}>{business.name}</span>
          </span>
          <p className="mt-4 max-w-sm text-sm opacity-70">{footer.description}</p>
        </div>
        <nav className="flex flex-wrap content-start gap-x-8 gap-y-3 text-sm md:col-span-6 md:justify-end">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 hover:text-[var(--accent)] hover:opacity-100">{l.label}</a>
          ))}
        </nav>
      </div>
      <p className={`${wrap} border-t border-white/10 py-6 text-xs opacity-60`}>
        © {new Date().getFullYear()} {business.name} · {footer.tagline}
      </p>
    </footer>
  );
}

export default function DisenoPop() {
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
        <Comunidad />
      </main>
      <Footer />
    </div>
  );
}
