"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState("")
  const [tipPercentage, setTipPercentage] = useState("18")
  const [numberOfPeople, setNumberOfPeople] = useState("1")
  const [results, setResults] = useState<{
    tipAmount: number
    totalAmount: number
    perPersonAmount: number
    perPersonTip: number
  } | null>(null)

  const calculateTip = () => {
    const bill = Number.parseFloat(billAmount)
    const tip = Number.parseFloat(tipPercentage)
    const people = Number.parseInt(numberOfPeople)

    if (bill > 0 && tip >= 0 && people > 0) {
      const tipAmount = (bill * tip) / 100
      const totalAmount = bill + tipAmount
      const perPersonAmount = totalAmount / people
      const perPersonTip = tipAmount / people

      setResults({
        tipAmount,
        totalAmount,
        perPersonAmount,
        perPersonTip,
      })
    }
  }

  const quickTipButtons = [10, 15, 18, 20, 25]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tip Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate tips and split bills easily for restaurants and services
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Bill Details</CardTitle>
            <CardDescription>Enter your bill amount and tip preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="billAmount">Bill Amount ($)</Label>
              <Input
                id="billAmount"
                type="number"
                placeholder="0.00"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                step="0.01"
                min="0"
              />
            </div>

            <div className="space-y-3">
              <Label>Tip Percentage (%)</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {quickTipButtons.map((percentage) => (
                  <Button
                    key={percentage}
                    variant={tipPercentage === percentage.toString() ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTipPercentage(percentage.toString())}
                  >
                    {percentage}%
                  </Button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="18"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                step="0.1"
                min="0"
                max="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numberOfPeople">Number of People</Label>
              <Input
                id="numberOfPeople"
                type="number"
                placeholder="1"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                min="1"
              />
            </div>

            <Button onClick={calculateTip} className="w-full" size="lg">
              Calculate Tip
            </Button>
          </CardContent>
        </Card>

        {/* Results Card */}
        <Card>
          <CardHeader>
            <CardTitle>Calculation Results</CardTitle>
            <CardDescription>Your tip and bill breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Tip Amount</p>
                    <p className="text-2xl font-bold text-primary">${results.tipAmount.toFixed(2)}</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-foreground">${results.totalAmount.toFixed(2)}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Per Person Breakdown</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Per Person Total</p>
                      <p className="text-xl font-semibold text-foreground">${results.perPersonAmount.toFixed(2)}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Per Person Tip</p>
                      <p className="text-xl font-semibold text-primary">${results.perPersonTip.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Enter bill details to see results</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
