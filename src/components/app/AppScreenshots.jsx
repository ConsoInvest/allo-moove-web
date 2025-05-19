
import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  { id: 1, alt: "Capture d'écran de la messagerie AlloMoove", desc: "Interface de discussion simple et claire pour échanger avec votre assistant." },
  { id: 2, alt: "Capture d'écran de la liste des services AlloMoove", desc: "Visualisation des différentes catégories de services disponibles (logement, repas, transport, etc.)." },
  { id: 3, alt: "Capture d'écran du profil utilisateur AlloMoove", desc: "Gestion de votre profil et de vos préférences pour un service personnalisé." },
  { id: 4, alt: "Capture d'écran du suivi de demande AlloMoove", desc: "Suivi en temps réel de l'avancement de vos demandes auprès des assistants." }
];

const scrollVariants = {
  animate: {
    x: [0, - (screenshots.length * 200 - (typeof window !== 'undefined' && window.innerWidth > 768 ? 600 : 300))], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: screenshots.length * 7,
        ease: "linear",
      },
    },
  },
};


const AppScreenshots = () => {
  return (
    <section id="apercus" className="py-16 md:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Découvrez AlloMoove <span className="gradient-text">en images</span>
          </h2>
          <p className="text-lg text-gray-600">
            Jetez un œil à notre interface épurée et fonctionnelle. Conviviale et puissante.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="flex gap-4 md:gap-8 px-4"
        variants={scrollVariants}
        animate="animate"
      >
        {screenshots.map((screenshot) => (
          <motion.div
            key={screenshot.id}
            className="flex-shrink-0 w-[200px] h-[400px] md:w-[250px] md:h-[500px] rounded-3xl overflow-hidden border-4 border-gray-300 screenshot-glow bg-gray-100 group relative"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img  class="w-full h-full object-cover" alt={screenshot.alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {screenshot.desc}
            </div>
          </motion.div>
        ))}
         {screenshots.map((screenshot) => ( // Duplicate for seamless loop
          <motion.div
            key={`${screenshot.id}-clone`}
            className="flex-shrink-0 w-[200px] h-[400px] md:w-[250px] md:h-[500px] rounded-3xl overflow-hidden border-4 border-gray-300 screenshot-glow bg-gray-100 group relative"
          >
            <img  class="w-full h-full object-cover" alt={screenshot.alt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
             <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {screenshot.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppScreenshots;
