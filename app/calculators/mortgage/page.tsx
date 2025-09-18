"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [result, setResult] = useState<{
    monthlyPayment: number
    totalPayment: number
    totalInterest: number
  } | null>(null)

  const calculateMortgage = () => {
    const principal = Number.parseFloat(loanAmount)
    const rate = Number.parseFloat(interestRate) / 100 / 12
    const payments = Number.parseFloat(loanTerm) * 12

    if (principal && rate && payments) {
      const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1)
      const totalPayment = monthlyPayment * payments
      const totalInterest = totalPayment - principal

      setResult({
        monthlyPayment: Math.round(monthlyPayment * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Mortgage Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Calculate your monthly mortgage payments and see how much you'll pay over the life of your loan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
              <CardDescription>Enter your mortgage information below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="300000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  placeholder="3.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term (years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  placeholder="30"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
              </div>

              <Button onClick={calculateMortgage} className="w-full">
                Calculate Payment
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Results</CardTitle>
              <CardDescription>Your mortgage payment breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-muted-foreground">Monthly Payment</div>
                    <div className="text-2xl font-bold text-primary">${result.monthlyPayment.toLocaleString()}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground">Total Payment</div>
                      <div className="text-lg font-semibold">${result.totalPayment.toLocaleString()}</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground">Total Interest</div>
                      <div className="text-lg font-semibold">${result.totalInterest.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Enter loan details and click calculate to see your results
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Use the Mortgage Calculator</h2>
          <p className="text-muted-foreground mb-4">
            Our mortgage calculator helps you estimate your monthly mortgage payments based on the loan amount, interest
            rate, and loan term. Simply enter your loan details and get instant results.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Understanding Your Results</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>
              <strong>Monthly Payment:</strong> The amount you'll pay each month for principal and interest
            </li>
            <li>
              <strong>Total Payment:</strong> The total amount you'll pay over the life of the loan
            </li>
            <li>
              <strong>Total Interest:</strong> The total interest you'll pay over the loan term
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
