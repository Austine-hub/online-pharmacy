import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ className = "flex gap-4" }) {
  return (
    <ul className={className}>
      <li>
        <Link to="/services" className="hover:text-emerald-700 transition">
          Prescriptions
        </Link>
      </li>
      <li>
        <Link to="/team" className="hover:text-emerald-700 transition">
          Consult us 
        </Link>
      </li>
      <li>
        <Link to="/stores" className="hover:text-emerald-700 transition">
          Find a store
        </Link>
      </li>
      <li>
        <a
          href="#"
          aria-label="Basket"
          className="hover:text-emerald-700 transition"
        >
          🛒
        </a>
      </li>
    </ul>
  );
}

