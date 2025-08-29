import React from "react";

// Reusable BadgeCard component
function BadgeCard({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

export default function TrustBadges() {
  const badges = [
    { title: "Registered pharmacy", desc: "Verified professionals" },
    { title: "Secure payments", desc: "256-bit encryption" },
    { title: "Fast delivery", desc: "Next-day in select areas" },
    { title: "4.8/5 reviews", desc: "Trusted by customers" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, i) => (
          <BadgeCard key={i} title={badge.title} desc={badge.desc} />
        ))}
      </div>
    </section>
  );
}

