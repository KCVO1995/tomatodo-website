export interface Todo {
  id: number;
  description: string;
  updated_at: Date;
  completed: boolean;
  completed_at: Date;
  editing: boolean;
  deleted: boolean;
}

export type Tomato = {
  id: number,
  started_at: Date,
  ended_at: Date,
  duration: number,
  description: string,
  manually_created: boolean
  aborted: boolean
}