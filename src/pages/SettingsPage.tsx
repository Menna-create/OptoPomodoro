import { useState } from "react";
import Typography from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { Bell, Calendar, Palette, User, Shield } from "lucide-react";

const SettingsPage = () => {
  const [focusDuration, setFocusDuration] = useState("25");
  const [shortBreak, setShortBreak] = useState("5");
  const [longBreak, setLongBreak] = useState("15");

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="mb-8">
          <Typography variant="h1" className="mb-2">
            Settings
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            Customize your ZenFocus experience
          </Typography>
        </div>

        <div className="space-y-6">
          {/* Timer Settings */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <Typography variant="h3">Timer Settings</Typography>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Focus Duration (minutes)</label>
                <Input
                  type="number"
                  value={focusDuration}
                  onChange={(e) => setFocusDuration(e.target.value)}
                  min="1"
                  max="60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Short Break (minutes)</label>
                <Input
                  type="number"
                  value={shortBreak}
                  onChange={(e) => setShortBreak(e.target.value)}
                  min="1"
                  max="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Long Break (minutes)</label>
                <Input
                  type="number"
                  value={longBreak}
                  onChange={(e) => setLongBreak(e.target.value)}
                  min="1"
                  max="60"
                />
              </div>

              <Button variant="primary" className="w-full md:w-auto">
                Save Timer Settings
              </Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <Typography variant="h3">Notifications</Typography>
            </div>

            <div className="space-y-4">
              {[
                { label: "Session complete alerts", defaultChecked: true },
                { label: "Break reminders", defaultChecked: true },
                { label: "Daily streak notifications", defaultChecked: true },
                { label: "Achievement unlocks", defaultChecked: true },
                { label: "Team activity updates", defaultChecked: false },
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Palette className="h-5 w-5 text-secondary" />
              </div>
              <Typography variant="h3">Appearance</Typography>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-card text-foreground">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Zen Garden Theme</label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-card text-foreground">
                  <option>Water Ripples</option>
                  <option>Sand Garden</option>
                  <option>Forest Mist</option>
                  <option>Mountain Stream</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <User className="h-5 w-5 text-success" />
              </div>
              <Typography variant="h3">Account</Typography>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" defaultValue="user@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Display Name</label>
                <Input type="text" defaultValue="Focused User" />
              </div>

              <Button variant="primary" className="w-full md:w-auto">
                Update Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
