import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company info */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© {currentYear} CalcHub. All rights reserved.</p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm text-center"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm text-center"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm text-center"
            >
              Disclaimer
            </Link>
            <Link
              href="/sitemap"
              className="text-muted-foreground hover:text-primary transition-colors text-sm text-center"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
