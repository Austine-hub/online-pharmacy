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
import Prescriptions from "./components/Prescriptions.jsx";
import PrescriptionGuidelines from "./components/PrescriptionGuidelines.jsx";
import StoreLocatorPage from "./components/StoreLocatorPage.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header is always visible on all pages */}
        <Header />

        {/* This content will be displayed on every page, as requested */}
        <main className="flex-grow">
          {/* This area is for pages that only show on specific URLs */}
          <Routes>
            {/* The main route for your homepage, now matching both '/' and '/online-pharmacy/' */}
            <Route
              path="/"
              element={
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
              }
            />
            {/* Add a specific route for the '/online-pharmacy' path */}
            <Route path="/online-pharmacy" element={<HomePageContent />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/services" element={<PrescriptionGuidelines />} />
            <Route path="/stores" element={<StoreLocatorPage />} />
          </Routes>
        </main>

        {/* Footer is always visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

// A new component to group all the home page components
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

export default App;