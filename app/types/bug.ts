/* ------------------------- Types ------------------------- */
export type BugStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "FIXED"
  | "VERIFIED"
  | "CLOSED"
  | "";

export type BugCategory = "Front-end" | "Back-end" | "";

export type AnalysisSeverity = "Low" | "Medium" | "High" | "Critical" | "";

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
  analysis: BugAnalysisResponse;
}

export interface BugRequest {
  title: string;
  description: string;
  category: BugCategory;
  teamId: number;
  assigneeId?: number;
}

export interface BugAnalysisResponse {
  severity: AnalysisSeverity;
  labels: string[];
  possibleRootCauses: string[];
  suggestedNextSteps: string[];
}
