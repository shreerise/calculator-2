import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | CalcHub - Professional Calculator Tools",
  description: "Complete sitemap of all CalcHub calculator tools, blog posts, and pages for easy navigation.",
  keywords: "sitemap, calculator tools, navigation, CalcHub pages",
}

export default function SitemapPage() {
  const calculatorPages = [
    { name: "Mortgage Calculator", href: "/calculators/mortgage" },
    { name: "Loan Calculator", href: "/calculators/loan" },
    { name: "BMI Calculator", href: "/calculators/bmi" },
    { name: "Age Calculator", href: "/calculators/age" },
    { name: "GPA Calculator", href: "/calculators/gpa" },
    { name: "Tip Calculator", href: "/calculators/tip" },
    { name: "Percentage Calculator", href: "/calculators/percentage" },
    { name: "Compound Interest Calculator", href: "/calculators/compound-interest" },
    { name: "Unit Converter", href: "/calculators/unit-converter" },
  ]

  const blogPosts = [
    { name: "Complete Guide to Using a Mortgage Calculator", href: "/blog/mortgage-calculator-guide" },
    { name: "The Power of Compound Interest: Why Starting Early Matters", href: "/blog/compound-interest-power" },
    { name: "Understanding BMI: More Than Just a Number", href: "/blog/bmi-health-insights" },
    { name: "How to Compare Loan Offers: A Step-by-Step Guide", href: "/blog/loan-comparison-tips" },
    { name: "Different GPA Calculation Methods Explained", href: "/blog/gpa-calculation-methods" },
    { name: "Tipping Etiquette Around the World", href: "/blog/tip-etiquette-guide" },
  ]

  const mainPages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  const legalPages = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Sitemap</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Complete navigation guide to all CalcHub pages and tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Pages */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
            </svg>
            Main Pages
          </h2>
          <ul className="space-y-2">
            {mainPages.map((page, index) => (
              <li key={index}>
                <Link
                  href={page.href}
                  className="text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Pages */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Legal Pages
          </h2>
          <ul className="space-y-2">
            {legalPages.map((page, index) => (
              <li key={index}>
                <Link
                  href={page.href}
                  className="text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Calculator Tools */}
      <div className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Calculator Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {calculatorPages.map((calculator, index) => (
            <Link
              key={index}
              href={calculator.href}
              className="text-muted-foreground hover:text-primary transition-colors block py-2 px-3 rounded hover:bg-muted"
            >
              {calculator.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="text-muted-foreground hover:text-primary transition-colors block py-2 px-3 rounded hover:bg-muted"
            >
              {post.name}
            </Link>
          ))}
        </div>
      </div>

      {/* XML Sitemap */}
      <div className="mt-8 text-center p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">XML Sitemap</h3>
        <p className="text-muted-foreground mb-4">For search engines and automated tools</p>
        <Link
          href="/sitemap.xml"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download XML Sitemap
        </Link>
      </div>
    </div>
  )
}
