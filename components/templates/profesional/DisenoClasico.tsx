"use client";

/**
 * Profesional — Diseño 1 "Clásico" (base: variante "FinTech & Editorial" de
 * Stitch). Blanco y navy, títulos serif con itálica de acento, panel del
 * cliente protagonista en el hero y servicios en grilla asimétrica 7/5.
 */
import Image from "next/image";
import { profesional } from "@/lib/templates/profesional";
import {
  ArrowIcon,
  CalendarIcon,
  CheckCircleIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  QuoteIcon,
  ShieldIcon,
  StarIcon,
  phoneHref,
  useContactForm,
  useMobileMenu,
} from "./shared";

const { business, nav, hero, stats, servicios, proceso, sobre, testimonio, contacto, footer } =
  profesional;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const wrap = "mx-auto max-w-7xl px-6 md:px-10";
const eyebrow = "mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]";

function Nav() {
  const menu = useMobileMenu();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--primary-a90)] backdrop-blur-md">
      <div className={`${wrap} flex h-20 items-center justify-between`}>
        <a href="#top" onClick={menu.close} className="group flex items-center gap-3.5">
          <span className={`${heading} flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ink)] text-lg text-white transition-colors group-hover:bg-[var(--accent)]`}>
            {business.initials}
          </span>
          <span className="flex flex-col">
            <span className={`${heading} text-xl leading-snug tracking-tight text-[var(--ink)]`}>{business.name}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {business.title} · {business.university}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-[13px] font-semibold uppercase tracking-wide md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="py-1 text-slate-600 transition-colors hover:text-[var(--accent)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={nav.cta.href}
            className="hidden rounded-lg bg-[var(--accent)] px-5 py-2.5 text-[13px] font-semibold text-[var(--accent-contrast)] shadow-sm transition-colors hover:bg-[var(--accent-strong)] sm:inline-flex"
          >
            {nav.cta.label}
          </a>
          <button
            type="button"
            onClick={menu.toggle}
            aria-label={menu.open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu.open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--ink)] md:hidden"
          >
            <MenuIcon open={menu.open} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menu.open && (
        <div className="border-t border-[var(--line)] bg-[var(--card)] px-6 pb-6 md:hidden">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={menu.close} className={`${heading} block border-b border-[var(--line)] py-4 text-2xl text-[var(--ink)]`}>
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={menu.close}
            className="mt-5 block rounded-lg bg-[var(--accent)] py-3.5 text-center text-sm font-semibold text-[var(--accent-contrast)]"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}

function Panel() {
  const { panel } = hero;
  const last = panel.bars.length - 1;
  return (
    <div className="relative">
      <div aria-hidden className="absolute -right-10 -top-10 -z-10 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_30px_60px_-30px_rgba(22,24,43,0.35)]">
        <div className="mb-5 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
              {panel.title} · {business.name}
            </span>
          </div>
          <span className="rounded-md bg-[var(--card-alt)] px-2 py-0.5 text-[11px] font-medium text-slate-500">{panel.status}</span>
        </div>

        <div className="mb-5 rounded-xl border border-[var(--line)] bg-[var(--card-alt)] p-4">
          <div className="mb-1 flex items-center justify-between gap-2 text-xs text-slate-500">
            <span>{panel.label}</span>
            <span className="rounded bg-emerald-100/80 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">{panel.trend}</span>
          </div>
          <div className={`${heading} text-3xl tabular-nums tracking-tight text-[var(--ink)]`}>{panel.amount}</div>
          <div className="mt-3 flex h-16 items-end gap-1.5 border-t border-[var(--line)] px-1 pt-3">
            {panel.bars.map((b, i) => (
              <div
                key={b.month}
                title={b.month}
                style={{ height: `${b.value}%` }}
                className={`flex-1 rounded-t ${i === last ? "bg-[var(--accent)]" : i === last - 1 ? "bg-[var(--accent)] opacity-40" : "bg-[var(--line)]"}`}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between px-1 text-[10px] font-medium text-slate-400">
            {panel.bars.map((b, i) => (
              <span key={b.month} className={i === last ? "font-bold text-[var(--accent)]" : ""}>
                {b.month}
              </span>
            ))}
          </div>
        </div>

        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">{panel.obligationsLabel}</span>
        <div className="mb-5 space-y-2">
          {panel.obligations.map((o) => (
            <div key={o.label} className="flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50/60 p-2.5">
              <span className="flex items-center gap-2 text-xs font-medium text-[var(--ink)]">
                <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                {o.label}
              </span>
              <span className="rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">{o.status}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2.5 rounded-lg border border-amber-200/80 bg-amber-50/80 p-3 text-xs text-amber-900">
          <CalendarIcon className="h-4 w-4 flex-shrink-0 text-amber-600" />
          {panel.nextDue}
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-[var(--line)] pt-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]">
            {business.owner.split(" ").map((w) => w[0]).join("")}
          </span>
          <span className="text-left">
            <span className="block text-xs font-semibold text-[var(--ink)]">Supervisado por {business.owner}</span>
            <span className="block text-[11px] text-slate-500">Matrícula {business.matricula}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const trust = [stats[0], stats[2], stats[3]];
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--line)] bg-gradient-to-b from-[var(--primary-alt)] via-[var(--primary)] to-[var(--primary)] pb-20 pt-12 md:pb-28 md:pt-20">
      <div className={wrap}>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            {hero.eyebrow}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <ShieldIcon className="h-4 w-4 text-slate-400" />
            Matrícula {business.matricula}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className={`${heading} mb-6 text-[clamp(2.4rem,5vw,4rem)] leading-[1.1] tracking-tight text-[var(--ink)]`}>
              {hero.title.before}
              <span className="italic text-[var(--accent)]">{hero.title.highlight}</span>
              {hero.title.after}
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{hero.subtitle}</p>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href={hero.primary.href}
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] shadow-sm transition-colors hover:bg-[var(--accent-strong)]"
              >
                {hero.primary.label}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={hero.secondary.href}
                className="inline-flex items-center rounded-lg border border-[var(--line)] bg-[var(--card)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                {hero.secondary.label}
              </a>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-[var(--line)] pt-6">
              {trust.map((s) => (
                <div key={s.label}>
                  <span className={`${heading} block text-2xl tabular-nums text-[var(--ink)]`}>{s.num}</span>
                  <span className="text-xs font-medium text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Panel />
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
  return (
    <section id="servicios" className="border-b border-[var(--line)] bg-[var(--primary)] py-20 md:py-28">
      <div className={wrap}>
        <div className="mb-16 max-w-2xl">
          <span className={eyebrow}>{servicios.label}</span>
          <h2 className={`${heading} mb-4 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-[var(--ink)]`}>{servicios.title}</h2>
          <p className="text-base text-slate-600 sm:text-lg">{servicios.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {servicios.items.map((s, i) => (
            <article
              key={s.title}
              className={`group flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--card-alt)] p-8 transition-all hover:border-[var(--accent)] hover:shadow-[0_20px_40px_-24px_rgba(22,24,43,0.25)] ${spans[i % 4]}`}
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className={`${heading} text-xs font-bold uppercase tracking-widest text-[var(--accent)]`}>Servicio {s.num}</span>
                  <span className="rounded-md border border-[var(--line)] bg-[var(--card)] px-2.5 py-1 text-xs font-semibold text-slate-700">{s.tag}</span>
                </div>
                <h3 className={`${heading} mb-3 text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--accent)] sm:text-3xl`}>{s.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-[var(--line)] pt-6">
                {s.details.map((d) => (
                  <span key={d} className="rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-slate-700">
                    {d}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="border-b border-[var(--line)] bg-[var(--primary-alt)] py-20 md:py-28">
      <div className={wrap}>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className={eyebrow}>{proceso.label}</span>
          <h2 className={`${heading} text-[clamp(2rem,4vw,2.75rem)] leading-tight tracking-tight text-[var(--ink)]`}>{proceso.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {proceso.steps.map((step) => (
            <div key={step.num} className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-sm transition-colors hover:border-[var(--accent)]">
              <div>
                <span className={`${heading} mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-xl font-bold text-[var(--accent)]`}>
                  {step.num}
                </span>
                <h3 className={`${heading} mb-3 text-xl text-[var(--ink)]`}>{step.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
              <div className="flex items-center gap-2 border-t border-[var(--line)] pt-4 text-xs font-semibold text-slate-500">
                <CheckCircleIcon className="h-4 w-4 text-[var(--accent)]" />
                {step.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="border-b border-[var(--line)] bg-[var(--primary)] py-20 md:py-28">
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card-alt)] shadow-[0_30px_60px_-30px_rgba(22,24,43,0.35)] lg:col-span-5">
          <div className="relative h-[440px] sm:h-[480px]">
            <Image src={sobre.photo.src} alt={sobre.photo.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 backdrop-blur-md">
            <div>
              <span className={`${heading} block text-lg text-[var(--ink)]`}>{business.owner}</span>
              <span className="text-xs text-slate-500">
                {business.title} · {business.university}
              </span>
            </div>
            <span className="rounded-md border border-[var(--accent-soft)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent)]">
              {business.matricula}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className={eyebrow}>{sobre.label}</span>
          <h2 className={`${heading} mb-6 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-[var(--ink)]`}>{sobre.title}</h2>
          <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {sobre.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
            {sobre.credentials.map((c) => (
              <div key={c.title} className="rounded-xl border border-[var(--line)] bg-[var(--card-alt)] p-4">
                <ShieldIcon className="mb-2 h-6 w-6 text-[var(--accent)]" />
                <strong className="block text-xs font-bold uppercase tracking-wide text-[var(--ink)]">{c.title}</strong>
                <span className="text-xs text-slate-500">{c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonio() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--primary-alt)] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <span className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
          <QuoteIcon className="h-6 w-6" />
        </span>
        <blockquote className={`${heading} mb-8 text-[clamp(1.5rem,3.2vw,2.4rem)] italic leading-snug text-[var(--ink)]`}>
          “{testimonio.quote}”
        </blockquote>
        <cite className="block text-base font-bold not-italic text-[var(--ink)]">{testimonio.author}</cite>
        <span className="mt-0.5 block text-xs text-slate-500">{testimonio.role}</span>
        <div className="mt-3 flex justify-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const { field, onSubmit } = useContactForm();
  const input =
    "w-full rounded-lg border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--accent)]";
  const label = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-500";
  const channels = [
    { icon: MailIcon, label: contacto.labels.email, value: contacto.email, href: `mailto:${contacto.email}` },
    { icon: PhoneIcon, label: contacto.labels.phone, value: contacto.phone, href: phoneHref },
    { icon: PinIcon, label: contacto.labels.location, value: contacto.location },
  ];

  return (
    <section id="contacto" className="bg-[var(--primary)] py-20 md:py-28">
      <div className={`${wrap} grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14`}>
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <span className={eyebrow}>{contacto.label}</span>
            <h2 className={`${heading} mb-4 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-[var(--ink)]`}>{contacto.title}</h2>
            <p className="mb-8 text-base leading-relaxed text-slate-600">{contacto.subtitle}</p>
            <div className="mb-8 space-y-4">
              {channels.map((c) => {
                const Inner = (
                  <>
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--card)] text-slate-700 transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">{c.label}</span>
                      <strong className="text-sm font-semibold text-[var(--ink)]">{c.value}</strong>
                    </span>
                  </>
                );
                const cls = "group flex items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--card-alt)] p-4 transition-colors";
                return c.href ? (
                  <a key={c.label} href={c.href} className={`${cls} hover:border-[var(--accent)]`}>
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className={cls}>
                    {Inner}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="flex items-start gap-2.5 rounded-xl border border-[var(--line)] bg-[var(--card-alt)] p-4 text-xs text-slate-600">
            <LockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
            {contacto.privacy}
          </p>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_30px_60px_-30px_rgba(22,24,43,0.3)] sm:p-10">
            <h3 className={`${heading} text-2xl text-[var(--ink)]`}>{contacto.form.title}</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pc1-name" className={label}>{contacto.form.name.label}</label>
                <input id="pc1-name" required placeholder={contacto.form.name.placeholder} className={input} {...field("name")} />
              </div>
              <div>
                <label htmlFor="pc1-email" className={label}>{contacto.form.email.label}</label>
                <input id="pc1-email" type="email" required placeholder={contacto.form.email.placeholder} className={input} {...field("email")} />
              </div>
            </div>
            <div>
              <label htmlFor="pc1-area" className={label}>{contacto.form.area.label}</label>
              <select id="pc1-area" className={input} {...field("area")}>
                <option value="">{contacto.form.area.placeholder}</option>
                {contacto.form.area.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pc1-msg" className={label}>{contacto.form.message.label}</label>
              <textarea id="pc1-msg" rows={4} placeholder={contacto.form.message.placeholder} className={`${input} resize-y`} {...field("message")} />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] py-4 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              {contacto.form.submit}
              <ArrowIcon className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-slate-400">{contacto.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className={`${wrap} py-14`}>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className={`${heading} flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] text-base`}>{business.initials}</span>
              <span className={`${heading} text-xl`}>{business.name}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">{footer.description}</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm text-slate-300 md:col-span-3">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
            ))}
          </nav>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs md:col-span-3">
            <span className="mb-1 block font-bold uppercase tracking-wider text-[var(--accent)]">Matrícula</span>
            <span className="text-white">{business.matricula}</span>
          </div>
        </div>
        <p className="pt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} {business.name} · {footer.tagline}
        </p>
      </div>
    </footer>
  );
}

export default function DisenoClasico() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-[family-name:var(--font-jakarta)] text-[var(--ink)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Sobre />
        <Testimonio />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
