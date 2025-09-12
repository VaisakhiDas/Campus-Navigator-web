"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Award, BookOpen, Users, MapPin } from "lucide-react"

const badges = [
  {
    id: 1,
    name: "First Steps",
    description: "Completed your first module",
    icon: "🚀",
    earned: true,
    rarity: "common",
  },
  {
    id: 2,
    name: "Library Explorer",
    description: "Mastered library navigation",
    icon: "📚",
    earned: true,
    rarity: "common",
  },
  {
    id: 3,
    name: "Social Butterfly",
    description: "Connected with 5 mentors",
    icon: "🦋",
    earned: true,
    rarity: "uncommon",
  },
  { id: 4, name: "Quiz Master", description: "Scored 100% on 3 quizzes", icon: "🧠", earned: true, rarity: "rare" },
  {
    id: 5,
    name: "Campus Guru",
    description: "Discovered all hidden locations",
    icon: "🗺️",
    earned: false,
    rarity: "epic",
  },
  {
    id: 6,
    name: "Mentor Helper",
    description: "Helped 10 fellow students",
    icon: "🤝",
    earned: false,
    rarity: "legendary",
  },
]

const achievements = [
  {
    id: 1,
    title: "Learning Streak",
    description: "7 days of continuous learning",
    progress: 70,
    target: 100,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Community Contributor",
    description: "Share helpful tips with others",
    progress: 40,
    target: 100,
    icon: Users,
  },
  { id: 3, title: "Explorer", description: "Visit all campus locations", progress: 85, target: 100, icon: MapPin },
  {
    id: 4,
    title: "Knowledge Seeker",
    description: "Complete advanced modules",
    progress: 25,
    target: 100,
    icon: Target,
  },
]

const rarityColors = {
  common: "bg-gray-100 text-gray-800 border-gray-200",
  uncommon: "bg-green-100 text-green-800 border-green-200",
  rare: "bg-blue-100 text-blue-800 border-blue-200",
  epic: "bg-purple-100 text-purple-800 border-purple-200",
  legendary: "bg-yellow-100 text-yellow-800 border-yellow-200",
}

export default function GameificationDashboard({ userProgress }) {
  const earnedBadges = badges.filter((badge) => badge.earned)
  const availableBadges = badges.filter((badge) => !badge.earned)

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Your Achievements
          </CardTitle>
          <CardDescription>
            Track your progress, earn badges, and unlock new challenges as you master campus life
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Level Progress
                </span>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  Level {userProgress.level}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress to Level {userProgress.level + 1}</span>
                  <span className="font-semibold">
                    {userProgress.xp}/{userProgress.nextLevelXp} XP
                  </span>
                </div>
                <Progress value={(userProgress.xp / userProgress.nextLevelXp) * 100} className="h-3" />

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userProgress.completedModules}</div>
                    <div className="text-sm text-muted-foreground">Modules Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{userProgress.badges}</div>
                    <div className="text-sm text-muted-foreground">Badges Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{userProgress.xp}</div>
                    <div className="text-sm text-muted-foreground">Total XP</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Active Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <div key={achievement.id} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-semibold">
                                {achievement.progress}/{achievement.target}
                              </span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Collection */}
        <div className="space-y-4">
          {/* Earned Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Badge Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Earned ({earnedBadges.length})
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {earnedBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-3 rounded-lg border-2 ${rarityColors[badge.rarity]} animate-bounce-in`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">{badge.icon}</div>
                        <div className="text-xs font-semibold">{badge.name}</div>
                        <div className="text-xs opacity-75 mt-1">{badge.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Badges */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                Available ({availableBadges.length})
              </h4>
              <div className="space-y-2">
                {availableBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="p-2 rounded-lg bg-muted/50 border border-dashed border-muted-foreground/30"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-lg opacity-50">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-muted-foreground">{badge.name}</div>
                        <div className="text-xs text-muted-foreground/75">{badge.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-sm mb-3">This Week</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">XP Earned</span>
                  <span className="font-semibold text-accent">+320</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Modules Completed</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tips Shared</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Streak</span>
                  <span className="font-semibold text-green-600">7 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
