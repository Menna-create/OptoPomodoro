import { useState } from "react";
import { Plus } from "lucide-react";
import TaskCard, { Task } from "../molecules/TaskCard";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";
import { cn } from "@/lib/utils";

interface TaskBoardProps {
  tasks: Task[];
  onTaskStart?: (taskId: string) => void;
  onTaskComplete?: (taskId: string) => void;
  onTaskDelete?: (taskId: string) => void;
  onAddTask?: (status: Task["status"]) => void;
}

const TaskBoard = ({ tasks, onTaskStart, onTaskComplete, onTaskDelete, onAddTask }: TaskBoardProps) => {
  const columns: { status: Task["status"]; label: string; color: string }[] = [
    { status: "todo", label: "To Do", color: "border-muted" },
    { status: "inProgress", label: "In Progress", color: "border-accent" },
    { status: "completed", label: "Completed", color: "border-success" },
  ];

  const getTasksByStatus = (status: Task["status"]) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {columns.map((column) => {
        const columnTasks = getTasksByStatus(column.status);

        return (
          <div
            key={column.status}
            className={cn(
              "flex flex-col bg-muted/30 rounded-lg p-4 border-t-4",
              column.color
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Typography variant="h4" className="text-lg">
                  {column.label}
                </Typography>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {columnTasks.length}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onAddTask?.(column.status)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              {columnTasks.length > 0 ? (
                columnTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStart={() => onTaskStart?.(task.id)}
                    onComplete={() => onTaskComplete?.(task.id)}
                    onDelete={() => onTaskDelete?.(task.id)}
                  />
                ))
              ) : (
                <div className="flex-1 flex items-center justify-center py-8">
                  <p className="text-sm text-muted-foreground text-center">
                    No tasks yet
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskBoard;
