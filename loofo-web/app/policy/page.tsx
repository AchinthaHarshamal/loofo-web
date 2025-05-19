import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const EFFECTIVE_DATE = "2025-05-21";
const CONTACT_EMAIL = "privacy@loofo.com";

const PolicyPage = () => (
  <main className="max-w-3xl mx-auto py-12 px-4">
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl">Policy Documents</CardTitle>
      </CardHeader>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Privacy Policy</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4 space-y-4">
        <p><strong>Privacy Policy for Loofo</strong></p>
        <p><strong>Effective Date:</strong> {EFFECTIVE_DATE}</p>
        <p>
          Welcome to Loofo! This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application. By using Loofo, you agree to the practices described below.
        </p>
        <h3 className="font-semibold">1. What Is Loofo?</h3>
        <p>
          Loofo is a short-video platform designed to showcase promotional and advertisement content for various products. Users can watch videos, interact with content, and discover new product offerings.
        </p>
        <h3 className="font-semibold">2. Information We Collect</h3>
        <p>We may collect the following types of information when you use Loofo:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>a. Personal Information</strong>
            <ul className="list-disc pl-6">
              <li>Email address (if you create an account)</li>
              <li>Username or display name</li>
              <li>Profile picture (optional)</li>
            </ul>
          </li>
          <li>
            <strong>b. Device &amp; Usage Information</strong>
            <ul className="list-disc pl-6">
              <li>Device type and operating system</li>
              <li>IP address and general location (city or region)</li>
              <li>App usage data (e.g., viewed videos, likes, interactions)</li>
              <li>Crash reports and performance logs</li>
            </ul>
          </li>
          <li>
            <strong>c. Cookies &amp; Tracking Technologies</strong>
            <p>We may use cookies or similar technologies to enhance app functionality and user experience.</p>
          </li>
        </ul>
        <h3 className="font-semibold">3. How We Use Your Information</h3>
        <ul className="list-disc pl-6">
          <li>Deliver promotional video content based on general trends</li>
          <li>Improve and personalize the app experience</li>
          <li>Monitor app performance and resolve technical issues</li>
          <li>Analyze content effectiveness and engagement</li>
        </ul>
        <h3 className="font-semibold">4. Data Sharing and Third Parties</h3>
        <p>We do not sell your personal information. However, we may share data with:</p>
        <ul className="list-disc pl-6">
          <li>Cloud service providers for hosting and analytics</li>
          <li>Advertising platforms to optimize promotional content</li>
          <li>Law enforcement or regulatory agencies when required by law</li>
        </ul>
        <h3 className="font-semibold">5. Children’s Privacy</h3>
        <p>
          Loofo is not intended for users under the age of 13. If you believe we have collected personal information from a child, please contact us so we can delete it.
        </p>
        <h3 className="font-semibold">6. Your Privacy Rights</h3>
        <p>Depending on your region, you may have rights to:</p>
        <ul className="list-disc pl-6">
          <li>Access the personal data we have about you</li>
          <li>Request correction or deletion of your information</li>
          <li>Opt out of non-essential data tracking</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>
        </p>
        <h3 className="font-semibold">7. Data Security</h3>
        <p>
          We use industry-standard security measures to protect your information. However, no app can guarantee 100% security.
        </p>
        <h3 className="font-semibold">8. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted in the app or on our website, with the updated effective date.
        </p>
        <h3 className="font-semibold">9. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <ul className="list-disc pl-6">
          <li>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Terms of Service</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <p className="mb-2">
          By using our platform, you agree to comply with our terms and conditions. Please use our services responsibly and refrain from any prohibited activities.
        </p>
        <p>
          We reserve the right to update these terms at any time.
        </p>
      </CardContent>
    </Card>
  </main>
);

export default PolicyPage;
