```
As an expert frontend engineer, create a fully functional React application implementing ALL pages and components from the UI/UX requirements document. Follow the atomic design methodology with the specified folder structure.
CORE REQUIREMENTS:
1. FOLDER STRUCTURE (Strict Adherence)
components/
├── atoms/          
│   ├── Button.jsx          # Primary, secondary, icon variants
│   ├── Input.jsx           # Text, number, search inputs
│   ├── Icon.jsx            # Lucide-react icon wrapper
│   ├── Typography.jsx      # Headings, body, labels
│   ├── Badge.jsx           # Status, priority badges
│   ├── Avatar.jsx          # User avatars
│   └── ProgressBar.jsx     # Linear progress indicators
│
├── molecules/      
│   ├── TaskCard.jsx        # Task display with priority, status, pomodoros
│   ├── TimerControls.jsx   # Play/pause/reset/skip controls
│   ├── SessionIndicator.jsx # Current session type display
│   ├── StatCard.jsx        # Dashboard metric cards
│   ├── AchievementBadge.jsx # Unlockable achievement display
│   ├── StreakCounter.jsx   # Daily streak visualization
│   ├── SearchBar.jsx       # Task/user search
│   └── NotificationCard.jsx # Alert/notification display
│
├── organisms/      
│   ├── TimerDisplay.jsx    # Circular Zen garden timer with animations
│   ├── TaskBoard.jsx       # Kanban board (todo/inProgress/completed)
│   ├── ProgressDashboard.jsx # Analytics charts and metrics
│   ├── CommunityFeed.jsx   # Team activity and challenges
│   ├── LeaderboardPanel.jsx # Rankings and scores
│   ├── SettingsPanel.jsx   # User preferences and integrations
│   ├── NavigationBar.jsx   # Responsive nav (bottom mobile, top desktop)
│   ├── ZenGarden.jsx       # Animated zen garden visualization
│   └── WellnessMeters.jsx  # Health tracking visualization
│
├── templates/      
│   ├── AppLayout.jsx       # Main app wrapper with navigation
│   ├── DashboardLayout.jsx # Multi-column dashboard structure
│   └── AuthLayout.jsx      # Login/signup layout
│
└── pages/          
    ├── HomePage.jsx        # Landing/dashboard overview
    ├── TimerPage.jsx       # Focus timer with zen garden
    ├── TasksPage.jsx       # Full task management board
    ├── ProgressPage.jsx    # Analytics and achievements
    ├── CommunityPage.jsx   # Team challenges and social
    ├── ProfilePage.jsx     # User profile and stats
    └── SettingsPage.jsx    # App settings and integrations
2. DESIGN SYSTEM SPECIFICATIONS
Color Palette (Zen Theme):

Primary: #4A6741 (Forest Green)
Secondary: #8B7355 (Earth Brown)
Accent: #6B9080 (Sage)
Background: #F5F5F0 (Off-white)
Surface: #FFFFFF
Text Primary: #2C3E2E
Text Secondary: #6B7F6A
Success: #5A8F4F
Warning: #D4A574
Danger: #C66B5C

Typography:

Font Family: 'Inter' for UI, 'Crimson Pro' for headings
Scale: 12px, 14px, 16px, 18px, 24px, 32px, 48px

Spacing System:

4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

Border Radius:

Small: 4px, Medium: 8px, Large: 16px, Full: 9999px

3. COMPONENT REQUIREMENTS
Atoms (Basic Building Blocks):

Button: 3 variants (primary, secondary, ghost), 3 sizes, loading state, disabled state
Input: Focus states, error validation, helper text, icons
Typography: Responsive font scaling, proper semantic HTML
Badge: Color variants for status (todo/inProgress/completed), priority (low/medium/high)
ProgressBar: Animated, show percentage, gradient support

Molecules (Combined Atoms):

TaskCard: Show title, priority badge, pomodoro count, status, drag handle, quick actions
TimerControls: Play/pause toggle, reset, skip break, settings icon
StatCard: Icon, label, value, trend indicator, sparkline chart
AchievementBadge: Icon, title, description, locked/unlocked state, progress bar
StreakCounter: Flame icon, count, calendar visualization of past 7 days

Organisms (Complex Components):

TimerDisplay:

Circular progress ring (SVG)
Zen garden animation (water ripples, sand raking)
Time remaining (MM:SS format)
Session type indicator
Current task display
Background meditation sounds toggle


TaskBoard:

3 columns (To Do, In Progress, Completed)
Drag-and-drop functionality (visual feedback)
Add task button per column
Filter/sort controls
Task count badges
Empty state illustrations


ProgressDashboard:

XP progress bar with level
Weekly activity heatmap
Pomodoro completion chart (last 30 days)
Focus time by category (pie chart)
Achievement showcase grid
Wellness score meter


CommunityFeed:

Team member cards with status
Recent activity timeline
Active challenges list
Join challenge CTAs
Social sharing buttons



4. PAGE IMPLEMENTATIONS
HomePage/Dashboard:

Quick access timer widget
Today's tasks summary (3 cards max)
Streak and XP progress
Recent achievements (2-3 badges)
Wellness snapshot
Quick stats (today's pomodoros, focus time, tasks completed)

TimerPage (MOST IMPORTANT):

Full-screen circular timer with zen garden
Selected task display with edit option
Session controls (start/pause/reset/skip)
Session type toggle (focus/short break/long break)
Background customization (garden themes)
Ambient sound controls
Fullscreen mode toggle
Session history (bottom drawer)

TasksPage:

Full kanban board with all 3 columns
Add task modal/form
Task detail sidebar (click to expand)
Bulk actions (select multiple)
Filter by priority, tag, date
Sort options
Search functionality
Export tasks button

ProgressPage:

Hero stats (level, XP, streak)
Weekly overview chart
All achievements grid (locked + unlocked)
Detailed analytics:

Focus time trends
Productivity score
Task completion rate
Category breakdown


Wellness integration data
Exportable reports

CommunityPage:

Leaderboard (weekly/monthly/all-time tabs)
Active challenges section
Team activity feed
Challenge detail modals
Create custom challenge
Invite team members
Social sharing

ProfilePage:

User avatar and bio
Stats overview
Achievement showcase
Activity history
Personal bests
Edit profile form

SettingsPage:

Organized tabs:

Timer settings (durations, auto-start)
Notifications (push, email, sound)
Integrations (calendar, Slack, health apps)
Appearance (theme, sounds, animations)
Account (password, email, delete)
Privacy & data



5. RESPONSIVE BEHAVIOR
Mobile (320px-768px):

Bottom tab navigation (5 icons)
Single column layouts
Stacked cards
Hamburger menu for secondary actions
Full-width timer
Swipe gestures between pages
Touch-optimized buttons (44px min)

Tablet (768px-1024px):

Side navigation drawer
Two-column task board
Expanded timer with side panel
Floating action buttons

Desktop (1024px+):

Top navigation bar
Multi-column dashboard (2-3 cols)
Keyboard shortcuts overlay (press '?')
Hover states and tooltips
Sidebar always visible
Modals instead of full-page forms

6. INTERACTIVE FEATURES
Animations (Smooth & Zen-like):

Timer countdown (circular wipe animation)
Zen garden elements (water ripples every 5s, sand raking on completion)
Task drag-and-drop (lift and drop shadows)
Page transitions (fade + slide)
Micro-interactions (button presses, checkbox checks)
Achievement unlock (scale + confetti)
XP gain (number count-up animation)

State Management:

Timer state (time, active, session type)
Tasks (CRUD operations, reordering)
User progress (XP, level, achievements, streak)
Settings (preferences, integrations)
Community data (leaderboard, challenges)

7. MOCK DATA REQUIREMENTS
Provide realistic mock data for:

15-20 tasks across all statuses with varied priorities
10-12 achievements (mix of locked/unlocked)
User stats (level 8-15, realistic XP, 3-30 day streak)
7-10 team members with activity
3-5 active challenges
30 days of historical session data for charts
Leaderboard with 10+ users

8. ACCESSIBILITY (WCAG 2.1 AA)

Proper ARIA labels on all interactive elements
Keyboard navigation (Tab, Enter, Escape, Arrow keys)
Focus visible indicators (2px outline)
Color contrast 4.5:1 minimum
Alt text on images
Screen reader announcements for timer state changes
Skip navigation links

9. TECHNICAL IMPLEMENTATION

Use React hooks (useState, useEffect, useRef, useCallback)
Tailwind CSS utility classes ONLY (no custom CSS)
Lucide-react icons
SVG for timer circle and charts
localStorage for data persistence (timer state, tasks, settings)
Responsive with mobile-first approach
Component props with default values
No external state management libraries

10. QUALITY STANDARDS

Each component should be self-contained and reusable
Proper prop validation
Clean, semantic HTML
DRY principles (no repeated code)
Consistent naming conventions (camelCase)
Comments for complex logic
Professional UI polish (shadows, spacing, alignment)
No console errors
Smooth 60fps animations

DELIVERABLE:
A single, complete React artifact containing ALL components and pages with full functionality, beautiful Zen-themed design, smooth animations, and realistic mock data. The app should be immediately usable and demonstrate all features from the UI/UX requirements document.
```
-comment  : very specific on the technical implementation but produced a very dull design 
- Needed more insructions on how would the design shall look like 
- asked calaude chat to help in identifing a detailed design as an expert frontendengineer for  a Pomodoro project 

output :
```
 Layout and Color Design Prompt:

  I need you to recreate the OptoPomodoro application with the exact Zen Garden design system and responsive layouts as specified
  below.

  Color Palette (Zen Garden Theme)

  Primary Colors

  /* Earth and Nature Tones */
  --zen-sand: #D4C5B9; /* Main background - warm sand */
  --zen-stone: #7A8B7F; /* Secondary - sage green */
  --zen-bamboo: #6B8E9F; /* Accent - muted blue */
  --zen-sunset: #E67E50; /* Highlight - warm orange */
  --zen-light: #F4E4D4; /* Surface - light cream */
  --zen-dark: #2C3E50; /* Text - deep slate */

  /* Priority Colors */
  --priority-high: #EF4444; /* Red */
  --priority-medium: #F59E0B; /* Amber */
  --priority-low: #10B981; /* Emerald */

  /* Status Colors */
  --status-todo: #FEE2E2; /* Light red background */
  --status-progress: #DBEAFE; /* Light blue background */
  --status-completed: #D1FAE5; /* Light green background */

  /* Progress Bar Colors */
  --progress-zen: linear-gradient(90deg, #7A8B7F 0%, #6B8E9F 100%);
  --progress-wellness: linear-gradient(90deg, #10B981 0%, #3B82F6 100%);

  Typography

  /* Font Families */
  --font-serif: 'Georgia', 'Times New Roman', serif; /* For headings */
  --font-sans: 'Inter', 'Segoe UI', system-ui, sans-serif; /* For body text */

  /* Typography Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */

  Responsive Layout Specifications

  Mobile Layout (320px - 768px)

  Container: max-w-full; padding: 1rem;

  Navigation (Bottom Tab Bar)

  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: rgba(244, 228, 212, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(212, 197, 185, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 50;
  }

  Timer Page Layout

  .timer-mobile {
    min-height: 100vh;
    background: linear-gradient(135deg, #D4C5B9 0%, #F4E4D4 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem 5rem;
  }

  .timer-circle {
    width: 240px;
    height: 240px;
    margin: 2rem auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .timer-display {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--zen-dark);
    font-family: var(--font-serif);
  }

  Task Board Mobile

  .task-board-mobile {
    padding: 1rem;
    padding-bottom: 5rem;
  }

  .task-column {
    margin-bottom: 1.5rem;
    background: white;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .task-column-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid;
  }

  .zen-beginner-header { border-color: #EF4444; }
  .in-flow-header { border-color: #3B82F6; }
  .completed-header { border-color: #10B981; }

  Tablet Layout (768px - 1024px)

  Container: max-w-6xl; margin: 0 auto; padding: 2rem;

  Side Navigation

  .side-nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    background: linear-gradient(180deg, #7A8B7F 0%, #6B8E9F 100%);
    padding: 2rem 1rem;
    z-index: 40;
  }

  .main-content {
    margin-left: 200px;
    padding: 2rem;
  }

  Timer Tablet

  .timer-tablet {
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .timer-circle {
    width: 320px;
    height: 320px;
    margin: 0 auto;
  }

  .timer-info-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }

  Task Board Tablet

  .task-board-tablet {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .task-column {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    min-height: 400px;
  }

  Desktop Layout (1024px+)

  Container: max-w-7xl; margin: 0 auto; padding: 2.5rem;

  Navigation Header

  .header-desktop {
    position: sticky;
    top: 0;
    background: rgba(244, 228, 212, 0.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(212, 197, 185, 0.3);
    padding: 1rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-link {
    color: var(--zen-stone);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s;
  }

  .nav-link:hover {
    background: rgba(122, 139, 127, 0.1);
    color: var(--zen-dark);
  }

  Dashboard Desktop

  .dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2rem;
    margin-top: 2rem;
  }

  .quick-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(212, 197, 185, 0.2);
  }

  Component-Specific Styling

  Timer Components

  /* Circular Progress Ring */
  .progress-ring {
    transform: rotate(-90deg);
    transition: stroke-dashoffset 0.35s;
  }

  .progress-ring-circle {
    stroke: var(--zen-stone);
    stroke-width: 8;
    fill: transparent;
  }

  .progress-ring-progress {
    stroke: url(#gradient);
    stroke-width: 8;
    fill: transparent;
    stroke-linecap: round;
  }

  /* Zen Garden Elements */
  .zen-garden {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
  }

  .zen-element {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  Task Cards

  .task-card {
    background: white;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-left: 4px solid;
    transition: all 0.2s;
  }

  .task-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .task-card.high-priority {
    border-left-color: var(--priority-high);
  }

  .task-card.medium-priority {
    border-left-color: var(--priority-medium);
  }

  .task-card.low-priority {
    border-left-color: var(--priority-low);
  }

  Progress Bars

  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(212, 197, 185, 0.3);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--progress-zen);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .progress-fill.wellness {
    background: var(--progress-wellness);
  }

  Achievement Badges

  .achievement-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: linear-gradient(135deg, rgba(122, 139, 127, 0.1) 0%, rgba(107, 142, 159, 0.1) 100%);
    border: 1px solid rgba(122, 139, 127, 0.2);
    border-radius: 12px;
    margin-bottom: 0.75rem;
  }

  .achievement-icon {
    width: 40px;
    height: 40px;
    background: var(--progress-zen);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  Dark Mode Variants

  .dark-mode {
    --zen-sand: #1A1A1A;
    --zen-stone: #4A5568;
    --zen-bamboo: #2D3748;
    --zen-sunset: #ED8936;
    --zen-light: #2D3748;
    --zen-dark: #F7FAFC;
  }

  .dark-mode .task-card {
    background: var(--zen-light);
    border: 1px solid rgba(74, 85, 104, 0.3);
  }

  .dark-mode .stat-card {
    background: var(--zen-light);
    border: 1px solid rgba(74, 85, 104, 0.3);
  }

  Animation and Transitions

  /* Smooth Transitions */
  .smooth-transition {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover Effects */
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  /* Focus States */
  .focus-ring:focus {
    outline: 2px solid var(--zen-bamboo);
    outline-offset: 2px;
  }

  /* Loading Animation */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .loading-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  Responsive Breakpoints (Tailwind CSS)

  /* Mobile-first approach */
  @media (min-width: 768px) {
    /* Tablet styles */
  }

  @media (min-width: 1024px) {
    /* Desktop styles */
  }

  @media (min-width: 1280px) {
    /* Large desktop styles */
  }

  Implementation Requirements:
  1. Use the exact color values provided above
  2. Implement all three responsive breakpoints as specified
  3. Create smooth transitions and hover effects
  4. Ensure accessibility with proper contrast ratios
  5. Implement dark mode variants for all components
  6. Use the Zen Garden design elements (🌿 🪨 💧 🎋) throughout
  7. Maintain consistent spacing using the 8px grid system
  8. Apply the typography scale exactly as specified

  This design system creates a calming, focused environment that promotes productivity while maintaining visual harmony across all
  device sizes.
  ``` 

  - asked claude to combine both together  and created that masssive prompt 
  ```
 As an expert frontend engineer with exceptional design skills, create a fully functional React application implementing ALL pages and components from the UI/UX requirements document. The application should be VISUALLY STUNNING with modern design aesthetics, smooth animations, and professional polish - not dull or generic. Follow the atomic design methodology with the specified folder structure.

CORE REQUIREMENTS:

1. FOLDER STRUCTURE (Strict Adherence)
components/
├── atoms/          
│   ├── Button.jsx          # Primary, secondary, icon variants
│   ├── Input.jsx           # Text, number, search inputs
│   ├── Icon.jsx            # Lucide-react icon wrapper
│   ├── Typography.jsx      # Headings, body, labels
│   ├── Badge.jsx           # Status, priority badges
│   ├── Avatar.jsx          # User avatars
│   └── ProgressBar.jsx     # Linear progress indicators
│
├── molecules/      
│   ├── TaskCard.jsx        # Task display with priority, status, pomodoros
│   ├── TimerControls.jsx   # Play/pause/reset/skip controls
│   ├── SessionIndicator.jsx # Current session type display
│   ├── StatCard.jsx        # Dashboard metric cards
│   ├── AchievementBadge.jsx # Unlockable achievement display
│   ├── StreakCounter.jsx   # Daily streak visualization
│   ├── SearchBar.jsx       # Task/user search
│   └── NotificationCard.jsx # Alert/notification display
│
├── organisms/      
│   ├── TimerDisplay.jsx    # Circular Zen garden timer with animations
│   ├── TaskBoard.jsx       # Kanban board (todo/inProgress/completed)
│   ├── ProgressDashboard.jsx # Analytics charts and metrics
│   ├── CommunityFeed.jsx   # Team activity and challenges
│   ├── LeaderboardPanel.jsx # Rankings and scores
│   ├── SettingsPanel.jsx   # User preferences and integrations
│   ├── NavigationBar.jsx   # Responsive nav (bottom mobile, top desktop)
│   ├── ZenGarden.jsx       # Animated zen garden visualization
│   └── WellnessMeters.jsx  # Health tracking visualization
│
├── templates/      
│   ├── AppLayout.jsx       # Main app wrapper with navigation
│   ├── DashboardLayout.jsx # Multi-column dashboard structure
│   └── AuthLayout.jsx      # Login/signup layout
│
└── pages/          
    ├── HomePage.jsx        # Landing/dashboard overview
    ├── TimerPage.jsx       # Focus timer with zen garden
    ├── TasksPage.jsx       # Full task management board
    ├── ProgressPage.jsx    # Analytics and achievements
    ├── CommunityPage.jsx   # Team challenges and social
    ├── ProfilePage.jsx     # User profile and stats
    └── SettingsPage.jsx    # App settings and integrations

2. DESIGN SYSTEM SPECIFICATIONS

**Color Palette (Zen Garden Theme - USE THESE EXACT COLORS):**

Primary Colors:
- zen-sand: #D4C5B9 (Main background - warm sand)
- zen-stone: #7A8B7F (Secondary - sage green)
- zen-bamboo: #6B8E9F (Accent - muted blue)
- zen-sunset: #E67E50 (Highlight - warm orange)
- zen-light: #F4E4D4 (Surface - light cream)
- zen-dark: #2C3E50 (Text - deep slate)

Priority Colors:
- priority-high: #EF4444 (Red)
- priority-medium: #F59E0B (Amber)
- priority-low: #10B981 (Emerald)

Status Colors:
- status-todo: #FEE2E2 (Light red background)
- status-progress: #DBEAFE (Light blue background)
- status-completed: #D1FAE5 (Light green background)

**Gradients (Use for visual interest):**
- Background: linear-gradient(135deg, #D4C5B9 0%, #F4E4D4 100%)
- Progress Bar: linear-gradient(90deg, #7A8B7F 0%, #6B8E9F 100%)
- Wellness: linear-gradient(90deg, #10B981 0%, #3B82F6 100%)
- Side Navigation: linear-gradient(180deg, #7A8B7F 0%, #6B8E9F 100%)

Typography:
- Font Family: 'Inter' for UI, 'Georgia' or serif for headings
- Scale: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px
- Use varied font weights: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

Spacing System:
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

Border Radius:
- Small: 8px, Medium: 12px, Large: 16px, Full: 9999px

**Visual Effects (CRITICAL for non-dull design):**
- Shadows: Use layered shadows (0 2px 8px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.1))
- Glassmorphism: background: rgba(244, 228, 212, 0.95) with backdrop-filter: blur(10px)
- Hover lift: transform: translateY(-2px) with increased shadow
- Border accents: 4px left border on task cards with priority colors
- Subtle transparency: Use rgba() for overlays and backgrounds

3. COMPONENT REQUIREMENTS

Atoms (Basic Building Blocks):
- Button: 3 variants (primary with gradient, secondary with border, ghost), 3 sizes, loading state, disabled state, hover scale effect
- Input: Focus states with colored ring, error validation, helper text, icons, smooth transitions
- Typography: Responsive font scaling, proper semantic HTML, varied weights for hierarchy
- Badge: Rounded pills with status/priority colors, subtle shadows
- ProgressBar: Animated smooth fills with gradients, show percentage

Molecules (Combined Atoms):
- TaskCard: White background, left border (4px) with priority color, hover lift effect, rounded corners, shadow
- TimerControls: Icon buttons with hover states, circular design, smooth transitions
- StatCard: White card with icon circle, gradient icon background, value with large font, trend indicator
- AchievementBadge: Gradient background when unlocked, grayscale when locked, icon circle, progress bar
- StreakCounter: Flame icon with gradient, large number, 7-day calendar dots visualization

Organisms (Complex Components):

**TimerDisplay** (Make this SPECTACULAR):
- Circular progress ring (SVG) with gradient stroke (#7A8B7F to #6B8E9F)
- 320px circle on desktop, 240px on mobile
- Zen garden elements: 🌿 🪨 💧 🎋 with floating animation
- Time in large serif font (48px+)
- Subtle pulsing animation during active session
- Soft shadow and background glow
- Sand/stone textured background

**TaskBoard**:
- 3 columns with distinct header colors (red/blue/green underlines)
- White column backgrounds with rounded corners and shadows
- Drag-and-drop with visual feedback (shadow increases, slight rotation)
- Add task button with + icon, prominent styling
- Empty state with illustration text
- Task count badges in column headers

**ProgressDashboard**:
- XP progress bar with gradient fill and level number in circle
- Weekly heatmap with green intensity variations
- Charts with smooth curves (not harsh lines)
- Donut chart for focus categories with segment colors
- Achievement grid with card flip animations
- Wellness meter as radial progress

**CommunityFeed**:
- Team member cards with avatars, online status dots
- Timeline with vertical line connecting events
- Challenge cards with gradient accents
- Join buttons with prominent styling
- Activity items with icons and timestamps

4. PAGE IMPLEMENTATIONS

**HomePage/Dashboard** (Hero-style layout):
- Large timer widget centered at top (reduced size, not full screen)
- Today's tasks in 3 horizontal cards with shadows
- Stat cards grid (3 columns) with icons and gradients
- Streak counter prominent with flame icon
- Achievement badges (2-3) with shimmer effect
- Wellness snapshot with radial gauge
- Use generous whitespace and card-based layout

**TimerPage** (MOST IMPORTANT - Make this BREATHTAKING):
- Full viewport height with gradient background
- Centered circular timer (dominant element)
- Floating zen elements around timer
- Large serif font for time display
- Session type indicator above timer
- Controls below timer (large, touch-friendly)
- Current task card at bottom with edit button
- Ambient sound toggle with icon
- Session history drawer that slides up from bottom

**TasksPage**:
- 3-column kanban layout on desktop, stacked on mobile
- Each column: white background, rounded corners, shadow
- Column headers with status color underline (4px)
- Task cards with priority left border
- Add task buttons per column
- Filter/sort dropdown in header
- Search bar at top
- Smooth drag-and-drop animations

**ProgressPage** (Data visualization showcase):
- Hero section with level in large circle, XP bar below
- Grid of stat cards (pomodoros, focus time, tasks, streak)
- Weekly activity heatmap (7 columns)
- Line chart for 30-day pomodoro trend
- Donut chart for category breakdown
- Achievement grid (4 columns) with lock/unlock states
- Wellness integration section with gauges
- Export button in header

**CommunityPage**:
- Leaderboard with podium display (top 3 larger)
- Tabs for weekly/monthly/all-time
- Active challenges section with card grid
- Team feed timeline on right sidebar
- Challenge cards with progress bars
- Join/create buttons prominent
- Avatar groups for participants

**ProfilePage**:
- Large avatar at top with edit overlay on hover
- Stats grid below avatar (4 cards)
- Achievement showcase (grid of earned badges)
- Activity history timeline or chart
- Personal bests highlighted
- Edit profile button

**SettingsPage**:
- Tab navigation on left or top
- Form sections with clear labels
- Toggle switches with smooth animation
- Integration cards with brand colors
- Save buttons prominent

5. RESPONSIVE BEHAVIOR

Mobile (320px-768px):
- Bottom fixed navigation (64px height) with 5 icons, glass effect
- Single column layouts with full width
- Timer: 240px circle, controls below
- Task board: stacked columns, one per screen width
- Cards: full width with 16px padding
- Touch-optimized buttons (44px min height)

Tablet (768px-1024px):
- Side drawer navigation (200px width)
- Two-column task board
- Timer: 320px with side info panel
- Grid layouts: 2 columns
- Floating action buttons

Desktop (1024px+):
- Top sticky navigation bar with glass effect
- Multi-column dashboard (2-3 columns)
- Task board: 3 columns side by side
- Hover states on all interactive elements
- Tooltips on icon buttons
- Keyboard shortcuts
- Modals for forms (not full page)

6. INTERACTIVE FEATURES (Make every interaction delightful)

**Animations** (Smooth & Engaging):
- Timer countdown: SVG stroke-dashoffset animation
- Zen elements: floating animation (translateY oscillation)
- Task drag: lift with shadow increase, smooth drop
- Page transitions: fade (opacity) + slide (translateX)
- Button clicks: scale(0.98) on active
- Achievement unlock: scale(1.2) with bounce, confetti particles
- XP gain: number count-up with easing
- Hover: translateY(-2px) with shadow increase
- Loading: pulse animation (opacity 1 to 0.5)

State Management:
- Timer state (time remaining, active/paused, session type)
- Tasks (CRUD operations, drag-and-drop reordering)
- User progress (XP, level, achievements, streak count)
- Settings (timer durations, sound, theme preferences)
- Community data (leaderboard, challenges, team activity)

7. MOCK DATA REQUIREMENTS

Provide realistic mock data for:
- 15-20 tasks across all statuses (todo: 8, inProgress: 5, completed: 7) with varied priorities
- 10-12 achievements (5 unlocked, 7 locked) with progress percentages
- User stats: Level 12, XP 2450/3000, 15-day streak
- 8 team members with names, avatars, status, recent activity
- 4 active challenges with titles, participants, progress
- 30 days of session data (random 2-8 pomodoros per day)
- Leaderboard with 12 users, scores, ranks, avatars

8. ACCESSIBILITY (WCAG 2.1 AA)
- Proper ARIA labels on all buttons and interactive elements
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Focus visible indicators with 2px colored outline
- Color contrast 4.5:1 minimum (test zen-dark on zen-light)
- Alt text on decorative icons
- Screen reader announcements for timer changes
- Skip navigation link

9. TECHNICAL IMPLEMENTATION
- Use React hooks (useState, useEffect, useRef, useCallback)
- Tailwind CSS utility classes ONLY (leverage full Tailwind palette)
- Lucide-react icons throughout
- SVG for timer circle and progress rings
- localStorage for persistence (timer, tasks, settings, user data)
- Responsive with mobile-first approach
- Component props with default values and PropTypes comments
- No external state management libraries

10. QUALITY STANDARDS
- Self-contained, reusable components
- Professional UI polish: proper shadows, spacing (use 8px grid), perfect alignment
- Smooth 60fps animations using CSS transitions
- No console errors or warnings
- Consistent design language: use zen color palette throughout
- Visual hierarchy: size, color, shadow, spacing
- Delightful micro-interactions on every button/card
- Premium feel: not generic Bootstrap/Material-UI style

**CRITICAL DESIGN REQUIREMENTS:**
- Use the zen color palette EXACTLY as specified (hex values provided)
- Apply gradients to backgrounds, progress bars, and accent elements
- Add shadows to all cards for depth (start with 0 2px 8px rgba(0,0,0,0.05))
- Implement hover states with lift effect (translateY(-2px))
- Use border accents (left 4px border on task cards)
- Apply glassmorphism to navigation (backdrop-filter: blur(10px))
- Animate all transitions (0.3s cubic-bezier(0.4, 0, 0.2, 1))
- Include zen garden emoji elements: 🌿 🪨 💧 🎋
- Make timer page the visual centerpiece with large circular design
- Use generous whitespace (minimum 24px between cards)

DELIVERABLE:
A single, complete React artifact containing ALL components and pages with full functionality, STUNNING visual design using the zen garden color palette, smooth animations, and realistic mock data. The app should look like a premium SaaS product with a cohesive zen aesthetic - modern, elegant, calming, and delightful to use. Every page should be visually impressive with proper use of the specified colors, shadows, gradients, and animations.
  ```

  - asked after to divide this prompt into each page individually 


prompt 1: 
```
Prompt 1: Design System & Atoms
As an expert frontend engineer with exceptional design skills, create the foundational design system and atomic components for a Zen Pomodoro application.

COLOR PALETTE (USE THESE EXACT COLORS):
- zen-sand: #D4C5B9 (Main background)
- zen-stone: #7A8B7F (Secondary)
- zen-bamboo: #6B8E9F (Accent)
- zen-sunset: #E67E50 (Highlight)
- zen-light: #F4E4D4 (Surface)
- zen-dark: #2C3E50 (Text)
- priority-high: #EF4444
- priority-medium: #F59E0B
- priority-low: #10B981
- status-todo: #FEE2E2
- status-progress: #DBEAFE
- status-completed: #D1FAE5

GRADIENTS:
- Background: linear-gradient(135deg, #D4C5B9 0%, #F4E4D4 100%)
- Progress: linear-gradient(90deg, #7A8B7F 0%, #6B8E9F 100%)

CREATE THESE ATOM COMPONENTS:

1. Button.jsx
   - Variants: primary (gradient bg), secondary (border), ghost (transparent)
   - Sizes: sm, md, lg
   - States: default, hover (lift effect), active (scale down), loading, disabled
   - Props: children, variant, size, loading, disabled, onClick, icon

2. Input.jsx
   - Types: text, number, search
   - States: default, focus (colored ring), error, disabled
   - Props: type, placeholder, value, onChange, error, helperText, icon, label

3. Icon.jsx
   - Wrapper for Lucide-react icons
   - Props: name (icon component), size, color, className

4. Typography.jsx
   - Variants: h1, h2, h3, h4, body, label, caption
   - Font: Inter for body, Georgia/serif for headings
   - Props: variant, children, className, as (semantic HTML tag)

5. Badge.jsx
   - Types: status (todo/inProgress/completed), priority (high/medium/low)
   - Rounded pill shape with appropriate colors
   - Props: type, value, size

6. Avatar.jsx
   - Circular user avatar with fallback initials
   - Online status indicator (optional)
   - Props: src, name, size, showStatus, status

7. ProgressBar.jsx
   - Linear progress with gradient fill
   - Animated smooth transitions
   - Optional percentage display
   - Props: value, max, showPercentage, variant (zen/wellness)

REQUIREMENTS:
- Use Tailwind CSS utility classes ONLY
- Implement smooth transitions (0.3s cubic-bezier)
- Add hover effects (translateY, scale, shadow)
- Include focus states with visible outlines
- Use the zen color palette throughout
- Add subtle shadows for depth
- Make components reusable with proper props
- Include a demo showcase displaying all variants

DELIVERABLE:
A single React artifact showcasing all 7 atom components with multiple examples of each variant, demonstrating the zen design system aesthetics.
```


```
prompt2 :
Prompt 2: Molecules
As an expert frontend engineer, create molecule components for the Zen Pomodoro application using the established atom components.

USE THESE COLORS:
- zen-sand: #D4C5B9, zen-stone: #7A8B7F, zen-bamboo: #6B8E9F
- zen-sunset: #E67E50, zen-light: #F4E4D4, zen-dark: #2C3E50
- priority-high: #EF4444, priority-medium: #F59E0B, priority-low: #10B981

CREATE THESE MOLECULE COMPONENTS:

1. TaskCard.jsx
   - White background with rounded corners (12px)
   - 4px left border colored by priority
   - Display: title, priority badge, pomodoro count (🍅), status badge
   - Drag handle icon on left
   - Quick action buttons (edit, delete) on hover
   - Hover effect: lift (-2px) with increased shadow
   - Props: task (object), onEdit, onDelete, onDragStart

2. TimerControls.jsx
   - Horizontal button group
   - Buttons: Play/Pause (toggle), Reset, Skip
   - Circular icon buttons with hover scale
   - Active state visual feedback
   - Props: isRunning, onPlayPause, onReset, onSkip

3. SessionIndicator.jsx
   - Display current session type (Focus/Short Break/Long Break)
   - Colored pill badge with icon
   - Session type toggle buttons
   - Props: sessionType, onSessionChange

4. StatCard.jsx
   - White card with shadow and rounded corners
   - Icon circle with gradient background
   - Large value number with label below
   - Optional trend indicator (↑ or ↓)
   - Optional sparkline mini chart
   - Props: icon, label, value, trend, trendValue

5. AchievementBadge.jsx
   - Gradient background when unlocked, grayscale when locked
   - Icon circle at top
   - Title and description text
   - Progress bar at bottom (if partially complete)
   - Lock icon overlay when locked
   - Props: achievement (object with title, description, progress, unlocked)

6. StreakCounter.jsx
   - Large flame icon with gradient
   - Big number display of streak count
   - 7-day calendar visualization (dots for each day)
   - Highlighted dot for current day
   - Props: streakCount, lastSevenDays (array of booleans)

7. SearchBar.jsx
   - Input with search icon
   - Rounded pill shape
   - Glass morphism effect (subtle blur background)
   - Props: value, onChange, placeholder

8. NotificationCard.jsx
   - Alert/notification display
   - Types: success, warning, error, info
   - Icon, title, message, close button
   - Slide-in animation
   - Props: type, title, message, onClose

REQUIREMENTS:
- Use atom components (Button, Input, Icon, Typography, Badge, Avatar, ProgressBar)
- Apply zen color palette with gradients
- Implement smooth hover and transition effects
- Add appropriate shadows for depth
- Use Tailwind CSS utility classes only
- Make components interactive and reusable
- Include demo with realistic data

DELIVERABLE:
Single React artifact with all 8 molecule components displayed with interactive examples and realistic mock data.
```

```
Prompt 3: Timer Page (Most Important)
As an expert frontend engineer, create a STUNNING Timer Page for the Zen Pomodoro application - this is the centerpiece of the app.

COLORS:
- Background gradient: linear-gradient(135deg, #D4C5B9 0%, #F4E4D4 100%)
- Timer ring: gradient from #7A8B7F to #6B8E9F
- Text: #2C3E50

CREATE THE TIMER PAGE:

Layout:
- Full viewport height with gradient background
- Centered design with generous whitespace
- All elements focused on the circular timer

Components Required:

1. Circular Timer Display (320px on desktop, 240px on mobile)
   - SVG circular progress ring with gradient stroke
   - Animated countdown (stroke-dashoffset)
   - Time in large serif font (48px+) in center
   - Subtle pulsing/breathing animation when active
   - Soft shadow and glow effect
   - Background with subtle texture

2. Zen Garden Animation
   - Floating emoji elements around timer: 🌿 🪨 💧 🎋
   - Gentle floating animation (translateY oscillation)
   - Elements positioned around the circle
   - Appear/disappear subtly during session

3. Session Type Indicator (above timer)
   - Display: "Focus Session" / "Short Break" / "Long Break"
   - Pill-shaped badge with icon
   - Color changes based on session type
   - Smooth transition between types

4. Timer Controls (below timer)
   - Large circular buttons: Play/Pause, Reset, Skip
   - Touch-friendly (min 44px)
   - Icon-only with tooltips
   - Smooth hover and active states
   - Visual feedback on click

5. Current Task Display (bottom card)
   - White card with shadow
   - Show selected task title
   - Pomodoro count for this task
   - Edit button to change task
   - Compact, non-intrusive design

6. Additional Controls (top right)
   - Ambient sound toggle (Volume icon)
   - Fullscreen mode toggle (Maximize icon)
   - Settings icon
   - Minimal, icon-only buttons

7. Session History Drawer (bottom, optional)
   - Slide up from bottom on click
   - Show last 5 completed sessions
   - Each session: time, task, type
   - Glass morphism background

Functionality:
- Timer counts down from 25:00 (focus), 5:00 (short break), 15:00 (long break)
- Play/pause toggles timer state
- Reset returns to session duration
- Skip moves to next session type
- Circular progress ring fills as time counts down
- Sound toggle changes icon (Volume/VolumeX)
- Store timer state in localStorage

Responsive:
- Mobile: 240px circle, stacked layout, bottom nav spacing
- Desktop: 320px circle, all controls visible

REQUIREMENTS:
- Make this page BREATHTAKING and visually impressive
- Smooth 60fps animations
- Use zen color palette and gradients
- Implement all interactive features
- Large, elegant typography
- Generous whitespace
- Calming, zen aesthetic
- Use Tailwind CSS and Lucide-react icons

DELIVERABLE:
Complete, fully functional Timer Page that serves as the hero feature of the app. Include working timer logic, animations, and all controls.


```

```
Prompt 4: Home/Dashboard Page
As an expert frontend engineer, create the Home/Dashboard page for the Zen Pomodoro application with a modern, card-based layout.

COLORS: zen-sand: #D4C5B9, zen-stone: #7A8B7F, zen-bamboo: #6B8E9F, zen-sunset: #E67E50, zen-light: #F4E4D4, zen-dark: #2C3E50

CREATE THE HOMEPAGE:

Layout Structure:
- Desktop: 2-column grid (main content + sidebar)
- Mobile: single column, stacked cards
- Background: subtle gradient from zen-sand to zen-light

Sections:

1. Header Welcome (top)
   - "Welcome back, [User]!" in large serif heading
   - Current date and time
   - Motivational quote or daily goal

2. Quick Timer Widget (prominent, top section)
   - Compact circular timer (200px)
   - Current session time display
   - Quick start button
   - Show current task if selected
   - Click to navigate to full Timer Page

3. Quick Stats Grid (3 columns on desktop, 1 on mobile)
   - Today's Pomodoros: count with tomato icon
   - Focus Time: hours/minutes with clock icon
   - Tasks Completed: count with checkmark icon
   - Each stat in a card with icon circle, gradient backgrounds
   - Large numbers, trend indicators

4. Today's Tasks (3 cards max)
   - "Today's Focus" heading
   - Show 3 most important tasks
   - Use TaskCard component with priority borders
   - "View All Tasks" button at bottom

5. Progress Section (left column)
   - XP Progress Bar with level
   - Current XP / Next Level XP
   - "Level 12" in circle badge
   - Gradient fill in progress bar

6. Streak Counter (right sidebar)
   - Large flame icon with gradient
   - Current streak number (large text)
   - 7-day calendar visualization
   - Motivational text: "🔥 15 day streak!"

7. Recent Achievements (2-3 badges)
   - "Latest Achievements" heading
   - Achievement badges in grid
   - Unlock animations on newly earned
   - "View All" link

8. Wellness Snapshot (card)
   - Circular wellness score gauge
   - Score out of 100
   - Brief status text
   - Color gradient based on score

Mock Data:
- User: "Sarah Chen"
- Level: 12, XP: 2450/3000
- Streak: 15 days
- Today: 4 pomodoros, 1h 40m focus time, 3 tasks completed
- 3 tasks with varied priorities
- 2-3 recent achievements

Navigation:
- Top nav bar on desktop (glass morphism)
- Bottom tab bar on mobile
- Quick access icons to all pages

Responsive:
- Desktop: multi-column dashboard
- Tablet: 2-column layout
- Mobile: single column, stacked cards

REQUIREMENTS:
- Use StatCard, TaskCard, StreakCounter, AchievementBadge molecules
- Apply zen color palette with gradients and shadows
- Generous whitespace between cards (min 24px)
- Smooth hover effects on cards
- Clean, modern, uncluttered design
- Visual hierarchy with size and color

DELIVERABLE:
Complete, functional HomePage with realistic mock data, showcasing all dashboard widgets in an elegant layout.
```




```
Prompt 5: Tasks/Kanban Page
As an expert frontend engineer, create a full Kanban board Tasks page for the Zen Pomodoro application.

COLORS: zen-sand: #D4C5B9, zen-stone: #7A8B7F, priority-high: #EF4444, priority-medium: #F59E0B, priority-low: #10B981, status-todo: #FEE2E2, status-progress: #DBEAFE, status-completed: #D1FAE5

CREATE THE TASKS PAGE:

Layout:
- 3-column layout on desktop (To Do, In Progress, Completed)
- Single column on mobile (swipeable or stacked)
- Top toolbar with filters, sort, search, add task

Components:

1. Page Header
   - "My Tasks" title
   - SearchBar component (top right)
   - Filter dropdown (priority, category, date)
   - Sort dropdown (due date, priority, created)
   - Add Task button (prominent, gradient)
   - Export button (icon)

2. Column: To Do (Zen Beginner)
   - Header with title and task count badge
   - 4px red underline on header
   - Light red/pink background (#FEE2E2)
   - White cards inside
   - Add task button at top
   - Task cards with drag handle

3. Column: In Progress (In Flow)
   - Header with title and task count badge
   - 4px blue underline
   - Light blue background (#DBEAFE)
   - White cards inside
   - Show active tasks with pomodoro progress

4. Column: Completed (Zen Master)
   - Header with title and task count badge
   - 4px green underline
   - Light green background (#D1FAE5)
   - White cards inside
   - Completed tasks with checkmark

5. Task Cards (use TaskCard molecule)
   - White background, rounded corners
   - 4px left border (priority color)
   - Title, priority badge, pomodoro count
   - Due date indicator
   - Quick action buttons (edit, delete) on hover
   - Drag and drop functionality

6. Add Task Modal/Form
   - Slide in from right or modal overlay
   - Fields: title, description, priority, category, due date, estimated pomodoros
   - Save and Cancel buttons
   - Glass morphism background for modal

7. Task Detail Sidebar
   - Slide in from right when task clicked
   - Show full task details
   - Edit fields inline
   - Timer integration: "Start Focus" button
   - Pomodoro history for this task
   - Comments/notes section
   - Close button

8. Drag and Drop
   - Visual feedback: shadow increases, slight tilt
   - Smooth drop animation
   - Placeholder shows drop zone
   - Prevent drop if invalid

9. Empty States
   - Illustration or icon
   - Helpful text: "No tasks yet. Add one to get started!"
   - Add task button

Mock Data:
- To Do: 8 tasks (varied priorities)
- In Progress: 5 tasks (some with pomodoro progress)
- Completed: 7 tasks
- Categories: Design, Development, Meetings, Content, Personal

Functionality:
- Drag tasks between columns
- Add new task (form validation)
- Edit task (inline or sidebar)
- Delete task (confirmation)
- Filter by priority/category
- Sort by date/priority
- Search by title
- Mark complete/incomplete
- Store in localStorage

Responsive:
- Desktop: 3 columns side by side
- Tablet: 3 columns, narrower
- Mobile: stacked or swipeable

REQUIREMENTS:
- Use TaskCard molecule
- Smooth drag-and-drop animations
- Visual column distinction (colored backgrounds/borders)
- Hover effects on all cards
- Clean, organized layout
- Status badge colors match column theme
- Use zen color palette

DELIVERABLE:
Complete, functional Kanban board with drag-and-drop, add/edit/delete tasks, filters, and realistic mock data across all columns.
```


```
Prompt 6: Progress/Analytics Page
As an expert frontend engineer, create the Progress/Analytics page for the Zen Pomodoro application with beautiful data visualizations.

COLORS: zen-stone: #7A8B7F, zen-bamboo: #6B8E9F, zen-sunset: #E67E50, priority-high: #EF4444, priority-medium: #F59E0B, priority-low: #10B981

CREATE THE PROGRESS PAGE:

Layout:
- Hero section at top
- Grid layout for stats and charts
- Achievement showcase section
- Wellness integration section

Sections:

1. Hero Stats (top banner)
   - Large circular badge with level number ("Level 12")
   - XP progress bar below (gradient fill)
   - Current XP / Next Level XP text
   - "2,450 / 3,000 XP" display
   - Streak counter with flame icon (15 days)
   - All in a card with gradient background

2. Quick Stats Grid (4 cards)
   - Total Pomodoros: large number with tomato icon
   - Total Focus Time: hours with clock icon
   - Tasks Completed: count with checkmark icon
   - Current Streak: days with flame icon
   - Each card: icon circle, large number, label, gradient accent

3. Weekly Activity Heatmap
   - "This Week" heading
   - 7 columns (days of week)
   - Each cell shows pomodoro count
   - Color intensity based on activity (light to dark green)
   - Hover shows exact count
   - Current day highlighted

4. 30-Day Pomodoro Trend Chart
   - "Last 30 Days" heading
   - Line or area chart
   - Smooth curves (not jagged)
   - Gradient fill under curve
   - X-axis: dates, Y-axis: pomodoro count
   - Hover shows data point value
   - Can use simple SVG or CSS-based chart

5. Focus Time by Category (Donut/Pie Chart)
   - "Time by Category" heading
   - Segments: Design, Development, Meetings, Content, etc.
   - Each segment different color
   - Center shows total hours
   - Legend below with percentages
   - Can use SVG circle segments

6. Achievements Showcase (grid)
   - "All Achievements" heading with count (5/12 unlocked)
   - Grid layout (4 columns desktop, 2 mobile)
   - Use AchievementBadge molecule
   - Unlocked badges: full color, gradient
   - Locked badges: grayscale with lock icon
   - Progress bar if partially complete
   - Filter: All / Unlocked / Locked

7. Productivity Insights (cards)
   - Most productive time of day
   - Average pomodoros per day
   - Task completion rate (percentage)
   - Best category performance
   - Each in a stat card

8. Wellness Meter
   - "Wellness Score" heading
   - Radial progress gauge (circular)
   - Score out of 100
   - Color gradient: red (low) to green (high)
   - Based on: breaks taken, session balance, streak
   - Status text: "Excellent balance!"

9. Export Section
   - "Export Your Data" heading
   - Export as PDF button
   - Export as CSV button
   - Date range selector

Mock Data:
- Level 12, 2450/3000 XP
- 15-day streak
- Total: 156 pomodoros, 65 hours, 87 tasks
- Weekly: [2, 5, 4, 6, 3, 7, 4] pomodoros
- 30-day data: random 2-8 pomodoros per day
- Categories: Design 35%, Development 40%, Meetings 15%, Content 10%
- Achievements: 5 unlocked, 7 locked
- Wellness score: 82/100

Responsive:
- Desktop: multi-column grid
- Tablet: 2-column layout
- Mobile: single column, stacked

REQUIREMENTS:
- Use StatCard, AchievementBadge molecules
- Beautiful, colorful charts (not boring gray)
- Smooth hover interactions on charts
- Gradients in progress indicators
- Large, readable numbers
- Visual hierarchy with size and color
- Zen color palette throughout
- Clean, organized data presentation

DELIVERABLE:
Complete Progress page with hero stats, charts, heatmap, donut chart, achievements grid, and wellness meter - all with realistic mock data and smooth interactions.
```

```
Prompt 7: Community Page
As an expert frontend engineer, create the Community page for the Zen Pomodoro application with leaderboard, challenges, and team activity.

COLORS: zen-sand: #D4C5B9, zen-stone: #7A8B7F, zen-bamboo: #6B8E9F, zen-sunset: #E67E50, zen-dark: #2C3E50

CREATE THE COMMUNITY PAGE:

Layout:
- 2-column layout (main + sidebar) on desktop
- Single column on mobile
- Left: Leaderboard and Challenges
- Right: Team Activity Feed

Sections:

1. Leaderboard (main section, left)
   - "Leaderboard" heading
   - Tab navigation: Weekly / Monthly / All-Time
   - Top 3 podium display:
     * 1st place: larger card, gold accent, crown icon
     * 2nd place: medium card, silver accent
     * 3rd place: medium card, bronze accent
   - Positions 4-12: standard rows
   - Each entry: rank number, avatar, name, score/XP, trend
   - Current user highlighted with subtle background
   - Smooth tab transitions

2. Active Challenges (below leaderboard)
   - "Active Challenges" heading with count
   - Challenge cards in grid (2 columns)
   - Each card shows:
     * Challenge title and icon
     * Description
     * Progress bar with percentage
     * Participant count with avatar stack
     * Days remaining
     * Join button (gradient) or "Joined" badge
   - Hover effect: lift with shadow

3. Challenge Details Modal
   - Opens when challenge card clicked
   - Glass morphism background overlay
   - Modal content:
     * Challenge title and description
     * Detailed rules
     * Leaderboard for this challenge
     * Progress visualization
     * Join/Leave button
     * Share button
   - Close button (X icon)
   - Slide-in animation

4. Team Activity Feed (right sidebar)
   - "Team Activity" heading
   - Timeline layout with vertical line
   - Activity items:
     * Avatar on left
     * Name and action text
     * Timestamp (e.g., "2 hours ago")
     * Icon indicator (pomodoro, achievement, level up)
   - Activities:
     * "Alex completed 8 pomodoros"
     * "Jordan unlocked 'Week Warrior' achievement"
     * "Sam reached Level 15"
     * "Taylor joined '30-Day Challenge'"
   - Real-time feel with recent timestamps

5. Create Challenge Section
   - "Create Your Own" button (prominent)
   - Opens modal/form:
     * Challenge title
     * Description
     * Goal type (pomodoros, tasks, streak)
     * Target number
     * Duration (days)
     * Privacy (public/team only)
     * Create and Cancel buttons

6. Team Members Section (optional bottom)
   - "Your Team" heading
   - Grid of member cards (4 columns)
   - Each card: avatar, name, status dot (online/offline), current streak
   - Hover shows quick stats tooltip

7. Social Sharing
   - Share buttons for achievements/progress
   - "Share Your Progress" card
   - Options: Twitter, LinkedIn, Copy Link
   - Preview of share card

Mock Data:
Leaderboard (12 users):
1. Alex Chen - 3,245 XP - ↑
2. Jordan Kim - 2,980 XP - ↑
3. Sam Rivera - 2,756 XP - ↓
4-12. Various users with scores

Challenges (4 active):
- "30-Day Streak Master" - 245 participants - 23 days left
- "100 Pomodoros This Week" - 89 participants - 3 days left
- "Morning Routine Champion" - 156 participants - 15 days left
- "Deep Work November" - 312 participants - 8 days left

Team Activity (8 items):
- Recent actions from last 6 hours
- Mix of completions, achievements, level ups

Team Members (8 people):
- Names, avatars, online status, streaks

Functionality:
- Switch between leaderboard tabs
- Join/leave challenges
- View challenge details in modal
- Create new challenge
- Infinite scroll on activity feed
- Filter activity by type

Responsive:
- Desktop: 2-column (leaderboard + feed)
- Tablet: single column, leaderboard full width
- Mobile: stacked, tabs for switching sections

REQUIREMENTS:
- Use Avatar molecule
- Podium-style top 3 (visually distinct)
- Progress bars on challenges
- Avatar stacks for participants
- Smooth tab transitions
- Modal overlays with backdrop blur
- Timeline design for feed
- Hover effects on all cards
- Zen color palette with gradients

DELIVERABLE:
Complete Community page with leaderboard (top 3 podium), active challenges grid, team activity timeline, create challenge modal, and realistic mock data for 12 leaderboard users and 4 challenges.
```


```
Prompt 8: Profile Page
As an expert frontend engineer, create the Profile page for the Zen Pomodoro application showcasing user stats and achievements.

COLORS: zen-sand: #D4C5B9, zen-stone: #7A8B7F, zen-bamboo: #6B8E9F, zen-sunset: #E67E50, zen-light: #F4E4D4

CREATE THE PROFILE PAGE:

Layout:
- Top section: Avatar and bio
- Middle: Stats grid
- Bottom: Achievement showcase and activity

Sections:

1. Profile Header (hero section)
   - Large circular avatar (120px)
   - Edit overlay on avatar hover (camera icon)
   - User name in large serif font
   - Bio/tagline text below
   - Join date and member badge
   - Edit Profile button (top right of section)
   - Background: subtle gradient card

2. Stats Overview (4-column grid)
   - Total Pomodoros: large number with icon
   - Total Focus Time: hours formatted
   - Tasks Completed: count
   - Current Level: level number in badge
   - Each stat in a card with icon, number, label
   - Gradient icon backgrounds

3. Personal Bests (highlighted section)
   - "Personal Records" heading
   - 3-4 cards showcasing:
     * Best streak (days with flame icon)
     * Most pomodoros in a day (number with trophy)
     * Longest focus session (minutes with clock)
     * Most productive week (pomodoros with star)
   - Cards with gradient accents and celebration emoji

4. Achievement Showcase (grid)
   - "Achievements" heading with count (5/12)
   - Grid of earned achievement badges (4 columns desktop)
   - Use AchievementBadge molecule
   - Only show unlocked achievements
   - Each badge: gradient background, icon, title, unlock date
   - Hover for description tooltip
   - "View All Achievements" link

5. Activity History
   - "Recent Activity" heading
   - Two options:
     A. Timeline view (vertical line with dots)
     - Recent sessions with date, task, duration
     B. Calendar heatmap (last 90 days)
     - Green intensity based on daily activity
     - Hover shows exact count
   - Toggle between views

6. Productivity Insights (cards)
   - "Your Patterns" heading
   - Cards showing:
     * Most active time of day (chart)
     * Favorite categories (bar chart)
     * Average session length
     * Completion rate percentage
   - Compact visualizations

7. Edit Profile Modal/Section
   - Triggered by "Edit Profile" button
   - Form fields:
     * Avatar upload
     * Display name
     * Bio/tagline
     * Email (non-editable, shown)
     * Timezone
     * Visibility settings (public/private profile)
   - Save and Cancel buttons
   - Glass morphism modal overlay

Mock Data:
User: Sarah Chen
Bio: "Frontend developer focused on productivity and mindfulness"
Joined: January 2024
Level: 12
Total: 156 pomodoros, 65 hours focus, 87 tasks completed
Personal Bests:
- Best streak: 23 days
- Most pomodoros (day): 12
- Longest session: 47 minutes
- Best week: 38 pomodoros
Achievements: 5 unlocked (Early Bird, Week Warrior, Century Club, Zen Master, Deep Focus)
Activity: Last 90 days with varied daily counts

Functionality:
- Edit profile (update name, bio, avatar)
- View achievement details on hover
- Toggle activity view (timeline/calendar)
- Upload new avatar
- Public/private toggle

Responsive:
- Desktop: multi-column grid
- Tablet: 2-column
- Mobile: single column, stacked

REQUIREMENTS:
- Use Avatar, StatCard, AchievementBadge molecules
- Large, prominent avatar with edit overlay
- Gradient backgrounds on stat cards
- Personal bests with celebration feel
- Achievement grid with hover tooltips
- Activity visualization (heatmap or timeline)
- Clean, organized profile layout
- Zen color palette throughout

DELIVERABLE:
Complete Profile page with avatar, stats grid, personal bests, earned achievements, activity history, and edit profile functionality - all with realistic mock data.
````


```
Prompt 9: Settings Page 
As an expert frontend engineer, create the Settings page for the Zen Pomodoro application with organized tabs and form controls.

COLORS: zen-sand: #D4C5B9, zen-stone: #7A8B7F, zen-bamboo: #6B8E9F, zen-light: #F4E4D4, zen-dark: #2C3E50

CREATE THE SETTINGS PAGE:

Layout:
- Tab navigation on left (desktop) or top (mobile)
- Main content area on right
- Clean, organized form sections

Tab Sections:

1. Timer Settings
   - Section heading: "Pomodoro Duration"
     * Focus session duration (default 25 min)
     * Short break duration (default 5 min)
     * Long break duration (default 15 min)
     * Number input with +/- buttons
   
   - Section: "Behavior"
     * Auto-start next session (toggle switch)
     * Auto-start breaks (toggle switch)
     * Long break interval (after X pomodoros) (number input)
   
   - Section: "Sounds"
     * Session end sound (toggle)
     * Tick sound during focus (toggle)
     * Volume slider
     * Test sound button

2. Notifications
   - Section: "Desktop Notifications"
     * Enable notifications (toggle)
     * Session end alerts (toggle)
     * Break reminders (toggle)
     * Achievement unlocks (toggle)
   
   - Section: "Email Notifications"
     * Daily summary (toggle)
     * Weekly report (toggle)
     * Achievement notifications (toggle)
     * Team updates (toggle)
   
   - Section: "Reminder Times"
     * Daily reminder time (time picker)
     * Weekly summary day (dropdown: Monday-Sunday)

3. Integrations
   - Calendar Integration card
     * Google Calendar icon and name
     * "Connect" button or "Connected" badge
     * Sync focus sessions to calendar (toggle)
     * Calendar dropdown selector
   
   - Slack Integration card
     * Slack logo/icon
     * Connect workspace button
     * Post updates to channel (toggle)
     * Status sync during focus (toggle)
   
   - Health Apps card
     * Apple Health / Google Fit icons
     * Connect buttons for each
     * Sync wellness data (toggle)
   
   - Each integration: logo, name, description, status, connect/disconnect button

4. Appearance
   - Section: "Theme"
     * Theme selector: Light / Dark / Auto (radio buttons or cards)
     * Preview thumbnail for each theme
   
   - Section: "Zen Garden"
     * Garden background selector (3-4 options with previews)
     * Options: Classic Stones, Bamboo Forest, Water Garden, Desert Sand
     * Each option shows small preview image
   
   - Section: "Animations"
     * Enable animations (toggle)
     * Reduce motion (toggle)
     * Zen garden effects (toggle)
   
   - Section: "Sound Ambience"
     * Ambient sound selector (dropdown)
     * Options: None, Rain, Ocean Waves, Forest, White Noise
     * Volume slider
     * Test button

5. Account
   - Section: "Profile Information"
     * Email (display only, non-editable)
     * Change password button (opens modal)
     * Two-factor authentication (toggle + setup button)
   
   - Section: "Data Management"
     * Export all data button
     * Download report (CSV/PDF)
     * Last export date shown
   
   - Section: "Danger Zone"
     * Delete account button (red, outline style)
     * Confirmation modal required
     * "This action cannot be undone" warning text

6. Privacy & Data
   - Section: "Privacy Settings"
     * Profile visibility (dropdown: Public / Team Only / Private)
     * Show activity feed (toggle)
     * Allow in leaderboards (toggle)
   
   - Section: "Data Collection"
     * Analytics (toggle)
     * Usage statistics (toggle)
     * Crash reports (toggle)
   
   - Section: "Connected Devices"
     * List of devices with last active
     * Sign out button for each
     * Sign out all devices button

Components:

1. Tab Navigation
   - Vertical on desktop (left side)
   - Horizontal tabs on mobile (top)
   - Active tab highlighted with gradient background
   - Icons for each tab
   - Smooth transition when switching

2. Form Controls
   - Toggle switches (smooth slide animation)
   - Number inputs with +/- buttons
   - Dropdowns with smooth expand
   - Sliders with gradient fill
   - Time pickers
   - Radio buttons styled as cards
   - All with proper labels

3. Integration Cards
   - White background, rounded corners
   - Logo/icon on left
   - Name and description
   - Status indicator (Connected/Disconnected)
   - Connect/Disconnect button
   - Hover effect: lift with shadow

4. Section Headers
   - Clear typography hierarchy
   - Divider line below
   - Optional description text
   - Spacing between sections (32px)

5. Save/Reset Actions
   - Sticky footer on each tab
   - Save Changes button (gradient, primary)
   - Reset to Defaults button (ghost)
   - Success toast notification on save

6. Change Password Modal
   - Current password field
   - New password field
   - Confirm password field
   - Password strength indicator
   - Save and Cancel buttons

7. Delete Account Modal
   - Warning icon
   - "Are you sure?" heading
   - Explanation text
   - Type "DELETE" to confirm input
   - Delete and Cancel buttons
   - Red danger color for delete

Mock Data:
- Focus: 25 min, Short break: 5 min, Long break: 15 min
- Auto-start: enabled
- Notifications: all enabled
- Google Calendar: connected
- Theme: Light
- Garden: Classic Stones
- Email: sarah.chen@example.com
- Profile: Public
- 3 connected devices

Functionality:
- Switch between tabs (smooth transition)
- Toggle switches (instant feedback)
- Number inputs (increment/decrement)
- Connect/disconnect integrations
- Change password (validation)
- Export data (download file)
- Delete account (confirmation required)
- Save changes (store in localStorage)
- Reset to defaults

Responsive:
- Desktop: side tab navigation + content area
- Tablet: top tabs + content
- Mobile: accordion-style sections, stacked

REQUIREMENTS:
- Use Input, Button, Typography atoms
- Smooth toggle switch animations
- Clear visual grouping of sections
- Integration cards with brand colors
- Danger zone clearly marked (red)
- Form validation and feedback
- Save confirmation toasts
- Zen color palette throughout
- Clean, organized layout

DELIVERABLE:
Complete Settings page with all 6 tabs (Timer, Notifications, Integrations, Appearance, Account, Privacy), functional form controls, integration cards, modals for password change and account deletion, and realistic default values.
```

```
Prompt 10: Navigation & App LayoutAs an expert frontend engineer, create the Navigation system and main App Layout wrapper for the Zen Pomodoro application.

COLORS: zen-sand: #D4C5B9, zen-stone: #7A8B7F, zen-bamboo: #6B8E9F, zen-light: #F4E4D4, zen-dark: #2C3E50

CREATE NAVIGATION COMPONENTS:

1. Top Navigation Bar (Desktop - 1024px+)
   - Sticky position at top
   - Glass morphism: rgba(244, 228, 212, 0.98) with backdrop-filter: blur(20px)
   - Height: 64px
   - Border bottom: 1px solid rgba(212, 197, 185, 0.3)
   
   Layout:
   - Left: Logo/Brand ("🧘 Zen Pomodoro" with icon)
   - Center: Navigation links (Home, Timer, Tasks, Progress, Community)
   - Right: User section (notifications bell, avatar with dropdown)
   
   Nav Links:
   - Horizontal list with gap
   - Hover: background rgba(122, 139, 127, 0.1)
   - Active: gradient background from zen-stone to zen-bamboo
   - Smooth transitions
   - Icons + text labels
   
   User Dropdown:
   - Avatar with online status dot
   - Dropdown menu on click:
     * Profile
     * Settings
     * Help & Support
     * Divider
     * Log Out
   - Glass morphism background
   - Slide down animation

2. Bottom Tab Navigation (Mobile - 320px-768px)
   - Fixed position at bottom
   - Glass morphism background
   - Height: 64px
   - Border top: 1px solid rgba(212, 197, 185, 0.3)
   - z-index: 50
   
   Tabs (5 items):
   - Home (Home icon)
   - Timer (Clock icon)
   - Tasks (CheckSquare icon)
   - Progress (TrendingUp icon)
   - Profile (User icon)
   
   Each tab:
   - Vertical layout (icon on top, label below)
   - Active: gradient color, scale up slightly
   - Inactive: gray color
   - Tap animation: scale down
   - Min touch target: 44px

3. Side Navigation Drawer (Tablet - 768px-1024px)
   - Slide out from left
   - Width: 240px
   - Gradient background: linear-gradient(180deg, #7A8B7F 0%, #6B8E9F 100%)
   - Full height
   - White text
   
   Layout:
   - Logo at top
   - Nav links (vertical list)
   - User section at bottom
   
   Behavior:
   - Toggle button (hamburger icon)
   - Overlay backdrop when open
   - Swipe to close
   - Smooth slide animation

4. Main App Layout Wrapper
   - Container for all pages
   - Responsive padding based on viewport
   - Account for navigation space:
     * Desktop: padding-top for top nav
     * Mobile: padding-bottom for bottom nav
   - Background: gradient from zen-sand to zen-light
   - Min-height: 100vh

5. Page Transition Container
   - Wrap page content
   - Fade + slide animations between routes
   - Smooth transitions (300ms)
   - Preserve scroll position

Components to Create:

**TopNav.jsx**
- Props: user (object with name, avatar), activePage
- Includes: nav links, notification bell, user dropdown
- Responsive: hidden on mobile

**BottomNav.jsx**
- Props: activePage, onNavigate
- 5 icon tabs with labels
- Active state styling
- Responsive: hidden on desktop

**SideDrawer.jsx**
- Props: isOpen, onClose, activePage
- Slide animation
- Backdrop overlay
- Nav links in drawer
- Responsive: tablet only

**AppLayout.jsx**
- Props: children, activePage
- Wraps page content
- Includes appropriate navigation based on viewport
- Handles page padding/margins

**UserDropdown.jsx**
- Props: user, isOpen, onClose
- Dropdown menu items
- Smooth open/close animation
- Click outside to close

Features:

1. Responsive Navigation
   - Desktop (1024px+): Top nav bar
   - Tablet (768px-1024px): Side drawer (toggle)
   - Mobile (320px-768px): Bottom tab bar

2. Active Page Indicator
   - Highlight current page in nav
   - Gradient background on active
   - Icon color change

3. Notification Bell
   - Badge with count if notifications exist
   - Pulse animation if unread
   - Opens notification dropdown
   - Mock: 3 unread notifications

4. User Dropdown Menu
   - Avatar click opens menu
   - Menu items: Profile, Settings, Help, Log Out
   - Smooth dropdown animation
   - Glass morphism background

5. Smooth Transitions
   - Nav link hover effects
   - Page transitions
   - Dropdown animations
   - Mobile nav scale effects

Mock Data:
- User: { name: "Sarah Chen", avatar: "/avatar.jpg", level: 12 }
- Active page: varies by current route
- Notifications: 3 unread
- Nav items: Home, Timer, Tasks, Progress, Community

Functionality:
- Navigate between pages (click/tap nav items)
- Toggle side drawer on tablet
- Open/close user dropdown
- Active page highlighting
- Notification badge display
- Responsive behavior based on viewport

Responsive Breakpoints:
- Mobile: 320px-768px (bottom nav)
- Tablet: 768px-1024px (side drawer)
- Desktop: 1024px+ (top nav)

REQUIREMENTS:
- Use Avatar, Icon, Typography atoms
- Glass morphism for nav backgrounds
- Smooth transitions and animations
- Active state clearly visible
- Touch-friendly mobile nav (44px min)
- Hover states on desktop
- Backdrop blur effects
- Zen color palette
- Proper z-index layering

DELIVERABLE:
Complete navigation system with TopNav (desktop), BottomNav (mobile), SideDrawer (tablet), AppLayout wrapper, and UserDropdown - all responsive with smooth transitions and realistic mock data.
```


