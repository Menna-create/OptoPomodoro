import Typography from "@/components/atoms/Typography";
import ProgressBar from "@/components/atoms/ProgressBar";
import AchievementBadge from "@/components/molecules/AchievementBadge";
import StreakCounter from "@/components/molecules/StreakCounter";
import { mockAchievements } from "@/data/mockData";
import { Trophy, Flame, Target, Zap, Crown, Star, Award, Heart } from "lucide-react";

const iconMap = {
  Flame,
  Trophy,
  Target,
  Zap,
  Crown,
  Star,
  Award,
  Heart,
};

const ProgressPage = () => {
  const currentLevel = 12;
  const currentXP = 2850;
  const nextLevelXP = 3000;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-8">
          <Typography variant="h1" className="mb-2">
            Your Progress
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            Track your journey to peak productivity
          </Typography>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <Typography variant="h2" className="text-3xl">Level {currentLevel}</Typography>
                <Typography variant="small">Keep climbing!</Typography>
              </div>
            </div>
            <ProgressBar
              value={currentXP}
              max={nextLevelXP}
              showLabel
              variant="zen"
            />
            <Typography variant="small" className="mt-2 block text-center">
              {nextLevelXP - currentXP} XP to Level {currentLevel + 1}
            </Typography>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border flex items-center justify-center">
            <StreakCounter
              count={7}
              days={[true, true, false, true, true, true, true]}
            />
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <Typography variant="h4" className="mb-4 text-center">This Week</Typography>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Pomodoros</span>
                <span className="text-lg font-bold">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Focus Time</span>
                <span className="text-lg font-bold">11.7h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tasks Done</span>
                <span className="text-lg font-bold">15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <Typography variant="h2" className="mb-6">Achievements</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockAchievements.map((achievement) => {
              const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <AchievementBadge
                  key={achievement.id}
                  icon={IconComponent}
                  title={achievement.title}
                  description={achievement.description}
                  unlocked={achievement.unlocked}
                  progress={achievement.progress}
                  maxProgress={achievement.maxProgress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
