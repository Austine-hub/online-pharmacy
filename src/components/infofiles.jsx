import React from "react";
import { Link } from "react-router-dom";

const InfoTiles = () => {
  const infoData = [
    { title: "Expert advice", description: "Articles from our pharmacists", path: "/team" },
    { title: "Sustainability", description: "Our commitment to greener care", path: "/sustainability" },
    { title: "Support", description: "Help centre & contact", path: "/support" },
  ];

  return (
    <section className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {infoData.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="rounded-3xl bg-white p-6 border shadow-sm hover:shadow transition"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InfoTiles;
