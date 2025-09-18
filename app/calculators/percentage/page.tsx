"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PercentageCalculator() {
  const [basicValue, setBasicValue] = useState("")
  const [basicPercentage, setBasicPercentage] = useState("")
  const [basicResult, setBasicResult] = useState<number | null>(null)

  const [changeOldValue, setChangeOldValue] = useState("")
  const [changeNewValue, setChangeNewValue] = useState("")
  const [changeResult, setChangeResult] = useState<{
    percentageChange: number
    difference: number
  } | null>(null)

  const [partValue, setPartValue] = useState("")
  const [wholeValue, setWholeValue] = useState("")
  const [partResult, setPartResult] = useState<number | null>(null)

  const calculateBasic = () => {
    const value = Number.parseFloat(basicValue)
    const percentage = Number.parseFloat(basicPercentage)

    if (!isNaN(value) && !isNaN(percentage)) {
      setBasicResult((value * percentage) / 100)
    }
  }

  const calculateChange = () => {
    const oldVal = Number.parseFloat(changeOldValue)
    const newVal = Number.parseFloat(changeNewValue)

    if (!isNaN(oldVal) && !isNaN(newVal) && oldVal !== 0) {
      const difference = newVal - oldVal
      const percentageChange = (difference / oldVal) * 100
      setChangeResult({ percentageChange, difference })
    }
  }

  const calculatePart = () => {
    const part = Number.parseFloat(partValue)
    const whole = Number.parseFloat(wholeValue)

    if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
      setPartResult((part / whole) * 100)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Percentage Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate percentages, percentage changes, and solve various percentage problems
        </p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Percentage</TabsTrigger>
          <TabsTrigger value="change">Percentage Change</TabsTrigger>
          <TabsTrigger value="part">Part of Whole</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Percentage Calculation</CardTitle>
              <CardDescription>Calculate what percentage of a number equals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="basicValue">Value</Label>
                  <Input
                    id="basicValue"
                    type="number"
                    placeholder="100"
                    value={basicValue}
                    onChange={(e) => setBasicValue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="basicPercentage">Percentage (%)</Label>
                  <Input
                    id="basicPercentage"
                    type="number"
                    placeholder="25"
                    value={basicPercentage}
                    onChange={(e) => setBasicPercentage(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={calculateBasic} className="w-full">
                Calculate
              </Button>

              {basicResult !== null && (
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Result</p>
                  <p className="text-3xl font-bold text-primary">{basicResult.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {basicPercentage}% of {basicValue} = {basicResult.toFixed(2)}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="change" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Percentage Change</CardTitle>
              <CardDescription>Calculate the percentage increase or decrease between two values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="changeOldValue">Original Value</Label>
                  <Input
                    id="changeOldValue"
                    type="number"
                    placeholder="100"
                    value={changeOldValue}
                    onChange={(e) => setChangeOldValue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="changeNewValue">New Value</Label>
                  <Input
                    id="changeNewValue"
                    type="number"
                    placeholder="120"
                    value={changeNewValue}
                    onChange={(e) => setChangeNewValue(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={calculateChange} className="w-full">
                Calculate Change
              </Button>

              {changeResult && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Percentage Change</p>
                    <p
                      className={`text-3xl font-bold ${changeResult.percentageChange >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {changeResult.percentageChange >= 0 ? "+" : ""}
                      {changeResult.percentageChange.toFixed(2)}%
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Difference</p>
                    <p
                      className={`text-3xl font-bold ${changeResult.difference >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {changeResult.difference >= 0 ? "+" : ""}
                      {changeResult.difference.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="part" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Part of Whole</CardTitle>
              <CardDescription>Find what percentage one number is of another</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partValue">Part</Label>
                  <Input
                    id="partValue"
                    type="number"
                    placeholder="25"
                    value={partValue}
                    onChange={(e) => setPartValue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wholeValue">Whole</Label>
                  <Input
                    id="wholeValue"
                    type="number"
                    placeholder="100"
                    value={wholeValue}
                    onChange={(e) => setWholeValue(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={calculatePart} className="w-full">
                Calculate Percentage
              </Button>

              {partResult !== null && (
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Result</p>
                  <p className="text-3xl font-bold text-primary">{partResult.toFixed(2)}%</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {partValue} is {partResult.toFixed(2)}% of {wholeValue}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
