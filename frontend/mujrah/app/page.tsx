"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, BookOpen, Users, Trophy, Star, Calendar, Home, User, RotateCcw, Smartphone, Globe } from "lucide-react"
import CampusMap from "@/components/campus-map"
import LearningModules from "@/components/learning-modules"
import CommunityHub from "@/components/community-hub"
import GameificationDashboard from "@/components/gamification-dashboard"

export default function CampusNavigator() {
  const [activeView, setActiveView] = useState("home")
  const [userProgress, setUserProgress] = useState({
    level: 2,
    xp: 750,
    nextLevelXp: 1000,
    badges: 12,
    completedModules: 8,
    totalModules: 15,
    streak: 5,
  })

  const quickActions = [
    {
      id: "location",
      title: "Find Location",
      icon: MapPin,
      color: "bg-blue-500",
      action: () => setActiveView("map"),
    },
    {
      id: "learning",
      title: "Continue Learning",
      icon: BookOpen,
      color: "bg-green-500",
      action: () => setActiveView("learn"),
    },
    {
      id: "mentor",
      title: "Find Mentor",
      icon: Users,
      color: "bg-orange-500",
      action: () => setActiveView("community"),
    },
    {
      id: "schedule",
      title: "My Schedule",
      icon: Calendar,
      color: "bg-red-500",
      action: () => setActiveView("schedule"),
    },
  ]

  const navItems = [
    { id: "home", title: "Home", icon: Home },
    { id: "map", title: "Campus Map", icon: MapPin },
    { id: "learn", title: "Learn", icon: BookOpen },
    { id: "community", title: "Community", icon: Users },
    { id: "profile", title: "Profile", icon: User },
  ]

  const renderContent = () => {
    switch (activeView) {
      case "map":
        return <CampusMap />
      case "learn":
        return <LearningModules userProgress={userProgress} setUserProgress={setUserProgress} />
      case "community":
        return <CommunityHub />
      case "achievements":
        return <GameificationDashboard userProgress={userProgress} />
      default:
        return (
          <div className="space-y-6">
            <div className="pt-4">
              <h1 className="text-2xl font-bold text-foreground mb-2">Good morning! 👋</h1>
              <p className="text-muted-foreground">Ready to explore campus today?</p>
            </div>

            <div className="journey-card rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold journey-text">Your Journey</h2>
                <Badge className="journey-badge">
                  <Star className="w-4 h-4 mr-1 journey-text" />
                  <span className="journey-text">Freshman Explorer</span>
                </Badge>
              </div>

              <div className="mb-4">
                <p className="font-medium mb-2 journey-text">
                  {userProgress.completedModules} of {userProgress.totalModules} modules completed
                </p>
                <div className="w-full rounded-full h-2 journey-progress-bg">
                  <div
                    className="h-2 rounded-full transition-all duration-300 journey-progress-fill"
                    style={{
                      width: `${(userProgress.completedModules / userProgress.totalModules) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 journey-text" />
                  <span className="font-medium journey-text">{userProgress.badges} badges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full journey-border flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full journey-dot"></div>
                  </div>
                  <span className="font-medium journey-text">{userProgress.streak} day streak</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.id}
                    variant="ghost"
                    className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-muted/50"
                    onClick={action.action}
                  >
                    <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{action.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-end gap-3">
        <RotateCcw className="w-4 h-4" />
        <div className="w-4 h-4 bg-white rounded-sm"></div>
        <Smartphone className="w-4 h-4" />
        <Globe className="w-4 h-4" />
      </div>

      <main className="flex-1 px-4 py-6 pb-20">{renderContent()}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 p-2 h-auto ${
                activeView === item.id ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setActiveView(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.title}</span>
            </Button>
          ))}
        </div>
      </nav>
    </div>
  )
}
