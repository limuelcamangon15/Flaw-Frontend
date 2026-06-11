import { getInitials } from "@/app/utils/utils";

export default function BugCard() {
  return (
    <div
      className="w-full md:w-[85%] max-h-40 min-h-30 font-sans
                relative group overflow-hidden cursor-pointer rounded-2xl 
                border border-neutral-800 bg-neutral-900 p-4 
                transition-all duration-300 hover:bg-neutral-900/75 hover:border-amber-500/30 hover:-translate-y-1 active:scale-90"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold text-black">
              {getInitials("Limuel Camangon")}
            </div>

            <div>
              <h3 className="font-semibold text-neutral-100">
                Limuel Camangon
              </h3>
              <p className="text-xs text-neutral-500">Reporter | QA</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3">
            Lorem, ipasda das das das dasdaLorem, ipasda das das das
            dasdasdsasdasdad asd asdasd a a sdsasdasdad asd asdasd a adadaemo,
            provident et autem nostrum incidunt.
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-neutral-800 px-2.5 py-1 text-xs text-amber-400">
            Front-end
          </span>

          <p className="text-xs text-neutral-500">May 15, 2005 · 11:10 AM</p>
        </div>
      </div>
    </div>
  );
}
