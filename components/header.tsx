"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const calculators = [
  { title: "Mortgage Calculator", href: "/calculators/mortgage" },
  { title: "Loan Calculator", href: "/calculators/loan" },
  { title: "BMI Calculator", href: "/calculators/bmi" },
  { title: "Age Calculator", href: "/calculators/age" },
  { title: "GPA Calculator", href: "/calculators/gpa" },
  { title: "Tip Calculator", href: "/calculators/tip" },
  { title: "Percentage Calculator", href: "/calculators/percentage" },
  { title: "Compound Interest Calculator", href: "/calculators/compound-interest" },
  { title: "Unit Converter", href: "/calculators/unit-converter" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof calculators>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = calculators.filter((calc) => calc.title.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResults(filtered)
      setShowSearchResults(true)
    } else {
      setSearchResults([])
      setShowSearchResults(false)
    }
  }, [searchQuery])

  const handleSearchSelect = (href: string) => {
    router.push(href)
    setSearchQuery("")
    setShowSearchResults(false)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">CalcHub</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((calc, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchSelect(calc.href)}
                        className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-foreground"
                      >
                        {calc.title}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-muted-foreground">No calculators found</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((calc, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleSearchSelect(calc.href)
                          setIsMenuOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-foreground"
                      >
                        {calc.title}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-muted-foreground">No calculators found</div>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
