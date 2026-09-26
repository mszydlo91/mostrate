import { marquee } from "@/lib/config";

/**
 * Cinta de rubros a todo el ancho. El contenido va duplicado para que la
 * animación (translateX -50%) haga un loop sin cortes.
 */
export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/60 py-[clamp(18px,2.4vw,32px)]">
      <p className="sr-only">{marquee.join(", ")}</p>
      <div aria-hidden="true" className="flex w-max animate-marquee items-center">
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-[clamp(16px,2vw,32px)] font-syne text-[clamp(2.4rem,6vw,5.5rem)] font-extrabold uppercase leading-none tracking-[-0.03em] ${
                i % 2 === 0
                  ? "text-content"
                  : "text-transparent [-webkit-text-stroke:1px_rgba(240,238,233,0.45)]"
              }`}
            >
              {word}
            </span>
            <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] italic text-accent">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
