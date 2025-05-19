
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  ConciergeBell, 
  Clock,
  Users,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const appFeatures = [
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: 'Messagerie Instantanée',
    description: 'Discutez facilement avec nos assistants via une interface de messagerie simple et intuitive.'
  },
  {
    icon: <ConciergeBell className="h-8 w-8 text-primary" />,
    title: 'Une Multitude de Services',
    description: 'Logement, repas, transport, réservations... Demandez ce que vous voulez, nous sommes là pour vous aider.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Disponible 24h/24 et 7j/7',
    description: 'Nos assistants sont disponibles à toute heure du jour et de la nuit pour répondre à vos besoins.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Assistants Humains Qualifiés',
    description: 'Interagissez avec de vraies personnes, formées pour vous offrir un service de qualité.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Service Personnalisé',
    description: 'Avec nos abonnements, bénéficiez d\'un suivi sur mesure et d\'une assistance illimitée.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Confidentialité Garantie',
    description: 'Vos informations et vos demandes sont traitées avec la plus grande discrétion et sécurité.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const AppFeatures = () => {
  return (
    <section id="fonctionnalites" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tout ce dont vous avez besoin, <span className="gradient-text">à portée de main</span>
          </h2>
          <p className="text-lg text-gray-600">
            AlloMoove est conçu pour vous simplifier la vie grâce à des fonctionnalités pensées pour vous.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {appFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
            >
              <div className="p-3 mb-4 w-fit rounded-lg bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;
