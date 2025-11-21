import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <Navigation />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Careers at Loofo Labs</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">We offer hands‑on, practice‑driven internships—build real features with us and gain industry experience across mobile, backend, web, and cloud.</p>
          <div className="mt-8">
            <a href="/" className="inline-block px-6 py-2.5 rounded-full bg-white text-purple-700 text-sm font-semibold border border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">← Back to Home</a>
          </div>
        </header>

        <section>
          <Card className="shadow-lg border-gray-200/80 mb-10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Software Engineering Internship</CardTitle>
              <CardDescription className="text-gray-600 text-base">Gain real industry experience across mobile, backend, web, and cloud</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6 text-sm text-gray-700 leading-relaxed">
            <p>
              Contribute across the stack as we build our main mobile app. We welcome interns who have foundational knowledge in the following areas (not separately, but general exposure across them):
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Flutter for mobile (Dart, widgets, state management)</li>
              <li>Spring Boot / Java for backend APIs</li>
              <li>React / Next.js for web interfaces</li>
              <li>AWS fundamentals for deploying and operating services</li>
            </ul>
            <p className="mt-3">Nice‑to‑have: Git/GitHub, basic databases, writing clean, readable code.</p>

            <Separator className="my-6" />

            <h3 className="font-semibold text-foreground mb-2">What you’ll gain</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              <li>Agile (Scrum/Kanban): planning, stand‑ups, retrospectives</li>
              <li>Team collaboration: Git branching, pull requests, code reviews</li>
              <li>CI/CD pipelines: automated builds, tests, deployments</li>
              <li>Testing basics: unit, integration, end‑to‑end</li>
              <li>Release workflows: TestFlight / Play Console, beta feedback</li>
              <li>Cloud ops: monitoring, logs, basic security hygiene</li>
              <li>Infrastructure as Code: Terraform</li>
            </ul>

            <Separator className="my-6" />

            <h3 className="font-semibold text-foreground mb-2">Internship details</h3>
            <ul className="space-y-1 text-sm text-gray-900">
              <li><span className="font-medium">Working hours:</span> Flexible 8 hours (encouraged to collaborate with the team)</li>
              <li><span className="font-medium">Compensation:</span> No stipend; internet bill provided</li>
              <li><span className="font-medium">Working mode:</span> Online</li>
            </ul>

              <div className="mt-8">
                <a
                  href="mailto:careers@loofolabs.com?subject=Software%20Engineering%20Internship%20Application"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                >
                  Apply now
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-gray-200/80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">How to apply</CardTitle>
              <CardDescription className="text-gray-600 text-base">Simple email — no lengthy forms</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6 text-sm text-gray-700 leading-relaxed">
              <p>
                Send your resume or profile links to <a className="text-purple-600 hover:text-purple-700 hover:underline font-medium transition-colors" href="mailto:careers@loofolabs.com">careers@loofolabs.com</a> with &quot;Software Engineering Internship&quot; in the subject.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </main>
  );
}


