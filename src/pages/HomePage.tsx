import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Typography from "@/components/atoms/Typography";
import StatCard from "@/components/molecules/StatCard";
import StreakCounter from "@/components/molecules/StreakCounter";
import AchievementBadge from "@/components/molecules/AchievementBadge";
import Button from "@/components/atoms/Button";
import ProgressBar from "@/components/atoms/ProgressBar";
import TimerDisplay from "@/components/organisms/TimerDisplay";
import TimerControls from "@/components/molecules/TimerControls";
import { SessionType } from "@/components/molecules/SessionIndicator";
import { Timer, CheckCircle, TrendingUp, Flame, Trophy, Target, Volume2, VolumeX } from "lucide-react";
import { mockTasks, mockAchievements } from "@/data/mockData";

const FOCUS_TIME = 25 * 60; // 25 minutes
const SHORT_BREAK = 5 * 60; // 5 minutes
const LONG_BREAK = 15 * 60; // 15 minutes

const HomePage = () => {
  const [sessionType, setSessionType] = useState<SessionType>("focus");
  const [timeRemaining, setTimeRemaining] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  const todaysTasks = mockTasks.filter(t => t.status !== "completed").slice(0, 3);
  const recentAchievements = mockAchievements.filter(a => a.unlocked).slice(0, 3);
  const currentLevel = 12;
  const currentXP = 2850;
  const nextLevelXP = 3000;

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
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <Typography variant="h1" className="mb-2">
            Welcome back 🌿
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            Stay focused, stay present. Let's make today count.
          </Typography>
        </div>

        {/* Timer Section */}
        <div className="mb-12">
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

          <div className="flex flex-col items-center">
            <TimerDisplay
              timeRemaining={timeRemaining}
              totalTime={totalTime}
              sessionType={sessionType}
              currentTask="Write project documentation"
              isRunning={isRunning}
              className="mb-8"
            />

            <TimerControls
              isRunning={isRunning}
              onPlayPause={handlePlayPause}
              onReset={handleReset}
              onSkip={handleSkip}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={Timer}
            label="Today's Pomodoros"
            value="6"
            trend={20}
          />
          <StatCard
            icon={CheckCircle}
            label="Tasks Completed"
            value="4"
            trend={15}
            variant="success"
          />
          <StatCard
            icon={TrendingUp}
            label="Focus Time"
            value="2.5h"
            trend={-5}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Tasks */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="h3">Today's Tasks</Typography>
                <Link to="/tasks">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {todaysTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">{task.title}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {task.pomodoroCount}/{task.estimatedPomodoros} 🍅
                        </span>
                        <ProgressBar
                          value={task.pomodoroCount}
                          max={task.estimatedPomodoros}
                          variant="zen"
                          className="flex-1 max-w-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  <Typography variant="h4">Level {currentLevel}</Typography>
                </div>
                <ProgressBar
                  value={currentXP}
                  max={nextLevelXP}
                  showLabel
                  variant="zen"
                />
                <Typography variant="small" className="mt-2">
                  {nextLevelXP - currentXP} XP to next level
                </Typography>
              </div>
            </div>

            {/* Streak */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <StreakCounter
                count={7}
                days={[true, true, false, true, true, true, true]}
              />
            </div>

            {/* Recent Achievements */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="h4">Achievements</Typography>
                <Link to="/progress">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      {achievement.icon === "Flame" && <Flame className="h-5 w-5 text-white" />}
                      {achievement.icon === "Trophy" && <Trophy className="h-5 w-5 text-white" />}
                      {achievement.icon === "Target" && <Target className="h-5 w-5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
