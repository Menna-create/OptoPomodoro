import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SessionIndicator, { SessionType } from "../molecules/SessionIndicator";
import Typography from "../atoms/Typography";

interface TimerDisplayProps {
  timeRemaining: number;
  totalTime: number;
  sessionType: SessionType;
  currentTask?: string;
  isRunning: boolean;
  className?: string;
}

const TimerDisplay = ({
  timeRemaining,
  totalTime,
  sessionType,
  currentTask,
  isRunning,
  className,
}: TimerDisplayProps) => {
  const [ripples, setRipples] = useState<number[]>([]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRipples(prev => [...prev, Date.now()]);
      setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const progress = ((totalTime - timeRemaining) / totalTime) * 100;
  const circumference = 2 * Math.PI * 140;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <SessionIndicator sessionType={sessionType} />

      {/* Zen Garden Timer Circle */}
      <div className="relative">
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple}
            className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ripple"
            style={{
              width: "300px",
              height: "300px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Main timer circle */}
        <svg className="w-[300px] h-[300px] -rotate-90" viewBox="0 0 300 300">
          {/* Background circle */}
          <circle
            cx="150"
            cy="150"
            r="140"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />

          {/* Progress circle */}
          <circle
            cx="150"
            cy="150"
            r="140"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Typography variant="h1" className="font-mono text-6xl mb-2">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </Typography>

          {currentTask && (
            <Typography variant="small" className="max-w-[200px] text-center">
              {currentTask}
            </Typography>
          )}

          {/* Zen garden element */}
          {isRunning && (
            <div className="absolute bottom-8 flex gap-2">
              <div className="h-1 w-8 bg-primary/30 rounded-full animate-rake" />
              <div className="h-1 w-8 bg-primary/20 rounded-full animate-rake" style={{ animationDelay: "0.5s" }} />
            </div>
          )}
        </div>
      </div>

      {currentTask && (
        <div className="text-center max-w-md">
          <Typography variant="h4" className="mb-1">
            {currentTask}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TimerDisplay;
