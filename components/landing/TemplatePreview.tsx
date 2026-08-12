/**
 * Mockup de "mini browser" usado como preview visual de cada template.
 * El color de acento y el gradiente de fondo vienen por props (desde config).
 */
type Props = {
  gradient: string;
  accent: string;
};

export default function TemplatePreview({ gradient, accent }: Props) {
  return (
    <div
      className="relative flex h-[clamp(140px,16vw,200px)] flex-shrink-0 items-center justify-center overflow-hidden"
      style={{ background: gradient }}
    >
      <div className="w-3/4 overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
        {/* Barra del browser */}
        <div className="flex items-center gap-[5px] bg-white/[0.08] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="ml-1.5 h-1.5 flex-1 rounded-[3px] bg-white/10" />
        </div>
        {/* Cuerpo */}
        <div className="flex flex-col gap-[5px] p-2.5">
          <span
            className="h-[5px] w-3/5 rounded-[3px] opacity-70"
            style={{ background: accent }}
          />
          <span className="h-[18px] rounded bg-white/[0.07]" />
          <span className="h-[5px] w-[45%] rounded-[3px] bg-white/[0.12]" />
          <span
            className="h-2 w-[35%] rounded opacity-80"
            style={{ background: accent }}
          />
        </div>
      </div>
    </div>
  );
}
