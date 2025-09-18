import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | CalcHub - Professional Calculator Tools",
  description: "Read the terms and conditions for using CalcHub's professional calculator tools and services.",
  keywords: "terms of service, terms and conditions, calculator terms, CalcHub terms",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using CalcHub, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use CalcHub for personal and commercial calculation purposes. This
              includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Using our calculators for legitimate calculation needs</li>
              <li>Accessing results for personal or business use</li>
              <li>Sharing calculator links with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The information and calculations provided by CalcHub are for informational purposes only. While we strive
              for accuracy, we do not guarantee the completeness or accuracy of any calculations. Users should verify
              important calculations independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
            <p className="text-muted-foreground mb-4">In no event shall CalcHub be liable for any damages including:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Direct, indirect, incidental, or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Business interruption</li>
              <li>Errors in calculations or results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
            <p className="text-muted-foreground">
              CalcHub may revise these terms at any time without notice. By using this website, you agree to be bound by
              the current version of these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms & Conditions, please contact us at legal@calchub.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
