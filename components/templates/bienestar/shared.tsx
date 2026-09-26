"use client";

/**
 * Lógica compartida por los 3 diseños de Bienestar: formulario de clase de
 * prueba (abre el mail con los datos) e intensidad de cada clase para la
 * grilla de horarios. El menú mobile y los íconos base vienen de `../common`.
 */
import { useState } from "react";
import { bienestar } from "@/lib/templates/bienestar";

const { contacto, clases } = bienestar;

export function usePrueba() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Clase de prueba para ${form.name || "un interesado"}`;
    const body = [`Nombre: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n");
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return { form, set, submit };
}

/** Intensidad ("Alta" | "Media" | "Baja") de una clase por nombre. */
export const intensidadDe = (name: string) => clases.items.find((c) => c.name === name)?.intensidad ?? "Baja";

export const telHref = `tel:${contacto.phone.replace(/[^\d+]/g, "")}`;

export * from "../common";
