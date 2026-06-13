import { getInitials } from "@/app/utils/utils";

interface CommentCardProps {
  role: "QA" | "DEVELOPER" | string;
}

export default function CommentCard({ role }: CommentCardProps) {
  return (
    <div
      className="flex flex-col p-3
       min-w-full h-fit rounded-2xl
     bg-neutral-800/50
     border border-neutral-400/15"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`${
            role === "QA"
              ? "from-amber-400 to-orange-500"
              : "from-indigo-400 to-blue-900"
          } 
          h-10 w-10 rounded-full bg-linear-to-br flex items-center justify-center text-sm font-bold text-black`}
        >
          {getInitials("Limuel Camangon")}
        </div>

        <div>
          <h3 className="font-semibold text-neutral-100">Limuel Camangon</h3>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
      </div>
      <p className="font-sans text-white/70 text-sm">
        Lorem ipsum dolor siasdas asdsadsadasdsa asdsa dasasd sads autem
        delectus iusto incidunt vitae ut quibusdam.
      </p>
    </div>
  );
}
