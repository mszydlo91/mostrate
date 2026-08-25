/**
 * Link flotante para volver de la demo de un template a la landing de Mostrate.
 * Vive junto a ThemeSwitcher/FontSwitcher: es una herramienta de navegación de
 * la demo, no parte del branding del cliente.
 */
export default function BackToSite() {
  return (
    <a
      href="/"
      className="fixed bottom-4 left-4 z-[120] flex items-center gap-1.5 rounded-full border border-black/10 bg-white/95 px-3 py-2 text-xs font-semibold text-[#5A5F73] shadow-lg backdrop-blur transition-transform hover:scale-105"
    >
      <span aria-hidden>←</span> Volver a Mostrate
    </a>
  );
}
