"use client";

import { useState } from "react";
import BugCard from "./BugCard";
import BugDetails from "./BugDetails";
import { ChevronLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import AddBugForm from "./AddBugForm";

export default function TeamWorkspace() {
  const router = useRouter();

  const [showAddBugForm, setShowAddBugForm] = useState<boolean>(false);
  const [showBugDetails, setShowBugDetails] = useState<boolean>(false);
  const [displayedBugDetails, setDisplayedBugDetails] = useState({
    id: 0,
    title: "",
    description: "",
    status: "",
    category: "",
    reporterName: "",
    assigneeName: "",
    teamId: 0,
    createdAt: "",
  });

  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Login button not responsive",
      description: "Login button is not responsive on mobile devices.",
      status: "Open",
      category: "Front-end",
      reporterName: "John Doe",
      assigneeName: "Unassigned",
      teamId: 1,
      createdAt: "May 15, 2005 · 11:10 AM",
    },
    {
      id: 2,
      title: "User profile API returns 500",
      description: "API returns 500 error when fetching user profile data.",
      status: "In Progress",
      category: "Back-end",
      reporterName: "Jane Smith",
      assigneeName: "Mike Johnson",
      teamId: 2,
      createdAt: "Jun 02, 2005 · 09:45 AM",
    },
    {
      id: 3,
      title: "Sidebar overlaps content",
      description: "Sidebar navigation overlaps content on smaller screens.",
      status: "Open",
      category: "Front-end",
      reporterName: "Michael Reyes",
      assigneeName: "Unassigned",
      teamId: 1,
      createdAt: "Jul 08, 2005 · 02:30 PM",
    },
    {
      id: 4,
      title: "Database timeout during peak hours",
      description: "Database connection timeout occurs during peak hours.",
      status: "In Progress",
      category: "Back-end",
      reporterName: "Sarah Lee",
      assigneeName: "Kevin Brown",
      teamId: 2,
      createdAt: "Aug 14, 2005 · 04:20 PM",
    },
    {
      id: 5,
      title: "Dark mode inconsistency",
      description: "Dark mode theme is not applied consistently across pages.",
      status: "Resolved",
      category: "Front-end",
      reporterName: "David Cruz",
      assigneeName: "Anna Garcia",
      teamId: 1,
      createdAt: "Sep 01, 2005 · 08:15 AM",
    },
    {
      id: 6,
      title: "PDF uploads rejected",
      description: "File upload endpoint rejects valid PDF documents.",
      status: "Open",
      category: "Back-end",
      reporterName: "Emily Santos",
      assigneeName: "Chris Tan",
      teamId: 2,
      createdAt: "Oct 10, 2005 · 01:50 PM",
    },
    {
      id: 7,
      title: "Dropdown closes unexpectedly",
      description: "Dropdown menu closes unexpectedly when scrolling.",
      status: "In Progress",
      category: "Front-end",
      reporterName: "Chris Tan",
      assigneeName: "Sarah Lee",
      teamId: 1,
      createdAt: "Nov 05, 2005 · 03:05 PM",
    },
    {
      id: 8,
      title: "Notification delivery delay",
      description:
        "Notification service delays message delivery by several minutes.",
      status: "Open",
      category: "Back-end",
      reporterName: "Anna Garcia",
      assigneeName: "Unassigned",
      teamId: 2,
      createdAt: "Dec 12, 2005 · 10:40 AM",
    },
    {
      id: 9,
      title: "Validation messages missing",
      description: "Form validation messages are not displayed correctly.",
      status: "Resolved",
      category: "Front-end",
      reporterName: "Kevin Lim",
      assigneeName: "John Doe",
      teamId: 1,
      createdAt: "Jan 18, 2006 · 05:25 PM",
    },
    {
      id: 10,
      title: "Session expires after login",
      description: "User session expires immediately after successful login.",
      status: "Open",
      category: "Back-end",
      reporterName: "Maria Torres",
      assigneeName: "Jane Smith",
      teamId: 2,
      createdAt: "Feb 22, 2006 · 12:00 PM",
    },
  ]);

  return (
    <div className="w-full h-full pt-18 p-5">
      {/* Close Button */}
      <div
        className="
        mb-1
        flex w-fit items-center justify-center bg-white/10 rounded-lg 
        transition-all duration-300 hover:scale-110 active:scale-80 active:bg-amber-500/30
        "
      >
        <ChevronLeft
          size={30}
          className="cursor-pointer transition-all duration-300 active:text-amber-500"
          onClick={() => router.push("/teams")}
        />
      </div>

      <h1 className="font-heading text-3xl">Concurrent Team</h1>
      <p className="font-sans text-white/50 max-w-2xl mb-6">
        Bugs submitted by QA for investigation and resolution.
      </p>

      <div className="w-full flex justify-end">
        <Button
          label="New Bug Report"
          color="green"
          onClick={() => setShowAddBugForm(true)}
          icon={<Plus size={15} />}
        />
      </div>

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

      <AddBugForm
        showAddBugForm={showAddBugForm}
        setShowAddBugForm={setShowAddBugForm}
      />
    </div>
  );
}
