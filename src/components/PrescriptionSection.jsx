import React from "react";

function PrescriptionSection({ category, drugs }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-emerald-600">{category}</h2>
      <ul className="list-disc list-inside space-y-2">
        {drugs.map((drug, index) => (
          <li key={index} className="text-gray-700">
            <strong>{drug.name}:</strong> {drug.details}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionSection;