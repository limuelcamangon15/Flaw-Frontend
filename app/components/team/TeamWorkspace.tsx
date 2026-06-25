"use client";

import { useState } from "react";
import BugCard from "./bug-card/BugCard";
import BugDetails from "./BugDetails";
import { ChevronLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import AddBugForm from "./AddBugForm";
import { BugResponse } from "@/app/types/bug";

export default function TeamWorkspace() {
  const router = useRouter();

  const [showAddBugForm, setShowAddBugForm] = useState<boolean>(false);
  const [showBugDetails, setShowBugDetails] = useState<boolean>(false);
  const [displayedBugDetails, setDisplayedBugDetails] = useState<BugResponse>({
    id: 0,
    title: "",
    description: "",
    status: "",
    category: "",
    reporterName: "",
    assigneeName: "",
    teamId: 0,
    createdAt: "",
    analysis: {
      severity: "",
      labels: [],
      possibleRootCauses: [],
      suggestedNextSteps: [],
    },
  });

  const [bugs, setBugs] = useState<BugResponse[]>([
    {
      id: 1,
      title: "Login button not responsive",
      description: "Login button is not responsive on mobile devices.",
      status: "OPEN",
      category: "Front-end",
      reporterName: "John Doe",
      assigneeName: null,
      teamId: 1,
      createdAt: "May 15, 2005 · 11:10 AM",
      analysis: {
        severity: "High",
        labels: ["UI", "Mobile", "Touch Events"],
        possibleRootCauses: [
          "Invisible overlay intercepting clicks",
          "Touch event listener not attached",
          "Disabled button state applied incorrectly",
        ],
        suggestedNextSteps: [
          "Reproduce on iOS and Android devices",
          "Inspect event propagation in DevTools",
          "Review recent CSS changes around login form",
        ],
      },
    },
    {
      id: 2,
      title: "User profile API returns 500",
      description: "API returns 500 error when fetching user profile data.",
      status: "FIXED",
      category: "Back-end",
      reporterName: "Jane Smith",
      assigneeName: "Mike Johnson",
      teamId: 2,
      createdAt: "Jun 02, 2005 · 09:45 AM",
      analysis: {
        severity: "High",
        labels: ["API", "Server", "Database"],
        possibleRootCauses: [
          "Null reference exception",
          "Database query timeout",
          "Missing user record validation",
          "Unhandled service dependency failure",
        ],
        suggestedNextSteps: [
          "Review application logs",
          "Add defensive null checks",
          "Improve API error handling",
          "Create regression test for missing profiles",
        ],
      },
    },
    {
      id: 4,
      title: "Database timeout during peak hours",
      description: "Database connection timeout occurs during peak hours.",
      status: "IN_PROGRESS",
      category: "Back-end",
      reporterName: "Sarah Lee",
      assigneeName: "Kevin Brown",
      teamId: 2,
      createdAt: "Aug 14, 2005 · 04:20 PM",
      analysis: {
        severity: "High",
        labels: ["Database", "Performance", "Scalability"],
        possibleRootCauses: [
          "Connection pool exhaustion",
          "Slow database queries",
          "Missing indexes on frequently queried tables",
          "Traffic spikes exceeding capacity",
        ],
        suggestedNextSteps: [
          "Analyze slow query logs",
          "Review database indexing strategy",
          "Increase connection pool size",
          "Run load testing during peak conditions",
        ],
      },
    },
    {
      id: 7,
      title: "Dropdown closes unexpectedly",
      description: "Dropdown menu closes unexpectedly when scrolling.",
      status: "IN_PROGRESS",
      category: "Front-end",
      reporterName: "Chris Tan",
      assigneeName: "Sarah Lee",
      teamId: 1,
      createdAt: "Nov 05, 2005 · 03:05 PM",
      analysis: {
        severity: "Medium",
        labels: ["UI", "Dropdown", "Interaction"],
        possibleRootCauses: [
          "Scroll event triggering blur handler",
          "Component re-render resetting state",
          "Outside click listener firing incorrectly",
        ],
        suggestedNextSteps: [
          "Trace dropdown state updates",
          "Review scroll event handlers",
          "Add automated interaction tests",
        ],
      },
    },
    {
      id: 10,
      title: "Session expires immediately after login",
      description: "User session expires immediately after successful login.",
      status: "OPEN",
      category: "Back-end",
      reporterName: "Maria Torres",
      assigneeName: null,
      teamId: 2,
      createdAt: "Feb 22, 2006 · 12:00 PM",
      analysis: {
        severity: "Critical",
        labels: ["Authentication", "Session", "Security", "JWT"],
        possibleRootCauses: [
          "JWT expiration configured incorrectly",
          "Session cookie not being persisted",
          "Server and client clock mismatch",
          "Token refresh endpoint failure",
        ],
        suggestedNextSteps: [
          "Validate JWT expiry settings",
          "Inspect authentication cookies",
          "Review token refresh workflow",
          "Analyze authentication service logs",
        ],
      },
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
        {bugs.length === 0 && (
          <span className="font-sans text-xs text-white/70 text-center mt-30 px-14">
            No bugs reported yet. Start by reporting the first bug you found.
          </span>
        )}

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
