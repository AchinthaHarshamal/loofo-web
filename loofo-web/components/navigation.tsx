"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-opacity hover:opacity-80"
          >
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
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              What we do
            </a>
            <a
              href="#insights"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Insights
            </a>
            <a
              href="#owners"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Founders
            </a>
            <Link
              href="/careers"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Careers
            </Link>
            <a
              href="#footer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              What we do
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Insights
            </a>
            <a
              href="#owners"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Founders
            </a>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
            >
              Careers
            </Link>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold shadow-lg text-center mt-4"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

