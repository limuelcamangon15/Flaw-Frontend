import { ChevronRight, Users } from "lucide-react";

interface TeamCardProps {
  id: number;
  teamName: string;
  members: number;
}

export default function TeamCard({ id, teamName, members }: TeamCardProps) {
  return (
    <div className="relative font-sans group overflow-hidden w-full md:max-w-70 max-h-40 min-h-30 cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900 p-4 transition-all duration-300 hover:bg-neutral-900/75 hover:border-amber-500/30 hover:-translate-y-1 active:scale-90">
      <div className="flex items-start justify-between">
        <div className="absolute -bottom-5 -right-3 group-hover:bottom-0 group-hover:right-0 transition-all duration-300">
          <h1 className="text-white/5 font-heading text-9xl group-hover:text-amber-500/20 active:text-amber-500/20">
            {teamName.charAt(0).toUpperCase()}
          </h1>
        </div>

        <h3 className="font-semibold text-white">{teamName}</h3>

        <ChevronRight
          size={16}
          className="text-neutral-500 transition-transform group-hover:translate-x-1 group-active:translate-x-1"
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400">
        <Users size={16} />
        <span>{members} members</span>
      </div>
    </div>
  );
}
