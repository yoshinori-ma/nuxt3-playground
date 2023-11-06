// useTasks.ts
import { ref } from "vue";
import type { Ref } from "vue";
import type { Task } from "@/types/task";

// composable間で状態を共有する
const tasks: Ref<Task[]> = ref([
  { id: 1, title: "Create a todo app", description: "", completed: false },
  {
    id: 2,
    title: "Read the documentation",
    description: "",
    completed: false,
  },
  { id: 3, title: "Star the repo", description: "", completed: false },
]);

export const useTasks = () => {
  const newTask: Ref<string> = ref("");

  const addTask = (title: string) => {
    const newId = Math.max(...tasks.value.map((task) => task.id));
    tasks.value.push({
      id: newId + 1,
      title,
      description: "",
      completed: false,
    });
    newTask.value = "";
  };

  const removeTask = (id: number) => {
    const index = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(index, 1);
  };

  return { tasks, newTask, addTask, removeTask };
};
