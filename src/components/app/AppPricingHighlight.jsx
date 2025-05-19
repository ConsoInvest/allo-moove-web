
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AppPricingHighlight = () => {
  return (
    <section id="pricing-highlight" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-400 to-amber-500 p-8 md:p-12 rounded-2xl shadow-2xl text-center text-white"
        >
          <CheckCircle className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started with AppLaunch for Free!
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience all the core features of AppLaunch without any cost. Upgrade anytime for more power and advanced functionalities.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-50 text-lg px-8 py-3">
              Download for Free
            </Button>
          </motion.div>
          <p className="mt-6 text-sm opacity-80">No credit card required. Unlock premium features later.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPricingHighlight;
