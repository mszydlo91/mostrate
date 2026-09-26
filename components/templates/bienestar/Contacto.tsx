"use client";

import { useState } from "react";
import { bienestar } from "@/lib/templates/bienestar";

const { contacto } = bienestar;

const inputClass =
  "w-full border-2 border-[var(--ink-a15)] bg-transparent px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-a30)] focus:border-[var(--accent)]";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Clase de prueba para ${form.name || "un interesado"}`;
    const body = [`Nombre: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n");
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contacto" className="border-t border-[var(--ink-a10)] bg-[var(--primary)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
            {contacto.label}
          </span>
          <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[var(--ink)]">
            {contacto.title}
          </h2>
          <p className="mt-4 max-w-sm text-sm text-[var(--ink-a50)]">{contacto.subtitle}</p>

          <div className="mt-8 space-y-2 text-sm">
            <a href={`mailto:${contacto.email}`} className="block text-[var(--ink-a70)] hover:text-[var(--accent)]">
              {contacto.email}
            </a>
            <div className="text-[var(--ink-a70)]">{contacto.phone}</div>
          </div>

          <div className="mt-8 border border-[var(--ink-a10)] bg-[var(--ink-a5)] p-5 text-sm">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Sede</div>
            <p className="mt-2 font-bold text-[var(--ink)]">{contacto.sede.address}</p>
            <p className="mt-1 text-[var(--ink-a50)]">{contacto.sede.hours}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-name" className="text-xs font-bold uppercase tracking-[0.06em] text-[var(--ink-a45)]">
              {contacto.form.name.label}
            </label>
            <input
              id="b-name"
              type="text"
              required
              placeholder={contacto.form.name.placeholder}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-email" className="text-xs font-bold uppercase tracking-[0.06em] text-[var(--ink-a45)]">
              {contacto.form.email.label}
            </label>
            <input
              id="b-email"
              type="email"
              required
              placeholder={contacto.form.email.placeholder}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-msg" className="text-xs font-bold uppercase tracking-[0.06em] text-[var(--ink-a45)]">
              {contacto.form.message.label}
            </label>
            <textarea
              id="b-msg"
              placeholder={contacto.form.message.placeholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} min-h-[100px] resize-y`}
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-[var(--accent)] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-[var(--accent-contrast)] transition-opacity hover:opacity-85 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%)]"
          >
            {contacto.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
