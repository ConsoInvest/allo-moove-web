
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const appTestimonials = [
  {
    quote: "AlloMoove a changé ma vie ! Plus besoin de passer des heures à chercher un plombier en urgence, ils s'occupent de tout. C'est incroyable.",
    author: "Sophie L.",
    title: "Maman débordée",
    rating: 5,
    avatarText: "Utilisatrice Sophie L."
  },
  {
    quote: "Je suis souvent en déplacement professionnel. Réserver un VTC ou trouver un bon restaurant à la dernière minute est devenu un jeu d'enfant grâce à AlloMoove. Service client au top !",
    author: "Marc D.",
    title: "Consultant en affaires",
    rating: 5,
    avatarText: "Utilisateur Marc D."
  },
  {
    quote: "En tant qu'étudiante, organiser ma recherche de logement était un cauchemar. AlloMoove m'a trouvé la perle rare en quelques jours. Je recommande à 100% !",
    author: "Amina K.",
    title: "Étudiante",
    rating: 5,
    avatarText: "Utilisatrice Amina K."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const AppTestimonials = () => {
  return (
    <section id="temoignages" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apprécié par <span className="gradient-text">des utilisateurs comme vous</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ne nous croyez pas sur parole. Voici ce que nos utilisateurs disent d'AlloMoove.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {appTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-xl flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary mb-4 opacity-70" />
              <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                  <img  class="w-full h-full object-cover" alt={`Avatar de ${testimonial.author}`} src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppTestimonials;
