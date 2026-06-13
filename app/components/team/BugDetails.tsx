"use client";

import { getInitials } from "@/app/utils/utils";
import { ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface BugDetailsProps {
  id: number;
  reportedBy: string;
  content: string;
  type: "Front-end" | "Back-end" | string;
  createdAt: string;

  showBugDetails: boolean;
  setShowBugDetails: (value: boolean) => void;
}

export default function BugDetails({
  id,
  reportedBy,
  content,
  type,
  createdAt,
  showBugDetails,
  setShowBugDetails,
}: BugDetailsProps) {
  return (
    <AnimatePresence>
      {showBugDetails && (
        <motion.div
          className="fixed inset-0 z-45 bg-neutral-900/50 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-full md:w-[60%] bg-neutral-900 px-10 pt-20 p-5"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div className="absolute top-5 left-3 flex w-fit items-center justify-center bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-80">
              <ChevronLeft
                size={30}
                className="cursor-pointer"
                onClick={() => setShowBugDetails(false)}
              />
            </div>

            <div
              className="w-full md:w-full min-h-30 font-sans
                           relative group overflow-hidden cursor-pointer rounded-2xl 
                           border border-neutral-800 bg-neutral-900 p-4 
                           "
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold text-black">
                      {getInitials("Limuel Camangon")}
                    </div>

                    <div>
                      <h3 className="font-semibold text-neutral-100">
                        {reportedBy}
                      </h3>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
