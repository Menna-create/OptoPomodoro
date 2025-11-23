# Claude Code Configuration

## Project Overview
OptoPomodoro is a productivity and focus application built with modern web technologies. It's a Pomodoro timer app designed to help users manage their time and improve focus.

## Build Commands
- `npm run dev` - Start development server with auto-reloading
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Tech Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn-ui with Radix UI primitives
- **Styling**: Tailwind CSS with Tailwind CSS Typography
- **State Management**: React Query (@tanstack/react-query)
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Charts**: Recharts
- **Notifications**: Sonner

## Project Structure
```
src/
├── components/     # Reusable UI components
├── data/          # Data models and types
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
├── pages/         # Page components
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── vite-env.d.ts  # Vite type definitions
```

## Development Guidelines
- This project uses ESLint for code quality - run `npm run lint` before committing
- TypeScript is strictly configured - ensure all code passes type checking
- Follow existing component patterns using shadcn-ui conventions
- Use Tailwind CSS classes for styling (avoid inline styles)
- Implement proper error handling and loading states
- Components should follow the established structure in the components/ directory