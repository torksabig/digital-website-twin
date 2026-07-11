"use client";

import { useState } from "react";

const PROMPT_CHIPS = [
  "Surprise electricity bills",
  "Too many alarms, not enough people",
  "Automation you won't turn on",
  "New sites sized wrong",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  function appendChip(text: string) {
    setMessage((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return text;
      if (trimmed.includes(text)) return prev;
      return `${trimmed}\n${text}`;
    });
  }

  return (
    <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="rounded-[28px] border border-ink/10 bg-white p-8 shadow-card"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Input label="First name" name="first" />
          <Input label="Last name" name="last" />
        </div>
        <div className="mt-5">
          <Input label="Email" name="email" type="email" />
        </div>
        <div className="mt-5">
          <Input label="Company" name="company" />
        </div>
        <div className="mt-5">
          <p className="text-[14px] font-medium text-ink">Message</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {PROMPT_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => appendChip(chip)}
                className="min-h-[44px] rounded-full border border-ink/12 bg-paper px-4 py-2 text-[13px] text-ink/70 transition-colors hover:border-blue-900/30 hover:text-blue-900"
              >
                {chip}
              </button>
            ))}
          </div>
          <textarea
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-3 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-[15px] text-ink outline-none focus:border-blue-900"
            placeholder="e.g. surprise electricity bills, automation you won't turn on, too many alarms..."
          />
        </div>
        <button
          type="submit"
          className="mt-6 min-h-[44px] w-full rounded-full bg-ink px-6 py-3.5 text-[16px] font-medium text-white transition-colors hover:bg-ink/90"
        >
          {sent ? "Thanks, we'll be in touch" : "Send message"}
        </button>
      </form>
  );
}

function Input({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[14px] font-medium text-ink">{label}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-[15px] text-ink outline-none focus:border-blue-900"
      />
    </div>
  );
}
