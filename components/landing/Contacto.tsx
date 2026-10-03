"use client";

import { useEffect, useState } from "react";
import { contacto, contact, portfolio } from "@/lib/config";
import Button from "./Button";
import { labelClass } from "./SectionHeader";

const inputClass = "w-full border-0 border-b border-content/25 bg-transparent px-0 py-3.5 text-lg text-content outline-none transition-colors placeholder:text-muted/55 focus:border-accent";
const label = "text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", rubro: "", message: "" });
  const [template, setTemplate] = useState("");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("template");
    const selected = portfolio.items.find((item) => item.slug === slug);
    if (selected) setTemplate(selected.name);
  }, []);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const subject = `Consulta de ${form.name || "un negocio"}`;
    const body = [`Nombre: ${form.name}`, `Email: ${form.email}`, `Rubro: ${form.rubro}`, template ? `Referencia elegida: ${template}` : "", "", form.message].filter(Boolean).join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contacto" className="overflow-hidden bg-accent text-white">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)] py-[clamp(80px,10vw,150px)]">
        <span className={`${labelClass} mb-7 !text-white/75`}><span className="h-px w-6 bg-white" />{contacto.label}</span>
        <h2 className="max-w-[11ch] text-balance font-display text-[clamp(3.2rem,8vw,9rem)] font-semibold leading-[.9] tracking-[-.06em]">{contacto.title}</h2>
        <div className="mt-[clamp(48px,7vw,100px)] grid gap-14 border-t border-white/35 pt-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-[clamp(60px,10vw,170px)]">
          <div>
            <p className="max-w-md text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed text-white/80">{contacto.subtitle}</p>
            {template && <p className="mt-7 border-l border-white pl-4 text-sm">Referencia elegida: <strong>{template}</strong></p>}
            <dl className="mt-10 space-y-6 text-sm">
              <div><dt className="text-white/60">{contacto.infoLabels.email}</dt><dd><a className="text-lg font-semibold hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              <div><dt className="text-white/60">{contacto.infoLabels.location}</dt><dd>{contact.location}</dd></div>
            </dl>
          </div>
          <form onSubmit={submit} className="grid gap-7 sm:grid-cols-2 [&_input]:border-white/35 [&_input]:text-white [&_input]:placeholder:text-white/55 [&_label]:text-white/65 [&_select]:border-white/35 [&_select]:text-white [&_textarea]:border-white/35 [&_textarea]:text-white [&_textarea]:placeholder:text-white/55">
            <div><label htmlFor="name" className={label}>{contacto.form.name.label}</label><input id="name" required className={inputClass} placeholder={contacto.form.name.placeholder} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div><label htmlFor="email" className={label}>{contacto.form.email.label}</label><input id="email" type="email" required className={inputClass} placeholder={contacto.form.email.placeholder} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
            <div className="sm:col-span-2"><label htmlFor="rubro" className={label}>{contacto.form.rubro.label}</label><select id="rubro" className={`${inputClass} appearance-none`} value={form.rubro} onChange={(e) => setForm({ ...form, rubro: e.target.value })}><option value="" className="text-content">{contacto.form.rubro.placeholder}</option>{contacto.form.rubro.options.map((option) => <option key={option} className="text-content">{option}</option>)}</select></div>
            <div className="sm:col-span-2"><label htmlFor="message" className={label}>{contacto.form.message.label}</label><textarea id="message" className={`${inputClass} min-h-28 resize-y`} placeholder={contacto.form.message.placeholder} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            <div className="sm:col-span-2"><Button type="submit" variant="outline" className="!border-white/60 !text-white hover:!bg-white hover:!text-accent">{contacto.form.submit}</Button><p className="mt-4 max-w-lg text-xs leading-relaxed text-white/65">{contacto.transportNote}</p></div>
          </form>
        </div>
      </div>
    </section>
  );
}
