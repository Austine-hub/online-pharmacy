import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-emerald-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p className="font-medium">Free home delivery on eligible orders over KSh 3,000</p>
          <a href="#advice" className="underline underline-offset-4 hover:opacity-90">Health advice</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-12 gap-4 items-center">
          {/* Logo */}
          <a href="#" className="col-span-6 sm:col-span-2 flex items-center gap-2">
            <span className="inline-flex h-9 w-9 rounded-xl bg-emerald-600 items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
            </span>
            <span className="font-extrabold text-xl tracking-tight">AjanjaCare</span>
          </a>

          {/* Search */}
          <div className="col-span-12 sm:col-span-6 order-last sm:order-none">
            <label className="sr-only" htmlFor="site-search">Search products and services</label>
            <div className="relative">
              <input id="site-search" type="search" placeholder="Search medicines, skincare, services…" className="w-full rounded-2xl border px-4 py-3 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 focus-visible:outline-none">Search</button>
            </div>
          </div>

          {/* Quick links */}
          <nav className="col-span-6 sm:col-span-4 flex justify-end gap-4 text-sm">
            <a className="hover:text-emerald-700" href="#prescriptions">Prescriptions</a>
            <a className="hover:text-emerald-700" href="#services">Services</a>
            <a className="hover:text-emerald-700" href="#stores">Find a store</a>
            <a className="hover:text-emerald-700" href="#cart" aria-label="Basket">🛒</a>
          </nav>
        </div>
      </header>
    </>
  );
}