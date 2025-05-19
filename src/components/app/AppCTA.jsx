
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AppCTA = () => {
  return (
    <section id="cta-final" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-400 p-8 md:p-12 lg:p-16 text-center shadow-2xl"
        >
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white/10 rounded-full blur-3xl opacity-50 -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à simplifier votre quotidien avec AlloMoove ?
            </h2>
            <p className="text-lg md:text-xl text-amber-50 mb-8 md:mb-10 max-w-2xl mx-auto">
              Téléchargez AlloMoove dès aujourd'hui et découvrez comment nous pouvons vous faire gagner du temps et de l'énergie. C'est gratuit, intuitif et puissant !
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-50 text-lg px-10 py-3 shadow-md">
                <Download className="mr-2 h-5 w-5" /> Télécharger l'Application
              </Button>
            </motion.div>
            <p className="mt-6 text-sm text-amber-100">
              Disponible sur iOS & Android. Commencez gratuitement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppCTA;
