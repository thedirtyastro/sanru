"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <div
          className={`w-full md:w-[90%] transition-all duration-300 rounded-2xl ${
            scrolled
              ? "glass shadow-lg border border-white/20"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <a
              href="#"
              className="text-2xl font-bold text-white hover:opacity-80 transition-opacity font-[family-name:var(--font-smooch-sans)]"
            >
              Sanru Creative Studio
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/projects"
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="glass px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Contact
              </a>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-64 h-full glass border-l border-white/20 shadow-xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 pt-24">
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="py-3 px-4 text-gray-300 hover:text-white text-base font-medium transition-colors border-b border-white/10"
            >
              About
            </a>
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="py-3 px-4 text-gray-300 hover:text-white text-base font-medium transition-colors border-b border-white/10"
            >
              Services
            </a>
            <a
              href="/projects"
              onClick={closeMobileMenu}
              className="py-3 px-4 text-gray-300 hover:text-white text-base font-medium transition-colors border-b border-white/10"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-4 glass px-6 py-3 rounded-full text-base font-medium text-white text-center hover:bg-white/20 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

