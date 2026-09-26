"use client";

/**
 * Lógica compartida por los 3 diseños de Gastronomía: estado de la carta
 * (categoría activa + mostrar/ocultar precios), formulario de reserva (abre el
 * mail con los datos) y link de WhatsApp. El menú mobile y los íconos base
 * vienen de `../common`.
 */
import { useState } from "react";
import { gastronomia } from "@/lib/templates/gastronomia";
import { BagIcon, TruckIcon, UtensilsIcon } from "../common";

const { menu, contacto, ubicacion } = gastronomia;

export const ALL = "todos";

/** Pestañas de la carta: "Todos" + cada categoría, numeradas desde 00. */
export const menuTabs = [{ id: ALL, label: "Todos" }, ...menu.categories.map((c) => ({ id: c.id, label: c.label }))];

export function useCarta() {
  const [active, setActive] = useState(ALL);
  const [showPrices, setShowPrices] = useState(true);
  const visible = active === ALL ? menu.categories : menu.categories.filter((c) => c.id === active);
  return { active, setActive, showPrices, togglePrices: () => setShowPrices((v) => !v), visible, all: active === ALL };
}

export function useReserva() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Reserva de ${form.name || "un cliente"}`;
    const body = [`Nombre: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n");
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return { form, set, submit };
}

/** WhatsApp del local; sin número configurado lleva al formulario. */
export const waHref = ubicacion.whatsapp.number ? `https://wa.me/${ubicacion.whatsapp.number}` : "#contacto";
export const waTarget = ubicacion.whatsapp.number ? { target: "_blank", rel: "noopener noreferrer" } : {};

export const telHref = `tel:${contacto.phone.replace(/[^\d+]/g, "")}`;

export const optionIcon = { utensils: UtensilsIcon, bag: BagIcon, truck: TruckIcon };

/** Ojo abierto / tachado para el botón de precios. */
export function EyeIcon({ off, className = "h-4 w-4" }: { off: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      {off && <path d="M4 4l16 16" />}
    </svg>
  );
}

export * from "../common";
