import { ChevronRight, Users } from "lucide-react";
import AppNavbar from "../ui/app-navbar/AppNavbar";
import TeamCard from "./TeamCard";

const TEAMS = [
  { id: 1, teamName: "Flaw Team", members: 2 },
  { id: 1, teamName: "HagonoyTides Team", members: 1 },
  { id: 1, teamName: "iLabCICT Team", members: 5 },
  { id: 1, teamName: "Flaw Team", members: 2 },
  { id: 1, teamName: "HagonoyTides Team", members: 1 },
  { id: 1, teamName: "iLabCICT Team", members: 5 },
  { id: 1, teamName: "Flaw Team", members: 2 },
  { id: 1, teamName: "HagonoyTides Team", members: 1 },
  { id: 1, teamName: "iLabCICT Team", members: 5 },
];

export default function TeamPage() {
  return (
    <div className="w-full pt-20 p-5">
      <h1 className="font-heading text-3xl">Teams & Workspaces</h1>
      <p className="font-sans text-white/50 max-w-2xl mb-6">
        Organize development teams, track bugs, and keep every project moving
        forward.
      </p>

      <div className="h-fit w-full p-5 flex flex-row flex-wrap gap-3.5 items-center">
        {TEAMS.map((team, index) => (
          <TeamCard {...team} key={index} />
        ))}
      </div>
    </div>
  );
}
