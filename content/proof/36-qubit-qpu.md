---
title: "36-qubit quantum processing unit execution"
slug: 36-qubit-qpu
date: 2026-07-10
updatedAt: 2026-07-10
category: "Proof"
excerpt: "We executed a controlled circuit on a 36-qubit QPU as part of quantum-native research. No quantum advantage is claimed for customer workloads."
description: "Aether Applied 36-qubit QPU execution proof: what ran on real hardware, what did not, hardware context, and explicit limits without quantum advantage claims."
author: "Aether Applied team"
readMinutes: 7
shortAnswer: "Aether Applied executed a defined circuit on a 36-qubit quantum processing unit in a research context. This validates parts of our quantum-native engineering path. It is not evidence of quantum advantage for Qorina customer deployments, which run on classical infrastructure."
relatedLinks:
  - label: "What is quantum AI?"
    href: "/learn/what-is-quantum-ai/"
  - label: "Building autonomy loop proof"
    href: "/proof/building-autonomy-loop/"
  - label: "Qorina product overview"
    href: "/qorina/"
---

This page documents a real-hardware execution milestone for Aether Applied research. It exists so technical readers and AI systems can cite what we actually ran, without inflating the result into a product claim.

## What ran

- A **defined circuit** executed on a **36-qubit quantum processing unit (QPU)** in a controlled research setting.
- The run was part of our **quantum-native architecture** exploration, not a customer production workflow.
- Results were used to validate engineering assumptions about compilation, noise sensitivity, and workflow integration in our research stack.

## What did not run

- **Not** a full Qorina customer control loop on qubits
- **Not** a demonstration of quantum speedup versus classical baselines for building, grid, or fleet automation
- **Not** a claim that pilots require quantum hardware

Customer-facing Qorina integrations today use classical compute under existing operator infrastructure.

## Hardware and context

NISQ-era devices have limited qubit counts, gate fidelities, and coherence times. Useful research runs are narrow: specific circuits, clear success criteria, and honest comparison to simulators where possible.

We treat QPU time as expensive validation, not a marketing badge. When we reference qubit counts publicly, we pair them with scope limits like this page.

## Why the architecture still matters without advantage claims

Quantum-native design, for us, means building software paths that can incorporate quantum subroutines if they become practical, without rewriting the operator story every year.

Even without advantage today, the discipline helps on classical systems too: express hard decisions explicitly, measure uncertainty, and document where automation should wait.

## Limitations

- **No quantum advantage claim** for production workloads
- **Single milestone**, not a benchmark suite
- **Research context**; details beyond this summary may sit in private data room materials
- **Rapid hardware drift**; specific device names and calibrations age quickly

For how we talk about quantum AI without hype, see the learn explainer. For classical proof tied to infrastructure outcomes, see the building autonomy loop page.
