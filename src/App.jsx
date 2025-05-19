
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import AppNavbar from '@/components/app/AppNavbar';
import AppHero from '@/components/app/AppHero';
import AppFeatures from '@/components/app/AppFeatures';
import AppHowItWorks from '@/components/app/AppHowItWorks';
import AppScreenshots from '@/components/app/AppScreenshots';
import AppTestimonials from '@/components/app/AppTestimonials';
import AppPricingPlans from '@/components/app/AppPricingPlans';
import AppFAQ from '@/components/app/AppFAQ';
import AppCTA from '@/components/app/AppCTA';
import AppFooter from '@/components/app/AppFooter';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppNavbar />
      <main className="flex-grow">
        <AppHero />
        <AppFeatures />
        <AppHowItWorks />
        <AppScreenshots />
        <AppTestimonials />
        <AppPricingPlans />
        <AppFAQ />
        <AppCTA />
      </main>
      <AppFooter />
      <Toaster />
    </div>
  );
}

export default App;
