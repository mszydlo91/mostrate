import type { Metadata } from "next";
import { templates } from "@/lib/config";
import PlaceholderTemplate from "@/components/templates/PlaceholderTemplate";

const data = templates.items.find((t) => t.slug === "bienestar")!;

export const metadata: Metadata = {
  title: `Template ${data.name} — Mostrate`,
  description: data.desc,
};

export default function BienestarTemplatePage() {
  return (
    <PlaceholderTemplate
      name={data.name}
      tag={data.tag}
      desc={data.desc}
      accent={data.accent}
    />
  );
}
