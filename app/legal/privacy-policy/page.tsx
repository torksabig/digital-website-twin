import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";
import { CONTACT_EMAIL_OBFUSCATED } from "@/lib/seo/contact";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Aether Applied",
  description:
    "How Aether Applied collects, uses, and protects information when you visit aetherapplied.com, contact us, or evaluate Qorina. Helsinki-based company, GDPR-aware practices.",
  path: "/legal/privacy-policy/",
});

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    body: `This Privacy Policy describes how Aether Applied ("Aether Applied," "we," "us," or "our") collects, uses, discloses, and protects information when you visit https://aetherapplied.com/ (the "Site"), contact us, request information about Qorina, or otherwise interact with us as a visitor, prospect, or customer.

Aether Applied develops Qorina, a physics-grounded foundation model for the physical world. We are based in Helsinki, Finland. This policy applies to information we process in connection with the Site and our business communications. It does not replace separate agreements, data processing addenda, or pilot terms that may apply if you evaluate or use Qorina under contract.

By using the Site, you acknowledge that you have read this Privacy Policy. If you do not agree with it, please do not use the Site.`,
  },
  {
    heading: "Use of our Website",
    body: `You may use the Site only for lawful purposes and in a manner consistent with this policy and any applicable terms. You agree not to:

• Use the Site in any way that violates applicable law or regulation.
• Attempt to gain unauthorized access to our systems, networks, or data.
• Interfere with or disrupt the integrity, security, or performance of the Site.
• Scrape, crawl, harvest, or extract data from the Site except as permitted by us in writing or by applicable law.
• Upload or transmit malware, harmful code, or content that is unlawful, misleading, defamatory, or infringing.
• Misrepresent your identity or affiliation when contacting us or submitting information.

We may suspend or restrict access to the Site if we reasonably believe your use violates these expectations or poses a risk to us, other users, or third parties.`,
  },
  {
    heading: "General Conditions",
    body: `We aim to keep the Site available and accurate, but we do not guarantee uninterrupted access. The Site may be unavailable from time to time for maintenance, updates, security measures, or reasons beyond our control.

We may modify, suspend, or discontinue any part of the Site at any time without prior notice. We may also update this Privacy Policy from time to time. When we make material changes, we will post the updated policy on this page and revise the "Last updated" date below. Your continued use of the Site after changes become effective constitutes acceptance of the revised policy.

Nothing on the Site constitutes an offer to sell, license, or provide Qorina except as expressly stated in a separate written agreement signed by Aether Applied.`,
  },
  {
    heading: "Our Technology",
    body: `The Site provides general information about Qorina and Aether Applied. Access to Qorina technology, demonstrations, evaluations, pilots, or production use is available only under separate written terms agreed with us.

If you participate in a technical discussion, proof-of-concept, pilot, or other evaluation, we may collect and process additional information under a separate agreement, statement of work, or data processing addendum. That agreement will govern how evaluation data, customer data, model inputs, outputs, and related technical information are handled.

Unless otherwise agreed in writing, you may not reverse engineer, copy, benchmark for competitive purposes, sublicense, or use Qorina or related materials except as expressly authorized by Aether Applied.`,
  },
  {
    heading: "Links to Third-Party Websites",
    body: `The Site may contain links to third-party websites, platforms, or services that are not operated or controlled by Aether Applied. We provide these links for convenience only.

We are not responsible for the content, privacy practices, security, or availability of third-party sites or services. Your use of third-party websites is governed by their own terms and privacy policies. We encourage you to review those policies before providing personal information to third parties.`,
  },
  {
    heading: "Comments, Feedback, and Submissions",
    body: `If you contact us, request a technical discussion, subscribe to updates, or otherwise submit information through the Site or by email, you are responsible for ensuring that the information you provide is accurate and that you have the right to share it.

By submitting comments, feedback, ideas, suggestions, or other materials to us (collectively, "Submissions"), you grant Aether Applied a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, and otherwise exploit those Submissions for our business purposes, including product development, marketing, and customer support, without obligation to compensate you, except where prohibited by law.

We are not required to treat Submissions as confidential unless we have agreed otherwise in writing. Do not submit information you consider proprietary or sensitive unless we have executed a non-disclosure or evaluation agreement with you.`,
  },
  {
    heading: "Your Personal Information",
    body: `This section explains how we handle personal information on the Site and in related business communications.

Information we may collect. Depending on how you interact with us, we may collect:
• Contact and identity information, such as your name, email address, phone number, job title, company name, and country.
• Communication information, such as messages you send us, meeting requests, and records of correspondence.
• Technical and usage information, such as IP address, browser type, device information, referring URLs, pages viewed, and approximate location derived from IP address.
• Cookie and analytics data, as described below.
• Business and professional information you choose to provide when requesting information about Qorina or participating in discussions with us.

How we collect information. We collect information when you submit forms, contact us by email, schedule meetings, subscribe to updates, interact with the Site, or communicate with us in other ways. We may also collect technical information automatically through cookies and similar technologies.

How we use information. We use personal information to:
• Operate, maintain, and improve the Site.
• Respond to inquiries and provide requested information.
• Communicate with you about Qorina, events, updates, and opportunities that may interest you.
• Evaluate and manage prospective customer, partner, and pilot relationships.
• Analyze Site usage and performance.
• Protect the security and integrity of our systems and business.
• Comply with legal obligations and enforce our rights.

Legal bases for processing (EEA/UK). Where the GDPR or similar laws apply, we rely on one or more of the following legal bases: your consent; performance of a contract or steps prior to entering a contract; our legitimate interests in operating our business, communicating with prospects and customers, and securing our Site, provided those interests are not overridden by your rights; and compliance with legal obligations.

Cookies and analytics. We may use cookies, local storage, and similar technologies to remember preferences, understand how visitors use the Site, and improve performance. We may use analytics providers that collect aggregated or pseudonymous usage data. You can control cookies through your browser settings. Disabling cookies may affect certain Site functionality.

How we share information. We do not sell your personal information. We may share information with:
• Service providers that help us host the Site, manage communications, provide analytics, schedule meetings, or support our operations, subject to appropriate confidentiality and security obligations.
• Professional advisers, such as lawyers, accountants, or insurers, where necessary.
• Authorities, regulators, or other parties when required by law, legal process, or to protect rights, safety, and security.
• A successor entity in connection with a merger, acquisition, reorganization, or sale of assets, subject to this policy or a successor notice.

International transfers. Aether Applied is based in Finland. If you access the Site from outside the European Economic Area, your information may be transferred to and processed in Finland or other countries where we or our service providers operate. Where required, we use appropriate safeguards for international transfers, such as Standard Contractual Clauses or equivalent mechanisms.

Data retention. We retain personal information only as long as necessary for the purposes described in this policy, including to meet legal, accounting, or reporting requirements. Retention periods vary depending on the type of information and our relationship with you.

Your rights. Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information, and to receive a copy of information we hold about you in a portable format. Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal. You may also have the right to lodge a complaint with your local data protection authority. In Finland, the supervisory authority is the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto).

Children's privacy. The Site is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us and we will take appropriate steps to delete it.

Security. We implement reasonable technical and organizational measures designed to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.

Privacy contact. For privacy requests, questions about this policy, or to exercise your rights, contact ${CONTACT_EMAIL_OBFUSCATED}. We may need to verify your identity before responding to certain requests.`,
  },
  {
    heading: "Errors and Omissions",
    body: `We make reasonable efforts to keep information on the Site current and accurate. However, the Site may contain typographical errors, inaccuracies, or omissions, and content may be changed or updated without notice.

Aether Applied reserves the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. We are under no obligation to update information on the Site unless required by law.`,
  },
  {
    heading: "Disclaimer and Limitation of Liability",
    body: `The Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.

To the fullest extent permitted by applicable law, Aether Applied will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity arising out of or related to your use of, or inability to use, the Site or reliance on its content.

To the fullest extent permitted by applicable law, our total liability for claims arising out of or relating to the Site or this policy will not exceed one hundred euros (EUR 100), except where liability cannot be limited under applicable law.

Nothing in this policy excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud or intentional misconduct.`,
  },
  {
    heading: "Governing Law",
    body: `This Privacy Policy and any dispute or claim arising out of or relating to it or the Site are governed by the laws of Finland, without regard to conflict-of-law principles.

Unless mandatory law provides otherwise, the courts of Helsinki, Finland shall have exclusive jurisdiction over such disputes. If you are a consumer resident in the European Union, you may also have the right to bring proceedings in the courts of your country of residence where required by applicable consumer protection law.

For questions about this Privacy Policy or our handling of personal information, contact ${CONTACT_EMAIL_OBFUSCATED}.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageSeo
        path="/legal/privacy-policy/"
        title="Privacy Policy | Aether Applied"
        description="How Aether Applied collects, uses, and protects information when you visit aetherapplied.com, contact us, or evaluate Qorina. Helsinki-based company, GDPR-aware practices."
      />
      <LegalPage
        title="Privacy Policy"
        intro="How Aether Applied handles information on this site. This policy explains what we collect, how we use it, and the choices available to you."
        sections={SECTIONS}
        footerNote={`Last updated: July 9, 2026. For privacy requests or questions, contact ${CONTACT_EMAIL_OBFUSCATED}.`}
      />
    </>
  );
}
