import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global layout components
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

// Components for the always-visible home page content
import Hero from "./components/hero.jsx";
import BadgeCard from "./components/trustbadges.jsx";
import FeaturedCategories from "./components/categories.jsx";
import ServicesStrip from "./components/services.jsx";
import CategoryCard from "./components/categoryCard.jsx";
import StoreLocator from "./components/storeLocator.jsx";
import InfoTiles from "./components/infofiles.jsx";
import Newsletter from "./components/newsletter.jsx";
import PrescriptionCallout from "./components/PrescriptionCallout.jsx";

// Page components for routing
import Prescriptions from "./components/prescriptions.jsx";
import PrescriptionGuidelines from "./components/PrescriptionGuidelines.jsx";
import StoreLocatorPage from "./components/StoreLocatorPage.jsx";
import TeamSection from "./components/TeamSection.jsx"; // New import

import "./App.css";

// A component to group all the home page content that should appear on multiple routes
const HomePageContent = () => (
  <>
    <Hero />
    <BadgeCard />
    <ServicesStrip />
    <FeaturedCategories />
    <ServicesStrip />
    <CategoryCard />
    <StoreLocator />
    <InfoTiles />
    <Newsletter />
    <PrescriptionCallout />
  </>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header is always visible on all pages */}
        <Header />

        {/* The main content area where pages are rendered */}
        <main className="flex-grow">
          <Routes>
            {/* The primary homepage route */}
            <Route path="/" element={<HomePageContent />} />
            
            {/* The homepage route for the specific '/online-pharmacy' URL */}
            <Route path="/online-pharmacy" element={<HomePageContent />} />
            
            {/* Dedicated routes for other pages */}
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/services" element={<PrescriptionGuidelines />} />
            <Route path="/stores" element={<StoreLocatorPage />} />
            <Route path="/team" element={<TeamSection />} />
          </Routes>
        </main>

        {/* Footer is always visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;