
export interface Task {
    id: number,
    title: string,
    description: string,
    dueDate: string,
    status: "completed" | "in-progress",
    priority: "low" | "medium" | "high"
} 