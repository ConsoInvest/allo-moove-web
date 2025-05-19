
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="hero-glow"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-950 border border-indigo-800 rounded-full text-sm font-medium text-indigo-300">
              Introducing Nexus Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="block">Transform your workflow with</span>
            <span className="gradient-text">intelligent automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 mb-8 md:mb-10"
          >
            Streamline your business processes, boost productivity, and unlock new insights with our powerful SaaS platform. Join thousands of teams already working smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-base">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="group text-base">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 md:mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <div className="relative z-0 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <img  className="w-full max-w-4xl" alt="Dashboard interface" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
          >
            {['Acme Inc.', 'Globex', 'Soylent Corp', 'Initech'].map((company) => (
              <div key={company} className="text-gray-500 font-medium text-lg">
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
