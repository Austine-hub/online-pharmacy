import React from "react";

export default function ServicesStrip() {
  const services = [
    { title: "Prescriptions", desc: "New & repeat prescriptions", cta: "Learn more" },
    { title: "Online doctor", desc: "Private treatments online", cta: "Start now" },
    { title: "Health checks", desc: "BP, cholesterol & BMI", cta: "Book a check" },
    { title: "Click & Collect", desc: "Reserve online, collect in store", cta: "How it works" },
  ];

  return (
    <section id="services" className="bg-gray-50 border-y">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-3xl bg-white p-6 border shadow-sm"
          >
            {/* Icon placeholder (currently using index number) */}
            <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            <a
              href="#"
              className="inline-block mt-4 text-emerald-700 font-semibold hover:underline"
            >
              {s.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
