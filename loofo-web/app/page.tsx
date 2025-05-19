export default function Home() {
  const logoSrc = "/logo.png";
  const splashImageSrc = "/banner.jpg";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-10 max-w-xl w-full text-center">
        {/* Welcome message with logo */}
        <div className="flex items-center justify-center mb-4 space-x-4">
          <img
            src={logoSrc}
            alt="Loofo Logo"
            className="h-20 w-20 object-contain animate-bounce"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-purple-600">Loofo</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover, connect, and grow with the next generation platform for creative minds and innovators.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow hover:bg-purple-700 transition mb-8"
        >
          Get Started
        </a>
        {/* Separator */}
        <hr className="my-8 border-t-1 border-purple-500 w-2/3 mx-auto" />
        {/* Splash image */}
        <div className="flex justify-center mb-4 mt-8">
          <img
            src={splashImageSrc}
            alt="App Splash"
            className="h-24 w-auto object-contain"
          />
        </div>
        {/* Links to Policy, Contact, and Support */}
        <div className="mt-8 flex justify-center space-x-6 text-sm">
          <a href="/policy" className="text-purple-700 hover:underline">Policy</a>
          <a href="/contact" className="text-purple-700 hover:underline">Contact</a>
          <a href="/support" className="text-purple-700 hover:underline">Support</a>
        </div>
      </section>
    </main>
  );
}
