export interface Bug {
  id: number;
  reportedBy: string;
  content: string;
  type: "Front-end" | "Back-end" | string;
  createdAt: string;
}
