"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./ui";

const LINKS = [
  { label: "Qorina", href: "/qorina" },
  { label: "Learn", href: "/learn" },
  { label: "Proof", href: "/proof" },
  { label: "Examples", href: "/use-cases" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LIGHT_PREFIXES = ["/blog", "/learn", "/proof"];

function isLightNav(pathname: string) {
  return LIGHT_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const light = isLightNav(pathname);

  const shell = light
    ? "border-ink/10 bg-white/80 text-ink backdrop-blur-xl"
    : "border-white/10 bg-black/40 text-white backdrop-blur-xl";

  const linkBase = light
    ? "text-[15px] transition-colors hover:text-ink"
    : "text-[15px] text-white/80 transition-colors hover:text-white";

  const linkActive = light ? "font-medium text-blue-900" : "font-medium text-white";

  const ctaClass = light
    ? "hidden rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-ink/90 sm:inline-flex min-h-[44px] items-center"
    : "hidden rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:bg-white/90 sm:inline-flex min-h-[44px] items-center";

  const menuBtn = light
    ? "flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-ink/15 md:hidden"
    : "flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 md:hidden";

  const mobilePanel = light
    ? "mt-2 rounded-3xl border border-ink/10 bg-white/95 p-4 backdrop-blur-xl md:hidden"
    : "mt-2 rounded-3xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden";

  const mobileLink = light
    ? "block min-h-[44px] rounded-xl px-3 py-3 text-ink/80 hover:bg-ink/5"
    : "block min-h-[44px] rounded-xl px-3 py-3 text-white/80 hover:bg-white/5";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <nav className={`appear flex items-center justify-between rounded-full border px-4 py-2.5 ${shell}`}>
          <Link
            href="/"
            className={`flex items-center gap-2 pl-2 ${light ? "text-ink" : "text-white"}`}
          >
            <span className="text-[17px] font-medium tracking-tight">Aether Applied</span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${linkBase} ${isActiveLink(pathname, l.href) ? linkActive : light ? "text-ink/70" : ""}`}
                  aria-current={isActiveLink(pathname, l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/contact" className={ctaClass}>
              Book a 30-minute call
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={menuBtn}
            >
              <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div className={mobilePanel}>
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`${mobileLink} ${isActiveLink(pathname, l.href) ? (light ? "font-medium text-blue-900" : "font-medium text-white") : ""}`}
                    aria-current={isActiveLink(pathname, l.href) ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`mt-1 block min-h-[44px] rounded-full px-3 py-3 text-center font-medium ${
                    light ? "bg-ink text-white" : "bg-white text-ink"
                  }`}
                >
                  Book a 30-minute call
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
