"use client";

import { BugResponse } from "@/app/types/bug";
import { getInitials } from "@/app/utils/utils";
import { UserCog } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface BugCardProps extends BugResponse {
  setShowBugDetails: Dispatch<SetStateAction<boolean>>;
  setDisplayedBugDetails: Dispatch<SetStateAction<BugResponse>>;
}

export default function BugCard({
  id,
  title,
  description,
  status,
  category,
  reporterName,
  assigneeName,
  teamId,
  createdAt,
  setShowBugDetails,
  setDisplayedBugDetails,
}: BugCardProps) {
  return (
    <div className="w-full md:w-[85%] min-h-30 ">
      <div
        onClick={() => {
          setShowBugDetails(true);
          setDisplayedBugDetails({
            id,
            title,
            description,
            status,
            category,
            reporterName,
            assigneeName,
            teamId,
            createdAt,
          });
        }}
        className="w-full min-h-30 font-sans
                relative group overflow-hidden cursor-pointer rounded-2xl 
                border border-neutral-800 bg-neutral-900 p-4 
                transition-all duration-300 hover:border-amber-500/30 hover:-translate-y-1 active:scale-90"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold text-black">
                {getInitials(reporterName)}
              </div>

              <div>
                <h3 className="font-semibold text-neutral-100">
                  {reporterName}
                </h3>
                <p className="text-xs text-neutral-500">Reporter | QA</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3">
              {description}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span
              className={`rounded-full border px-2.5 py-1 text-xs ${
                category === "Front-end"
                  ? " text-amber-400 bg-amber-950/50 border-amber-400/10"
                  : "text-indigo-500 bg-indigo-950/50 border-indigo-500/10"
              }`}
            >
              {category}
            </span>

            <p className="text-xs text-neutral-500">{createdAt}</p>
          </div>
        </div>
      </div>

      <div className="flex  gap-2 items-center bg-amber-500/30 rounded-b-2xl -mt-4 pt-4.5 pb-1 p-3 border border-amber-300/50">
        <span className="text-xs font-sans flex gap-1 opacity-80">
          <UserCog size={13} />
          <p>Assgined to</p>
        </span>
        <p className="text-sm font-sans font-medium">{assigneeName}</p>
      </div>
    </div>
  );
}
