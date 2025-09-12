"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  BookOpen,
  Users,
  Trophy,
  Star,
  Home,
  User,
  Smartphone,
  Zap,
  Target,
  TrendingUp,
  Award,
  Clock,
  ChevronRight,
  Sparkles,
  Settings,
  Bell,
  Shield,
  Palette,
  Globe,
  Camera,
  Edit3,
  Mail,
  Phone,
  LocateOffIcon as LocationIcon,
  GraduationCap,
  CalendarIcon,
} from "lucide-react"
import CampusMap from "@/components/campus-map"
import LearningModules from "@/components/learning-modules"
import CommunityHub from "@/components/community-hub"
import GameificationDashboard from "@/components/gamification-dashboard"

export default function CampusNavigator() {
  const [activeView, setActiveView] = useState("home")
  const [mounted, setMounted] = useState(false)
  const [userProgress, setUserProgress] = useState({
    level: 2,
    xp: 750,
    nextLevelXp: 1000,
    badges: 12,
    completedModules: 8,
    totalModules: 15,
    streak: 5,
  })

  const [userProfile, setUserProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Computer Science",
    year: "Freshman",
    joinDate: "September 2024",
    location: "Dorm Room 204B",
    bio: "Excited to explore campus life and make new connections!",
    profileImage: "/student-profile.png",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickActions = [
    {
      id: "location",
      title: "Explore Campus",
      subtitle: "Interactive map",
      icon: MapPin,
      gradient: "from-blue-500 to-cyan-500",
      action: () => setActiveView("map"),
    },
    {
      id: "learning",
      title: "Continue Learning",
      subtitle: "8/15 modules",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-500",
      action: () => setActiveView("learn"),
    },
    {
      id: "mentor",
      title: "Find Mentors",
      subtitle: "Connect & grow",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      action: () => setActiveView("community"),
    },
    {
      id: "achievements",
      title: "Achievements",
      subtitle: "12 badges earned",
      icon: Trophy,
      gradient: "from-orange-500 to-red-500",
      action: () => setActiveView("achievements"),
    },
  ]

  const navItems = [
    { id: "home", title: "Home", icon: Home },
    { id: "map", title: "Map", icon: MapPin },
    { id: "learn", title: "Learn", icon: BookOpen },
    { id: "community", title: "Community", icon: Users },
    { id: "profile", title: "Profile", icon: User },
  ]

  const stats = [
    {
      label: "Current Level",
      value: userProgress.level,
      icon: Star,
      color: "text-yellow-500",
    },
    {
      label: "XP Points",
      value: userProgress.xp,
      icon: Zap,
      color: "text-blue-500",
    },
    {
      label: "Day Streak",
      value: userProgress.streak,
      icon: Target,
      color: "text-green-500",
    },
    {
      label: "Badges",
      value: userProgress.badges,
      icon: Award,
      color: "text-purple-500",
    },
  ]

  const badges = [
    {
      id: 1,
      name: "Explorer",
      description: "Visited 10 campus locations",
      icon: "🗺️",
      earned: true,
      date: "Sep 15, 2024",
    },
    {
      id: 2,
      name: "Scholar",
      description: "Completed 5 learning modules",
      icon: "📚",
      earned: true,
      date: "Sep 12, 2024",
    },
    {
      id: 3,
      name: "Connector",
      description: "Connected with 3 mentors",
      icon: "🤝",
      earned: true,
      date: "Sep 10, 2024",
    },
    {
      id: 4,
      name: "Early Bird",
      description: "Completed first week challenges",
      icon: "🌅",
      earned: true,
      date: "Sep 8, 2024",
    },
    { id: 5, name: "Socializer", description: "Joined 5 community discussions", icon: "💬", earned: false, date: null },
    { id: 6, name: "Master", description: "Complete all learning modules", icon: "🎓", earned: false, date: null },
  ]

  const settingsOptions = [
    {
      id: "notifications",
      title: "Notifications",
      subtitle: "Manage your alerts",
      icon: Bell,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      subtitle: "Control your data",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "appearance",
      title: "Appearance",
      subtitle: "Customize your theme",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "language",
      title: "Language & Region",
      subtitle: "Set your preferences",
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
    },
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
      case "profile":
        return (
          <div className="space-y-6 pb-6">
            {/* Profile Header */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <img
                      src={userProfile.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="relative w-24 h-24 rounded-full border-4 border-white/50 object-cover"
                    />
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold text-foreground">{userProfile.name}</h1>
                      <Button variant="ghost" size="sm" className="p-1">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Level {userProgress.level}
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        {userProfile.department}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{userProfile.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-white/50 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-500" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{userProfile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                    <Phone className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{userProfile.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 border border-purple-200">
                    <LocationIcon className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{userProfile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-200">
                    <CalendarIcon className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm font-medium">Joined</p>
                      <p className="text-sm text-muted-foreground">{userProfile.joinDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements & Badges */}
            <Card className="bg-white/50 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Achievements & Badges
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        badge.earned
                          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-lg"
                          : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{badge.icon}</div>
                        <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                        {badge.earned && badge.date && (
                          <p className="text-xs text-green-600 font-medium">{badge.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card className="bg-white/50 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  Learning Progress
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {userProgress.completedModules}/{userProgress.totalModules} modules
                    </span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(userProgress.completedModules / userProgress.totalModules) * 100}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center p-3 rounded-xl bg-purple-50 border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">{userProgress.xp}</div>
                      <div className="text-sm text-muted-foreground">Total XP</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-green-50 border border-green-200">
                      <div className="text-2xl font-bold text-green-600">{userProgress.streak}</div>
                      <div className="text-sm text-muted-foreground">Day Streak</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="bg-white/50 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-500" />
                  Settings
                </h3>
                <div className="space-y-3">
                  {settingsOptions.map((setting) => (
                    <div
                      key={setting.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/20 hover:bg-white/70 transition-all duration-300 cursor-pointer group"
                    >
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-br ${setting.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <setting.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{setting.title}</h4>
                        <p className="text-sm text-muted-foreground">{setting.subtitle}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      default:
        return (
          <div className="space-y-6 pb-6">
            {/* Header Section with Glassmorphism */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Good morning! 👋
                    </h1>
                    <p className="text-muted-foreground mt-1">Ready to explore campus today?</p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Your Journey</h2>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      <Star className="w-4 h-4 mr-1" />
                      Level {userProgress.level}
                    </Badge>
                  </div>

                  {/* XP Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{userProgress.xp} XP</span>
                      <span className="text-muted-foreground">{userProgress.nextLevelXp} XP</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(userProgress.xp / userProgress.nextLevelXp) * 100}%` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>

                  {/* Module Progress */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-green-500" />
                      <span className="font-medium">
                        {userProgress.completedModules} of {userProgress.totalModules} modules completed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">{userProgress.streak} day streak</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className={`bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white/70 transition-all duration-300 ${mounted ? "animate-bounce-in" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Card
                    key={action.id}
                    className={`group relative overflow-hidden bg-white/50 backdrop-blur-sm border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer ${mounted ? "animate-slide-in-up" : ""}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={action.action}
                  >
                    <CardContent className="p-6">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Content */}
                      <div className="relative flex items-center gap-4">
                        <div
                          className={`p-3 rounded-2xl bg-gradient-to-br ${action.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                            {action.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{action.subtitle}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <Card className="bg-white/50 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Completed "Library Navigation 101" module</span>
                    <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Earned "Explorer" badge</span>
                    <span className="text-xs text-muted-foreground ml-auto">Yesterday</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 border border-purple-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Connected with mentor Sarah</span>
                    <span className="text-xs text-muted-foreground ml-auto">3 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      {/* Status Bar */}
      <div className="bg-black text-white px-4 py-1 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <span>Campus Navigator</span>
        </div>
        <div className="flex items-center gap-2">
          <span>100%</span>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-full h-full bg-green-500 rounded-sm"></div>
          </div>
          <Smartphone className="w-3 h-3" />
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pt-6 pb-24">{renderContent()}</main>

      {/* Modern Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/20 px-4 py-2 shadow-2xl">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 p-3 h-auto rounded-2xl transition-all duration-300 ${
                activeView === item.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-muted-foreground hover:text-purple-600 hover:bg-purple-50"
              }`}
              onClick={() => setActiveView(item.id)}
            >
              <item.icon className={`w-5 h-5 ${activeView === item.id ? "animate-bounce" : ""}`} />
              <span className="text-xs font-medium">{item.title}</span>
              {activeView === item.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              )}
            </Button>
          ))}
        </div>
      </nav>
    </div>
  )
}
