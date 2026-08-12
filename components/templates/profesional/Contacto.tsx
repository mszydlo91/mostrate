"use client";

import { useState } from "react";
import { profesional } from "@/lib/templates/profesional";

const { contacto } = profesional;

const inputClass =
  "w-full rounded-lg border border-[#D7DAE6] bg-white px-4 py-3 text-sm text-[#16182B] outline-none transition-colors placeholder:text-[#9BA0B3] focus:border-[var(--accent)]";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Consulta de ${form.name || "un cliente"}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contacto" className="bg-[#F7F8FA]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        {/* Info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {contacto.label}
          </span>
          <h2 className="mt-3 font-syne text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] text-[#16182B]">
            {contacto.title}
          </h2>
          <p className="mt-4 max-w-md text-[clamp(0.95rem,1.2vw,1.05rem)] text-[#5A5F73]">
            {contacto.subtitle}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contacto.email}`}
              className="flex items-center gap-3 text-sm text-[#16182B] hover:text-[var(--accent)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                ✉
              </span>
              {contacto.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-[#16182B]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                ☎
              </span>
              {contacto.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-[#16182B]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                ◎
              </span>
              {contacto.location}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#E6E8F0] bg-white p-6 sm:p-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="p-name" className="text-sm font-medium text-[#5A5F73]">
                {contacto.form.name.label}
              </label>
              <input
                id="p-name"
                type="text"
                required
                placeholder={contacto.form.name.placeholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="p-email" className="text-sm font-medium text-[#5A5F73]">
                {contacto.form.email.label}
              </label>
              <input
                id="p-email"
                type="email"
                required
                placeholder={contacto.form.email.placeholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="p-msg" className="text-sm font-medium text-[#5A5F73]">
                {contacto.form.message.label}
              </label>
              <textarea
                id="p-msg"
                placeholder={contacto.form.message.placeholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} min-h-[120px] resize-y`}
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              {contacto.form.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
