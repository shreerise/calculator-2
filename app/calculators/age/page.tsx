"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<{
    years: number
    months: number
    days: number
    totalDays: number
    totalHours: number
  } | null>(null)

  const calculateAge = () => {
    if (!birthDate) return

    const birth = new Date(birthDate)
    const today = new Date()

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
    const totalHours = totalDays * 24

    setResult({
      years,
      months,
      days,
      totalDays,
      totalHours,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Age Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Calculate your exact age in years, months, days, and hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Birth Information</CardTitle>
              <CardDescription>Enter your birth date</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Birth Date</Label>
                <Input id="birthDate" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
              </div>

              <Button onClick={calculateAge} className="w-full">
                Calculate Age
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Age</CardTitle>
              <CardDescription>Detailed age breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">You are</div>
                    <div className="text-2xl font-bold text-primary">
                      {result.years} years, {result.months} months, {result.days} days old
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Total Days</div>
                      <div className="text-lg font-semibold">{result.totalDays.toLocaleString()}</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Total Hours</div>
                      <div className="text-lg font-semibold">{result.totalHours.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Enter your birth date to calculate your age
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">Age Calculator Features</h2>
          <p className="text-muted-foreground mb-4">
            Our age calculator provides precise calculations showing your age in multiple formats. Perfect for official
            documents, birthday planning, or just satisfying your curiosity about how long you've been alive.
          </p>
        </div>
      </div>
    </div>
  )
}
