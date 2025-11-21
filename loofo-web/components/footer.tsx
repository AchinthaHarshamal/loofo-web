import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Loofo Labs"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Loofo Labs
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              A software studio building delightful mobile apps and providing
              reliable IT services for startups and enterprises.
            </p>
            <div className="space-y-2.5 text-sm">
              <div>
                <span className="font-medium text-gray-900">Email: </span>
                <a
                  href="mailto:contact@loofolabs.com"
                  className="text-purple-600 hover:text-purple-700 hover:underline transition-colors"
                >
                  contactus@loofolab.com
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-900">Phone: </span>
                <a
                  href="tel:+94763637144"
                  className="text-purple-600 hover:text-purple-700 hover:underline transition-colors"
                >
                  +94 (76) 363-7144
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-900">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/company/loofo-labs/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 hover:underline transition-colors"
                >
                  Loofo Labs
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-900">Location: </span>
                <span className="text-gray-600">Remote‑first</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#owners"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Founders
                </a>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/policy"
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Loofo Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

