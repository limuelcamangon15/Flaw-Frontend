"use client";

import { ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface BugDetailsProps {
  showBugDetails: boolean;
  setShowBugDetails: (value: boolean) => void;
}

export default function BugDetails({
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

            <h1 className="font-heading text-3xl">Add New Team</h1>
            <p className="font-sans text-white/50 max-w-2xl mb-6">
              Create a new workspace for your team, invite members, and start
              collaborating on projects, tasks, and bug tracking in one place.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
