---
title: "Building autonomy loop: 0 vs 11 safety violations"
slug: building-autonomy-loop
date: 2026-07-10
updatedAt: 2026-07-10
category: "Proof"
excerpt: "A closed-loop building thermal test using real Helsinki geometry and climate. Qorina scored zero safety violations versus eleven for a fixed rule-based controller under the same disturbance."
description: "Proof page for Aether Applied building autonomy loop test: Helsinki geometry, ERA5 climate, reduced-order thermal model, 0 vs 11 safety violations, methods and limitations."
author: "Aether Applied team"
readMinutes: 8
shortAnswer: "We ran a closed-loop building thermal control test with real Helsinki building geometry and climate data. Under the same disturbance, Qorina logged 0 safety violations while a fixed rule-based controller logged 11. This is one benchmark, not a universal guarantee for every building."
relatedLinks:
  - label: "AI uncertainty in critical systems"
    href: "/learn/ai-uncertainty-critical-systems/"
  - label: "Use cases overview"
    href: "/use-cases/"
  - label: "Contact for a shadow test"
    href: "/contact/"
---

This proof documents a building autonomy loop benchmark Aether Applied uses in technical discussions and shadow-test sales cycles. It is designed to be citeable: problem setup, data sources, baseline, result, and explicit limits.

## Problem setup

**Goal:** compare guarded autonomous control against a fixed rule-based controller in a thermal loop where safety violations have operational meaning (comfort bounds, equipment limits, or constraint breaches defined for the test).

**System:** reduced-order thermal model of a building with real Helsinki geometry and ERA5 climate inputs.

**Loop:** closed-loop control over a simulated operating period with matched disturbances applied to both controllers.

## Data and method

| Element | Detail |
| --- | --- |
| Geometry | Real Helsinki building geometry used in the reduced-order model |
| Climate | ERA5 reanalysis weather for the test window |
| Physics model | Reduced-order thermal simulation (lighter than full CFD, fit for control-loop iteration) |
| Baseline | Fixed rule-based controller representing a common legacy approach |
| Candidate | Qorina guarded decision layer in the control loop |
| Disturbance | Identical disturbance profile applied to both runs |
| Metric | Count of defined safety violations during the run |

We report counts, not a single comfort KPI, because the point of the test is whether automation commits unsafe actions under stress.

## Result

Under the shared disturbance:

- **Qorina:** **0** safety violations
- **Fixed controller:** **11** safety violations

Same geometry, same climate window, same disturbance. Different outcomes on the safety metric defined for this benchmark.

## What this proves

- A guarded decision layer can block or avoid unsafe automatic actions in a closed-loop building thermal scenario tied to real location data.
- A fixed controller can accumulate violations when conditions depart from the rules it was tuned for.

## What this does not prove

- **Not every building:** geometry, equipment, and BMS integrations differ. This is one modeled site, not a fleet-wide claim.
- **Not live deployment:** this benchmark uses simulation with real geometry and climate; live pilots require customer-specific shadow tests.
- **Not energy optimality alone:** the headline metric is safety violations, not the lowest kWh at all costs.
- **Not zero human oversight:** operators still set policies, review logs, and decide when to enable automation.

## How to validate on your site

We recommend a read-only shadow test on your historical data before any live change: replay what Qorina would have done, compare against what actually happened, and review disagreement cases with your staff.

## Limitations and updates

Methods, disturbance profiles, and violation definitions may change as we extend the benchmark suite. This page will note material updates in the last updated date above. For questions or raw run summaries under NDA, use the contact page.
