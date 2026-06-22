"use client";

import { BugStatus } from "@/app/types/bug";

const statusStyles: Record<BugStatus, string> = {
  OPEN: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  IN_PROGRESS: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  FIXED: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  VERIFIED: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  CLOSED: "bg-zinc-500/15 text-zinc-300 border-zinc-500/30",
  "": "",
};

export default function StatusBadge({ status }: { status: BugStatus }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status.replace(/_/g, " ")}
    </span>
  );
}
