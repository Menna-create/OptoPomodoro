import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "todo" | "inProgress" | "completed" | "low" | "medium" | "high";
}

const Badge = ({ variant = "todo", className, children, ...props }: BadgeProps) => {
  const variants = {
    todo: "bg-muted text-muted-foreground",
    inProgress: "bg-accent/20 text-accent border border-accent/30",
    completed: "bg-success/20 text-success border border-success/30",
    low: "bg-blue-100 text-blue-700 border border-blue-200",
    medium: "bg-warning/20 text-warning-foreground border border-warning/30",
    high: "bg-destructive/20 text-destructive border border-destructive/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
