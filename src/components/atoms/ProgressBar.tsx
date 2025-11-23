import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  variant?: "primary" | "success" | "warning" | "zen";
}

const ProgressBar = ({ 
  value, 
  max = 100, 
  showLabel = false, 
  variant = "primary",
  className,
  ...props 
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    zen: "bg-gradient-to-r from-primary to-accent",
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out",
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs text-muted-foreground text-right">
          {Math.round(percentage)}%
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
