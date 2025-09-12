"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Users, MessageCircle, Heart, Share, Calendar, Zap } from "lucide-react"

const communityPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "/diverse-students-studying.png",
    role: "Senior Mentor",
    time: "2 hours ago",
    content:
      "Pro tip: The library's 3rd floor has the quietest study spots, and they have phone charging stations at every desk! Perfect for long study sessions.",
    likes: 24,
    comments: 8,
    category: "Study Tips",
    helpful: true,
  },
  {
    id: 2,
    author: "Mike Rodriguez",
    avatar: "/mentor.png",
    role: "Peer Mentor",
    time: "4 hours ago",
    content:
      'Hosting a "Campus Navigation 101" session tomorrow at 3 PM in the Student Center. We\'ll cover shortcuts, hidden gems, and answer all your questions!',
    likes: 18,
    comments: 12,
    category: "Events",
    helpful: false,
  },
  {
    id: 3,
    author: "Emma Thompson",
    avatar: "/diverse-students-studying.png",
    role: "Freshman",
    time: "6 hours ago",
    content:
      "Just discovered the 24/7 study lounge in the basement of the engineering building. It's a game-changer for late-night cramming sessions!",
    likes: 31,
    comments: 15,
    category: "Discovery",
    helpful: true,
  },
]

const upcomingSessions = [
  {
    id: 1,
    title: "Lab Safety Workshop",
    mentor: "Dr. Johnson",
    time: "Today, 2:00 PM",
    location: "Chemistry Lab A",
    spots: 3,
  },
  {
    id: 2,
    title: "Study Group Formation",
    mentor: "Alex Kim",
    time: "Tomorrow, 4:00 PM",
    location: "Library Study Room 5",
    spots: 8,
  },
  {
    id: 3,
    title: "Campus Tour for Freshers",
    mentor: "Student Council",
    time: "Friday, 10:00 AM",
    location: "Main Entrance",
    spots: 15,
  },
]

export default function CommunityHub() {
  const [newPost, setNewPost] = useState("")

  const handleLike = (postId) => {
    // Handle like functionality
    console.log("Liked post:", postId)
  }

  const joinSession = (sessionId) => {
    // Handle session joining
    console.log("Joined session:", sessionId)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Community Hub
          </CardTitle>
          <CardDescription>
            Connect with mentors, share tips, and join helpful sessions with fellow students
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-4">
          {/* Create Post */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="/abstract-geometric-shapes.png" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Share a campus tip, ask a question, or help a fellow student..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-20"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="outline">💡 Tip</Badge>
                      <Badge variant="outline">❓ Question</Badge>
                      <Badge variant="outline">🎉 Discovery</Badge>
                    </div>
                    <Button size="sm">Share</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Posts */}
          {communityPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={post.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-card-foreground">{post.author}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {post.role}
                      </Badge>
                      {post.helpful && (
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                          <Zap className="w-3 h-3 mr-1" />
                          Helpful
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">{post.time}</p>
                    <p className="text-card-foreground mb-3">{post.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 text-muted-foreground hover:text-red-500"
                        >
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </Button>

                        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </Button>

                        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                          <Share className="w-4 h-4" />
                          Share
                        </Button>
                      </div>

                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">{session.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">by {session.mentor}</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {session.time} • {session.location}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{session.spots} spots left</span>
                    <Button size="sm" variant="outline" onClick={() => joinSession(session.id)}>
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Mentors</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tips Shared Today</span>
                <span className="font-semibold">18</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Sessions This Week</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Your Contributions</span>
                <span className="font-semibold text-accent">5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
