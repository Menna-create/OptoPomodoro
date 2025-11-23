import { Task } from "@/components/molecules/TaskCard";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Write project documentation",
    priority: "high",
    status: "inProgress",
    pomodoroCount: 2,
    estimatedPomodoros: 4,
  },
  {
    id: "2",
    title: "Review pull requests",
    priority: "medium",
    status: "todo",
    pomodoroCount: 0,
    estimatedPomodoros: 2,
  },
  {
    id: "3",
    title: "Update dependencies",
    priority: "low",
    status: "todo",
    pomodoroCount: 0,
    estimatedPomodoros: 1,
  },
  {
    id: "4",
    title: "Design new landing page",
    priority: "high",
    status: "inProgress",
    pomodoroCount: 3,
    estimatedPomodoros: 6,
  },
  {
    id: "5",
    title: "Fix login bug",
    priority: "high",
    status: "completed",
    pomodoroCount: 2,
    estimatedPomodoros: 2,
  },
  {
    id: "6",
    title: "Prepare presentation slides",
    priority: "medium",
    status: "todo",
    pomodoroCount: 0,
    estimatedPomodoros: 3,
  },
  {
    id: "7",
    title: "Conduct code review",
    priority: "medium",
    status: "completed",
    pomodoroCount: 1,
    estimatedPomodoros: 1,
  },
  {
    id: "8",
    title: "Refactor authentication module",
    priority: "high",
    status: "inProgress",
    pomodoroCount: 4,
    estimatedPomodoros: 8,
  },
  {
    id: "9",
    title: "Write unit tests",
    priority: "medium",
    status: "todo",
    pomodoroCount: 0,
    estimatedPomodoros: 4,
  },
  {
    id: "10",
    title: "Update user guide",
    priority: "low",
    status: "completed",
    pomodoroCount: 2,
    estimatedPomodoros: 2,
  },
];

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

export const mockAchievements: Achievement[] = [
  {
    id: "1",
    icon: "Flame",
    title: "First Flame",
    description: "Complete your first pomodoro session",
    unlocked: true,
  },
  {
    id: "2",
    icon: "Trophy",
    title: "Week Warrior",
    description: "Maintain a 7-day streak",
    unlocked: true,
  },
  {
    id: "3",
    icon: "Target",
    title: "Century Club",
    description: "Complete 100 pomodoro sessions",
    unlocked: false,
    progress: 68,
    maxProgress: 100,
  },
  {
    id: "4",
    icon: "Zap",
    title: "Speed Demon",
    description: "Complete 10 tasks in one day",
    unlocked: true,
  },
  {
    id: "5",
    icon: "Crown",
    title: "Master Focuser",
    description: "Reach level 20",
    unlocked: false,
    progress: 12,
    maxProgress: 20,
  },
  {
    id: "6",
    icon: "Star",
    title: "Perfect Week",
    description: "Complete all planned tasks for 7 days",
    unlocked: false,
    progress: 3,
    maxProgress: 7,
  },
  {
    id: "7",
    icon: "Award",
    title: "Early Bird",
    description: "Start 5 focus sessions before 8 AM",
    unlocked: true,
  },
  {
    id: "8",
    icon: "Heart",
    title: "Wellness Champion",
    description: "Maintain wellness score above 80 for 30 days",
    unlocked: false,
    progress: 14,
    maxProgress: 30,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
  status: "online" | "focus" | "break" | "offline";
  points: number;
  streak: number;
}

export const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    status: "focus",
    points: 2450,
    streak: 15,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    status: "online",
    points: 2380,
    streak: 12,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    status: "break",
    points: 2290,
    streak: 8,
  },
  {
    id: "4",
    name: "You",
    status: "focus",
    points: 2150,
    streak: 7,
  },
  {
    id: "5",
    name: "James Park",
    status: "online",
    points: 1980,
    streak: 5,
  },
];

export interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  endsIn: string;
  reward: string;
}

export const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "30-Day Focus Marathon",
    description: "Complete at least 4 pomodoros every day for 30 days",
    participants: 234,
    endsIn: "23 days",
    reward: "500 XP + Marathon Badge",
  },
  {
    id: "2",
    title: "Weekend Warrior",
    description: "Complete 20 pomodoros this weekend",
    participants: 89,
    endsIn: "2 days",
    reward: "200 XP",
  },
  {
    id: "3",
    title: "Team Sprint",
    description: "Team completes 100 combined pomodoros this week",
    participants: 45,
    endsIn: "5 days",
    reward: "Team Trophy + 300 XP",
  },
];
