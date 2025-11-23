import { Link } from "react-router-dom";
import Typography from "@/components/atoms/Typography";
import StatCard from "@/components/molecules/StatCard";
import StreakCounter from "@/components/molecules/StreakCounter";
import AchievementBadge from "@/components/molecules/AchievementBadge";
import Button from "@/components/atoms/Button";
import ProgressBar from "@/components/atoms/ProgressBar";
import { Timer, CheckCircle, TrendingUp, Flame, Trophy, Target } from "lucide-react";
import { mockTasks, mockAchievements } from "@/data/mockData";

const HomePage = () => {
  const todaysTasks = mockTasks.filter(t => t.status !== "completed").slice(0, 3);
  const recentAchievements = mockAchievements.filter(a => a.unlocked).slice(0, 3);
  const currentLevel = 12;
  const currentXP = 2850;
  const nextLevelXP = 3000;

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
            {/* Quick Timer */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Typography variant="h3" className="mb-1">
                    Ready to Focus?
                  </Typography>
                  <Typography variant="small">
                    Start a 25-minute session
                  </Typography>
                </div>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-float">
                  <Timer className="h-8 w-8 text-white" />
                </div>
              </div>
              <Link to="/timer">
                <Button variant="zen" size="lg" className="w-full">
                  Start Focus Session
                </Button>
              </Link>
            </div>

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
