import { useState, useEffect, useCallback } from "react";
import TimerDisplay from "@/components/organisms/TimerDisplay";
import TimerControls from "@/components/molecules/TimerControls";
import { SessionType } from "@/components/molecules/SessionIndicator";
import { Volume2, VolumeX } from "lucide-react";
import Button from "@/components/atoms/Button";

const FOCUS_TIME = 25 * 60; // 25 minutes
const SHORT_BREAK = 5 * 60; // 5 minutes
const LONG_BREAK = 15 * 60; // 15 minutes

const TimerPage = () => {
  const [sessionType, setSessionType] = useState<SessionType>("focus");
  const [timeRemaining, setTimeRemaining] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  const totalTime = sessionType === "focus" ? FOCUS_TIME : sessionType === "shortBreak" ? SHORT_BREAK : LONG_BREAK;

  useEffect(() => {
    if (!isRunning || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSessionComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const handleSessionComplete = useCallback(() => {
    setIsRunning(false);
    
    if (sessionType === "focus") {
      const newCount = sessionsCompleted + 1;
      setSessionsCompleted(newCount);
      
      // After 4 focus sessions, take a long break
      if (newCount % 4 === 0) {
        setSessionType("longBreak");
        setTimeRemaining(LONG_BREAK);
      } else {
        setSessionType("shortBreak");
        setTimeRemaining(SHORT_BREAK);
      }
    } else {
      setSessionType("focus");
      setTimeRemaining(FOCUS_TIME);
    }
  }, [sessionType, sessionsCompleted]);

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(totalTime);
  };

  const handleSkip = () => {
    handleSessionComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                Focus Timer
              </h1>
              <p className="text-muted-foreground">
                Session {sessionsCompleted + 1} • Stay present, stay focused
              </p>
            </div>

            <Button
              variant="ghost"
              size="md"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="h-12 w-12 p-0 rounded-full"
            >
              {soundEnabled ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Timer Display */}
          <TimerDisplay
            timeRemaining={timeRemaining}
            totalTime={totalTime}
            sessionType={sessionType}
            currentTask="Write project documentation"
            isRunning={isRunning}
            className="mb-8"
          />

          {/* Controls */}
          <TimerControls
            isRunning={isRunning}
            onPlayPause={handlePlayPause}
            onReset={handleReset}
            onSkip={handleSkip}
          />

          {/* Session Info */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <p className="text-2xl font-bold text-foreground mb-1">{sessionsCompleted}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <p className="text-2xl font-bold text-foreground mb-1">{Math.floor(sessionsCompleted * 25 / 60)}h</p>
              <p className="text-sm text-muted-foreground">Focus Time</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <p className="text-2xl font-bold text-foreground mb-1">{4 - (sessionsCompleted % 4)}</p>
              <p className="text-sm text-muted-foreground">Until Break</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
