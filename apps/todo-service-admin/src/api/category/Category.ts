import { Task } from "../task/Task";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
