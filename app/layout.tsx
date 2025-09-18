import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "CalcHub - Professional Calculator Tools | Free Online Calculators",
    template: "%s | CalcHub",
  },
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
  authors: [{ name: "CalcHub Team" }],
  creator: "CalcHub",
  publisher: "CalcHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://calchub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CalcHub - Professional Calculator Tools",
    description:
      "Access 9+ professional calculators for finance, health, education, and more. Fast, accurate, and completely free.",
    url: "https://calchub.com",
    siteName: "CalcHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcHub - Professional Calculator Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcHub - Professional Calculator Tools",
    description:
      "Access 9+ professional calculators for finance, health, education, and more. Fast, accurate, and completely free.",
    images: ["/og-image.jpg"],
    creator: "@calchub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CalcHub",
              description: "Professional calculator tools for finance, health, education, and more",
              url: "https://calchub.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://calchub.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "CalcHub",
                url: "https://calchub.com",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-screen flex flex-col`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
