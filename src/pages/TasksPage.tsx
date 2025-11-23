import { useState } from "react";
import Typography from "@/components/atoms/Typography";
import TaskBoard from "@/components/organisms/TaskBoard";
import { mockTasks } from "@/data/mockData";
import { Task } from "@/components/molecules/TaskCard";

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleTaskStart = (taskId: string) => {
    console.log("Start task:", taskId);
  };

  const handleTaskComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: "completed" as const }
        : task
    ));
  };

  const handleTaskDelete = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = (status: Task["status"]) => {
    console.log("Add task to:", status);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-8">
          <Typography variant="h1" className="mb-2">
            Task Board
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            Organize and track your tasks with ease
          </Typography>
        </div>

        <TaskBoard
          tasks={tasks}
          onTaskStart={handleTaskStart}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
};

export default TasksPage;
