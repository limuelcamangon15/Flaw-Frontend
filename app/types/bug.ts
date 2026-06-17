export interface Bug {
  id: number;
  reportedBy: string;
  content: string;
  type: "Front-end" | "Back-end" | string;
  createdAt: string;
}

export interface BugRequest {
  title: string;
  description: string;
  category: "Front-end" | "Back-end" | string;
  teamId: number;
  assigneeId?: number;
}
