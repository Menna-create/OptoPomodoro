import Typography from "@/components/atoms/Typography";
import Avatar from "@/components/atoms/Avatar";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { mockTeamMembers, mockChallenges } from "@/data/mockData";
import { Trophy, Users, Clock, Flame } from "lucide-react";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-8">
          <Typography variant="h1" className="mb-2">
            Community
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            Connect, compete, and grow together
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-6 w-6 text-warning" />
                <Typography variant="h3">Weekly Leaderboard</Typography>
              </div>

              <div className="space-y-3">
                {mockTeamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-lg font-bold text-muted-foreground w-6">
                        #{index + 1}
                      </span>
                      <Avatar
                        alt={member.name}
                        size="md"
                        fallback={member.name}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{member.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant={
                              member.status === "focus" ? "inProgress" :
                              member.status === "break" ? "todo" : "completed"
                            }
                          >
                            {member.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Flame className="h-3 w-3 text-warning" />
                            {member.streak}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-foreground">{member.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-6 w-6 text-accent" />
                <Typography variant="h3">Active Challenges</Typography>
              </div>

              <div className="space-y-4">
                {mockChallenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="p-4 rounded-lg border border-border bg-muted/20 hover:bg-muted/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Typography variant="h4" className="text-lg">{challenge.title}</Typography>
                      <Badge variant="inProgress">Active</Badge>
                    </div>
                    <Typography variant="small" className="mb-3 block">
                      {challenge.description}
                    </Typography>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {challenge.participants}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {challenge.endsIn}
                        </span>
                      </div>
                      <Button variant="zen" size="sm">
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <Typography variant="h3" className="mb-6">Recent Activity</Typography>
            <div className="space-y-4">
              {[
                { user: "Sarah Chen", action: "completed 8 pomodoros", time: "2h ago" },
                { user: "Marcus Johnson", action: "achieved Week Warrior", time: "5h ago" },
                { user: "Elena Rodriguez", action: "joined 30-Day Marathon", time: "1d ago" },
                { user: "James Park", action: "reached Level 10", time: "1d ago" },
                { user: "Sarah Chen", action: "completed Write Docs", time: "2d ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar alt={activity.user} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">{activity.user}</span>
                      {" "}
                      <span className="text-muted-foreground">{activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
