"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UnitConverter() {
  const [lengthValue, setLengthValue] = useState("")
  const [lengthFrom, setLengthFrom] = useState("meters")
  const [lengthTo, setLengthTo] = useState("feet")
  const [lengthResult, setLengthResult] = useState<number | null>(null)

  const [weightValue, setWeightValue] = useState("")
  const [weightFrom, setWeightFrom] = useState("kilograms")
  const [weightTo, setWeightTo] = useState("pounds")
  const [weightResult, setWeightResult] = useState<number | null>(null)

  const [tempValue, setTempValue] = useState("")
  const [tempFrom, setTempFrom] = useState("celsius")
  const [tempTo, setTempTo] = useState("fahrenheit")
  const [tempResult, setTempResult] = useState<number | null>(null)

  // Conversion factors to base units
  const lengthConversions = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
    miles: 0.000621371,
  }

  const weightConversions = {
    kilograms: 1,
    grams: 1000,
    pounds: 2.20462,
    ounces: 35.274,
    stones: 0.157473,
    tons: 0.001,
  }

  const convertLength = () => {
    const value = Number.parseFloat(lengthValue)
    if (!isNaN(value)) {
      const baseValue = value / lengthConversions[lengthFrom as keyof typeof lengthConversions]
      const result = baseValue * lengthConversions[lengthTo as keyof typeof lengthConversions]
      setLengthResult(result)
    }
  }

  const convertWeight = () => {
    const value = Number.parseFloat(weightValue)
    if (!isNaN(value)) {
      const baseValue = value / weightConversions[weightFrom as keyof typeof weightConversions]
      const result = baseValue * weightConversions[weightTo as keyof typeof weightConversions]
      setWeightResult(result)
    }
  }

  const convertTemperature = () => {
    const value = Number.parseFloat(tempValue)
    if (!isNaN(value)) {
      let celsius: number

      // Convert to Celsius first
      switch (tempFrom) {
        case "celsius":
          celsius = value
          break
        case "fahrenheit":
          celsius = ((value - 32) * 5) / 9
          break
        case "kelvin":
          celsius = value - 273.15
          break
        default:
          celsius = value
      }

      // Convert from Celsius to target
      let result: number
      switch (tempTo) {
        case "celsius":
          result = celsius
          break
        case "fahrenheit":
          result = (celsius * 9) / 5 + 32
          break
        case "kelvin":
          result = celsius + 273.15
          break
        default:
          result = celsius
      }

      setTempResult(result)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unit Converter</h1>
        <p className="text-lg text-muted-foreground">
          Convert between different units of length, weight, temperature, and more
        </p>
      </div>

      <Tabs defaultValue="length" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="length">Length</TabsTrigger>
          <TabsTrigger value="weight">Weight</TabsTrigger>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
        </TabsList>

        <TabsContent value="length" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Length Conversion</CardTitle>
              <CardDescription>Convert between different units of length</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="lengthValue">Value</Label>
                  <Input
                    id="lengthValue"
                    type="number"
                    placeholder="1"
                    value={lengthValue}
                    onChange={(e) => {
                      setLengthValue(e.target.value)
                      if (e.target.value) convertLength()
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>From</Label>
                  <Select
                    value={lengthFrom}
                    onValueChange={(value) => {
                      setLengthFrom(value)
                      if (lengthValue) convertLength()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(lengthConversions).map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>To</Label>
                  <Select
                    value={lengthTo}
                    onValueChange={(value) => {
                      setLengthTo(value)
                      if (lengthValue) convertLength()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(lengthConversions).map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {lengthResult !== null && (
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary">{lengthResult.toFixed(6)}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {lengthValue} {lengthFrom} = {lengthResult.toFixed(6)} {lengthTo}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weight" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Weight Conversion</CardTitle>
              <CardDescription>Convert between different units of weight</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="weightValue">Value</Label>
                  <Input
                    id="weightValue"
                    type="number"
                    placeholder="1"
                    value={weightValue}
                    onChange={(e) => {
                      setWeightValue(e.target.value)
                      if (e.target.value) convertWeight()
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>From</Label>
                  <Select
                    value={weightFrom}
                    onValueChange={(value) => {
                      setWeightFrom(value)
                      if (weightValue) convertWeight()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(weightConversions).map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>To</Label>
                  <Select
                    value={weightTo}
                    onValueChange={(value) => {
                      setWeightTo(value)
                      if (weightValue) convertWeight()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(weightConversions).map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {weightResult !== null && (
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary">{weightResult.toFixed(6)}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {weightValue} {weightFrom} = {weightResult.toFixed(6)} {weightTo}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="temperature" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Temperature Conversion</CardTitle>
              <CardDescription>Convert between Celsius, Fahrenheit, and Kelvin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="tempValue">Value</Label>
                  <Input
                    id="tempValue"
                    type="number"
                    placeholder="0"
                    value={tempValue}
                    onChange={(e) => {
                      setTempValue(e.target.value)
                      if (e.target.value) convertTemperature()
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>From</Label>
                  <Select
                    value={tempFrom}
                    onValueChange={(value) => {
                      setTempFrom(value)
                      if (tempValue) convertTemperature()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celsius">Celsius (°C)</SelectItem>
                      <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                      <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>To</Label>
                  <Select
                    value={tempTo}
                    onValueChange={(value) => {
                      setTempTo(value)
                      if (tempValue) convertTemperature()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celsius">Celsius (°C)</SelectItem>
                      <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                      <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {tempResult !== null && (
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-primary">{tempResult.toFixed(2)}°</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {tempValue}° {tempFrom} = {tempResult.toFixed(2)}° {tempTo}
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
