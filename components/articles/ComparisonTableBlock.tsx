import type { ComparisonTable } from "@/lib/articles/types";

export function ComparisonTableBlock({ table }: { table: ComparisonTable }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink/10">
      <table className="min-w-full text-left text-[15px]">
        <thead className="bg-ink/[0.03]">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-medium text-ink/80">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-ink/10">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-4 py-3 align-top text-ink/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
