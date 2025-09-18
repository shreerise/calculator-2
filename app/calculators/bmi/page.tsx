"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BMICalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [unit, setUnit] = useState("metric")
  const [result, setResult] = useState<{
    bmi: number
    category: string
    color: string
  } | null>(null)

  const calculateBMI = () => {
    let h = Number.parseFloat(height)
    let w = Number.parseFloat(weight)

    if (h && w) {
      // Convert to metric if needed
      if (unit === "imperial") {
        h = h * 0.0254 // inches to meters
        w = w * 0.453592 // pounds to kg
      } else {
        h = h / 100 // cm to meters
      }

      const bmi = w / (h * h)
      let category = ""
      let color = ""

      if (bmi < 18.5) {
        category = "Underweight"
        color = "text-blue-600"
      } else if (bmi < 25) {
        category = "Normal weight"
        color = "text-green-600"
      } else if (bmi < 30) {
        category = "Overweight"
        color = "text-yellow-600"
      } else {
        category = "Obese"
        color = "text-red-600"
      }

      setResult({
        bmi: Math.round(bmi * 10) / 10,
        category,
        color,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">BMI Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Calculate your Body Mass Index and understand your weight category
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Measurements</CardTitle>
              <CardDescription>Enter your height and weight</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="unit">Unit System</Label>
                <Select value={unit} onValueChange={setUnit}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                    <SelectItem value="imperial">Imperial (in, lbs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height ({unit === "metric" ? "cm" : "inches"})</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder={unit === "metric" ? "175" : "69"}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight ({unit === "metric" ? "kg" : "lbs"})</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder={unit === "metric" ? "70" : "154"}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <Button onClick={calculateBMI} className="w-full">
                Calculate BMI
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your BMI Result</CardTitle>
              <CardDescription>Body Mass Index calculation</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">Your BMI</div>
                    <div className="text-3xl font-bold text-primary">{result.bmi}</div>
                    <div className={`text-lg font-semibold ${result.color}`}>{result.category}</div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Underweight:</span>
                      <span className="text-blue-600">Below 18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Normal weight:</span>
                      <span className="text-green-600">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overweight:</span>
                      <span className="text-yellow-600">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Obese:</span>
                      <span className="text-red-600">30 and above</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">Enter your measurements to calculate BMI</div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">Understanding BMI</h2>
          <p className="text-muted-foreground mb-4">
            Body Mass Index (BMI) is a measure of body fat based on height and weight. While it's a useful screening
            tool, it doesn't directly measure body fat and may not be accurate for athletes or people with high muscle
            mass.
          </p>
        </div>
      </div>
    </div>
  )
}
