import { cn } from "@/lib/utils";
import Badge from "../atoms/Badge";

type SessionType = "focus" | "shortBreak" | "longBreak";

interface SessionIndicatorProps {
  sessionType: SessionType;
  className?: string;
}

const SessionIndicator = ({ sessionType, className }: SessionIndicatorProps) => {
  const labels = {
    focus: "Focus Time",
    shortBreak: "Short Break",
    longBreak: "Long Break",
  };

  const colors = {
    focus: "bg-primary/20 text-primary border-primary/30",
    shortBreak: "bg-accent/20 text-accent border-accent/30",
    longBreak: "bg-secondary/20 text-secondary border-secondary/30",
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "inline-flex px-4 py-2 rounded-full text-sm font-medium border",
          colors[sessionType]
        )}
      >
        {labels[sessionType]}
      </span>
    </div>
  );
};

export default SessionIndicator;
export type { SessionType };
