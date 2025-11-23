import { Play, Pause, RotateCcw, SkipForward, Settings } from "lucide-react";
import Button from "../atoms/Button";

interface TimerControlsProps {
  isRunning: boolean;
  onPlayPause: () => void;
  onReset: () => void;
  onSkip: () => void;
  onSettings?: () => void;
}

const TimerControls = ({ isRunning, onPlayPause, onReset, onSkip, onSettings }: TimerControlsProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="ghost"
        size="md"
        onClick={onReset}
        className="h-12 w-12 p-0 rounded-full"
        aria-label="Reset timer"
      >
        <RotateCcw className="h-5 w-5" />
      </Button>

      <Button
        variant="zen"
        size="lg"
        onClick={onPlayPause}
        className="h-16 w-16 p-0 rounded-full shadow-float hover:scale-105 active:scale-95"
        aria-label={isRunning ? "Pause timer" : "Start timer"}
      >
        {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
      </Button>

      <Button
        variant="ghost"
        size="md"
        onClick={onSkip}
        className="h-12 w-12 p-0 rounded-full"
        aria-label="Skip session"
      >
        <SkipForward className="h-5 w-5" />
      </Button>

      {onSettings && (
        <Button
          variant="ghost"
          size="md"
          onClick={onSettings}
          className="h-12 w-12 p-0 rounded-full"
          aria-label="Timer settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default TimerControls;
