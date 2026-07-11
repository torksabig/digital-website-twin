# Aether Applied: Plain-Language Site Copy

**Implemented:** July 9, 2026  
**Source of truth** for public-facing marketing pages. See `docs/words-to-avoid.md` for internal terminology guidance.

> **Note:** `COPY.md` contains the previous technical/marketing copy archive. Use this file (`COPY-PLAIN.md`) for current site strings.

---

## Global

**Site title:** Aether Applied · Qorina: safer automation for real-world systems  
**Short description:** Qorina helps physical systems decide when to act automatically, when to wait, and when to call a human. It won't guess when it's unsure. Based in Helsinki.  
**Main button:** Book a 30-minute call

---

## Homepage

### Hero

**Small label:** Qorina by Aether Applied  
**Big headline:** Automation should know when to stop.  
**Main text:** When a system controls heating, charging, or power, a wrong automatic decision costs real money, or creates real risk. Qorina is decision software that sits under what you already use. It helps your system: Act when the situation is clear and safe; Wait when it's not sure (and use the safe default); Call a human when something unusual needs eyes on it. It explains why, not just "error 404."  
**Buttons:** Book a 30-minute call · See real examples  
**Small line under buttons:** We can start with a read-only test on your data. Nothing changes in production.

### The problem

**Headline:** Most AI sounds confident even when it's wrong.  
**Bullets:**
- It wasn't built around real physics: walls, wires, weather, load limits.
- It treats a normal Tuesday the same as a weird edge case.
- When it's unsure, it often guesses anyway.

**One line:** For chatbots, that's annoying. For buildings and grids, it's expensive.

### What Qorina does differently

**Headline:** Three simple rules

| | Typical AI | Qorina |
|---|------------|--------|
| Reality | Talks about the world | Grounded in how the physical system actually behaves |
| Confidence | Always sounds sure | Knows when it doesn't know |
| Safety | Fix mistakes after | Blocks unsafe actions before they happen |

**Closing:** Not a chatbot. A decision layer for systems that can't afford silent mistakes.

### How decisions work

**Headline:** Act. Wait. Call a human.

1. **Act:** Routine situation, clear evidence. System moves on its own. No one babysitting.
2. **Wait:** Not sure? Do the safe thing. Not guessing is a feature.
3. **Call a human:** Something new or conflicting? Alert a person with a plain explanation, not a useless alarm.

**Caption:** Data in → "Is this safe and familiar?" → Act / Wait / Call human

### Real results

**Headline:** Tested on real scenarios: we show the limits too

- **0:** Unsafe automatic actions in our safety tests, blocked before they could run
- **0 vs 11:** Same building stress test: our approach had 0 safety problems; the old approach had 11
- **~95%:** When we do act automatically, we're right about 95% of the time
- **Half the time:** We deliberately don't act, because waiting is safer than guessing

**Honest note:** We're early-stage. Numbers come from controlled tests. We also publish where other methods beat us. The point isn't "perfect AI." It's don't automate when you shouldn't.

### Who this is for

**Headline:** If bad automation costs you money or sleep

- **Charging & fleet operators:** peaks, bills, 2am phone calls
- **Building & property teams:** comfort, energy, safety together
- **Grid & energy teams:** limits, disturbances, trust on bad days
- **Anyone** who has automation turned off because nobody trusts it

### How we start

**Headline:** Try it without risk

1. **30-minute call:** You describe one real problem. We say honestly if we can help.
2. **Read-only comparison ("shadow test"):** We look at past data from one site and show: "Here's what your system did vs what we would have done." You change nothing. We touch nothing.
3. **Small pilot (only if step 2 is interesting):** One location, strict limits, you can pull the plug anytime.

**Button:** Book a 30-minute call

### Closing

**Headline:** Worth a 30-minute conversation?  
**Text:** If you run physical infrastructure and automation is either off or stressful, we can show you, on your data, whether a safer decision layer makes sense.  
**Button:** Book a call

---

## Proof / Examples page (`/use-cases`)

**Headline:** Real examples, honest boundaries  
**Text:** Not marketing promises. Measured tests on grids, buildings, and safety scenarios.

1. **Cyber defense test:** Task completed. Zero unsafe automatic actions.
2. **Power grid test:** Grid stayed up under stress. Unguarded approach failed.
3. **Helsinki building:** Used real building shape and real weather data. Ran heating/control loop. Zero safety issues vs eleven with the old fixed approach, same stress applied to both.
4. **Quantum hardware test:** We proved the design can run on advanced hardware. You don't need quantum to use this. It's R&D for the future, not a sales requirement.

---

## About

**Headline:** Built for the physical world, not the internet  
**Text:** A surgeon stops when unsure. A pilot runs the checklist again. Good operators know when not to act. Most AI doesn't. We built Qorina so automated systems can act when it's safe, pause when it's not, and explain themselves when a human is needed.  
**Location:** Helsinki, Finland

---

## Contact

**Headline:** Tell us what's breaking  
**Prompt ideas:** Surprise electricity bills / Too many alarms, not enough people / Automation you won't turn on / New sites sized wrong  
**Contact:** Lucas Kuisma · Founder · lucas.kuisma@aetherapplied.com · Helsinki

---

## FAQ

**What is Qorina?** Software that helps physical systems decide: act automatically, wait safely, or get a human, based on real-world constraints, not just patterns in old data.

**Is this ChatGPT for buildings?** No. Chatbots talk. Qorina decides, and refuses to decide when it shouldn't.

**How is it "safe"?** If there isn't evidence an action is safe, the action doesn't happen. It's blocked upfront, not fixed after damage.

**Do we need new hardware or to replace our platform?** Usually no. It sits under what you already run. We start read-only.

**What's a "shadow test"?** We replay your historical data and show what we would have done, without changing anything live. Like a dress rehearsal.

**What does it cost?** First call is free. Shadow test is a small fixed project. Ongoing licence only if results earn your trust.

**Are you claiming perfect AI?** No. We claim better judgment about when not to automate, and we show our test results, including where we don't win.
