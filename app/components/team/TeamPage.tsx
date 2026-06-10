"use client";

import { Plus } from "lucide-react";
import TeamCard from "./TeamCard";
import SmallButton from "../ui/button/SmallButton";

const TEAMS = [
  { id: 1, teamName: "Flaw Team", members: 2 },
  { id: 2, teamName: "Hagonoy Tides", members: 1 },
  { id: 3, teamName: "iLab CICT", members: 5 },
  { id: 4, teamName: "SmartAgri Innovators", members: 4 },
  { id: 5, teamName: "HealthSync", members: 3 },
  { id: 6, teamName: "EduTrack", members: 6 },
  { id: 7, teamName: "GreenTech Solutions", members: 5 },
  { id: 8, teamName: "Barangay Connect", members: 4 },
  { id: 9, teamName: "CodeCrafters", members: 2 },
  { id: 10, teamName: "DataVision", members: 3 },
];

export default function TeamPage() {
  return (
    <div className="w-full pt-20 p-5">
      <h1 className="font-heading text-3xl">Teams & Workspaces</h1>
      <p className="font-sans text-white/50 max-w-2xl mb-6">
        Organize development teams, track bugs, and keep every project moving
        forward.
      </p>

      <div className="w-full flex justify-end">
        <SmallButton
          label="New Team"
          color="green"
          onClick={() => {}}
          icon={<Plus size={15} />}
        />
      </div>

      <div className="h-fit w-full p-5 flex flex-row flex-wrap gap-3.5 items-center">
        {TEAMS.map((team, index) => (
          <TeamCard {...team} key={index} />
        ))}
      </div>
    </div>
  );
}
