import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Careers at Loofo Lab</h1>
        <p className="mt-2 text-gray-800 max-w-2xl">We offer hands‑on, practice‑driven internships—build real features with us and gain industry experience across mobile, backend, web, and cloud.</p>
        <div className="mt-4">
          <a href="/" className="inline-block px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold shadow hover:bg-purple-700 transition">Go to Home</a>
        </div>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Software Engineering Internship</CardTitle>
            <CardDescription>Gain real industry experience across mobile, backend, web, and cloud</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="pt-4 text-sm text-gray-800">
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

            <div className="mt-6">
              <a
                href="mailto:careers@loofolab.com?subject=Software%20Engineering%20Internship%20Application"
                className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
              >
                Apply now
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>How to apply</CardTitle>
            <CardDescription>Simple email — no lengthy forms</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="pt-4 text-sm">
            <p>
              Send your resume or profile links to <a className="text-purple-700 underline" href="mailto:careers@loofolab.com">careers@loofolab.com</a> with &quot;Software Engineering Internship&quot; in the subject.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}


