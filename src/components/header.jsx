import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
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
          <Link
            to="/prescriptions"
            className="underline underline-offset-4 hover:opacity-90 transition !text-white"
          >
            Join Us
          </Link>
        </div>
      </div>
      {/* The missing closing div for the announcement bar has been added here */}

      {/* Main header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-12 gap-4 items-center">
          {/* Logo (now a clickable link) */}
          <Link
            to="/"
            className="col-span-6 sm:col-span-2 flex items-center gap-2"
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
            <span className="font-extrabold text-x0.4 tracking-tight">
              AjanjaCare
              <p>Home</p>
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="col-span-6 sm:hidden flex items-center justify-end"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
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