const KEY = "tasks";

import { Task } from "./types1";

export const getTasks = (): Task[] => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks: Task[]): void => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
};