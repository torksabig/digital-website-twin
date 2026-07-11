import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* Eyebrow / section label, small uppercase, letter-spaced (AI Supply style) */
export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-block text-[12px] font-semibold uppercase tracking-[0.18em] ${
        dark ? "text-white/45" : "text-ink/45"
      }`}
    >
      {children}
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "light" | "outline" | "outlineLight";
  className?: string;
};

export function Button({
  children,
  href = "/contact",
  variant = "primary",
  className = "",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-[16px] font-medium tracking-[-0.16px] transition-all duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.97]";
  const styles: Record<string, string> = {
    primary: "bg-ink text-white shadow-raised hover:bg-ink/90",
    light: "bg-white text-ink shadow-raised hover:bg-white/90",
    outline: "border border-ink/15 text-ink hover:bg-ink/5",
    outlineLight: "border border-white/20 text-white hover:bg-white/10",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
