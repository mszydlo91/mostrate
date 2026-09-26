/**
 * Diseños de un template: mismo contenido (`lib/templates/<slug>.ts`), distinta
 * composición visual. El diseño activo viaja en la URL (`?diseno=<id>`) para
 * poder compartir cada variante; cada diseño arranca con su tema y su
 * tipografía por defecto, que después se pueden cambiar con los selectores.
 */
export type TemplateDesign = {
  id: string;
  /** Nombre visible en el selector de diseños */
  name: string;
  /** Id del tema de acento (secundario) con el que arranca este diseño */
  theme?: string;
  /** Id del color primario con el que arranca este diseño */
  primary?: string;
  /** Id de la tipografía de títulos con la que arranca este diseño */
  font?: string;
};

/** Devuelve el diseño pedido en la URL o el primero si no existe. */
export function resolveDesign(designs: TemplateDesign[], id?: string | string[]): TemplateDesign {
  const wanted = Array.isArray(id) ? id[0] : id;
  return designs.find((d) => d.id === wanted) ?? designs[0];
}
