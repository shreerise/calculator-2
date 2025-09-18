import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Sample blog post data
const blogPosts = {
  "mortgage-calculator-guide": {
    title: "Complete Guide to Using a Mortgage Calculator",
    content: `
      <p>A mortgage calculator is one of the most valuable tools when planning to buy a home. It helps you understand what you can afford and plan your finances accordingly.</p>
      
      <h2>Understanding the Basics</h2>
      <p>When using a mortgage calculator, you'll need to input several key pieces of information:</p>
      <ul>
        <li><strong>Home Price:</strong> The total cost of the home you're considering</li>
        <li><strong>Down Payment:</strong> The amount you'll pay upfront (typically 10-20%)</li>
        <li><strong>Interest Rate:</strong> The annual percentage rate (APR) for your loan</li>
        <li><strong>Loan Term:</strong> The length of your mortgage (usually 15 or 30 years)</li>
      </ul>
      
      <h2>Factors That Affect Your Payment</h2>
      <p>Several factors influence your monthly mortgage payment:</p>
      <ul>
        <li>Principal and interest</li>
        <li>Property taxes</li>
        <li>Homeowners insurance</li>
        <li>Private mortgage insurance (PMI)</li>
        <li>HOA fees (if applicable)</li>
      </ul>
      
      <h2>Tips for Using Our Calculator</h2>
      <p>To get the most accurate results from our mortgage calculator:</p>
      <ol>
        <li>Research current interest rates in your area</li>
        <li>Get pre-approved to understand your actual rate</li>
        <li>Include all costs, not just principal and interest</li>
        <li>Consider different down payment scenarios</li>
        <li>Factor in your other monthly expenses</li>
      </ol>
      
      <p>Remember, a mortgage calculator provides estimates. Always consult with a qualified mortgage professional for personalized advice.</p>
    `,
    author: "CalcHub Team",
    date: "2024-01-15",
    category: "Financial Planning",
    readTime: "5 min read",
    image: "/mortgage-calculator-guide.jpg",
  },
  "compound-interest-power": {
    title: "The Power of Compound Interest: Why Starting Early Matters",
    content: `
      <p>Albert Einstein allegedly called compound interest "the eighth wonder of the world." Whether he actually said this or not, the sentiment rings true – compound interest is incredibly powerful.</p>
      
      <h2>What is Compound Interest?</h2>
      <p>Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. In simple terms, it's "interest on interest."</p>
      
      <h2>The Time Factor</h2>
      <p>The most crucial factor in compound interest is time. The earlier you start, the more dramatic the results. Consider this example:</p>
      <ul>
        <li><strong>Person A:</strong> Invests $200/month starting at age 25</li>
        <li><strong>Person B:</strong> Invests $400/month starting at age 35</li>
      </ul>
      <p>Assuming a 7% annual return, Person A will have significantly more money at retirement despite investing less per month.</p>
      
      <h2>Using Our Compound Interest Calculator</h2>
      <p>Our calculator helps you visualize the power of compound interest by showing:</p>
      <ul>
        <li>Future value of your investment</li>
        <li>Total interest earned</li>
        <li>Year-by-year breakdown</li>
        <li>Impact of different contribution amounts</li>
      </ul>
      
      <h2>Maximizing Compound Interest</h2>
      <ol>
        <li><strong>Start Early:</strong> Time is your greatest asset</li>
        <li><strong>Be Consistent:</strong> Regular contributions compound faster</li>
        <li><strong>Reinvest Earnings:</strong> Don't withdraw interest or dividends</li>
        <li><strong>Choose Growth Investments:</strong> Higher returns mean more compounding</li>
      </ol>
      
      <p>Use our compound interest calculator to see how your money can grow over time and make informed decisions about your financial future.</p>
    `,
    author: "CalcHub Team",
    date: "2024-01-10",
    category: "Investment",
    readTime: "7 min read",
    image: "/compound-interest-growth-chart.jpg",
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found | CalcHub Blog",
    }
  }

  return {
    title: `${post.title} | CalcHub Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
    keywords: `${post.category.toLowerCase()}, calculator tips, ${post.title.toLowerCase()}`,
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-foreground transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-foreground">{post.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">CT</span>
          </div>
          <div>
            <p className="font-medium text-foreground">{post.author}</p>
            <p className="text-sm text-muted-foreground">Published on {post.date}</p>
          </div>
        </div>
        <div className="aspect-video mb-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Related Tools */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-xl font-semibold text-foreground mb-4">Try Our Related Calculators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {post.category === "Financial Planning" && (
            <>
              <Link
                href="/calculators/mortgage"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Mortgage Calculator</p>
                  <p className="text-sm text-muted-foreground">Calculate monthly payments</p>
                </div>
              </Link>
              <Link
                href="/calculators/loan"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Loan Calculator</p>
                  <p className="text-sm text-muted-foreground">Compare loan options</p>
                </div>
              </Link>
            </>
          )}
          {post.category === "Investment" && (
            <Link
              href="/calculators/compound-interest"
              className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Compound Interest Calculator</p>
                <p className="text-sm text-muted-foreground">See your money grow</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        <div className="flex gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
