"use client";

import { BugResponse } from "@/app/types/bug";
import { getInitials } from "@/app/utils/utils";
import { UserCog } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import CategoryBadge from "./CategoryBadge";
import StatusBadge from "./StatusBadge";

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
      className="w-full md:w-[85%] min-h-30 cursor-pointer
                transition-all duration-300 
                hover:-translate-y-1 active:scale-90"
    >
      <div
        className="w-full min-h-30 font-sans
                relative group overflow-hidden rounded-2xl rounded-br-none 
                border border-neutral-800 bg-neutral-900 p-4 
                transition-all duration-300 
                hover:border-amber-500/30"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-3">
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

              <div className="block md:hidden">
                <StatusBadge status={status} />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3">
              {description}
            </p>
          </div>

          <section className="flex items-center justify-between mt-3">
            <div className="flex gap-2 items-center">
              <CategoryBadge category={category} />

              <StatusBadge status={status} className="hidden md:block" />
            </div>

            <p className="text-xs text-neutral-500">{createdAt}</p>
          </section>
        </div>
      </div>

      {assigneeName ? (
        <div className="flex  gap-2 items-center bg-amber-500/30 rounded-b-2xl -mt-4 pt-4.5 pb-1 p-3 border border-amber-300/50">
          <span className="text-xs font-sans flex gap-1 opacity-80">
            <UserCog size={13} />
            <p>Assgined to</p>
          </span>
          <p className="text-sm font-sans font-medium">{assigneeName}</p>
        </div>
      ) : (
        <div className="flex  gap-2 items-center bg-gray-500/30 rounded-b-2xl -mt-4 pt-4.5 pb-1 p-3 border border-gray-300/30">
          <span className="text-xs font-sans flex gap-1 opacity-80">
            <UserCog size={13} />
            <p>Unassigned</p>
          </span>
        </div>
      )}
    </div>
  );
}
