import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <rect
            x="-50"
            y="-50"
            width="900"
            height="500"
            fill="url(#g)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your everyday health, delivered with care
          </h1>
          <p className="mt-4 text-lg text-emerald-50">
            Order medicines, manage repeat prescriptions, and book in-pharmacy
            services—all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/prescriptions" className="rounded-2xl bg-white text-emerald-700 font-semibold px-5 py-3 shadow hover:shadow-md">
              Manage prescriptions
            </Link>

            {/* Replaced 'a' tag with 'Link' component */}
            <Link
              to="/services"
              className="rounded-2xl bg-emerald-800/40 text-white font-semibold px-5 py-3 ring-1 ring-white/30 hover:bg-emerald-800/60"
            >
              Browse services
            </Link>
          </div>

          {/* Features */}
          <div className="mt-6 flex items-center gap-3 text-emerald-50/90">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              ✓
            </span>
            <span>
              Pharmacist-led advice • Secure checkout • Click & Collect
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:justify-self-end">
          <div className="bg-white/10 backdrop-blur rounded-3xl p-6 md:p-8 shadow-lg border border-white/20">
            <h2 className="text-xl font-bold">
              Quick book: Popular services
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { title: "Flu vaccination", note: "Appointments from Mon–Sat" },
                { title: "Blood pressure check", note: "Walk-in or book online" },
                { title: "Travel health & jabs", note: "Advice + vaccinations" },
              ].map((s, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between bg-white/5 rounded-2xl px-4 py-3 border border-white/10"
                >
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-white/80">{s.note}</p>
                  </div>
                  {/* Replaced 'a' tag with 'Link' component */}
                  <Link
                    to="/services"
                    className="rounded-xl bg-white text-emerald-700 font-medium px-4 py-2 hover:shadow"
                  >
                    Book
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}