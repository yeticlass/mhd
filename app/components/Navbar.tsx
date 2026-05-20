"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        {/* Logo */}<div className="flex">
            
          <img src='/images/logo.jpg' alt="Miteri Logo"  className=" rounded-lg h-15"/>
            
          <div className="flex flex-col">

          <h1 className="font-bold ml-4 text-3xl">
            Miteri Home Decor
          </h1>
          <p className="ml-4 text-gray-600 pb-2">The name you trust</p>
        </div>
        </div>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href }) => (
            <li key={href} className={pathname === href ? styles.active : ""}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile / Tablet dropdown */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
      >
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={href} className={pathname === href ? styles.active : ""}>
              <Link href={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}