import React from "react";
import { Link } from "react-router-dom";

// Reusable checklist item
function FeatureItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
        ✓
      </span>
      {text}
    </li>
  );
}

export default function PrescriptionCallout() {
  const features = [
    "Simple signup",
    "Reminders & notifications",
    "Pharmacist checks",
    "Flexible delivery",
  ];

  return (
    <section id="prescriptions" className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-extrabold">
            Manage repeat prescriptions the easy way
          </h2>
          <p className="mt-2 text-emerald-50">
            Set reminders, track status, and choose home delivery or Click &
            Collect at checkout.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/prescriptions"
              className="rounded-2xl bg-white text-emerald-700 font-semibold px-5 py-3 shadow hover:shadow-md"
            >
              Get started
            </Link>
            <Link
              to="/prescriptions"
              className="rounded-2xl bg-emerald-800/40 text-white font-semibold px-5 py-3 ring-1 ring-white/30 hover:bg-emerald-800/60"
            >
              How it works
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="rounded-3xl bg-white/10 border border-white/20 p-6">
            <ul className="space-y-3 text-sm">
              {features.map((f, i) => (
                <FeatureItem key={i} text={f} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}