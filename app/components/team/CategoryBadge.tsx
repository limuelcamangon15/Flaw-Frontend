"use client";

export default function CategoryBadge({ category }: { category: string }) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`rounded-full border px-2.5 py-1 text-xs ${
          category === "Front-end"
            ? " text-amber-400 bg-amber-950/50 border-amber-400/10"
            : "text-indigo-500 bg-indigo-950/50 border-indigo-500/10"
        }`}
      >
        {category}
      </span>
    </div>
  );
}
