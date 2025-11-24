import { useState, useEffect, useCallback } from "react";
import TimerDisplay from "@/components/organisms/TimerDisplay";
import { SessionType } from "@/components/molecules/SessionIndicator";
import { Volume2, VolumeX } from "lucide-react";
import Button from "@/components/atoms/Button";

const FOCUS_TIME = 25 * 60; // 25 minutes
const SHORT_BREAK = 5 * 60; // 5 minutes
const LONG_BREAK = 15 * 60; // 15 minutes

const TimerPage = () => {
  const [sessionType, setSessionType] = useState<SessionType>("focus");
  const [timeRemaining, setTimeRemaining] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(5);
  const [breathsCount, setBreathsCount] = useState(3);
  const [wellnessStatus, setWellnessStatus] = useState("Take Break");

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

  
  const handleSkip = () => {
    handleSessionComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
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

          {/* Zen Garden Elements */}
          <div className="flex items-center justify-start mb-4">
            <div className="text-2xl">
              🌿 🪨 💧 🎋 🍃 🪵 💎
            </div>
          </div>

          {/* Expanded Zen Garden Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Expanded Zen Garden
            </h2>
          </div>

          {/* Three Column Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Current Task */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🎧</span>
                <h3 className="font-semibold text-foreground">UI Design</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">⏱️</span>
                  <span className="text-sm text-muted-foreground">Session {sessionsCompleted + 1}/4</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">⚡</span>
                  <span className="text-sm text-muted-foreground">High Energy</span>
                </div>
              </div>
            </div>

            {/* Card 2: Analytics */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">📊</span>
                <h3 className="font-semibold text-foreground">Analytics</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🎯</span>
                  <span className="text-sm text-muted-foreground">78% Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">🔥</span>
                  <span className="text-sm text-muted-foreground">{currentStreak} Day Streak</span>
                </div>
              </div>
            </div>

            {/* Card 3: Wellness */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🧘</span>
                <h3 className="font-semibold text-foreground">Wellness</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">💆</span>
                  <span className="text-sm text-muted-foreground">{wellnessStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">🌿</span>
                  <span className="text-sm text-muted-foreground">{breathsCount} Breaths</span>
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={handlePlayPause}
              className="px-8 py-3 text-lg font-semibold"
            >
              PAUSE
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleSkip}
              className="px-8 py-3 text-lg font-semibold"
            >
              SKIP BREAK
            </Button>
          </div>

          {/* Bottom Status Bar */}
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border mb-8">
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span>{soundEnabled ? "🔊" : "🔇"}</span>
                <span className="text-muted-foreground">Focus Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎵</span>
                <span className="text-muted-foreground">Forest Sounds</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span className="text-muted-foreground">Mobile Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚙️</span>
                <span className="text-muted-foreground">Settings</span>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-center gap-8 text-2xl">
            <span className="cursor-pointer hover:opacity-70 transition-opacity">🏠</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity opacity-100">⏰</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">📋</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">📊</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">👥</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">⚙️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
