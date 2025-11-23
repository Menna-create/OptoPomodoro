import { Home, Timer, ListTodo, TrendingUp, Users, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Timer, label: "Timer", path: "/timer" },
    { icon: ListTodo, label: "Tasks", path: "/tasks" },
    { icon: TrendingUp, label: "Progress", path: "/progress" },
    { icon: Users, label: "Community", path: "/community" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/80">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Timer className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-serif font-bold text-foreground">OptoPomodoro</span>
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              activeClassName="text-foreground bg-muted font-medium"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/settings"
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
        >
          <Settings className="h-5 w-5" />
        </NavLink>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 backdrop-blur-sm bg-card/80">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground transition-all"
              activeClassName="text-primary"
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
                  <span className="text-xs">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
