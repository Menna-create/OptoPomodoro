# OptoPomodoro - NestJS API Endpoints Specification

## Overview

This document outlines the required NestJS backend endpoints to replace the mock data used in the OptoPomodoro frontend application. The frontend is built with React, TypeScript, and uses TanStack Query for data fetching.

## Current Frontend Analysis

### Mock Data Structure

The frontend currently uses mock data from `/src/data/mockData.ts` with the following entities:

1. **Tasks**: Task management with pomodoro tracking
2. **Achievements**: Gamification system with unlockable badges
3. **Team Members**: Community leaderboard functionality
4. **Challenges**: Community challenges and competitions
5. **User Stats**: Levels, XP, streaks, and progress tracking

### Frontend Tech Stack
- React 18 with TypeScript
- TanStack Query for data fetching
- React Router for navigation
- Tailwind CSS with shadcn/ui components

## Required NestJS Modules & Endpoints

### 1. Authentication Module (`/api/auth`)

**Controllers & Endpoints:**

```typescript
// POST /api/auth/register
interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

// POST /api/auth/login
interface LoginDto {
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  user: User;
}

// POST /api/auth/refresh
interface RefreshTokenDto {
  refresh_token: string;
}

// POST /api/auth/logout
// GET /api/auth/me
```

**Guard Requirements:**
- JWT Access Token Guard
- Refresh Token Guard
- Local Authentication Guard

### 2. Users Module (`/api/users`)

**Controllers & Endpoints:**

```typescript
// GET /api/users/profile
interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  level: number;
  currentXP: number;
  nextLevelXP: number;
  streak: number;
  joinedAt: Date;
}

// PUT /api/users/profile
interface UpdateProfileDto {
  name?: string;
  avatar?: string;
}

// GET /api/users/stats
interface UserStats {
  totalPomodoros: number;
  totalFocusTime: number; // in minutes
  tasksCompleted: number;
  currentStreak: number;
  longestStreak: number;
  weeklyStats: {
    pomodoros: number;
    focusTime: number;
    tasksCompleted: number;
  };
}

// GET /api/users/{id}/public-profile
interface PublicUserProfile {
  id: string;
  name: string;
  avatar?: string;
  level: number;
  points: number;
  streak: number;
  status: 'online' | 'focus' | 'break' | 'offline';
}
```

### 3. Tasks Module (`/api/tasks`)

**Controllers & Endpoints:**

```typescript
// GET /api/tasks
interface GetTasksQuery {
  status?: 'todo' | 'inProgress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  limit?: number;
  offset?: number;
}

interface TaskResponse {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'inProgress' | 'completed';
  pomodoroCount: number;
  estimatedPomodoros: number;
  createdAt: Date;
  updatedAt: Date;
}

// POST /api/tasks
interface CreateTaskDto {
  title: string;
  priority: 'low' | 'medium' | 'high';
  estimatedPomodoros: number;
}

// PUT /api/tasks/{id}
interface UpdateTaskDto {
  title?: string;
  priority?: 'low' | 'medium' | 'high';
  status?: 'todo' | 'inProgress' | 'completed';
  estimatedPomodoros?: number;
}

// DELETE /api/tasks/{id}

// POST /api/tasks/{id}/start-pomodoro
// POST /api/tasks/{id}/complete-pomodoro
// POST /api/tasks/{id}/complete-task
```

### 4. Timer Module (`/api/timer`)

**Controllers & Endpoints:**

```typescript
// POST /api/timer/session/start
interface StartSessionDto {
  taskId?: string;
  sessionType: 'focus' | 'shortBreak' | 'longBreak';
  duration: number; // in seconds
}

// POST /api/timer/session/{id}/complete
interface CompleteSessionDto {
  actualDuration: number;
  wasCompleted: boolean;
}

// POST /api/timer/session/{id}/skip

// GET /api/timer/sessions
interface GetSessionsQuery {
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  offset?: number;
}

interface TimerSession {
  id: string;
  userId: string;
  taskId?: string;
  sessionType: 'focus' | 'shortBreak' | 'longBreak';
  plannedDuration: number;
  actualDuration: number;
  startedAt: Date;
  completedAt?: Date;
  wasCompleted: boolean;
}

// GET /api/timer/stats/daily
interface DailyStatsDto {
  date: Date;
  pomodoros: number;
  focusTime: number;
  breakTime: number;
  tasksCompleted: number;
}

// GET /api/timer/stats/weekly
// GET /api/timer/stats/monthly
```

### 5. Progress & Achievements Module (`/api/progress`)

**Controllers & Endpoints:**

```typescript
// GET /api/progress/achievements
interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  unlockedAt?: Date;
}

// GET /api/progress/overview
interface ProgressOverview {
  currentLevel: number;
  currentXP: number;
  nextLevelXP: number;
  totalXP: number;
  achievements: {
    total: number;
    unlocked: number;
  };
  streak: {
    current: number;
    longest: number;
    lastActiveDate: Date;
  };
}

// POST /api/progress/achievements/{id}/claim

// GET /api/progress/leaderboard
interface LeaderboardQuery {
  type?: 'weekly' | 'monthly' | 'allTime';
  limit?: number;
  offset?: number;
}

interface LeaderboardEntry {
  rank: number;
  user: PublicUserProfile;
  points: number;
  pomodoros: number;
  streak: number;
}
```

### 6. Community Module (`/api/community`)

**Controllers & Endpoints:**

```typescript
// GET /api/community/teams
interface Team {
  id: string;
  name: string;
  memberCount: number;
  totalPoints: number;
  isActive: boolean;
}

// GET /api/community/challenges
interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  endsIn: string;
  reward: string;
  isActive: boolean;
  userParticipation?: boolean;
}

// POST /api/community/challenges/{id}/join
// DELETE /api/community/challenges/{id}/leave

// GET /api/community/activity
interface ActivityEntry {
  id: string;
  user: PublicUserProfile;
  action: string;
  targetEntity?: string;
  timestamp: Date;
}

// GET /api/community/team-members
interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'focus' | 'break' | 'offline';
  points: number;
  streak: number;
  currentTask?: string;
}
```

### 7. Settings Module (`/api/settings`)

**Controllers & Endpoints:**

```typescript
// GET /api/settings
interface UserSettings {
  id: string;
  focusDuration: number; // in minutes
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakInterval: number; // after how many focus sessions
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
  dailyGoal: number; // target pomodoros per day
  weeklyGoal: number;
  theme: 'light' | 'dark' | 'system';
}

// PUT /api/settings
interface UpdateSettingsDto {
  focusDuration?: number;
  shortBreakDuration?: number;
  longBreakDuration?: number;
  longBreakInterval?: number;
  soundEnabled?: boolean;
  notificationsEnabled?: boolean;
  autoStartBreaks?: boolean;
  autoStartPomodoros?: boolean;
  dailyGoal?: number;
  weeklyGoal?: number;
  theme?: 'light' | 'dark' | 'system';
}
```

## Database Schema Recommendations

### User Entity
```typescript
interface User {
  id: string;
  email: string;
  password: string; // hashed
  name: string;
  avatar?: string;
  level: number;
  currentXP: number;
  totalXP: number;
  streak: number;
  longestStreak: number;
  lastActiveAt: Date;
  joinedAt: Date;
  settings: UserSettings;
}
```

### Task Entity
```typescript
interface Task {
  id: string;
  userId: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'inProgress' | 'completed';
  pomodoroCount: number;
  estimatedPomodoros: number;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}
```

### TimerSession Entity
```typescript
interface TimerSession {
  id: string;
  userId: string;
  taskId?: string;
  sessionType: 'focus' | 'shortBreak' | 'longBreak';
  plannedDuration: number;
  actualDuration: number;
  startedAt: Date;
  completedAt?: Date;
  wasCompleted: boolean;
}
```

### Achievement Entity
```typescript
interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  maxProgress?: number;
  condition: string; // JSON or enum defining unlock condition
}

interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  progress: number;
  unlocked: boolean;
  unlockedAt?: Date;
}
```

## Implementation Considerations

### 1. Real-time Features
- Use WebSocket gateway for live updates:
  - Team member status changes
  - Challenge progress updates
  - Live leaderboard updates

### 2. Authentication & Authorization
- JWT-based authentication with refresh tokens
- Role-based access control (if needed for future features)
- Rate limiting for sensitive endpoints

### 3. Data Validation
- Use class-validator with DTOs
- Sanitize all input data
- Implement proper error responses

### 4. Performance
- Database indexing for frequently queried fields
- Pagination for list endpoints
- Caching for static data (achievements, challenges)

### 5. Testing
- Unit tests for all services
- Integration tests for endpoints
- E2E tests for critical user flows

## Frontend Integration Points

### 1. Replace Mock Data Usage
- `HomePage.tsx`: User stats, recent achievements, today's tasks
- `TasksPage.tsx`: Task CRUD operations
- `ProgressPage.tsx`: User progress, achievements, stats
- `CommunityPage.tsx`: Leaderboard, challenges, team members
- `TimerPage.tsx`: Session tracking and completion

### 2. TanStack Query Integration
- Replace static mock data with React Query hooks
- Implement optimistic updates for better UX
- Handle loading and error states consistently

### 3. Real-time Updates
- Implement WebSocket connections for live features
- Update UI in response to real-time events
- Handle connection management gracefully

## Migration Strategy

### Phase 1: Core Features
1. Authentication endpoints
2. User profile and settings
3. Task management CRUD
4. Basic timer session tracking

### Phase 2: Progress & Gamification
1. Achievement system
2. User stats and progress tracking
3. Level and XP calculations

### Phase 3: Community Features
1. Leaderboards
2. Team management
3. Challenges system
4. Real-time features

This specification provides a comprehensive foundation for building a robust NestJS backend that will seamlessly replace the mock data in the OptoPomodoro frontend application.