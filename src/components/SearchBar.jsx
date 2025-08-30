// src/components/SearchBar.jsx
import { useState } from "react";
import HighlightText from "./HighlightText"; // Your HighlightText component

// The data should ideally be fetched from an API, not hardcoded.
const sampleData = [
  "Vitamin C",
  "Vítamín D",
  "Pain Relief Tablets",
  "Skin Care Lotion",
  "Blood Pressure Monitor",
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const normalize = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredResults = sampleData.filter((item) =>
    normalize(item).includes(normalize(searchTerm))
  );

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search medicines, skincare, services…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border px-4 py-3 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {searchTerm && (
        <ul className="absolute top-full left-0 right-0 mt-2 z-50 divide-y border rounded-lg shadow-lg bg-white">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <HighlightText text={item} query={searchTerm} />
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 italic">No results found</li>
          )}
        </ul>
      )}
    </>
  );
}