"use client";

import { useState } from "react";
import BugCard from "./BugCard";
import BugDetails from "./BugDetails";

export default function TeamWorkspace() {
  const [showBugDetails, setShowBugDetails] = useState<boolean>(false);

  return (
    <div className="w-full h-full pt-20 p-5">
      <h1 className="font-heading text-3xl">Concurrent Team</h1>

      <div className="w-full flex flex-col items-center gap-3 mt-5">
        <BugCard />
        <BugCard />
        <BugCard />
      </div>

      <BugDetails
        showBugDetails={showBugDetails}
        setShowBugDetails={setShowBugDetails}
      />
    </div>
  );
}
