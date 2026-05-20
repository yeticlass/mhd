'use client'
import { useState,useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  // Close menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
 
  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              {/* Simple SVG logo mark */}
             <Logo/>
           
             
              <span className="text-lg font-bold tracking-tight text-gray-900 leading-tight uppercase">
                Miteri{" "}
                <span className="uppercase">Home Decor</span>
              </span>
            </Link>
 
            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
 
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact-us"
                className="
                inline-flex items-center
                 gap-2 rounded-lg bg-amber-600
                  px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 
                  active:scale-95 transition-all duration-200 uppercase"
              >
                Book Today !
              </Link>
            </div>
 
            {/* Hamburger button (mobile) */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors duration-200"
            >
              {/* Animated icon: hamburger ↔ X */}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  // X icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>
 
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
 
      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-16 inset-x-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="divide-y divide-gray-50 px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3.5 text-base font-medium text-gray-800 hover:text-amber-600 transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
 
        {/* Mobile CTA */}
        <div className="px-4 py-4 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-700 active:scale-95 transition-all duration-200"
          >
            Book Today !
          </Link>
        </div>
      </div>
    </>
  );
}
 
