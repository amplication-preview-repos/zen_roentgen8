import { Category } from "../category/Category";
import { Project } from "../project/Project";
import { User } from "../user/User";

export type Task = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
