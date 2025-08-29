import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 rounded-xl bg-emerald-500 items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"/>
              </svg>
            </span>
            <span className="font-extrabold text-white text-xl">AjanjaCare</span>
          </div>
          <p className="text-sm mt-3 text-gray-400">© {new Date().getFullYear()} CarePlus Pharmacy Ltd. All rights reserved.</p>
        </div>
        {[
          ['Shop', ['Vitamins','Skincare','Medicines','Baby & Child']],
          ['Services', ['Prescriptions','Travel health','Health checks','Online doctor']],
          ['Company', ['About us','Careers','Sustainability','Contact']],
        ].map(([heading, links], i) => (
          <div key={i}>
            <h4 className="font-bold text-white">{heading}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l, j) => (<li key={j}><a className="hover:text-white" href="#">{l}</a></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-gray-500 flex flex-wrap gap-4 items-center justify-between">
          <p>Registered pharmacy in Kenya • License No. 123456 • For advice, speak to our pharmacists.</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}