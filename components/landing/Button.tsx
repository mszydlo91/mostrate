import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

type Props = {
  children: string;
  /** Link (ancla o ruta). Si no se pasa, se renderiza un <button>. */
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  /** Ocupa todo el ancho disponible (planes, formulario, menú mobile). */
  full?: boolean;
  /** Celda con flecha a la derecha. */
  arrow?: boolean;
  className?: string;
};

/**
 * Botón de la landing. Anatomía:
 * - Celda cuadrada con flecha diagonal, separada del texto por una línea.
 * - Hover sobrio: el color se aclara apenas, un brillo cruza el botón una sola
 *   vez (solo primario) y la flecha se desliza unos píxeles en su dirección.
 * - Variante outline: el borde se ilumina y las marcas de corte de las
 *   esquinas se abren.
 * Todo es CSS (group-hover); con reduced-motion no hay desplazamientos.
 */
export default function Button({
  children,
  href,
  type = "button",
  onClick,
  variant = "primary",
  size = "md",
  full = false,
  arrow = true,
  className = "",
}: Props) {
  const primary = variant === "primary";
  const pad = size === "sm" ? "px-4 py-2.5 text-[0.85rem]" : "px-6 py-4 text-[0.92rem]";
  const cell = size === "sm" ? "w-10" : "w-[3.25rem]";
  const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

  const classes = [
    "group relative isolate inline-flex items-stretch overflow-hidden font-semibold leading-none",
    `transition-[background-color,border-color,box-shadow] duration-500 ${ease}`,
    primary
      ? "bg-accent text-white hover:bg-[#6690FF] hover:shadow-[0_12px_40px_-14px_rgba(79,127,255,0.75)]"
      : "border border-line text-content hover:border-content/40 hover:bg-white/[0.03]",
    full ? "flex w-full" : "",
    className,
  ].join(" ");

  const inner: ReactNode = (
    <>
      {/* Brillo que cruza una sola vez (solo al entrar el mouse, no al salir) */}
      {primary && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-none group-hover:translate-x-[260%] group-hover:transition-transform group-hover:duration-[900ms] group-hover:ease-out motion-reduce:hidden"
        />
      )}

      {/* Marcas de corte (solo outline) */}
      {!primary && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0">
          {[
            "left-0 top-0 border-l border-t",
            "right-0 top-0 border-r border-t",
            "bottom-0 left-0 border-b border-l",
            "bottom-0 right-0 border-b border-r",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute h-2 w-2 border-accent transition-all duration-500 ${ease} group-hover:h-3.5 group-hover:w-3.5 ${pos}`}
            />
          ))}
        </span>
      )}

      <span className={`relative flex flex-1 items-center justify-center ${pad}`}>{children}</span>

      {/* Celda de la flecha */}
      {arrow && (
        <span
          aria-hidden="true"
          className={`relative flex flex-shrink-0 items-center justify-center border-l transition-colors duration-500 ${ease} ${cell} ${
            primary
              ? "border-white/25 bg-black/10 group-hover:bg-black/15"
              : "border-line group-hover:border-content/40"
          }`}
        >
          <ArrowRightIcon
            className={`h-4 w-4 -rotate-45 transition-transform duration-500 ${ease} group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none`}
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
