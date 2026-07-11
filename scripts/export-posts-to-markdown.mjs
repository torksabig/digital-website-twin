import fs from "fs";
import path from "path";

const posts = [
  {
    slug: "why-we-wait-instead-of-guessing",
    title: "Why we wait instead of guessing",
    excerpt:
      "Most automation keeps going when it should stop. Here's why Qorina is built to act, wait, or call a human, and why waiting is often the right call.",
    description:
      "Why safer automation waits instead of guessing. Plain-language look at act, wait, and call a human for building, grid, and fleet operators.",
    publishedAt: "2026-07-01",
    readMinutes: 5,
    category: "Safer automation",
    author: "Aether Applied team",
    image: "/blog/why-we-wait-banner.png",
    imageAlt:
      "Black and white spiral vortex evoking measured patience before automated action",
    sections: [
      {
        paragraphs: [
          "If you run a building, a grid, or a fleet, you've seen automation that looks confident right up until it isn't. The bill spikes. A valve moves when nobody would have moved it. An alarm fires at 2 a.m. for something that turned out to be nothing, or worse, something that needed a person, not a script.",
          "Most systems are built to keep going. They pick the best-looking option and execute. That works fine when the world matches what the system expected. Physical systems rarely cooperate for long.",
        ],
      },
      {
        heading: "Three outcomes, not one",
        paragraphs: [
          "We design Qorina around three outcomes: act when it's safe, wait when it isn't, and call a human when the situation needs judgment you shouldn't automate away.",
          "Act means the system has enough evidence that the action fits the real conditions, not just the model's preference. Wait means it holds position rather than forcing a move that could make things worse. Call a human means the situation is unclear, high-stakes, or outside what was tested, and a person should decide what happens next.",
          "That third path is the one most automation skips. Skipping it is how you get silent mistakes: the system did something, nothing crashed, and the damage shows up later on a bill, a safety report, or a customer complaint.",
        ],
      },
      {
        heading: "Waiting is not failure",
        paragraphs: [
          "Operators know waiting is often the professional choice. A surgeon stops when unsure. A pilot runs the checklist again. A grid operator holds a switching sequence until the picture is clear.",
          "Software rarely gets credit for doing nothing. Product demos favor motion: lights change, numbers move, something \"happens.\" In production, the right move is frequently to not move.",
          "Waiting preserves optionality. It keeps equipment in a known state. It gives people time to verify sensors, check weather, confirm a schedule change, or rule out a bad reading. A system that can't wait is a system that will eventually act on bad information.",
        ],
      },
      {
        heading: "When \"best guess\" is expensive",
        paragraphs: [
          "Guessing shows up in small ways before it shows up in big ones. Heating runs hard into a mild afternoon because the forecast was wrong. A charger throttles when it didn't need to, or doesn't when it should. A fleet dispatch sends a vehicle based on incomplete traffic data.",
          "Each guess has a cost: energy, wear, customer trust, or safety margin. The cost is easy to miss because the system usually completes the task. The task completed is not the same as the task completed safely.",
          "That's why we care about how sure the system is, not just what it wants to do. If confidence is low, waiting or calling a human isn't a bug. It's the design working.",
        ],
      },
      {
        heading: "What this looks like in practice",
        paragraphs: [
          "In a building, that might mean holding a heating adjustment until indoor and outdoor readings agree, instead of chasing a single noisy sensor. On a grid, it might mean deferring a switch until state estimates line up across sections. For a fleet, it might mean leaving a route unchanged until traffic and load data match what the plan assumed.",
          "In each case, the operator sees a clear reason: not enough evidence, conflicting signals, or a situation that wasn't in the test set. No black box that simply \"chose option B.\"",
          "If you're evaluating automation for physical systems, ask one question early: what does it do when it's not sure? If the answer is \"it still acts,\" you're not buying reliability. You're buying speed with the risk pushed to your team.",
        ],
      },
      {
        heading: "Built for operators",
        paragraphs: [
          "We're not trying to replace judgment. We're trying to make automatic action trustworthy, so you can turn it on in places you've been burned before.",
          "Act when it's safe. Wait when it's not. Call a human when it matters. That's the bar we hold ourselves to, and the one we think physical infrastructure deserves.",
        ],
      },
    ],
  },
  {
    slug: "what-a-shadow-test-shows-you",
    title: "What a shadow test actually shows you",
    excerpt:
      "A shadow test runs new decision logic alongside what you already use, without touching live controls. Here's what operators should look for.",
    description:
      "Shadow tests explained for operators: read-only comparison of new automation against your current setup, without risking live systems.",
    publishedAt: "2026-07-08",
    readMinutes: 6,
    category: "Testing",
    author: "Aether Applied team",
    image: "/blog/shadow-test-banner.png",
    imageAlt:
      "Circular dot waveform visualization representing parallel observation during a shadow test",
    sections: [
      {
        paragraphs: [
          "You've been pitched automation that \"just plugs in.\" Then someone asks you to flip it on for real traffic, real tenants, or a live feeder, and the room gets quiet.",
          "A shadow test is a way to de-risk that moment. The new decision layer runs in parallel with what you already use. It sees the same inputs. It says what it would do. Nothing actually changes in the field.",
          "Read-only comparison, not a live experiment on your equipment.",
        ],
      },
      {
        heading: "Same situation, two answers",
        paragraphs: [
          "During a shadow test, every decision point gets two answers: what your current setup did (or would do), and what the new layer recommends.",
          "You're not looking for identical behavior. You're looking for whether the new recommendations are safer, cheaper, or more stable, and whether you trust the cases where they differ.",
          "Differences fall into a few buckets. Agreement: both paths align; that's baseline confidence. Safer hold: the new layer waits when the old one moved, worth reviewing, not automatically wrong. Missed opportunity: the new layer would have acted and the old one didn't, check if that action would have helped. Conflict on safety: the old path did something the new layer flags. This is the bucket that matters most.",
        ],
      },
      {
        heading: "What you need running",
        paragraphs: [
          "A useful shadow test needs honest inputs: the same sensor readings, schedules, tariffs, and alarms your operators already rely on. Garbage in doesn't just produce garbage out. It produces confident garbage out.",
          "You also need a clear window of time. A single quiet afternoon doesn't stress the system. Try weather swings, peak demand, holidays, maintenance windows: the weeks when your team is busiest.",
          "Finally, you need someone who knows the site watching the diff. Software can flag disagreements. Only an operator knows whether a disagreement on a Tuesday at 6 a.m. is noise or a real problem.",
        ],
      },
      {
        heading: "What shadow tests don't prove",
        paragraphs: [
          "Shadow mode doesn't replace every form of validation. It doesn't prove hardware integration you haven't wired yet. It doesn't replace your commissioning checklist. It doesn't mean you can skip training your team on what the new layer will do once it's live.",
          "What it does prove is narrower and more valuable: given your real operating history, does this decision layer behave in a way you'd sign off on?",
          "That's the question most pilots skip. They demo on synthetic data, then ask for production keys. Shadow testing flips the order: prove fit on your data first.",
        ],
      },
      {
        heading: "Questions to ask your vendor",
        paragraphs: [
          "If someone offers a shadow test, ask: What exactly is read-only? Recommendations only, or also simulated actuation logs? How are disagreements surfaced: dashboard, daily report, alert? Who owns the decision to go live after shadow: you, or them? What happens to data collected during shadow: retention, deletion, use for training?",
          "Clear answers matter. A shadow test that nobody reviews is just extra logging.",
        ],
      },
      {
        heading: "From shadow to live",
        paragraphs: [
          "The path we recommend is deliberate: shadow until disagreement patterns make sense, then limited live scope with rollback ready, then expand site by site or circuit by circuit.",
          "Operators shouldn't have to bet the building on a vendor's timeline. Shadow testing exists so you can see the bet before you make it: in plain language, on your equipment, with your team in the loop.",
          "If you're comparing approaches for physical systems, start by asking for a shadow period on real data. What you learn in those weeks is worth more than any slide deck.",
        ],
      },
    ],
  },
];

function toMarkdown(post) {
  const frontmatter = [
    "---",
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `slug: ${post.slug}`,
    `date: ${post.publishedAt}`,
    `category: "${post.category}"`,
    `excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`,
    `description: "${post.description.replace(/"/g, '\\"')}"`,
    `author: "${post.author}"`,
    `readMinutes: ${post.readMinutes}`,
    `image: ${post.image}`,
    `imageAlt: "${post.imageAlt.replace(/"/g, '\\"')}"`,
    "---",
    "",
  ].join("\n");

  const body = post.sections
    .map((section) => {
      const heading = section.heading ? `## ${section.heading}\n\n` : "";
      return `${heading}${section.paragraphs.join("\n\n")}`;
    })
    .join("\n\n");

  return `${frontmatter}${body}\n`;
}

const outDir = path.join(process.cwd(), "content/blog");
fs.mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  fs.writeFileSync(path.join(outDir, `${post.slug}.md`), toMarkdown(post));
}

console.log(`Wrote ${posts.length} posts to ${outDir}`);
