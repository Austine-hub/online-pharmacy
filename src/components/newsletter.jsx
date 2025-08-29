import React from "react";

export default function Newsletter() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-extrabold">Get offers & health tips</h2>
      <p className="text-gray-600 mt-2">
        Join our newsletter for exclusive deals and pharmacist-approved advice.
      </p>

      {/* Newsletter Form */}
      <form className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="rounded-2xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 w-full sm:w-80"
        />
        <button
          type="submit"
          className="rounded-2xl bg-emerald-600 text-white font-semibold px-5 py-3 hover:bg-emerald-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
