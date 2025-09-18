import { NextResponse } from "next/server"

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://calchub.com/sitemap.xml

# Block access to admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Allow all calculator pages
Allow: /calculators/
Allow: /blog/
Allow: /about
Allow: /contact
Allow: /privacy
Allow: /terms
Allow: /disclaimer`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
