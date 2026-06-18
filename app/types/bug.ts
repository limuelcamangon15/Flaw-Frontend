/* ------------------------- Types ------------------------- */
export type BugStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "FIXED"
  | "VERIFIED"
  | "CLOSED"
  | "";

export type BugCategory = "Front-end" | "Back-end" | "";

/* ------------------------- Interfaces ------------------------- */
export interface BugResponse {
  id: number;
  title: string;
  description: string;
  status: BugStatus;
  category: BugCategory;
  reporterName: string;
  assigneeName: string | null;
  teamId: number;
  createdAt: string;
}

export interface BugRequest {
  title: string;
  description: string;
  category: BugCategory;
  teamId: number;
  assigneeId?: number;
}
