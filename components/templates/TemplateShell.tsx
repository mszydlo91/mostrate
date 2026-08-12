import { ReactNode, CSSProperties } from "react";

/**
 * Contenedor base para los templates de clientes.
 *
 * Expone el color de acento del cliente como la variable CSS `--tpl-accent`,
 * de modo que los componentes internos puedan tematizarse sin recompilar Tailwind.
 * Cada template de cliente (profesional, comercio, etc.) se construye encima de esto.
 */
type Props = {
  accent?: string;
  children: ReactNode;
};

export default function TemplateShell({ accent = "#4F7FFF", children }: Props) {
  const style = { "--tpl-accent": accent } as CSSProperties;
  return (
    <div style={style} className="min-h-screen bg-bg text-content font-inter">
      {children}
    </div>
  );
}
