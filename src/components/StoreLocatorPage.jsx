import React from "react";
import StoreLocator from "./StoreLocator";

export default function StoreLocatorPage() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-emerald-700">
        Find a Store
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Locate your nearest pharmacy to pick up your prescriptions.
      </p>
      <StoreLocator />
    </section>
  );
}