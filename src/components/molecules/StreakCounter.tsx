import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakCounterProps {
  count: number;
  days: boolean[];
  className?: string;
}

const StreakCounter = ({ count, days, className }: StreakCounterProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="flex items-center gap-2">
        <Flame className="h-8 w-8 text-warning animate-glow" />
        <span className="text-3xl font-bold text-foreground">{count}</span>
      </div>
      <p className="text-sm text-muted-foreground font-medium">Day Streak</p>
      
      <div className="flex gap-2 mt-2">
        {days.map((active, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              active ? "bg-warning scale-110" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default StreakCounter;
