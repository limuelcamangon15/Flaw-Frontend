"use client";

import { Bug } from "@/app/types/bug";
import { getInitials } from "@/app/utils/utils";
import { Dispatch, SetStateAction } from "react";

interface BugCardProps extends Bug {
  setShowBugDetails: Dispatch<SetStateAction<boolean>>;
  setDisplayedBugDetails: Dispatch<SetStateAction<Bug>>;
}

export default function BugCard({
  id,
  reportedBy,
  content,
  type,
  createdAt,
  setShowBugDetails,
  setDisplayedBugDetails,
}: BugCardProps) {
  return (
    <div
      onClick={() => {
        setShowBugDetails(true);
        setDisplayedBugDetails({
          id,
          reportedBy,
          content,
          type,
          createdAt,
        });
      }}
      className="w-full md:w-[85%] min-h-30 font-sans
                relative group overflow-hidden cursor-pointer rounded-2xl 
                border border-neutral-800 bg-neutral-900 p-4 
                transition-all duration-300 hover:bg-neutral-900/75 hover:border-amber-500/30 hover:-translate-y-1 active:scale-90"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold text-black">
              {getInitials(reportedBy)}
            </div>

            <div>
              <h3 className="font-semibold text-neutral-100">{reportedBy}</h3>
              <p className="text-xs text-neutral-500">Reporter | QA</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3">
            {content}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span
            className={`rounded-full border px-2.5 py-1 text-xs ${
              type === "Front-end"
                ? " text-amber-400 bg-amber-950/50 border-amber-400/10"
                : "text-indigo-500 bg-indigo-950/50 border-indigo-500/10"
            }`}
          >
            {type}
          </span>

          <p className="text-xs text-neutral-500">{createdAt}</p>
        </div>
      </div>
    </div>
  );
}
