export const FAQ_ITEMS = [
  {
    q: "What is Qorina?",
    a: "Software that helps physical systems decide: act automatically, wait safely, or get a human, based on real-world constraints, not just patterns in old data.",
  },
  {
    q: "Is this ChatGPT for buildings?",
    a: "No. Chatbots talk. Qorina decides, and refuses to decide when it shouldn't.",
  },
  {
    q: 'How is it "safe"?',
    a: "If there isn't evidence an action is safe, the action doesn't happen. It's blocked upfront, not fixed after damage.",
  },
  {
    q: "Do we need new hardware or to replace our platform?",
    a: "Usually no. It sits under what you already run. We start read-only.",
  },
  {
    q: 'What\'s a "shadow test"?',
    a: "We replay your historical data and show what we would have done, without changing anything live. Like a dress rehearsal.",
  },
  {
    q: "What does it cost?",
    a: "First call is free. Shadow test is a small fixed project. Ongoing licence only if results earn your trust.",
  },
  {
    q: "Are you claiming perfect AI?",
    a: "No. We claim better judgment about when not to automate, and we show our test results, including where we don't win.",
  },
] as const;
