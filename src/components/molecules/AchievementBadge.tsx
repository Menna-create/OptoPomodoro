import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, Lock } from "lucide-react";
import ProgressBar from "../atoms/ProgressBar";

interface AchievementBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

const AchievementBadge = ({
  icon: Icon,
  title,
  description,
  unlocked,
  progress,
  maxProgress = 100,
  className,
  ...props
}: AchievementBadgeProps) => {
  return (
    <div
      className={cn(
        "relative p-4 rounded-lg border transition-all hover:shadow-zen",
        unlocked ? "bg-card border-border" : "bg-muted/30 border-muted",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "relative p-3 rounded-full transition-all",
            unlocked
              ? "bg-gradient-to-br from-primary to-accent text-white shadow-zen"
              : "bg-muted text-muted-foreground"
          )}
        >
          {unlocked ? (
            <Icon className="h-6 w-6" />
          ) : (
            <Lock className="h-6 w-6" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={cn(
            "font-semibold mb-1",
            unlocked ? "text-foreground" : "text-muted-foreground"
          )}>
            {title}
          </h4>
          <p className={cn(
            "text-sm",
            unlocked ? "text-muted-foreground" : "text-muted-foreground/70"
          )}>
            {description}
          </p>

          {!unlocked && progress !== undefined && (
            <div className="mt-3">
              <ProgressBar
                value={progress}
                max={maxProgress}
                showLabel
                variant="primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementBadge;
