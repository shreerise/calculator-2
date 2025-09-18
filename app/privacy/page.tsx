import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | CalcHub - Professional Calculator Tools",
  description:
    "Learn how CalcHub protects your privacy and handles your data when using our professional calculator tools.",
  keywords: "privacy policy, data protection, calculator privacy, CalcHub privacy",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              CalcHub is committed to protecting your privacy. We collect minimal information to provide our calculator
              services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Usage data and analytics to improve our services</li>
              <li>Technical information such as browser type and device information</li>
              <li>Calculation inputs (processed locally and not stored on our servers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and maintain our calculator services</li>
              <li>Improve user experience and website functionality</li>
              <li>Analyze usage patterns to enhance our tools</li>
              <li>Ensure security and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your information. All calculations are performed
              client-side in your browser, and sensitive financial or personal data is not transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use third-party services for analytics and advertising. These services have their own privacy
              policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at privacy@calchub.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
