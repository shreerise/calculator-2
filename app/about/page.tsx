import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | CalcHub - Professional Calculator Tools",
  description:
    "Learn about CalcHub's mission to provide accurate, reliable, and easy-to-use professional calculator tools.",
  keywords: "about CalcHub, calculator tools, professional calculators, financial calculators",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">About CalcHub</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Your trusted source for professional calculator tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              CalcHub was created to provide accurate, reliable, and easy-to-use calculator tools for everyone. Whether
              you're planning a mortgage, calculating your BMI, or working on academic projects, our tools are designed
              to give you precise results quickly and efficiently.
            </p>
            <p className="text-muted-foreground">
              We believe that powerful calculation tools should be accessible to everyone, which is why all our
              calculators are free to use and work seamlessly across all devices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose CalcHub?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% accurate calculations using proven formulas</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mobile-friendly responsive design</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast, client-side calculations for privacy</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No registration or personal data required</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comprehensive range of calculator tools</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Our Calculator Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Financial</h3>
              <p className="text-sm text-muted-foreground">Mortgage, loan, compound interest, and tip calculators</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Health & Personal</h3>
              <p className="text-sm text-muted-foreground">BMI and age calculators for personal wellness</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Academic & Utility</h3>
              <p className="text-sm text-muted-foreground">GPA, percentage, and unit conversion tools</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have suggestions for new calculators or found an issue? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
