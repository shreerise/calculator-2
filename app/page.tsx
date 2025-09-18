import CalculatorCard from "@/components/calculator-card"
import type { Metadata } from "next"

// Calculator data - easy to extend with new calculators
const calculators = [
  {
    title: "Mortgage Calculator",
    description: "Calculate monthly mortgage payments, total interest, and amortization schedules for home loans.",
    href: "/calculators/mortgage",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l8-8-8-8" />
      </svg>
    ),
  },
  {
    title: "Loan Calculator",
    description: "Determine loan payments, interest rates, and repayment schedules for personal and business loans.",
    href: "/calculators/loan",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and get health recommendations based on your height and weight.",
    href: "/calculators/bmi",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, days, and even hours from your birth date.",
    href: "/calculators/age",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "GPA Calculator",
    description: "Calculate your Grade Point Average for semester, cumulative, or weighted GPA calculations.",
    href: "/calculators/gpa",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Tip Calculator",
    description: "Calculate tips and split bills easily for restaurants, services, and group dining experiences.",
    href: "/calculators/tip",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages, percentage changes, and solve various percentage-based problems.",
    href: "/calculators/percentage",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Compound Interest Calculator",
    description: "Calculate compound interest for investments, savings accounts, and long-term financial planning.",
    href: "/calculators/compound-interest",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Unit Converter",
    description: "Convert between different units of length, weight, temperature, volume, and more.",
    href: "/calculators/unit-converter",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
]

export const metadata: Metadata = {
  title: "CalcHub - Professional Calculator Tools | Free Online Calculators",
  description:
    "Access 9+ professional calculators including mortgage, loan, BMI, age, GPA, tip, percentage, compound interest, and unit converters. Fast, accurate, and completely free online calculator tools.",
  keywords: [
    "calculator",
    "online calculator",
    "mortgage calculator",
    "loan calculator",
    "BMI calculator",
    "age calculator",
    "GPA calculator",
    "tip calculator",
    "percentage calculator",
    "compound interest calculator",
    "unit converter",
    "financial calculator",
    "free calculator tools",
    "professional calculators",
  ],
  openGraph: {
    title: "CalcHub - Professional Calculator Tools",
    description:
      "Access 9+ professional calculators for finance, health, education, and more. Fast, accurate, and completely free.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcHub - Professional Calculator Tools",
    description:
      "Access 9+ professional calculators for finance, health, education, and more. Fast, accurate, and completely free.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "CalcHub Calculator Tools",
            description: "Professional calculator tools for finance, health, education, and more",
            url: "https://calchub.com",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "Mortgage Calculator",
              "Loan Calculator",
              "BMI Calculator",
              "Age Calculator",
              "GPA Calculator",
              "Tip Calculator",
              "Percentage Calculator",
              "Compound Interest Calculator",
              "Unit Converter",
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Professional Calculator Tools
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4">
            Access a comprehensive suite of accurate calculators for finance, health, education, and more. Fast,
            reliable, and easy to use - get instant results for all your calculation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {calculators.map((calculator, index) => (
            <CalculatorCard
              key={index}
              title={calculator.title}
              description={calculator.description}
              href={calculator.href}
              icon={calculator.icon}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-muted rounded-lg p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Why Choose CalcHub?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              Built for accuracy, designed for simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
                Get instant results with our optimized calculation engines
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">100% Accurate</h3>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
                Trusted formulas and algorithms ensure precise calculations every time
              </p>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Mobile Friendly</h3>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
                Fully responsive design works perfectly on all devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
