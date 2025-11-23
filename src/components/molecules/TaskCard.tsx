import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Badge from "../atoms/Badge";
import { GripVertical, Play, CheckCircle, Trash2 } from "lucide-react";
import Button from "../atoms/Button";

interface Task {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "inProgress" | "completed";
  pomodoroCount: number;
  estimatedPomodoros: number;
}

interface TaskCardProps extends HTMLAttributes<HTMLDivElement> {
  task: Task;
  onStart?: () => void;
  onComplete?: () => void;
  onDelete?: () => void;
}

const TaskCard = ({ task, onStart, onComplete, onDelete, className, ...props }: TaskCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-lg p-4 border border-border hover:shadow-zen transition-all cursor-move",
        task.status === "completed" && "opacity-75",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <GripVertical className="h-5 w-5 text-muted-foreground mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex-1 min-w-0">
          <h4 className={cn(
            "font-medium text-foreground mb-2",
            task.status === "completed" && "line-through text-muted-foreground"
          )}>
            {task.title}
          </h4>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={task.priority}>{task.priority}</Badge>
            <Badge variant={task.status}>
              {task.status === "inProgress" ? "In Progress" : task.status}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {task.pomodoroCount}/{task.estimatedPomodoros} 🍅
            </span>
          </div>
        </div>

        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {task.status !== "completed" && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onStart}
              className="h-8 w-8 p-0"
            >
              <Play className="h-4 w-4" />
            </Button>
          )}
          {task.status !== "completed" && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onComplete}
              className="h-8 w-8 p-0"
            >
              <CheckCircle className="h-4 w-4" />
            </Button>
          )}
          <Button
            size="sm"
            variant="ghost"
            onClick={onDelete}
            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
export type { Task };
