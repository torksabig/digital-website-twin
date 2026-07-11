import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "./ui";
import { Reveal } from "./Reveal";

type CTASectionProps = {
  variant?: "default" | "framer";
};

function FramerCTAButton({ href = "/contact" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-[44px] items-center rounded-full bg-[#1a1714] py-1.5 pl-1.5 pr-6 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#2a2520]"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#f48d16] transition-transform duration-200 group-hover:scale-[1.04]"
        aria-hidden
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3.5L8.5 7L5 10.5"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="pl-3.5">Book a 30-minute call</span>
    </Link>
  );
}

export function CTASection({ variant = "default" }: CTASectionProps) {
  if (variant === "framer") {
    return (
      <section className="bg-blog-paper pb-24 pt-2">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] px-8 py-24 text-center sm:rounded-[32px] sm:px-16 sm:py-28">
              <Image
                src="/images/cta-arch.jpg"
                alt="Modern glass office architecture, desaturated background for call-to-action section"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-900/85 via-ink/80 to-ink/90" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-display text-[40px] leading-[1.05] text-white sm:text-[56px]">
                  Worth a 30-minute conversation?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-[17px] leading-[1.6] text-white/90 sm:text-[18px]">
                  If you run physical infrastructure and automation is either
                  off or stressful, we can show you, on your data, whether a
                  safer decision layer makes sense.
                </p>
                <div className="mt-10 flex justify-center">
                  <FramerCTAButton />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-ink pb-24 pt-4">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-black px-6 py-20 text-center sm:px-16">
            <Image
              src="/images/cta-arch.jpg"
              alt="Modern infrastructure architecture, desaturated background for call-to-action section"
              width={2160}
              height={1440}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 grayscale"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/40" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-[40px] leading-[1.05] text-white sm:text-[56px]">
                Worth a 30-minute conversation?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[17px] text-white/70">
                If you run physical infrastructure and automation is either off
                or stressful, we can show you, on your data, whether a safer
                decision layer makes sense.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="light">
                  Book a 30-minute call
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
