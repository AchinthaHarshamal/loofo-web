import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const logoSrc = "/logo.png";
  const bannerSrc = "/banner.jpg";

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-purple-50/30 to-white">
      <Navigation />
      {/* Hero / Banner */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0">
          <Image src={bannerSrc} alt="Loofo Labs banner" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 transform transition-transform hover:scale-105 duration-300">
              <Image 
                src={logoSrc} 
                alt="Loofo Labs" 
                width={120} 
                height={120} 
                className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-lg" 
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Loofo Labs
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              A software studio building delightful mobile apps and providing reliable IT services
              for startups and enterprises.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#footer" className="btn-primary">
                Talk to us
              </a>
              <a href="#insights" className="btn-secondary">
                See insights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description / What we do */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28" id="about">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What we do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-gray-200/80 hover:border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Mobile App Development</CardTitle>
              <CardDescription className="text-gray-600">iOS, Android, and cross‑platform with modern stacks.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 leading-relaxed">
              <p>We design, build, and ship production‑ready apps with great UX, performance, and maintainability.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Native and cross‑platform implementations with strong UI consistency</li>
                <li>Offline‑first data, real‑time sync, and robust error handling</li>
                <li>CI/CD pipelines, beta distribution, and store submission support</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-gray-200/80 hover:border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">IT Services & Consulting</CardTitle>
              <CardDescription className="text-gray-600">Cloud, DevOps, APIs, data and integrations.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 leading-relaxed">
              <p>From architecture to operations, we help you plan, implement, and scale reliably.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Cloud architecture, containerization, and infrastructure as code</li>
                <li>API design, data pipelines, and third‑party integrations</li>
                <li>Observability, security reviews, and cost optimization</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-gray-200/80 hover:border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Product Partnership</CardTitle>
              <CardDescription className="text-gray-600">From idea to launch, iterating with users.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 leading-relaxed">
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
      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-20" id="insights">
        <Card className="shadow-lg border-gray-200/80">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">Status & insights</CardTitle>
            <CardDescription className="text-gray-600 text-base">Where we are now and what&apos;s next.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-3">Mobile app phase</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold shadow-sm">Private alpha</span>
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold shadow-sm">iOS & Android builds</span>
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold shadow-sm">Onboarding flows</span>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-900 mb-3">Mobile app roadmap</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="rounded-xl border border-gray-200 bg-white p-4 flex items-start justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
                    <span className="pr-3 text-gray-800">App foundation & design system</span>
                    <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold whitespace-nowrap">Completed</span>
                  </li>
                  <li className="rounded-xl border border-gray-200 bg-white p-4 flex items-start justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
                    <span className="pr-3 text-gray-800">Campaign composer (create, schedule, preview)</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-semibold whitespace-nowrap">In progress</span>
                  </li>
                  <li className="rounded-xl border border-gray-200 bg-white p-4 flex items-start justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
                    <span className="pr-3 text-gray-800">Audience & targeting tools</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-semibold whitespace-nowrap">In progress</span>
                  </li>
                  <li className="rounded-xl border border-gray-200 bg-white p-4 flex items-start justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
                    <span className="pr-3 text-gray-800">Beta distribution (TestFlight / Play Internal)</span>
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold whitespace-nowrap">Next</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-900 mb-3">What to expect</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Our main mobile app is a future‑marketing tool for everyone—create campaigns, reach audiences,
                  and learn what works with simple, privacy‑minded analytics. Join the mobile beta to help shape it.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#footer" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 transition-all duration-300">Join mobile beta</a>
                  <a href="#about" className="px-6 py-2.5 rounded-full bg-white text-purple-700 text-sm font-semibold border border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">Learn more</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Owners / Leadership */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-20" id="owners">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Founders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the leadership team driving innovation and excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-gray-200/80 hover:border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Chamuditha Kapugama</CardTitle>
              <CardDescription className="text-purple-600 font-medium">CEO</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 leading-relaxed">
              Focused on product strategy, user experience, and business outcomes.
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-gray-200/80 hover:border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Chinthaka Ekanayake</CardTitle>
              <CardDescription className="text-purple-600 font-medium">COO</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 leading-relaxed">
              Drives operations, partnerships, and go‑to‑market execution.
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
