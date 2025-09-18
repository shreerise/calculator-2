import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | CalcHub - Professional Calculator Tools",
  description: "Important disclaimer information for using CalcHub's professional calculator tools and services.",
  keywords: "disclaimer, calculator disclaimer, financial disclaimer, CalcHub disclaimer",
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Disclaimer</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
            <p className="text-muted-foreground">
              The information provided by CalcHub is for general informational and educational purposes only. All
              calculations and results should be verified independently before making any financial, health, or other
              important decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Financial Calculations</h2>
            <p className="text-muted-foreground">
              Our financial calculators (mortgage, loan, compound interest) provide estimates based on the information
              you provide. Actual results may vary due to factors such as:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Changes in interest rates</li>
              <li>Additional fees and charges</li>
              <li>Different calculation methods used by lenders</li>
              <li>Tax implications and regulations</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Always consult with qualified financial professionals before making financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Health Calculations</h2>
            <p className="text-muted-foreground">
              Health-related calculators (BMI, age) are for informational purposes only and should not replace
              professional medical advice. Consult with healthcare professionals for medical decisions and health
              assessments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy and Reliability</h2>
            <p className="text-muted-foreground">
              While we strive to ensure the accuracy of our calculators, we cannot guarantee that all calculations are
              error-free or suitable for your specific situation. Users are responsible for verifying results and using
              appropriate professional services when needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">No Professional Advice</h2>
            <p className="text-muted-foreground">
              CalcHub does not provide financial, legal, medical, or professional advice. Our tools are designed to
              assist with calculations only. For professional advice, please consult qualified professionals in the
              relevant field.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              CalcHub and its operators shall not be liable for any direct, indirect, incidental, consequential, or
              punitive damages arising from the use of our calculators or reliance on the results provided.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
