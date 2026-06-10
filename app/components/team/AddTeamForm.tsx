"use client";

import { ChevronLeft, Plus, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Input from "../ui/input/Input";
import { useState } from "react";
import Button from "../ui/button/Button";
import { sileo } from "sileo";

interface AddTeamFormProps {
  showAddForm: boolean;
  setShowAddForm: (value: boolean) => void;
}

export default function AddTeamForm({
  showAddForm,
  setShowAddForm,
}: AddTeamFormProps) {
  const [teamName, setTeamName] = useState<string>("");

  async function handleCreate() {
    sileo.success({
      title: "Team Created Succesfully!",
      description: (
        <span className="flex items-center justify-center">
          <p className="text-green-400 text-center">
            You can now invite members, manage your team, and start working
            together.
          </p>
        </span>
      ),
    });

    setShowAddForm(false);
  }

  return (
    <AnimatePresence>
      {showAddForm && (
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
                onClick={() => setShowAddForm(false)}
              />
            </div>

            <h1 className="font-heading text-3xl">Add New Team</h1>
            <p className="font-sans text-white/50 max-w-2xl mb-6">
              Create a new workspace for your team, invite members, and start
              collaborating on projects, tasks, and bug tracking in one place.
            </p>

            <section className="flex mt-15 flex-col gap-8">
              <Input
                label="Team Name"
                htmlFor="teamName"
                id="teamName"
                name="teamName"
                onChange={setTeamName}
                placeholder="eg. HagonoyTides, Team Concurrent"
              />

              <Button
                label="Create Team"
                color="green"
                icon={
                  <div className="flex items-center relative mr-2">
                    <Users />
                    <Plus size={16} className="absolute left-4.5 -top-0.5" />
                  </div>
                }
                onClick={handleCreate}
                width="w-full"
              />
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
