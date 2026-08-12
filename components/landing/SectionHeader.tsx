import { ReactNode } from "react";

type Props = {
  label: string;
  /** Título: string simple o array de líneas (se separan con <br/>) */
  title: string | string[];
  subtitle?: string;
  children?: ReactNode;
};

export default function SectionHeader({ label, title, subtitle }: Props) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <>
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        {label}
      </span>
      <h2 className="mb-4 font-syne text-[clamp(1.6rem,2.5vw,2.6rem)] font-bold leading-[1.2] tracking-[-0.02em]">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="mb-14 max-w-[520px] text-[clamp(0.95rem,1.2vw,1.05rem)] text-muted">
          {subtitle}
        </p>
      )}
    </>
  );
}
