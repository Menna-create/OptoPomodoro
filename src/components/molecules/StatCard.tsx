import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: number;
  variant?: "default" | "success" | "warning";
}

const StatCard = ({ icon: Icon, label, value, trend, variant = "default", className, ...props }: StatCardProps) => {
  const variants = {
    default: "bg-card border-border",
    success: "bg-success/5 border-success/20",
    warning: "bg-warning/5 border-warning/20",
  };

  return (
    <div
      className={cn(
        "relative p-4 rounded-lg border transition-all hover:shadow-zen",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {trend !== undefined && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium",
            trend > 0 ? "text-success" : "text-destructive"
          )}>
            {trend > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCard;
