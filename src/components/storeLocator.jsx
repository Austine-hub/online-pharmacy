import React from "react";

export default function StoreLocator() {
  return (
    <section
      id="stores"
      className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Map Placeholder */}
      <div className="rounded-3xl overflow-hidden border shadow-sm">
        <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-500">
          Map placeholder
        </div>
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-extrabold">Find your nearest pharmacy</h2>
        <p className="mt-2 text-gray-600">
          Check opening times, services available, and contact details.
        </p>

        {/* Search Form */}
        <form className="mt-4 flex gap-3">
          <label htmlFor="postcode" className="sr-only">
            Enter town or postcode
          </label>
          <input
            id="postcode"
            className="flex-1 rounded-2xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter town or postcode"
          />
          <button
            type="submit"
            className="rounded-2xl bg-emerald-600 text-white font-semibold px-5 py-3 hover:bg-emerald-700"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
