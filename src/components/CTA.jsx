
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl gradient-bg p-8 md:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
              Join thousands of teams already using Nexus to streamline their processes, boost productivity, and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-200 text-base">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="group text-base border-white/30 hover:bg-white/10">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
