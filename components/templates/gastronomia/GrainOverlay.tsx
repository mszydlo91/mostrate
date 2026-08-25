/**
 * Textura de grano sutil sobre todo el template. Es el detalle que separa
 * "fondo oscuro plano" de "afiche/menú impreso" — muy barato en código,
 * pero es lo que más cambia la percepción de calidad del diseño.
 */
export default function GrainOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] h-full w-full opacity-[0.05] mix-blend-overlay"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
