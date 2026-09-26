"use client";

/**
 * Piezas compartidas por los 3 diseños del template Comercio: links de
 * WhatsApp (con mensaje precargado por producto), link a Google Maps e íconos
 * de categorías y beneficios. El menú mobile y los íconos base vienen de
 * `../common`.
 */
import { comercio, type ComercioIcon } from "@/lib/templates/comercio";
import {
  CardIcon,
  ChatIcon,
  GiftIcon,
  LampIcon,
  PlantIcon,
  RefreshIcon,
  SofaIcon,
  TruckIcon,
  UtensilsIcon,
  VaseIcon,
} from "../common";

const { whatsapp, local } = comercio;

/**
 * Link a WhatsApp. Con producto, precarga el mensaje de consulta. Sin número
 * configurado, lleva a la sección del local.
 */
export function waHref(producto?: string): string {
  if (!whatsapp.number) return "#local";
  const base = `https://wa.me/${whatsapp.number}`;
  return producto
    ? `${base}?text=${encodeURIComponent(whatsapp.productMessage.replace("{producto}", producto))}`
    : base;
}

/** Atributos para abrir WhatsApp en otra pestaña solo si hay número. */
export const waTarget = whatsapp.number
  ? { target: "_blank", rel: "noopener noreferrer" }
  : {};

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.address)}`;

export const iconFor: Record<ComercioIcon, (p: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  vase: VaseIcon,
  sofa: SofaIcon,
  lamp: LampIcon,
  utensils: UtensilsIcon,
  plant: PlantIcon,
  gift: GiftIcon,
  truck: TruckIcon,
  card: CardIcon,
  refresh: RefreshIcon,
  chat: ChatIcon,
};

export * from "../common";
