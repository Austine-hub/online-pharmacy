import React from "react";

// A reusable component to display each step of the process
function PrescriptionStep({ number, title, description }) {
  return (
    <li className="flex gap-4">
      <div className="flex items-center justify-center h-10 w-10 bg-emerald-600 rounded-full text-white font-bold text-lg flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-emerald-700">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </li>
  );
}

export default function Prescriptions() {
  const steps = [
    {
      number: 1,
      title: "Sign up and create your account",
      description: "Securely register to manage all your prescriptions in one place.",
    },
    {
      number: 2,
      title: "Add your medication details",
      description: "Enter your prescription information, and we'll handle the rest.",
    },
    {
      number: 3,
      title: "Choose your fulfillment options",
      description: "Select home delivery or pick up your medication from a local pharmacy.",
    },
    {
      number: 4,
      title: "Receive your medication",
      description: "We'll notify you when your prescription is ready for collection or has been dispatched for delivery.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-emerald-700">
          Your prescriptions, simplified.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Manage, track, and get reminders for all your repeat prescriptions with our simple, secure platform.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-emerald-700 mb-8">How it works</h2>
        <ul className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step) => (
            <PrescriptionStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
