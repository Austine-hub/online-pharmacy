// src/components/Header.jsx

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks"; // ✅ Import your reusable nav links
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-emerald-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p className="font-medium">
            Free home delivery on eligible orders over KSh 3,000
          </p>
          <a
            href="#advice"
            className="underline underline-offset-4 hover:opacity-90 transition"
          >
            Health advice
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-12 gap-4 items-center">
          
          {/* Logo (acts as toggle on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="col-span-6 sm:col-span-2 flex items-center gap-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="inline-flex h-9 w-9 rounded-xl bg-emerald-600 items-center justify-center shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <span className="font-extrabold text-xl tracking-tight">
              AjanjaCare
            </span>
          </button>

          {/* Search Bar */}
          <div className="col-span-12 sm:col-span-6 order-last sm:order-none relative">
            <SearchBar />
          </div>

          {/* Desktop Quick Links */}
          <nav className="col-span-6 sm:col-span-4 hidden sm:flex justify-end text-sm">
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden bg-white border-t shadow-md"
          >
            <NavLinks className="flex-col space-y-3 p-4" />
          </div>
        )}
      </header>
    </>
  );
}
