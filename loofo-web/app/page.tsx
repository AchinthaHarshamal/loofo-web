import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  const logoSrc = "/logo.png";
  const bannerSrc = "/banner.jpg";

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Hero / Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={bannerSrc} alt="Loofo Lab banner" fill className="object-cover opacity-20" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <Image src={logoSrc} alt="Loofo Lab" width={96} height={96} className="h-20 w-20 md:h-24 md:w-24 object-contain mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Loofo Lab
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-800">
              A software studio building delightful mobile apps and providing reliable IT services
              for startups and enterprises.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition">
                Talk to us
              </a>
              <a href="#insights" className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold border border-purple-200 hover:border-purple-400 transition">
                See insights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description / What we do */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20" id="about">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Mobile App Development</CardTitle>
              <CardDescription>iOS, Android, and cross‑platform with modern stacks.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-800">
              <p>We design, build, and ship production‑ready apps with great UX, performance, and maintainability.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Native and cross‑platform implementations with strong UI consistency</li>
                <li>Offline‑first data, real‑time sync, and robust error handling</li>
                <li>CI/CD pipelines, beta distribution, and store submission support</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">IT Services & Consulting</CardTitle>
              <CardDescription>Cloud, DevOps, APIs, data and integrations.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-800">
              <p>From architecture to operations, we help you plan, implement, and scale reliably.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Cloud architecture, containerization, and infrastructure as code</li>
                <li>API design, data pipelines, and third‑party integrations</li>
                <li>Observability, security reviews, and cost optimization</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Product Partnership</CardTitle>
              <CardDescription>From idea to launch, iterating with users.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-800">
              <p>We partner as your product team to validate, prototype, and deliver measurable outcomes.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Discovery workshops, user journeys, and clear problem framing</li>
                <li>Clickable prototypes and rapid MVPs for fast feedback</li>
                <li>Outcome‑driven roadmaps with analytics and learning loops</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insights */}
      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16" id="insights">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Status & insights</CardTitle>
            <CardDescription>Where we are now and what’s next.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="text-sm text-gray-700 mb-2">Mobile app phase</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold">Private alpha</span>
                  <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold">iOS & Android builds</span>
                  <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold">Onboarding flows</span>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-700 mb-2">Mobile app roadmap</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="rounded-lg border p-3 flex items-start justify-between">
                    <span className="pr-3">App foundation & design system</span>
                    <span className="px-2 py-0.5 rounded bg-green-600 text-white text-xs font-semibold">Completed</span>
                  </li>
                  <li className="rounded-lg border p-3 flex items-start justify-between">
                    <span className="pr-3">Campaign composer (create, schedule, preview)</span>
                    <span className="px-2 py-0.5 rounded bg-yellow-500 text-white text-xs font-semibold">In progress</span>
                  </li>
                  <li className="rounded-lg border p-3 flex items-start justify-between">
                    <span className="pr-3">Audience & targeting tools</span>
                    <span className="px-2 py-0.5 rounded bg-yellow-500 text-white text-xs font-semibold">In progress</span>
                  </li>
                  <li className="rounded-lg border p-3 flex items-start justify-between">
                    <span className="pr-3">Beta distribution (TestFlight / Play Internal)</span>
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-xs font-semibold">Next</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-2">What to expect</div>
                <p className="text-sm text-gray-800">
                  Our main mobile app is a future‑marketing tool for everyone—create campaigns, reach audiences,
                  and learn what works with simple, privacy‑minded analytics. Join the mobile beta to help shape it.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="#contact" className="px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold shadow hover:bg-purple-700 transition">Join mobile beta</a>
                  <a href="#about" className="px-5 py-2 rounded-full bg-white text-purple-700 text-sm font-semibold border border-purple-200 hover:border-purple-400 transition">Learn more</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Owners / Leadership */
      }
      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16" id="owners">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chamuditha Kapugama</CardTitle>
              <CardDescription>CEO</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Focused on product strategy, user experience, and business outcomes.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chinthaka Ekanayake</CardTitle>
              <CardDescription>COO</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Drives operations, partnerships, and go‑to‑market execution.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 pb-24" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Contact us</CardTitle>
              <CardDescription>We usually reply within one business day.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-800">
              <p><span className="font-medium text-foreground">Email:</span> <a className="text-purple-700 hover:underline" href="mailto:contact@loofolabs.com">contactus@loofolab.com</a></p>
              <p><span className="font-medium text-foreground">Phone:</span> <a className="text-purple-700 hover:underline" href="tel:+94763637144">+94 (76) 363-7144</a></p>
              <p><span className="font-medium text-foreground">LinkedIn:</span> <a className="text-purple-700 hover:underline" href="https://www.linkedin.com/company/loofo-labs/?viewAsMember=true" target="_blank" rel="noopener noreferrer">Loofo Lab</a></p>
              <p><span className="font-medium text-foreground">Location:</span> Remote‑first</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Links</CardTitle>
              <CardDescription>Explore careers and gain industry experience.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2">
                <li><a className="text-purple-700 hover:underline" href="/careers">Careers</a></li>
                <li><a className="text-purple-700 hover:underline" href="#owners">Founders</a></li>
                <li><a className="text-purple-700 hover:underline" href="#about">What we do</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
