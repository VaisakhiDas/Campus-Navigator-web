"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, Clock, Star, Trophy, Play, Lock } from "lucide-react"

const learningModules = [
  {
    id: 1,
    title: "Library Navigation 101",
    description: "Master the art of finding books, study spaces, and research resources",
    duration: "15 min",
    difficulty: "Beginner",
    xp: 100,
    completed: true,
    locked: false,
    progress: 100,
    badge: "Library Explorer",
  },
  {
    id: 2,
    title: "Dining Hall Etiquette",
    description: "Learn meal plan basics, dining hours, and social customs",
    duration: "10 min",
    difficulty: "Beginner",
    xp: 75,
    completed: true,
    locked: false,
    progress: 100,
    badge: "Foodie",
  },
  {
    id: 3,
    title: "Lab Safety & Equipment",
    description: "Essential safety protocols and equipment usage in campus labs",
    duration: "20 min",
    difficulty: "Intermediate",
    xp: 150,
    completed: false,
    locked: false,
    progress: 60,
    badge: "Safety First",
  },
  {
    id: 4,
    title: "Exam Registration System",
    description: "Navigate the online portal for exam scheduling and requirements",
    duration: "12 min",
    difficulty: "Intermediate",
    xp: 125,
    completed: false,
    locked: false,
    progress: 0,
    badge: "Test Master",
  },
  {
    id: 5,
    title: "Advanced Research Methods",
    description: "Deep dive into academic research tools and methodologies",
    duration: "30 min",
    difficulty: "Advanced",
    xp: 200,
    completed: false,
    locked: true,
    progress: 0,
    badge: "Research Pro",
  },
]

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

export default function LearningModules({ userProgress, setUserProgress }) {
  const [selectedModule, setSelectedModule] = useState(null)

  const startModule = (module) => {
    if (module.locked) return
    setSelectedModule(module)
  }

  const completeModule = (moduleId) => {
    const module = learningModules.find((m) => m.id === moduleId)
    if (module && !module.completed) {
      module.completed = true
      module.progress = 100
      setUserProgress((prev) => ({
        ...prev,
        xp: prev.xp + module.xp,
        completedModules: prev.completedModules + 1,
        badges: prev.badges + 1,
      }))
    }
    setSelectedModule(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Structured Learning Modules
          </CardTitle>
          <CardDescription>
            Interactive micro-lessons designed to help you master campus life step by step
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Learning Path */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Your Learning Path
          </h3>

          {learningModules.map((module, index) => (
            <Card
              key={module.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                module.locked ? "opacity-50" : ""
              } ${selectedModule?.id === module.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => startModule(module)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-card-foreground">{module.title}</h4>
                      {module.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {module.locked && <Lock className="w-4 h-4 text-muted-foreground" />}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{module.description}</p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {module.duration}
                      </div>
                      <Badge variant="outline" className={difficultyColors[module.difficulty]}>
                        {module.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        {module.xp} XP
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    {module.completed ? (
                      <Badge variant="default" className="bg-green-500">
                        Completed
                      </Badge>
                    ) : module.locked ? (
                      <Badge variant="outline">Locked</Badge>
                    ) : (
                      <Button size="sm" variant="outline">
                        <Play className="w-3 h-3 mr-1" />
                        Start
                      </Button>
                    )}
                  </div>
                </div>

                {!module.completed && !module.locked && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Module Detail/Quiz Panel */}
        <div className="space-y-4">
          {selectedModule ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {selectedModule.title}
                  <Badge className={difficultyColors[selectedModule.difficulty]}>{selectedModule.difficulty}</Badge>
                </CardTitle>
                <CardDescription>{selectedModule.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quick Check: Library Resources</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Which of the following is the best way to reserve a study room?
                  </p>

                  <div className="space-y-2">
                    {["Online booking system", "Walk-in only", "Email librarian", "Phone call"].map((option, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="w-full justify-start text-left bg-transparent"
                        onClick={() => completeModule(selectedModule.id)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Earn {selectedModule.xp} XP + "{selectedModule.badge}" badge
                  </div>
                  <Button onClick={() => completeModule(selectedModule.id)}>Complete Module</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Select a Module</h3>
                <p className="text-muted-foreground">
                  Choose a learning module from the left to start your interactive lesson
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
