import React from "react";

// The data for our team members
const teamMembers = [
  {
    name: "Dr. Aldeed Kahle",
    title: "Urologist",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. George F. Jumba",
    title: "General Surgeon & Laparoscopic Colorectal Surgeon",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Alka Dodhia",
    title: "Expert Medical Lab Technologist",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Joseph Njagi",
    title: "Consultant ObGyn",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Yamal Patel",
    title: "Consultant ObGyn",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Devil Mangare",
    title: "Consultant Anaesthesiologist",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Mohit Bhandari",
    title: "Bariatric Surgeon",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Prafull C. Patel",
    title: "Consultant ObGyn",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Roshini Ajmera",
    title: "Consultant Anaesthesiologist",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Vibhavari Patel",
    title: "Consultant Anaesthesiologist",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
  {
    name: "Dr. Deepa Patel",
    title: "Pathologist",
    image: "https://placehold.co/250x250/E2E8F0/1A202C?text=Dr.",
  },
];

// Reusable component for a single team member card
function TeamMemberCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={member.image}
        alt={`A photo of ${member.name}`}
        className="rounded-full h-40 w-40 object-cover border-4 border-white shadow-lg"
      />
      <h3 className="mt-4 font-bold text-gray-800">{member.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{member.title}</p>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700">
          Meet Our Medical Team
        </h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          Experienced and talented doctors covering a wide variety of specialties.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}