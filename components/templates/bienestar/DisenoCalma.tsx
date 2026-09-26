"use client";

/**
 * Bienestar — Diseño 2 "Calma" (base: "Bienestar & Calma" de Stitch). Estudio
 * boutique luminoso: fondo claro, formas redondeadas, fotos con luz natural y
 * el acento como relleno suave. El contrario del diseño 1.
 */
import Image from "next/image";
import { bienestar } from "@/lib/templates/bienestar";
import Counter from "./Counter";
import { ArrowIcon, CheckIcon, ClockIcon, MailIcon, MenuIcon, PhoneIcon, PinIcon, intensidadDe, telHref, useMobileMenu, usePrueba } from "./shared";

const { business, nav, fotos, hero, clases, horarios, coaches, primeraVez, planes, contacto, footer } = bienestar;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const wrap = "mx-auto max-w-7xl px-6 md:px-12";
const pill = "inline-flex items-center gap-2 rounded-full";
const btnAccent = `${pill} bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:scale-[1.02]`;
const btnLine = `${pill} border border-[var(--ink-a20)] px-7 py-3.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--ink-a5)]`;
const card = "rounded-3xl border border-[var(--ink-a10)] bg-[var(--primary)]";
const eyebrow = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--ink-a50)]";
const [brand, ...brandRest] = business.name.split(" ");
const intensidadPill: Record<string, string> = {
  Alta: "bg-[var(--ink)] text-[var(--primary)]",
  Media: "bg-[var(--accent)] text-[var(--accent-contrast)]",
  Baja: "bg-[var(--ink-a10)] text-[var(--ink-a70)]",
};

function Nav() {
  const m = useMobileMenu();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ink-a10)] bg-[var(--primary-a90)] backdrop-blur-md">
      <div className={`${wrap} flex h-20 items-center justify-between`}>
        <a href="#top" onClick={m.close} className="flex flex-col leading-none">
          <span className={`${heading} text-xl font-bold uppercase tracking-tight text-[var(--ink)]`}>{brand}</span>
          <span className="mt-1 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--ink-a60)]">{brandRest.join(" ")} · Palermo</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--ink-a70)] md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--ink)]">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={nav.cta.href} className={`${btnAccent} !hidden !px-5 !py-2.5 sm:!inline-flex`}>{nav.cta.label}</a>
          <button type="button" onClick={m.toggle} aria-label={m.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={m.open} className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink)] md:hidden">
            <MenuIcon open={m.open} className="h-5 w-5" />
          </button>
        </div>
      </div>
      {m.open && (
        <div className="border-t border-[var(--ink-a10)] px-6 pb-6 md:hidden">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={m.close} className={`${heading} block py-3 text-3xl text-[var(--ink)]`}>{l.label}</a>
          ))}
          <a href={nav.cta.href} onClick={m.close} className={`${btnAccent} mt-4 w-full justify-center`}>{nav.cta.label}</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <>
      <section id="top" className="pb-20 pt-12 md:pb-28 md:pt-16">
        <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10`}>
          <div className="space-y-6">
            <span className={`${pill} border border-[var(--ink-a10)] bg-[var(--primary)] px-4 py-1.5 text-xs text-[var(--ink-a70)]`}>
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" /> {hero.eyebrow}
            </span>
            <h1 className={`${heading} text-[clamp(2.8rem,6vw,4.8rem)] font-medium leading-[1.05] tracking-tight text-[var(--ink)]`}>
              {hero.title.before}
              <br />
              <span className="font-light italic">{hero.title.highlight}</span>
              {hero.title.after}
            </h1>
            <p className="max-w-xl text-lg text-[var(--ink-a70)]">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={hero.primary.href} className={btnAccent}>
                {hero.primary.label} <ArrowIcon className="h-4 w-4" />
              </a>
              <a href={hero.secondary.href} className={btnLine}>
                <ClockIcon className="h-4 w-4" /> {hero.secondary.label}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--ink-a10)] md:aspect-[5/4]">
              <Image src={fotos.estudio.src} alt={fotos.estudio.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <span className={`${pill} absolute -top-3 right-4 border border-[var(--ink-a10)] bg-[var(--primary)] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--ink)]`}>
              <PinIcon className="h-4 w-4" /> {contacto.sede.address.split(", ").slice(1).join(", ")}
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--ink-a10)] bg-[var(--primary-alt)] py-10">
        <div className={`${wrap} grid grid-cols-2 gap-8 md:grid-cols-4`}>
          {hero.stats.map((s) => (
            <div key={s.label} className="md:border-r md:border-[var(--ink-a10)] md:last:border-0">
              <div className={`${heading} text-4xl font-medium tracking-tight text-[var(--ink)]`}>
                <Counter value={s.num} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-[var(--ink-a60)]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Clases() {
  return (
    <section id="clases" className={`${wrap} py-24`}>
      <div className="mb-14 max-w-2xl">
        <span className={`${eyebrow} mb-2 block`}>{clases.label}</span>
        <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-[var(--ink)]`}>{clases.title}</h2>
        <p className="mt-3 text-lg text-[var(--ink-a70)]">{clases.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clases.items.map((c) => (
          <article key={c.name} className={`${card} flex flex-col p-7 transition-shadow hover:shadow-[0_12px_40px_-20px_var(--ink-a40)]`}>
            <div className="mb-5 flex items-center justify-between">
              <span className={`${pill} px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${intensidadPill[c.intensidad]}`}>Intensidad {c.intensidad.toLowerCase()}</span>
              <span className="text-xs text-[var(--ink-a50)]">{c.duracion}</span>
            </div>
            <h3 className={`${heading} text-2xl font-medium text-[var(--ink)]`}>{c.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-a60)]">{c.desc}</p>
            <p className="mt-6 border-t border-[var(--ink-a10)] pt-4 text-xs text-[var(--ink-a50)]">Máx. {c.cupo} personas por clase</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Grupo() {
  return (
    <section className={`${wrap} pb-24`}>
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-[var(--primary-alt)] md:grid-cols-2">
        <div className="relative min-h-[280px]">
          <Image src={fotos.grupo.src} alt={fotos.grupo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <span className={`${eyebrow} mb-3 block`}>{primeraVez.label}</span>
          <h2 className={`${heading} mb-6 text-3xl font-medium tracking-tight text-[var(--ink)]`}>{primeraVez.title}</h2>
          <ol className="space-y-5">
            {primeraVez.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-medium text-[var(--accent-contrast)]">{i + 1}</span>
                <div>
                  <p className="font-medium text-[var(--ink)]">{s.title}</p>
                  <p className="text-sm text-[var(--ink-a60)]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Horarios() {
  return (
    <section id="horarios" className="border-y border-[var(--ink-a10)] bg-[var(--primary-alt)] py-24">
      <div className={wrap}>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className={`${eyebrow} mb-2 block`}>{horarios.label}</span>
          <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-[var(--ink)]`}>{horarios.title}</h2>
          <p className="mt-3 text-[var(--ink-a70)]">{horarios.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {horarios.days.map((d) => (
            <div key={d.day} className={`${card} p-4`}>
              <p className={`${heading} mb-3 text-lg font-medium text-[var(--ink)]`}>{d.day}</p>
              <ul className="space-y-3">
                {d.clases.map((c) => (
                  <li key={c.time}>
                    <p className="text-xs text-[var(--ink-a50)]">{c.time}</p>
                    <p className="text-sm font-medium text-[var(--ink)]">{c.name}</p>
                    <p className="text-[11px] text-[var(--ink-a50)]">Intensidad {intensidadDe(c.name).toLowerCase()}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-[var(--ink-a10)] pt-3 text-[11px] uppercase tracking-wider text-[var(--ink-a50)]">{d.clases.length} turnos</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-3xl border border-dashed border-[var(--ink-a20)] p-4 text-center">
            <p className={`${heading} text-lg font-medium text-[var(--ink-a50)]`}>{horarios.closed.split(" — ")[0]}</p>
            <p className="text-xs text-[var(--ink-a50)]">{horarios.closed.split(" — ")[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coaches() {
  return (
    <section id="coaches" className={`${wrap} py-24`}>
      <div className="mb-12 max-w-2xl">
        <span className={`${eyebrow} mb-2 block`}>{coaches.label}</span>
        <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-[var(--ink)]`}>{coaches.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {coaches.items.map((c) => (
          <div key={c.name} className={`${card} p-6 text-center`}>
            <span className={`${heading} mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] text-2xl font-medium text-[var(--accent-contrast)]`}>{c.initials}</span>
            <p className="font-medium text-[var(--ink)]">{c.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-a50)]">{c.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Planes() {
  return (
    <section id="planes" className="border-t border-[var(--ink-a10)] bg-[var(--primary-alt)] py-24">
      <div className={wrap}>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className={`${eyebrow} mb-2 block`}>{planes.label}</span>
          <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-[var(--ink)]`}>{planes.title}</h2>
          <p className="mt-3 text-[var(--ink-a70)]">{planes.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {planes.items.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-3xl p-8 ${p.featured ? "border-2 border-[var(--accent)] bg-[var(--primary)] md:-translate-y-3" : card}`}>
              {p.featured && (
                <span className={`${pill} absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] px-4 py-1 text-xs font-medium text-[var(--accent-contrast)]`}>Más elegido</span>
              )}
              <p className="text-sm text-[var(--ink-a60)]">{p.name}</p>
              <p className={`${heading} mt-2 text-4xl font-medium tracking-tight text-[var(--ink)]`}>{p.price}</p>
              <p className="mt-1 text-xs text-[var(--ink-a50)]">{p.period}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--ink-a10)] pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-a80)]">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href={nav.cta.href} className={`mt-8 justify-center ${p.featured ? btnAccent : btnLine}`}>Elegir plan {p.name.toLowerCase()}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const { form, set, submit } = usePrueba();
  const f = contacto.form;
  const input =
    "w-full rounded-2xl border border-[var(--ink-a15)] bg-[var(--primary)] px-4 py-3 text-[var(--ink)] outline-none placeholder:text-[var(--ink-a40)] focus:border-[var(--ink-a50)]";
  return (
    <section id="contacto" className={`${wrap} grid grid-cols-1 gap-12 py-24 lg:grid-cols-2`}>
      <div>
        <span className={`${eyebrow} mb-2 block`}>{contacto.label}</span>
        <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-[var(--ink)]`}>{contacto.title}</h2>
        <p className="mt-4 max-w-md text-lg text-[var(--ink-a70)]">{contacto.subtitle}</p>
        <ul className="mt-10 space-y-5 text-sm">
          {[
            { icon: PinIcon, title: contacto.sede.address, sub: contacto.sede.hours },
            { icon: MailIcon, title: contacto.email, href: `mailto:${contacto.email}` },
            { icon: PhoneIcon, title: contacto.phone, href: telHref },
          ].map((row) => (
            <li key={row.title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary-alt)] text-[var(--ink)]">
                <row.icon className="h-4 w-4" />
              </span>
              <span>
                {row.href ? (
                  <a href={row.href} className="font-medium text-[var(--ink)] hover:underline">{row.title}</a>
                ) : (
                  <span className="font-medium text-[var(--ink)]">{row.title}</span>
                )}
                {row.sub && <span className="block text-[var(--ink-a60)]">{row.sub}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={submit} className={`${card} space-y-5 p-8`}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-[var(--ink-a70)]">{f.name.label}</span>
            <input required value={form.name} onChange={set("name")} placeholder={f.name.placeholder} className={input} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-[var(--ink-a70)]">{f.email.label}</span>
            <input required type="email" value={form.email} onChange={set("email")} placeholder={f.email.placeholder} className={input} />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm text-[var(--ink-a70)]">{f.message.label}</span>
          <textarea required rows={4} value={form.message} onChange={set("message")} placeholder={f.message.placeholder} className={`${input} resize-none`} />
        </label>
        <button type="submit" className={`${btnAccent} w-full justify-center`}>{f.submit}</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--ink-a10)]">
      <div className={`${wrap} flex flex-col justify-between gap-6 py-10 md:flex-row md:items-center`}>
        <div>
          <p className={`${heading} text-xl font-bold uppercase text-[var(--ink)]`}>{brand}</p>
          <p className="mt-1 text-xs text-[var(--ink-a50)]">© {new Date().getFullYear()} {business.name} · {footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--ink-a60)]">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--ink)]">{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function DisenoCalma() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-[family-name:var(--font-dmsans)] text-[var(--ink)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Clases />
        <Grupo />
        <Horarios />
        <Coaches />
        <Planes />
      </main>
      <Contacto />
      <Footer />
    </div>
  );
}
