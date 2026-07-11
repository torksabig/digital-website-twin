import Link from "next/link";
import Image from "next/image";
import {
  CONTACT_EMAIL_LABEL,
  CONTACT_MAILTO,
  LINKEDIN_COMPANY_URL,
} from "@/lib/seo/contact";
import { Container } from "./ui";

const COLS = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Qorina", href: "/qorina" },
      { label: "Learn", href: "/learn" },
      { label: "Proof", href: "/proof" },
      { label: "Examples", href: "/use-cases" },
      { label: "Blog", href: "/blog" },
      { label: "Team", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms & Conditions", href: "/legal/terms-conditions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: CONTACT_EMAIL_LABEL, href: CONTACT_MAILTO },
      { label: "Helsinki, Finland", href: "/contact" },
      { label: "LinkedIn", href: LINKEDIN_COMPANY_URL, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero-infrastructure.jpg"
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full object-cover opacity-[0.12] grayscale"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/95 to-ink/90" />
      <Container className="relative z-10 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="text-[18px] font-medium tracking-tight text-white">Aether Applied</span>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/60">
              Safer automation for real-world systems. Qorina helps physical
              infrastructure act when it&apos;s safe, wait when it&apos;s not, and call a
              human when needed. Helsinki, Finland.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-medium uppercase tracking-wide text-white/40">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[15px] text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[14px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Aether Applied. All rights reserved.</p>
          <p>Advanced hardware research · Helsinki</p>
        </div>
      </Container>
    </footer>
  );
}
