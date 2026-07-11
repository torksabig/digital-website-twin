type ShortAnswerBoxProps = {
  answer: string;
};

export function ShortAnswerBox({ answer }: ShortAnswerBoxProps) {
  return (
    <aside className="rounded-2xl border border-blue-900/15 bg-blue-50/80 p-6">
      <p className="text-[12px] font-semibold uppercase tracking-wide text-blue-900/70">
        Short answer
      </p>
      <p className="mt-3 text-[18px] leading-relaxed text-ink/80">{answer}</p>
    </aside>
  );
}
