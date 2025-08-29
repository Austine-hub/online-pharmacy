import React from "react";

// Reusable CategoryCard component
function CategoryCard({ title, blurb }) {
  return (
    <a
      href="#"
      className="group relative rounded-3xl overflow-hidden border shadow-sm bg-white"
    >
      {/* Placeholder Image Area */}
      <div className="aspect-[4/3] bg-gradient-to-br from-emerald-50 to-teal-50" />

      {/* Text Content */}
      <div className="p-5">
        <h3 className="font-bold group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{blurb}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-black" />
    </a>
  );
}

export default function FeaturedCategories() {
  const categories = [
    { title: "Cold & Flu", blurb: "Be prepared for the season" },
    { title: "Vitamins", blurb: "Daily wellness essentials" },
    { title: "Skincare", blurb: "Derm-approved formulas" },
    { title: "Baby & Child", blurb: "Care for little ones" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-extrabold">Shop by category</h2>
        <a
          href="#"
          className="text-emerald-700 font-semibold hover:underline"
        >
          View all
        </a>
      </div>

      {/* Categories Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <CategoryCard key={i} title={cat.title} blurb={cat.blurb} />
        ))}
      </div>
    </section>
  );
}
