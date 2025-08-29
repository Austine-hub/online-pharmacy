import React from "react";

const InfoTiles = () => {
  return (
    <section className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          ["Expert advice", "Articles from our pharmacists"],
          ["Sustainability", "Our commitment to greener care"],
          ["Support", "Help centre & contact"],
        ].map(([title, description], index) => (
          <a
            key={index}
            href="#"
            className="rounded-3xl bg-white p-6 border shadow-sm hover:shadow"
          >
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InfoTiles;
