import { ChevronRight, Users } from "lucide-react";
import AppNavbar from "../ui/app-navbar/AppNavbar";

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
    <div className="w-full pt-20 p-5 flex flex-row flex-wrap gap-3">
      {TEAMS.map((team, index) => (
        <div
          key={index}
          className="relative font-sans group overflow-hidden w-full md:max-w-70 max-h-40 min-h-30 cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900 p-4 transition-all duration-200 hover:border-amber-500/30 hover:-translate-y-1 active:scale-90"
        >
          <div className="flex items-start justify-between">
            <div className="absolute -bottom-5 -right-3 group-hover:bottom-0 group-hover:right-0 transition-all duration-300">
              <h1 className="text-white/5 group-hover:text-amber-500/20 font-heading text-9xl">
                {team.teamName.charAt(0).toUpperCase()}
              </h1>
            </div>

            <h3 className="font-semibold text-white">{team.teamName}</h3>

            <ChevronRight
              size={16}
              className="text-neutral-500 transition-transform group-hover:translate-x-1"
            />
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400">
            <Users size={16} />
            <span>{team.members} members</span>
          </div>
        </div>
      ))}
    </div>
  );
}
