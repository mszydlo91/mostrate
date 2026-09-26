import { site } from "@/lib/config";

/** Wordmark "mos" + "trate" (acento). */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-syne font-extrabold leading-none tracking-[-0.03em] text-content ${className}`}
    >
      {site.logo.first}
      <span className="text-accent">{site.logo.accent}</span>
    </span>
  );
}
