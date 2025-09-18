"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [term, setTerm] = useState("")
  const [result, setResult] = useState<{
    monthlyPayment: number
    totalPayment: number
    totalInterest: number
  } | null>(null)

  const calculateLoan = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100 / 12
    const n = Number.parseFloat(term) * 12

    if (p && r && n) {
      const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const totalPayment = monthlyPayment * n
      const totalInterest = totalPayment - p

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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Loan Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Calculate monthly payments for personal loans, auto loans, and other installment loans
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Loan Information</CardTitle>
              <CardDescription>Enter your loan details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="principal">Loan Amount ($)</Label>
                <Input
                  id="principal"
                  type="number"
                  placeholder="25000"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.01"
                  placeholder="5.5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="term">Loan Term (years)</Label>
                <Input id="term" type="number" placeholder="5" value={term} onChange={(e) => setTerm(e.target.value)} />
              </div>

              <Button onClick={calculateLoan} className="w-full">
                Calculate Payment
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
              <CardDescription>Your loan payment breakdown</CardDescription>
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
                  Enter loan details to see payment calculations
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">Loan Calculator Guide</h2>
          <p className="text-muted-foreground mb-4">
            Use this calculator for personal loans, auto loans, student loans, and other fixed-rate installment loans.
            Enter the loan amount, interest rate, and term to get your monthly payment.
          </p>
        </div>
      </div>
    </div>
  )
}
