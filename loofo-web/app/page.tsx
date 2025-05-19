export default function Home() {
  const logoSrc = "/logo.png";
  const splashImageSrc = "/banner.jpg";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
        {/* Logo placeholder */}
        <div className="flex justify-center mb-6">
          <img
            src={logoSrc}
            alt="Loofo Logo"
            className="h-20 w-20 object-contain"
          />
        </div>
        {/* Splash image instead of App Name */}
        <div className="flex justify-center mb-4">
          <img
            src={splashImageSrc}
            alt="App Splash"
            className="h-24 w-auto object-contain rounded-lg shadow"
          />
        </div>
        {/* Tagline/Description */}
        <p className="text-base text-gray-700 mb-4">
          Discover, connect, and grow with the next generation platform for creative minds and innovators.
        </p>
        {/* Links to Policy, Contact, and Support */}
        <div className="mt-8 flex justify-center space-x-6 text-sm">
          <a href="/policy" className="text-purple-700 hover:underline">Policy</a>
          <a href="/contact" className="text-purple-700 hover:underline">Contact</a>
          <a href="/support" className="text-purple-700 hover:underline">Support</a>
        </div>
        {/* Remove additional image placeholder */}
      </section>
    </main>
  );
}
