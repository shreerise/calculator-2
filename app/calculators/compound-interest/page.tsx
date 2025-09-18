"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [frequency, setFrequency] = useState("12")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [results, setResults] = useState<{
    finalAmount: number
    totalInterest: number
    totalContributions: number
    totalPrincipal: number
  } | null>(null)

  const calculateCompoundInterest = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100
    const t = Number.parseFloat(time)
    const n = Number.parseFloat(frequency)
    const pmt = Number.parseFloat(monthlyContribution) || 0

    if (p > 0 && r >= 0 && t > 0 && n > 0) {
      // Compound interest formula: A = P(1 + r/n)^(nt)
      const compoundAmount = p * Math.pow(1 + r / n, n * t)

      // Future value of annuity formula for monthly contributions
      let annuityAmount = 0
      if (pmt > 0) {
        const monthlyRate = r / 12
        const months = t * 12
        if (monthlyRate > 0) {
          annuityAmount = pmt * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
        } else {
          annuityAmount = pmt * months
        }
      }

      const finalAmount = compoundAmount + annuityAmount
      const totalContributions = pmt * 12 * t
      const totalPrincipal = p + totalContributions
      const totalInterest = finalAmount - totalPrincipal

      setResults({
        finalAmount,
        totalInterest,
        totalContributions,
        totalPrincipal,
      })
    }
  }

  const frequencyOptions = [
    { value: "1", label: "Annually" },
    { value: "2", label: "Semi-annually" },
    { value: "4", label: "Quarterly" },
    { value: "12", label: "Monthly" },
    { value: "365", label: "Daily" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Compound Interest Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate compound interest for investments and savings with optional monthly contributions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Details</CardTitle>
            <CardDescription>Enter your investment parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="principal">Initial Investment ($)</Label>
              <Input
                id="principal"
                type="number"
                placeholder="10000"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                step="0.01"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rate">Annual Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="7"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                step="0.01"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Investment Period (Years)</Label>
              <Input
                id="time"
                type="number"
                placeholder="10"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                step="0.1"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label>Compounding Frequency</Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {frequencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
              <Input
                id="monthlyContribution"
                type="number"
                placeholder="0"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                step="0.01"
                min="0"
              />
              <p className="text-sm text-muted-foreground">Optional: Additional monthly investments</p>
            </div>

            <Button onClick={calculateCompoundInterest} className="w-full" size="lg">
              Calculate Growth
            </Button>
          </CardContent>
        </Card>

        {/* Results Card */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Growth</CardTitle>
            <CardDescription>Your compound interest results</CardDescription>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">Final Amount</p>
                  <p className="text-4xl font-bold text-primary">
                    $
                    {results.finalAmount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Initial Investment</span>
                    <span className="font-semibold text-foreground">
                      $
                      {Number.parseFloat(principal).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  {results.totalContributions > 0 && (
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">Total Contributions</span>
                      <span className="font-semibold text-foreground">
                        $
                        {results.totalContributions.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Total Principal</span>
                    <span className="font-semibold text-foreground">
                      $
                      {results.totalPrincipal.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">Interest Earned</span>
                    <span className="font-bold text-green-700 dark:text-green-300">
                      $
                      {results.totalInterest.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Your money will grow by{" "}
                    <span className="font-semibold text-green-600">
                      {((results.finalAmount / results.totalPrincipal - 1) * 100).toFixed(1)}%
                    </span>{" "}
                    over {time} years
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Enter investment details to see growth projection</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
