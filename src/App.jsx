import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import AppNavbar from "@/components/app/AppNavbar";
import AppHero from "@/components/app/AppHero";
import AppFeatures from "@/components/app/AppFeatures";
import AppHowItWorks from "@/components/app/AppHowItWorks";
import AppScreenshots from "@/components/app/AppScreenshots";
import AppTestimonials from "@/components/app/AppTestimonials";
import AppPricingPlans from "@/components/app/AppPricingPlans";
import AppFAQ from "@/components/app/AppFAQ";
import AppCTA from "@/components/app/AppCTA";
import AppFooter from "@/components/app/AppFooter";
import PrivacyPage from "./pages/Privacy";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <AppNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <AppFooter />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
