"use client";

import { Bug, ChevronLeft, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Input from "../ui/input/Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { sileo } from "sileo";
import { BugRequest } from "@/app/types/bug";

interface AddBugFormProps {
  showAddBugForm: boolean;
  setShowAddBugForm: Dispatch<SetStateAction<boolean>>;
}

export default function AddBugForm({
  showAddBugForm,
  setShowAddBugForm,
}: AddBugFormProps) {
  const [newBugReport, setNewBugReport] = useState<BugRequest>({
    title: "",
    description: "",
    category: "",
    teamId: 0,
    assigneeId: 0,
  });

  const [isBugReportInteracted, setIsBugReportInteracted] = useState({
    titleInteraction: false,
    descriptionInteraction: false,
    categoryInteraction: false,
    teamIdInteraction: false,
    assigneeIdInteraction: false,
  });

  const [activeCategory, setActiveCategory] = useState<string>("");

  const titleError =
    isBugReportInteracted.titleInteraction && newBugReport.title.trim() === "";

  const descriptionError =
    isBugReportInteracted.descriptionInteraction &&
    newBugReport.description.trim() === "";

  const categoryError =
    isBugReportInteracted.categoryInteraction &&
    newBugReport.category.trim() === "";

  const isFormValid =
    newBugReport.title.trim() !== "" &&
    newBugReport.description.trim() !== "" &&
    newBugReport.category.trim() !== "";

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
            className={`${
              newBugReport.category === "Back-end"
                ? "bg-linear-to-tl from-neutral-950 via-neutral-900 to-blue-950"
                : newBugReport.category === "Front-end"
                ? "bg-linear-to-tl from-neutral-950 via-neutral-900 to-amber-900"
                : "bg-neutral-900"
            } absolute top-0 right-0 h-full w-full md:w-[60%] px-10 pt-20 p-5`}
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

            <section className="flex mt-15 flex-col gap-5">
              <>
                <label className="font-sans text-xs font-medium -mb-3 text-white/50 tracking-wide uppercase">
                  Category
                </label>

                <div className="flex gap-2">
                  <span
                    onClick={() => {
                      setActiveCategory("Front-end");

                      setNewBugReport((prev) => ({
                        ...prev,
                        category: "Front-end",
                      }));

                      setIsBugReportInteracted((prev) => ({
                        ...prev,
                        categoryInteraction: true,
                      }));
                    }}
                    className={`${
                      activeCategory === "Front-end"
                        ? "opacity-100 border-amber-400/50"
                        : "opacity-30 border-amber-400/10"
                    } 
                    font-sans rounded-full border px-2.5 py-1 text-sm cursor-pointer
                               text-amber-400 bg-amber-950/50 
                               transition-all duration-300
                               hover:opacity-50 hover:-translate-y-1 hover:scale-102
                               active:scale-85
                              `}
                  >
                    Front-end
                  </span>

                  <span
                    onClick={() => {
                      setActiveCategory("Back-end");

                      setNewBugReport((prev) => ({
                        ...prev,
                        category: "Back-end",
                      }));

                      setIsBugReportInteracted((prev) => ({
                        ...prev,
                        categoryInteraction: true,
                      }));
                    }}
                    className={`${
                      activeCategory === "Back-end"
                        ? "opacity-100 border-indigo-500/50"
                        : "opacity-30 border-indigo-500/10"
                    } 
                    font-sans rounded-full border px-2.5 py-1 text-sm cursor-pointer
                               text-indigo-500 bg-indigo-950/50
                               transition-all duration-300
                               hover:opacity-50 hover:-translate-y-1 hover:scale-102
                               active:scale-85
                              `}
                  >
                    Back-end
                  </span>
                </div>
                {/* Error Message */}
                <span className="-mt-3.5 flex gap-1">
                  {categoryError && (
                    <p className="text-red-600 text-xs">
                      Category is required.
                    </p>
                  )}
                </span>
              </>

              <>
                <Input
                  label="Title"
                  htmlFor="title"
                  id="title"
                  name="title"
                  onChange={(value) => {
                    setNewBugReport((prev) => ({
                      ...prev,
                      title: value,
                    }));

                    setIsBugReportInteracted((prev) => ({
                      ...prev,
                      titleInteraction: true,
                    }));
                  }}
                  placeholder="Set a meaningful bug report title..."
                />
                {/* Error Message */}
                <span className="-mt-3.5 flex gap-1">
                  {titleError && (
                    <p className="text-red-600 text-xs">Title is required.</p>
                  )}
                </span>
              </>

              <>
                <Input
                  label="Description"
                  htmlFor="description"
                  id="description"
                  name="description"
                  onChange={(value) => {
                    setNewBugReport((prev) => ({
                      ...prev,
                      description: value,
                    }));

                    setIsBugReportInteracted((prev) => ({
                      ...prev,
                      descriptionInteraction: true,
                    }));
                  }}
                  placeholder="Describe the defect you found..."
                />
                {/* Error Message */}
                <span className="-mt-3.5 flex gap-1">
                  {descriptionError && (
                    <p className="text-red-600 text-xs">
                      Description is required.
                    </p>
                  )}
                </span>
              </>

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
                disabled={!isFormValid}
              />
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
