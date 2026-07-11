import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Footer } from "@/components/Footer";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import {
  CONTACT_EMAIL_LABEL,
  CONTACT_MAILTO,
  LINKEDIN_COMPANY_URL,
} from "@/lib/seo/contact";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Aether Applied | Book a 30-Minute Call",
  description:
    "Talk to Aether Applied about safer automation for your site. Book a 30-minute call to explore shadow tests, pilots, and whether Qorina fits your building, grid, or fleet.",
  path: "/contact/",
});

const INFO = [
  { label: "Lucas Kuisma", value: "Founder" },
  { label: "Email", value: CONTACT_EMAIL_LABEL, href: CONTACT_MAILTO },
  {
    label: "LinkedIn",
    value: "Aether Applied",
    href: LINKEDIN_COMPANY_URL,
    external: true,
  },
  { label: "Location", value: "Helsinki" },
];

export default function Contact() {
  return (
    <>
      <PageSeo
        path="/contact/"
        title="Contact Aether Applied | Book a 30-Minute Call"
        description="Talk to Aether Applied about safer automation for your site. Book a 30-minute call to explore shadow tests, pilots, and whether Qorina fits your building, grid, or fleet."
        includeFaq
      />
      <Nav />

      <section className="bg-black pt-36 pb-24 text-white sm:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow dark>Contact</Eyebrow>
              <h1 className="font-display mt-6 text-[44px] leading-[1.03] sm:text-[64px]">
                Tell us what&apos;s breaking
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/65">
                One real problem is enough for a useful first call. We will say
                honestly if Qorina fits, or if a shadow test is the right next step.
              </p>

              <Link
                href="/proof/building-autonomy-loop/"
                className="mt-8 inline-flex items-end gap-4 rounded-[20px] border border-white/12 bg-white/[0.04] px-5 py-4 transition-colors hover:bg-white/[0.07]"
              >
                <span className="font-display text-[36px] leading-none text-blue-200">0 vs 11</span>
                <span className="pb-1 text-[14px] leading-snug text-white/65">
                  safety violations in live building test
                  <span className="block text-blue-200">Read the proof →</span>
                </span>
              </Link>

              <div className="mt-10 space-y-6">
                {INFO.map((i) => (
                  <div key={i.label}>
                    <p className="text-[13px] uppercase tracking-wide text-white/40">{i.label}</p>
                    {"href" in i && i.href ? (
                      <a
                        href={i.href}
                        {...("external" in i && i.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-1 inline-block text-[18px] text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white/70"
                      >
                        {i.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[18px]">{i.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQ light />
      <Footer />
    </>
  );
}
