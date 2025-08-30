import React from "react";
import PrescriptionSection from "./PrescriptionSection";
import { GUIDELINES } from "../data/guidelinesData";

export default function PrescriptionGuidelines() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        Prescription Guidelines
      </h1>
      {GUIDELINES.map((section, index) => (
        <PrescriptionSection
          key={index}
          category={section.category}
          drugs={section.drugs}
        />
      ))}
    </div>
  );
}