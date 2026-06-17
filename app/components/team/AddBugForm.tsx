"use client";

import { Bug, ChevronLeft, Plus, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Input from "../ui/input/Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { sileo } from "sileo";

interface AddBugFormProps {
  showAddBugForm: boolean;
  setShowAddBugForm: Dispatch<SetStateAction<boolean>>;
}

export default function AddBugForm({
  showAddBugForm,
  setShowAddBugForm,
}: AddBugFormProps) {
  const [bugContext, setBugContext] = useState<string>("");
  const [isBugContextInteracted, setIsBugContextInteracted] =
    useState<boolean>(false);

  const isValid = bugContext.trim() !== "";

  async function handleCreate() {
    sileo.success({
      title: "Bug Reported Succesfully!",
      description: (
        <span className="flex items-center justify-center">
          <p className="text-green-400 text-center">
            Monitor and wait for bug status updates.
          </p>
        </span>
      ),
    });

    setShowAddBugForm(false);
  }

  useEffect(() => {
    if (!showAddBugForm) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showAddBugForm]);

  return (
    <AnimatePresence>
      {showAddBugForm && (
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
            <div
              className="absolute top-5 left-3 
              flex w-fit items-center justify-center bg-white/10 rounded-lg 
              transition-all duration-300 hover:scale-110 active:scale-80 active:bg-amber-500/30
              "
            >
              <ChevronLeft
                size={30}
                className="cursor-pointer transition-all duration-300 active:text-amber-500"
                onClick={() => setShowAddBugForm(false)}
              />
            </div>

            <h1 className="font-heading text-3xl">Report New Bug</h1>
            <p className="font-sans text-white/50 max-w-2xl mb-6">
              Document a newly discovered defect with clear details to help the
              team investigate and resolve it.
            </p>

            <section className="flex mt-15 flex-col gap-8">
              <Input
                label="Bug Context"
                htmlFor="bugContext"
                id="bugContext"
                name="bugContext"
                onChange={(value) => {
                  setBugContext(value);
                  setIsBugContextInteracted(true);
                }}
                placeholder="eg. HagonoyTides, Team Concurrent"
              />
              {/* Error Message */}
              <span className="-mt-6 flex gap-1">
                {!isValid && isBugContextInteracted && (
                  <p className="text-red-600 text-xs">Team Name is required.</p>
                )}
              </span>

              <Button
                label="Submit Bug Report"
                color="green"
                icon={
                  <div className="flex items-center relative mr-2">
                    <Bug />
                    <Plus size={16} className="absolute left-4.5 -top-0.5" />
                  </div>
                }
                onClick={handleCreate}
                width="w-full"
                disabled={!isValid}
              />
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
