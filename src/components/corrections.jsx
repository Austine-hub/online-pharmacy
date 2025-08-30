// src/components/Header.jsx
import React from "react";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      {/* Top announcement bar */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementContainer}>
          <p className={styles.announcementText}>
            Free home delivery on eligible orders over KSh 3,000
          </p>
          <a href="#advice" className={styles.announcementLink}>
            Health advice
          </a>
        </div>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg
                viewBox="0 0 24 24"
                className={styles.logoSvg}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <span className={styles.logoText}>AjanjaCare</span>
          </a>

          {/* Search bar (separate component) */}
          <SearchBar />

          {/* Navigation */}
          <nav className={styles.navigation}>
            <a className={styles.navLink} href="#prescriptions">
              Prescriptions
            </a>
            <a className={styles.navLink} href="#services">
              Services
            </a>
            <a className={styles.navLink} href="#stores">
              Find a store
            </a>
            <a className={styles.navLink} href="#cart" aria-label="Basket">
              🛒
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}




// src/components/HighlightText.jsx
export default function HighlightText({ text, query }) {
  if (!query) return text;

  const normalizeText = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);

  const startIndex = normalizedText.indexOf(normalizedQuery);
  if (startIndex === -1) return text;

  const endIndex = startIndex + normalizedQuery.length;

  return (
    <>
      {text.slice(0, startIndex)}
      <span className="bg-yellow-200 font-semibold">
        {text.slice(startIndex, endIndex)}
      </span>
      {text.slice(endIndex)}
    </>
  );
}