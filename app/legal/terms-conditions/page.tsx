import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions | Aether Applied",
  description:
    "Terms and conditions for using the Aether Applied website and business communications. Read our policies on data use, consent, and customer access before engaging with Qorina.",
  path: "/legal/terms-conditions/",
});

// TODO: replace copy, placeholder section scaffold, replace with reviewed terms
const SECTIONS: LegalSection[] = [
  { heading: "Introduction", body: "Our commitment to maintaining the accuracy, confidentiality, and security of your information." },
  { heading: "Identifying Purposes", body: "Why we collect personal information and when purposes are identified." },
  { heading: "Consent", body: "How knowledge and consent are handled for collection and use." },
  { heading: "Limiting Collection", body: "We limit collection to what is necessary for stated purposes." },
  { heading: "Limiting Use, Disclosure and Retention", body: "Information used only for the purpose collected, retained only as needed." },
  { heading: "Accuracy", body: "Keeping information accurate, complete, and up to date." },
  { heading: "Safeguarding Information", body: "Security safeguards appropriate to the sensitivity of the data." },
  { heading: "Openness", body: "Making our practices available to you on request." },
  { heading: "Customer Access", body: "Your right to access and correct your information." },
  { heading: "Complaints and Cookies", body: "How to raise questions, and our use of cookies." },
];

export default function TermsConditions() {
  return (
    <>
      <PageSeo
        path="/legal/terms-conditions/"
        title="Terms & Conditions | Aether Applied"
        description="Terms and conditions for using the Aether Applied website and business communications. Read our policies on data use, consent, and customer access before engaging with Qorina."
      />
      <LegalPage
        title="Terms & Conditions"
        intro="Placeholder terms for layout purposes. Replace each section with your organization’s reviewed legal copy."
        sections={SECTIONS}
      />
    </>
  );
}
