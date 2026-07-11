# Aether Applied — Site Copy (Archive)

> **Current copy:** See [`COPY-PLAIN.md`](./COPY-PLAIN.md) for the active plain-language site strings (July 9, 2026).  
> **Terminology:** See [`docs/words-to-avoid.md`](./docs/words-to-avoid.md) for internal jargon guidance.

Extracted from https://aetherapplied.com/ and local repo source (`web-tools/aether-applied-website`).

**Last extracted:** July 9, 2026 (technical/marketing archive below)

---

## Source notes

| Area | Live site | Local repo |
|------|-----------|------------|
| Marketing pages | Deployed | Matches live (minor wording differences noted below) |
| Privacy Policy | **Placeholder** ("being finalized") | **Full policy** (updated July 9, 2026) — not yet live |
| Terms & Conditions | Placeholder | Placeholder |

**Live vs local differences:**
- **Privacy Policy:** Live site still shows stub sections. Local repo has complete policy (included below in full).
- **Use Cases — Building case:** Live: "Building autonomy · Helsinki" / "Designs it, then operates it" / stack: "Real Helsinki geometry + ERA5 climate, reduced-order physics". Local: "Live building · Helsinki" / "Designs it, then runs it" / stack: "Real site, real ERA5 climate, live loop".
- **Homepage benchmarks:** Live shows "0.98+" multiphysics stat; local shows "0.99 / 1.0" physics correlation.
- **Testimonials:** Live uses "reduced-order physics model" wording; local uses "on a live loop, not a simulator".
- **About team:** Local repo includes Luciano Rodriguez (Infrastructure Management); not on live site.
- **Footer nav label:** Footer links to use-cases as "The substrate"; main nav uses "The proof".

---

## Global

### Site metadata

- **Title:** Aether Applied · Qorina, a new kind of intelligence for the physical world
- **Description:** Qorina is a physics-grounded foundation model that knows what it doesn't know. It perceives, designs, decides, speaks and creates, carries a calibrated sense of how sure it is, and commits, holds or escalates, never bluffing with the keys. The intelligence between action and consequence.

### Navigation

**Brand:** Aether Applied

**Links:**
- The proof → `/use-cases`
- Team → `/about`
- Careers → `/careers`
- Contact → `/contact`

**CTA:** Talk to us → `/contact`

### Footer

**Tagline:**
> A new kind of intelligence for the physical world, one that knows what it doesn't know. The intelligence between action and consequence. Helsinki, Finland.

**Pages**
- Home → `/`
- The substrate → `/use-cases`
- Team → `/about`
- Careers → `/careers`
- Contact → `/contact`

**Legal**
- Privacy Policy → `/legal/privacy-policy`
- Terms & Conditions → `/legal/terms-conditions`

**Contact**
- lucas.kuisma@aetherapplied.com
- Helsinki, Finland
- LinkedIn → https://fi.linkedin.com/company/aetherapplied

**Copyright:** © {year} Aether Applied. All rights reserved.

**Tagline (bottom):** Useful today on GPU · native on real quantum hardware.

### Shared CTAs

- Request a technical discussion → `/contact`
- See the proof → `/use-cases`
- Talk to us → `/contact`
- View open roles → `/careers`
- Apply → `/contact`
- Send message (contact form)

### Shared closing CTA band

**Headline:** The intelligence between action and consequence

**Body:** Building autonomy that has to be safe, or discovery that has to be real? Let's talk about where Qorina fits.

**Button:** Request a technical discussion

---

## Homepage (`/`)

### Hero

**Eyebrow:** Introducing Qorina

**Headline:** A new kind of intelligence for the physical world

**Body:** One that knows what it doesn't know. Qorina is a physics-grounded foundation model that perceives, designs, decides, speaks and creates, and carries a calibrated sense of how sure it is. It commits when confident, holds when unsure, and never bluffs with the keys.

**CTAs:** Request a technical discussion · See the proof

**Marquee:** Physics-grounded / Calibrated / Quantum-native / Rails: NVIDIA · QPUs

### What Qorina is

**Eyebrow:** What Qorina is

**Headline:** All three kinds of AI, without the blind spot

**01 — Physics-grounded**
One belief about a real system, grounded in real materials, real climate, real sensors. A foundation model for the physical world, not a chatbot with a safety filter.

**02 — Calibrated**
It carries a calibrated sense of how sure it is, and tells genuine novelty apart from a coin-flip. One model that knows when it doesn't know.

**03 — Quantum-native**
The whole model runs end-to-end on a real 36-qubit quantum computer. The architecture is the edge today; the hardware is a future option, de-risked now.

### Trusted autonomy

**Eyebrow:** Trusted autonomy

**Headline:** Commit. Hold. Escalate.

**Tabs:** Commit · Hold · Escalate

**Flow diagram:**
1. Inputs: camera · sensors · design params
2. One physics-grounded belief
3. Novelty or conflict?
4. Evidence of safety present?
5. No evidence → unsafe action never forms
6. Calibrated confidence clears the bar?
7. Commit · Hold · Escalate

**01 – Commit — Confident and familiar**
Qorina acts instantly and alone, the everyday majority of decisions. No babysitter, no human in the loop, because the evidence of safety is there.

**02 – Hold — Unsure**
It falls back to the known-safe action. It never guesses. Abstain isn't a shrug, it's a deliberate, safe move when confidence hasn't cleared the bar.

**03 – Escalate — Needs a human**
It hands the decision over with its reasoning and its confidence, not a blank error. It knows what it doesn't know, and never bluffs with the keys.

### Proof (benchmarks)

**Eyebrow:** Proof

**Headline:** Safe by construction, measured on real systems

**Intro:** Not trained to be safe. Not hard-coded. Unsafe commitments fail a runtime contract, so the unsafe action never forms, rather than being penalised after the fact.

| Stat | Label | Body |
|------|-------|------|
| 0.000 | unsafe, by construction | Across cyber, power grid, robotics and driving, the unsafe action never forms, no positive evidence, no commitment. |
| 0 vs 11 | safety violations, building loop | A building-autonomy loop on real Helsinki geometry + climate (reduced-order physics) vs a fixed controller's 11, under the same disturbance. |
| 94.9% | accuracy when it commits | On held-out decisions it commits to. It commits on 53% today and abstains on the rest rather than guess. |
| 36 qubits | whole model on a real QPU | Perceive, decide, speak and compose, run end-to-end on a real quantum computer. |
| 0.98+ / 0.99–1.0 | multiphysics / physics correlation | Held-out multiphysics (0.977–0.995) on real materials and real Helsinki climate, on data never seen in training. |
| 4 of 7 | real datasets won or tied | Against the strongest classical baselines. We show the 3 we lose, a serious reviewer notices what you hide. |

**Disclaimer:** Small scale, 10 episodes, reproducible from run JSONs. The world model is classically matchable today, the moat is feasible-by-construction, composition and calibration, not raw prediction. No quantum advantage claimed yet, the architecture is the edge.

### The architecture

**Eyebrow:** The architecture

**Headline:** One belief. Many faculties.

**Tabs:** Perceive · Design · Decide · Speak · Create

**Perceive:** Reads a camera image and sensor data into one belief about the system. ≈0.99 correlation on held-out physics (0.977–0.995), and 0.82 agreement between what it sees and what the design parameters say.

**Design:** Proposes only feasible designs. 100% rejection of the physically impossible, refused by the structural law itself, not a trained classifier.

**Decide:** Commits, holds, or escalates, calibrated and abstaining rather than guessing. Unsafe commitments are zero by contract.

**Speak:** Explains itself physics-grounded, handing over its reasoning and its confidence, not a blank error.

**Create:** Invents design combinations never seen in training at 0.99 physics correlation, and flags the physically invalid ones.

### Positioning

**Eyebrow:** Positioning

**Headline:** Autonomy is table stakes. Safety isn't.

- **Acts autonomously** — Handles the everyday majority of decisions instantly and alone, no babysitter.
- **Knows it's unsure** — Carries a calibrated sense of confidence, and keeps novelty and conflict apart.
- **Won't act unsafely** — Unsafe commitments fail a runtime contract, so the unsafe action never forms.
- **Physics-grounded** — One belief about the real world, real materials and real climate, not tokens.
- **Composes and generalizes** — Reaches the genuinely new where pattern-matchers fail silently.
- **Quantum-native** — Runs end-to-end on real quantum hardware, a future option de-risked today.

### The flaw

**Eyebrow:** The flaw

**Headline:** It is never unsure, and can't tell the difference until it's too late

**Body:** Today's AI approves the loan, reroutes the grid, doses the patient, with the same certainty whether it's right or catastrophically wrong. Doubt is the thing that prevents catastrophe. Qorina has it.

**Today's AI**
- Fluent and confident, no grounding in physical truth
- Fails silently outside its training data
- Acts with the same certainty right or wrong
- Never unsure, can't tell until it's too late

**With Qorina**
- One physics-grounded belief about the real world
- Reaches the new where pattern-matchers collapse
- Carries a calibrated sense of how sure it is
- Commits, holds, or escalates, never bluffs

### It operates and it discovers

**Eyebrow:** It operates and it discovers

**Headline:** It doesn't just decide. It builds.

**Quote 1:**
> "Qorina designed a building grounded in real Helsinki geometry and climate, then ran a building-autonomy control loop on a reduced-order physics model. Under the same disturbance it logged zero safety violations against a fixed controller's eleven, while holding comfort and trimming energy."

- **Label:** Building-autonomy loop
- **Role:** Real Helsinki geometry + climate, simulated physics
- **Stat:** 0 vs 11 safety violations

**Quote 2:**
> "The whole model, perceive, decide, speak and compose, ran end-to-end on a real 36-qubit quantum computer. We claim no advantage today, the value is the architecture, calibration and composition, and the future is de-risked."

- **Label:** Real quantum hardware
- **Role:** 36-qubit QPU
- **Stat:** 36q end-to-end on a real QPU

### Integration

**Eyebrow:** Integration

**Headline:** A foundation layer that drops into your stack

**Intro:** Not a chatbot with a safety filter. One physics-grounded belief that knows what it doesn't know, sitting under the systems you already run.

**01 — One belief under everything**
Qorina sits as the foundation layer beneath your agents and controllers, one physics-grounded belief that perceives, reasons and decides, not a bolt-on filter.

**02 — Calibrated at every step**
It carries how sure it is through every faculty, keeping novelty and conflict apart, so the rest of your stack always knows when to trust it.

**03 — Commit, hold, or escalate**
Where there's no evidence of safety, the unsafe action never forms. It acts when confident, holds when unsure, and hands off with its reasoning when it can't.

---

## The proof / Use cases (`/use-cases`)

### Hero

**Eyebrow:** The proof

**Headline:** Measured on real systems, honest about the boundary

**Sidebar:** Safe by construction across cyber, power grid, robotics and driving. A real building, run live. The whole model on a real quantum computer.

### Case studies

**Cyber defense · NASim — Safe by construction**
- Outcome: Zero unsafe commitments, goal reached 100% (10/10).
- Stack: Guarded controller, runtime safety contract
- Workflow: No positive evidence of safety, no commitment → Unsafe action never forms, not penalised after → Task still solved, not paralysed

**Power grid · grid2op — Survives the disturbance**
- Outcome: 0.000 unsafe, 100% grid survival, top score 291.9.
- Stack: Guarded controller vs uncontrolled baseline
- Workflow: Guarded run keeps the grid alive → Uncontrolled run blacks out → Guarded controller wins the benchmark outright

**Building autonomy · Helsinki — Designs it, then operates it** *(live site)*
- Outcome: 0 vs 11 safety violations under the same disturbance.
- Stack: Real Helsinki geometry + ERA5 climate, reduced-order physics
- Workflow: Designs the building from real physics data → Operates it in a control loop with commit / hold → Holds comfort while trimming energy

**Real quantum · 36 qubits — Whole model on a QPU**
- Outcome: Perceive, decide, speak, compose, end-to-end on hardware.
- Stack: Real 36-qubit quantum computer
- Workflow: Runs end-to-end on real qubits → Trained on-device above the 24-qubit wall → No advantage claimed, architecture is the edge

### The problem

**Eyebrow:** The problem

**Headline:** Three kinds of AI. One blind spot they share.

**Plain LLM**
- Fluent and confident, no grounding in physical truth
- Fails silently outside its training data
- Same certainty whether right or catastrophically wrong
- Never unsure, can't tell until it's too late
- Safety bolted on as a filter after the fact

**With Qorina**
- One physics-grounded belief about the real world
- Reaches the new where pattern-matchers collapse
- Carries a calibrated sense of how sure it is
- Commits, holds, or escalates, never bluffs
- Unsafe action never forms, safe by construction

### Stats band

**Eyebrow:** Proof

**Headline:** Measured, not promised

- **0** — Unsafe commitments, by construction, across four safety domains
- **95%** — Decision accuracy on the cases it commits to
- **36q** — The whole model runs end-to-end on a real quantum computer

---

## About (`/about`)

### Hero

**Eyebrow:** About

**Headline:** Intelligence built the way the physical world works

**Body:** Aether Applied builds Qorina, a physics-grounded foundation model that knows what it doesn't know. Helsinki, Finland. The intelligence between action and consequence.

**Sidebar (Aether Applied):** One physics-grounded belief, read into five faculties. It perceives, designs, decides, speaks and creates, and knows how sure it is.

### Our mission

A surgeon stops at the cut she isn't sure of. A pilot runs the checklist one more time. Doubt is not weakness, it is the thing that prevents catastrophe. Today's AI has none of it. So we built intelligence the way the physical world actually works: one physics-grounded belief that knows when it doesn't know, and never bluffs with the keys.

### Team

**Eyebrow:** Team

**Headline:** Meet the team

**Intro:** A Helsinki team across research, engineering, and go-to-market, building a physics-grounded foundation model for the physical world.

| Name | Role |
|------|------|
| Lucas Kuisma | Founder & CEO |
| Reidar Wasenius | Strategy, Business Development & AI |
| Ina Feimi | International Operations |
| Teodor Pavel-Hiidenlampi | Sales & UX |
| Vincent Braun | Sales & Marketing |
| Leevi Manninen | Sales & Customer Success |
| Luciano Rodriguez | Infrastructure Management *(local repo only)* |

### We're hiring

**Eyebrow:** We're hiring

**Headline:** Come build with us

**CTA:** View open roles

We're building a foundation model for the physical world, one physics-grounded belief that perceives, designs, decides, speaks and creates, and knows when it doesn't know.

We're Helsinki-based and deep-tech to the core: calibration, uncertainty, and native quantum hardware. Everyone here ships, owns, and reports results honestly.

We hire like we build: lean, deliberate, and focused on being right when it matters.

---

## Contact (`/contact`)

**Eyebrow:** Contact

**Headline:** Talk to us

**Body:** Building autonomy that has to be safe, or discovery that has to be real? Tell us what you're working on and where Qorina fits.

**Contact info:**
- Lucas Kuisma — Founder & CEO
- Email: lucas.kuisma@aetherapplied.com
- Phone: +358 45 350 0890
- Location: Helsinki, Finland

**Form fields:** First name · Last name · Email · Company · Message

**Message placeholder:** What's slowing your team down?

**Submit:** Send message

**Success:** Thanks, we'll be in touch

---

## Careers (`/careers`)

### Hero

**Eyebrow:** Careers

**Headline:** Build a model that knows its limits

**Body:** We're a Helsinki deep-tech team building Qorina, calibration, uncertainty, and native quantum hardware. We value rigor, honest benchmarks, and being right when it matters.

**Sidebar:** Helsinki-based, deep-tech, research-led. Everyone ships, owns, and reports results honestly.

### Open roles

**Eyebrow:** Open roles

**Headline:** Where you fit in

| Role | Team | Type |
|------|------|------|
| Research Engineer, Calibration & Uncertainty | Research | Full-time · Helsinki / Remote |
| Quantum ML Engineer | Research | Full-time · Helsinki / Remote |
| Founding Account Executive | Go-to-market | Full-time · Helsinki / Remote |

**CTA per role:** Apply

---

## FAQ (shared component)

**Eyebrow:** FAQ

**Headline:** Frequently asked questions

### What is Qorina?

A physics-grounded foundation model for the physical world. One belief about a system, read into five faculties, perceive, design, decide, speak and create, carrying a calibrated sense of how sure it is. Not a chatbot with a safety filter.

### What does "knows what it doesn't know" mean?

Qorina carries a calibrated confidence and keeps two uncertainties apart, novelty (this is new) versus conflict (this is a coin-flip), because the right move differs for each. When confidence hasn't cleared the bar it holds or escalates instead of guessing.

### How is it safe?

Safety is by construction, not a trained filter. Where there's no positive evidence of safety, no commitment forms, so the unsafe action never exists rather than being penalised after the fact. Across cyber, power grid, robotics and driving, unsafe commitments are zero.

### What does quantum actually mean here?

The whole model runs end-to-end on a real 36-qubit quantum computer. We claim no advantage today, the value is the architecture, calibration and composition. Quantum's real edge is simulating nature itself, a validated future option, de-risked now.

### How honest are the numbers?

We show our losses. The world model is classically matchable today and 3 of 7 real datasets we lose, stated plainly, a serious reviewer notices what you hide. The moat is feasible-by-construction, composition and calibration.

---

## Privacy Policy (`/legal/privacy-policy`)

> **Note:** Full text below is from the local repo (updated July 9, 2026). The live site still shows placeholder copy as of extraction date.

**Title:** Privacy Policy

**Intro:** How Aether Applied handles information on this site. This policy explains what we collect, how we use it, and the choices available to you.

**Footer note:** Last updated: July 9, 2026. For privacy requests or questions, contact lucas.kuisma@aetherapplied.com.

### 1. Introduction

This Privacy Policy describes how Aether Applied ("Aether Applied," "we," "us," or "our") collects, uses, discloses, and protects information when you visit https://aetherapplied.com/ (the "Site"), contact us, request information about Qorina, or otherwise interact with us as a visitor, prospect, or customer.

Aether Applied develops Qorina, a physics-grounded foundation model for the physical world. We are based in Helsinki, Finland. This policy applies to information we process in connection with the Site and our business communications. It does not replace separate agreements, data processing addenda, or pilot terms that may apply if you evaluate or use Qorina under contract.

By using the Site, you acknowledge that you have read this Privacy Policy. If you do not agree with it, please do not use the Site.

### 2. Use of our Website

You may use the Site only for lawful purposes and in a manner consistent with this policy and any applicable terms. You agree not to:

- Use the Site in any way that violates applicable law or regulation.
- Attempt to gain unauthorized access to our systems, networks, or data.
- Interfere with or disrupt the integrity, security, or performance of the Site.
- Scrape, crawl, harvest, or extract data from the Site except as permitted by us in writing or by applicable law.
- Upload or transmit malware, harmful code, or content that is unlawful, misleading, defamatory, or infringing.
- Misrepresent your identity or affiliation when contacting us or submitting information.

We may suspend or restrict access to the Site if we reasonably believe your use violates these expectations or poses a risk to us, other users, or third parties.

### 3. General Conditions

We aim to keep the Site available and accurate, but we do not guarantee uninterrupted access. The Site may be unavailable from time to time for maintenance, updates, security measures, or reasons beyond our control.

We may modify, suspend, or discontinue any part of the Site at any time without prior notice. We may also update this Privacy Policy from time to time. When we make material changes, we will post the updated policy on this page and revise the "Last updated" date below. Your continued use of the Site after changes become effective constitutes acceptance of the revised policy.

Nothing on the Site constitutes an offer to sell, license, or provide Qorina except as expressly stated in a separate written agreement signed by Aether Applied.

### 4. Our Technology

The Site provides general information about Qorina and Aether Applied. Access to Qorina technology, demonstrations, evaluations, pilots, or production use is available only under separate written terms agreed with us.

If you participate in a technical discussion, proof-of-concept, pilot, or other evaluation, we may collect and process additional information under a separate agreement, statement of work, or data processing addendum. That agreement will govern how evaluation data, customer data, model inputs, outputs, and related technical information are handled.

Unless otherwise agreed in writing, you may not reverse engineer, copy, benchmark for competitive purposes, sublicense, or use Qorina or related materials except as expressly authorized by Aether Applied.

### 5. Links to Third-Party Websites

The Site may contain links to third-party websites, platforms, or services that are not operated or controlled by Aether Applied. We provide these links for convenience only.

We are not responsible for the content, privacy practices, security, or availability of third-party sites or services. Your use of third-party websites is governed by their own terms and privacy policies. We encourage you to review those policies before providing personal information to third parties.

### 6. Comments, Feedback, and Submissions

If you contact us, request a technical discussion, subscribe to updates, or otherwise submit information through the Site or by email, you are responsible for ensuring that the information you provide is accurate and that you have the right to share it.

By submitting comments, feedback, ideas, suggestions, or other materials to us (collectively, "Submissions"), you grant Aether Applied a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, and otherwise exploit those Submissions for our business purposes, including product development, marketing, and customer support, without obligation to compensate you, except where prohibited by law.

We are not required to treat Submissions as confidential unless we have agreed otherwise in writing. Do not submit information you consider proprietary or sensitive unless we have executed a non-disclosure or evaluation agreement with you.

### 7. Your Personal Information

This section explains how we handle personal information on the Site and in related business communications.

**Information we may collect.** Depending on how you interact with us, we may collect:

- Contact and identity information, such as your name, email address, phone number, job title, company name, and country.
- Communication information, such as messages you send us, meeting requests, and records of correspondence.
- Technical and usage information, such as IP address, browser type, device information, referring URLs, pages viewed, and approximate location derived from IP address.
- Cookie and analytics data, as described below.
- Business and professional information you choose to provide when requesting information about Qorina or participating in discussions with us.

**How we collect information.** We collect information when you submit forms, contact us by email, schedule meetings, subscribe to updates, interact with the Site, or communicate with us in other ways. We may also collect technical information automatically through cookies and similar technologies.

**How we use information.** We use personal information to:

- Operate, maintain, and improve the Site.
- Respond to inquiries and provide requested information.
- Communicate with you about Qorina, events, updates, and opportunities that may interest you.
- Evaluate and manage prospective customer, partner, and pilot relationships.
- Analyze Site usage and performance.
- Protect the security and integrity of our systems and business.
- Comply with legal obligations and enforce our rights.

**Legal bases for processing (EEA/UK).** Where the GDPR or similar laws apply, we rely on one or more of the following legal bases: your consent; performance of a contract or steps prior to entering a contract; our legitimate interests in operating our business, communicating with prospects and customers, and securing our Site, provided those interests are not overridden by your rights; and compliance with legal obligations.

**Cookies and analytics.** We may use cookies, local storage, and similar technologies to remember preferences, understand how visitors use the Site, and improve performance. We may use analytics providers that collect aggregated or pseudonymous usage data. You can control cookies through your browser settings. Disabling cookies may affect certain Site functionality.

**How we share information.** We do not sell your personal information. We may share information with:

- Service providers that help us host the Site, manage communications, provide analytics, schedule meetings, or support our operations, subject to appropriate confidentiality and security obligations.
- Professional advisers, such as lawyers, accountants, or insurers, where necessary.
- Authorities, regulators, or other parties when required by law, legal process, or to protect rights, safety, and security.
- A successor entity in connection with a merger, acquisition, reorganization, or sale of assets, subject to this policy or a successor notice.

**International transfers.** Aether Applied is based in Finland. If you access the Site from outside the European Economic Area, your information may be transferred to and processed in Finland or other countries where we or our service providers operate. Where required, we use appropriate safeguards for international transfers, such as Standard Contractual Clauses or equivalent mechanisms.

**Data retention.** We retain personal information only as long as necessary for the purposes described in this policy, including to meet legal, accounting, or reporting requirements. Retention periods vary depending on the type of information and our relationship with you.

**Your rights.** Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information, and to receive a copy of information we hold about you in a portable format. Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal. You may also have the right to lodge a complaint with your local data protection authority. In Finland, the supervisory authority is the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto).

**Children's privacy.** The Site is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us and we will take appropriate steps to delete it.

**Security.** We implement reasonable technical and organizational measures designed to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.

**Privacy contact.** For privacy requests, questions about this policy, or to exercise your rights, contact lucas.kuisma@aetherapplied.com. We may need to verify your identity before responding to certain requests.

### 8. Errors and Omissions

We make reasonable efforts to keep information on the Site current and accurate. However, the Site may contain typographical errors, inaccuracies, or omissions, and content may be changed or updated without notice.

Aether Applied reserves the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. We are under no obligation to update information on the Site unless required by law.

### 9. Disclaimer and Limitation of Liability

The Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.

To the fullest extent permitted by applicable law, Aether Applied will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity arising out of or related to your use of, or inability to use, the Site or reliance on its content.

To the fullest extent permitted by applicable law, our total liability for claims arising out of or relating to the Site or this policy will not exceed one hundred euros (EUR 100), except where liability cannot be limited under applicable law.

Nothing in this policy excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud or intentional misconduct.

### 10. Governing Law

This Privacy Policy and any dispute or claim arising out of or relating to it or the Site are governed by the laws of Finland, without regard to conflict-of-law principles.

Unless mandatory law provides otherwise, the courts of Helsinki, Finland shall have exclusive jurisdiction over such disputes. If you are a consumer resident in the European Union, you may also have the right to bring proceedings in the courts of your country of residence where required by applicable consumer protection law.

For questions about this Privacy Policy or our handling of personal information, contact lucas.kuisma@aetherapplied.com.

---

## Terms & Conditions (`/legal/terms-conditions`)

> **Note:** Placeholder on both live site and local repo. Replace with reviewed legal copy.

**Title:** Terms & Conditions

**Intro (live):** The terms that apply to this site and to evaluating Qorina. These are being finalized; for questions in the meantime, contact lucas.kuisma@aetherapplied.com.

**Intro (local):** Placeholder terms for layout purposes. Replace each section with your organization's reviewed legal copy.

**Footer (live):** This document is being finalized. For any questions, contact lucas.kuisma@aetherapplied.com.

### Sections (placeholder summaries)

1. **Introduction** — Our commitment to maintaining the accuracy, confidentiality, and security of your information.
2. **Identifying Purposes** — Why we collect personal information and when purposes are identified.
3. **Consent** — How knowledge and consent are handled for collection and use.
4. **Limiting Collection** — We limit collection to what is necessary for stated purposes.
5. **Limiting Use, Disclosure and Retention** — Information used only for the purpose collected, retained only as needed.
6. **Accuracy** — Keeping information accurate, complete, and up to date.
7. **Safeguarding Information** — Security safeguards appropriate to the sensitivity of the data.
8. **Openness** — Making our practices available to you on request.
9. **Customer Access** — Your right to access and correct your information.
10. **Complaints and Cookies** — How to raise questions, and our use of cookies.
