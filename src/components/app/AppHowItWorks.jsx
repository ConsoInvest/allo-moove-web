
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud, Edit3, Send } from 'lucide-react';

const steps = [
  {
    icon: <DownloadCloud className="h-10 w-10 text-primary" />,
    title: 'Téléchargez l\'App',
    description: 'Disponible sur l\'App Store et Google Play. L\'installation est rapide et simple.'
  },
  {
    icon: <Edit3 className="h-10 w-10 text-primary" />,
    title: 'Décrivez Votre Demande',
    description: 'Envoyez un message à nos assistants pour expliquer clairement votre besoin ou votre requête.'
  },
  {
    icon: <Send className="h-10 w-10 text-primary" />,
    title: 'Recevez de l\'Aide',
    description: 'Un assistant humain prend en charge votre demande et vous accompagne jusqu\'à sa résolution.'
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
};

const AppHowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            C'est parti en <span className="gradient-text">3 étapes faciles</span>
          </h2>
          <p className="text-lg text-gray-600">
            Utiliser AlloMoove est un jeu d'enfant. Suivez ces étapes pour commencer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="step-card-hover bg-card p-6 md:p-8 rounded-xl border border-border text-center shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppHowItWorks;
