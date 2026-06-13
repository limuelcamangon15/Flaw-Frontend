"use client";

import { useState } from "react";
import BugCard from "./BugCard";
import BugDetails from "./BugDetails";

export default function TeamWorkspace() {
  const [showBugDetails, setShowBugDetails] = useState<boolean>(false);
  const [displayedBugDetails, setDisplayedBugDetails] = useState({
    id: 0,
    reportedBy: "",
    content: "",
    type: "",
    createdAt: "",
  });

  const [bugs, setBugs] = useState([
    {
      id: 1,
      reportedBy: "John Doe",
      content: "Login button is not responsive on mobile devices.",
      type: "Front-end",
      createdAt: "May 15, 2005 · 11:10 AM",
    },
    {
      id: 2,
      reportedBy: "Jane Smith",
      content: "API returns 500 error when fetching user profile data.",
      type: "Back-end",
      createdAt: "Jun 02, 2005 · 09:45 AM",
    },
    {
      id: 3,
      reportedBy: "Michael Reyes",
      content: "Sidebar navigation overlaps content on smaller screens.",
      type: "Front-end",
      createdAt: "Jul 08, 2005 · 02:30 PM",
    },
    {
      id: 4,
      reportedBy: "Sarah Lee",
      content: "Database connection timeout occurs during peak hours.",
      type: "Back-end",
      createdAt: "Aug 14, 2005 · 04:20 PM",
    },
    {
      id: 5,
      reportedBy: "David Cruz",
      content: "Dark mode theme is not applied consistently across pages.",
      type: "Front-end",
      createdAt: "Sep 01, 2005 · 08:15 AM",
    },
    {
      id: 6,
      reportedBy: "Emily Santos",
      content: "File upload endpoint rejects valid PDF documents.",
      type: "Back-end",
      createdAt: "Oct 10, 2005 · 01:50 PM",
    },
    {
      id: 7,
      reportedBy: "Chris Tan",
      content: "Dropdown menu closes unexpectedly when scrolling.",
      type: "Front-end",
      createdAt: "Nov 05, 2005 · 03:05 PM",
    },
    {
      id: 8,
      reportedBy: "Anna Garcia",
      content:
        "Notification service delays message delivery by several minutes.",
      type: "Back-end",
      createdAt: "Dec 12, 2005 · 10:40 AM",
    },
    {
      id: 9,
      reportedBy: "Kevin Lim",
      content: "Form validation messages are not displayed correctly.",
      type: "Front-end",
      createdAt: "Jan 18, 2006 · 05:25 PM",
    },
    {
      id: 10,
      reportedBy: "Maria Torres",
      content: "User session expires immediately after successful login.",
      type: "Back-end",
      createdAt: "Feb 22, 2006 · 12:00 PM",
    },
  ]);

  return (
    <div className="w-full h-full pt-20 p-5">
      <h1 className="font-heading text-3xl">Concurrent Team</h1>
      <p className="font-sans text-white/50 max-w-2xl mb-6">
        Bugs submitted by QA for investigation and resolution.
      </p>

      <div className="w-full flex flex-col items-center gap-3 mt-5">
        {bugs.map((b, index) => (
          <BugCard
            key={index}
            {...b}
            setShowBugDetails={setShowBugDetails}
            setDisplayedBugDetails={setDisplayedBugDetails}
          />
        ))}
      </div>

      <BugDetails
        {...displayedBugDetails}
        showBugDetails={showBugDetails}
        setShowBugDetails={setShowBugDetails}
      />
    </div>
  );
}
