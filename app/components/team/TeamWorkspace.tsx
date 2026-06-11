import BugCard from "./BugCard";

export default function TeamWorkspace() {
  return (
    <div className="w-full h-full pt-20 p-5">
      <h1 className="font-heading text-3xl">Concurrent Team</h1>

      <div className="w-full flex flex-col items-center gap-3 mt-5">
        <BugCard />
        <BugCard />
        <BugCard />
      </div>
    </div>
  );
}
