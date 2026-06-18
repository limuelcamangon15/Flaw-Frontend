export interface BugResponse {
  id: number;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "FIXED" | "VERIFIED" | "CLOSED" | string;
  category: "Front-end" | "Back-end" | string;
  reporterName: string;
  assigneeName: string;
  teamId: number;
  createdAt: string;
}

export interface BugRequest {
  title: string;
  description: string;
  category: "Front-end" | "Back-end" | string;
  teamId: number;
  assigneeId?: number;
}
