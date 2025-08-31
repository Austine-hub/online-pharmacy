import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(""); // Clear any previous messages

    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Subscribing with email:", email);
      setMessage(`Thanks for subscribing with ${email}!`);
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-extrabold">Get offers & health tips</h2>
      <p className="text-gray-600 mt-2">
        Join our newsletter for exclusive deals and pharmacist-approved advice.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col sm:flex-row gap-3 justify-center"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-2xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 w-full sm:w-80"
          disabled={isLoading}
        />
        <button
            type="submit"
            className="rounded-2xl !bg-emerald-600 text-white font-semibold px-5 py-3 hover:!bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}

        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 ${
            message.includes("Thanks") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
}