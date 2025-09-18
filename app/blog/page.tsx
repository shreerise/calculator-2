import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | CalcHub - Calculator Tips, Guides & Financial Insights",
  description:
    "Discover helpful tips, guides, and insights about calculators, financial planning, and making the most of our tools.",
  keywords: "calculator blog, financial tips, calculator guides, mortgage tips, loan advice, financial planning",
}

// Sample blog posts data
const blogPosts = [
  {
    id: "mortgage-calculator-guide",
    title: "Complete Guide to Using a Mortgage Calculator",
    excerpt:
      "Learn how to effectively use mortgage calculators to plan your home purchase and understand the factors that affect your monthly payments.",
    author: "CalcHub Team",
    date: "2024-01-15",
    category: "Financial Planning",
    readTime: "5 min read",
    image: "/mortgage-calculator-guide.jpg",
  },
  {
    id: "compound-interest-power",
    title: "The Power of Compound Interest: Why Starting Early Matters",
    excerpt:
      "Discover how compound interest can dramatically impact your savings and investments, with real examples and calculations.",
    author: "CalcHub Team",
    date: "2024-01-10",
    category: "Investment",
    readTime: "7 min read",
    image: "/compound-interest-growth-chart.jpg",
  },
  {
    id: "bmi-health-insights",
    title: "Understanding BMI: More Than Just a Number",
    excerpt:
      "Learn what BMI really means, its limitations, and how to use it as part of a comprehensive health assessment.",
    author: "CalcHub Team",
    date: "2024-01-05",
    category: "Health",
    readTime: "4 min read",
    image: "/bmi-health-assessment.jpg",
  },
  {
    id: "loan-comparison-tips",
    title: "How to Compare Loan Offers: A Step-by-Step Guide",
    excerpt:
      "Master the art of comparing loan offers by understanding APR, terms, fees, and using our loan calculator effectively.",
    author: "CalcHub Team",
    date: "2023-12-28",
    category: "Financial Planning",
    readTime: "6 min read",
    image: "/loan-comparison-chart.jpg",
  },
  {
    id: "gpa-calculation-methods",
    title: "Different GPA Calculation Methods Explained",
    excerpt:
      "Understand weighted vs unweighted GPA, how different schools calculate grades, and tips for academic success.",
    author: "CalcHub Team",
    date: "2023-12-20",
    category: "Education",
    readTime: "5 min read",
    image: "/gpa-calculation-academic.jpg",
  },
  {
    id: "tip-etiquette-guide",
    title: "Tipping Etiquette Around the World",
    excerpt:
      "Navigate tipping customs in different countries and situations with our comprehensive guide and tip calculator.",
    author: "CalcHub Team",
    date: "2023-12-15",
    category: "Lifestyle",
    readTime: "8 min read",
    image: "/tipping-etiquette-worldwide.jpg",
  },
]

const categories = ["All", "Financial Planning", "Investment", "Health", "Education", "Lifestyle"]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
          Calculator Tips & Financial Insights
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Discover helpful guides, tips, and insights to make the most of our calculator tools and improve your
          financial literacy.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Featured</span>
                <span>{blogPosts[0].category}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6 text-pretty">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">CT</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{blogPosts[0].author}</p>
                    <p className="text-sm text-muted-foreground">{blogPosts[0].date}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-balance">
                <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs">CT</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get the latest calculator tips, financial insights, and new tool announcements delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
