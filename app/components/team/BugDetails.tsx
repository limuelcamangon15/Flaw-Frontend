"use client";

import { getInitials } from "@/app/utils/utils";
import { ChevronLeft, Send, UserCog } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import CommentCard from "./CommentCard";
import Input from "../ui/input/Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BugResponse } from "@/app/types/bug";

interface BugDetailsProps extends BugResponse {
  showBugDetails: boolean;
  setShowBugDetails: Dispatch<SetStateAction<boolean>>;
}

export default function BugDetails({
  id,
  title,
  description,
  status,
  category,
  reporterName,
  assigneeName,
  teamId,
  createdAt,
  showBugDetails,
  setShowBugDetails,
}: BugDetailsProps) {
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if (!showBugDetails) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showBugDetails]);

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
            className="absolute top-0 right-0 h-full w-full md:w-[60%] bg-neutral-900 px-10 pt-20 p-5 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div
              className="absolute top-5 left-3 
              flex w-fit items-center justify-center bg-white/10 rounded-lg 
              transition-all duration-300 hover:scale-110 active:scale-80 active:bg-amber-500/30
              "
            >
              <ChevronLeft
                size={30}
                className="cursor-pointer transition-all duration-300 active:text-amber-500"
                onClick={() => setShowBugDetails(false)}
              />
            </div>

            {/* Bug Reference Details*/}
            <div
              className="w-full md:w-full min-h-30 font-sans
                           relative group overflow-hidden rounded-2xl 
                           border border-neutral-800 bg-neutral-900 p-4 "
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
              <p className="text-sm font-sans font-medium">Limuel Camangon</p>
            </div>

            {/* Bug Comments */}
            <div className="mt-6 p-2 flex flex-col flex-1 overflow-y-auto gap-3 scrollbar-thumb-amber-500">
              <CommentCard role="QA" />
              <CommentCard role="DEVELOPER" />
              <CommentCard role="QA" />
              <CommentCard role="QA" />
              <CommentCard role="DEVELOPER" />
              <CommentCard role="QA" />
              <CommentCard role="QA" />
              <CommentCard role="DEVELOPER" />
              <CommentCard role="QA" />
            </div>

            {/* Comment Input Field*/}
            <div className="relative bottom-0 w-full md:w-full flex items-center gap-2">
              <div className="w-full">
                <Input
                  label=""
                  htmlFor="comment"
                  id="comment"
                  name="comment"
                  onChange={setNewComment}
                  placeholder="Share your ideas here..."
                />
              </div>

              {/* Send button */}
              <button
                type="submit"
                className="flex relative items-center justify-center cursor-pointer
                 w-12 h-11 mt-1 group
                 rounded-full bg-linear-to-tr from-amber-800 to-amber-400 
                 text-white 
                 hover:scale-105 active:scale-85
                 transition-all duration-300"
              >
                <Send
                  size={24}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 absolute"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
