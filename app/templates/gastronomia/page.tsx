import type { Metadata } from "next";
import ThemeProvider from "@/components/templates/ThemeProvider";
import { resolveDesign } from "@/components/templates/design";
import {
  gastronomia,
  gastronomiaDesigns,
  gastronomiaFonts,
  gastronomiaPrimaries,
  gastronomiaThemes,
} from "@/lib/templates/gastronomia";
import DisenoCarta from "@/components/templates/gastronomia/DisenoCarta";
import DisenoBodegon from "@/components/templates/gastronomia/DisenoBodegon";
import DisenoTaberna from "@/components/templates/gastronomia/DisenoTaberna";

export const metadata: Metadata = {
  title: `${gastronomia.business.name} — ${gastronomia.footer.tagline}`,
  description: gastronomia.hero.subtitle,
};

// Cada diseño lee el mismo contenido (lib/templates/gastronomia.ts).
const designComponents = {
  "1": DisenoCarta,
  "2": DisenoBodegon,
  "3": DisenoTaberna,
} as const;

export default function GastronomiaTemplatePage({
  searchParams,
}: {
  searchParams: { diseno?: string | string[] };
}) {
  const design = resolveDesign(gastronomiaDesigns, searchParams.diseno);
  const Design = designComponents[design.id as keyof typeof designComponents];
  return (
    <ThemeProvider
      key={design.id}
      primaries={gastronomiaPrimaries}
      themes={gastronomiaThemes}
      fonts={gastronomiaFonts}
      designs={gastronomiaDesigns}
      design={design}
    >
      <Design />
    </ThemeProvider>
  );
}
