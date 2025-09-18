"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Course {
  id: number
  name: string
  grade: string
  credits: number
}

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([{ id: 1, name: "", grade: "", credits: 3 }])
  const [result, setResult] = useState<{
    gpa: number
    totalCredits: number
    qualityPoints: number
  } | null>(null)

  const gradePoints: { [key: string]: number } = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
    F: 0.0,
  }

  const addCourse = () => {
    setCourses([...courses, { id: Date.now(), name: "", grade: "", credits: 3 }])
  }

  const removeCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)))
  }

  const calculateGPA = () => {
    let totalCredits = 0
    let qualityPoints = 0

    courses.forEach((course) => {
      if (course.grade && course.credits) {
        const points = gradePoints[course.grade] || 0
        qualityPoints += points * course.credits
        totalCredits += course.credits
      }
    })

    if (totalCredits > 0) {
      const gpa = qualityPoints / totalCredits
      setResult({
        gpa: Math.round(gpa * 100) / 100,
        totalCredits,
        qualityPoints: Math.round(qualityPoints * 100) / 100,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">GPA Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Calculate your Grade Point Average for semester or cumulative GPA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
                <CardDescription>Add your courses and grades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div key={course.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                    <div className="space-y-2">
                      <Label>Course Name</Label>
                      <Input
                        placeholder="Math 101"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Grade</Label>
                      <Select value={course.grade} onValueChange={(value) => updateCourse(course.id, "grade", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(gradePoints).map((grade) => (
                            <SelectItem key={grade} value={grade}>
                              {grade} ({gradePoints[grade]})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Credits</Label>
                      <Input
                        type="number"
                        value={course.credits}
                        onChange={(e) => updateCourse(course.id, "credits", Number.parseInt(e.target.value) || 0)}
                      />
                    </div>

                    <div className="flex items-end">
                      {courses.length > 1 && (
                        <Button variant="outline" size="sm" onClick={() => removeCourse(course.id)} className="w-full">
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex gap-4">
                  <Button onClick={addCourse} variant="outline">
                    Add Course
                  </Button>
                  <Button onClick={calculateGPA}>Calculate GPA</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>GPA Results</CardTitle>
              <CardDescription>Your calculated GPA</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">Your GPA</div>
                    <div className="text-3xl font-bold text-primary">{result.gpa}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Credits:</span>
                      <span className="font-semibold">{result.totalCredits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quality Points:</span>
                      <span className="font-semibold">{result.qualityPoints}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">Add courses and calculate to see your GPA</div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">GPA Calculation Guide</h2>
          <p className="text-muted-foreground mb-4">
            GPA is calculated by dividing total quality points by total credit hours. Quality points are earned by
            multiplying the grade point value by the number of credit hours for each course.
          </p>
        </div>
      </div>
    </div>
  )
}
