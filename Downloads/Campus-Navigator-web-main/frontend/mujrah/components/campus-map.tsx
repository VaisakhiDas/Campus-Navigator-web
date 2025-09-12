"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Navigation, Users, Clock, Search, Zap } from "lucide-react"

const campusLocations = [
  { id: 1, name: "Main Library", type: "library", x: 30, y: 40, mentors: 3, tips: 12 },
  { id: 2, name: "Student Center", type: "social", x: 60, y: 30, mentors: 5, tips: 8 },
  { id: 3, name: "Engineering Building", type: "academic", x: 20, y: 70, mentors: 4, tips: 15 },
  { id: 4, name: "Dining Hall", type: "dining", x: 70, y: 60, mentors: 2, tips: 6 },
  { id: 5, name: "Gym & Recreation", type: "recreation", x: 80, y: 20, mentors: 3, tips: 9 },
  { id: 6, name: "Dormitory A", type: "housing", x: 15, y: 20, mentors: 6, tips: 18 },
]

const locationTypes = {
  library: { color: "bg-blue-500", icon: "📚" },
  social: { color: "bg-green-500", icon: "🏛️" },
  academic: { color: "bg-purple-500", icon: "🎓" },
  dining: { color: "bg-orange-500", icon: "🍽️" },
  recreation: { color: "bg-red-500", icon: "🏃" },
  housing: { color: "bg-yellow-500", icon: "🏠" },
}

export default function CampusMap() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLocations = campusLocations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Search and Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Interactive Campus Map
          </CardTitle>
          <CardDescription>
            Explore campus locations, find mentors, and discover helpful tips from fellow students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Navigation className="w-4 h-4" />
              Get Directions
            </Button>
          </div>

          {/* Interactive Map */}
          <div className="relative bg-card border border-border rounded-lg h-96 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23164e63' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {/* Campus Locations */}
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    selectedLocation?.id === location.id ? "scale-125 z-10" : ""
                  }`}
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${locationTypes[location.type].color} flex items-center justify-center text-white shadow-lg animate-pulse-glow`}
                  >
                    <span className="text-sm">{locationTypes[location.type].icon}</span>
                  </div>
                  {selectedLocation?.id === location.id && (
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-popover border border-border rounded-lg p-3 shadow-lg min-w-48 animate-bounce-in">
                      <h4 className="font-semibold text-popover-foreground mb-2">{location.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {location.mentors} mentors
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {location.tips} tips
                        </div>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        View Details
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Find Mentors</h3>
                <p className="text-sm text-muted-foreground">Connect with upperclassmen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Live Help</h3>
                <p className="text-sm text-muted-foreground">Get instant assistance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">Campus Hacks</h3>
                <p className="text-sm text-muted-foreground">Student tips & tricks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
