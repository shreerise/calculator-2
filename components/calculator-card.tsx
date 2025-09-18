import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CalculatorCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

export default function CalculatorCard({ title, description, href, icon }: CalculatorCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-border bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-2">
          {icon && (
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              {icon}
            </div>
          )}
          <CardTitle className="text-lg font-semibold text-card-foreground text-balance">{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground text-pretty">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Link href={href}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Open Calculator</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
