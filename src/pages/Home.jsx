import React from 'react';

// ✅ Assure-toi que ces chemins sont corrects selon ton projet
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

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
