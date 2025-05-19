
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Zap, Star as StarIcon, Smile } from 'lucide-react'; // Renamed Star to StarIcon to avoid conflict

const pricingPlans = [
  {
    name: 'Gratuit',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Pour découvrir le service et les demandes simples.',
    features: [
      'Jusqu\'à 3 demandes / mois',
      'Accès aux services de base',
      'Support standard par email',
    ],
    cta: 'Commencer Gratuitement',
    icon: <Smile className="h-6 w-6 mb-4 text-primary" />,
    popular: false,
  },
  {
    name: 'Standard',
    priceMonthly: 3000,
    priceAnnual: 50000,
    description: 'Idéal pour une utilisation régulière et des besoins variés.',
    features: [
      'Jusqu\'à 20 demandes / mois',
      'Accès à tous les services',
      'Support prioritaire par chat',
      'Historique des demandes',
    ],
    cta: 'Choisir Standard',
    icon: <Zap className="h-6 w-6 mb-4 text-primary" />,
    popular: true,
  },
  {
    name: 'Premium',
    priceMonthly: 15000,
    priceAnnual: 95000,
    description: 'Pour un service illimité et une assistance personnalisée.',
    features: [
      'Demandes illimitées',
      'Accès à tous les services',
      'Support dédié 24/7 par téléphone',
      'Assistant personnel attitré (option)',
      'Offres exclusives partenaires',
    ],
    cta: 'Passer Premium',
    icon: <StarIcon className="h-6 w-6 mb-4 text-primary" />,
    popular: false,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const AppPricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="tarifs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des offres <span className="gradient-text">adaptées à vos besoins</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choisissez le plan qui vous convient le mieux. Simple, transparent et sans engagement.
          </p>
          <div className="inline-flex items-center justify-center bg-gray-100 p-1 rounded-lg">
            <Button 
              variant={!isAnnual ? 'primary': 'ghost'}
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium ${!isAnnual ? 'bg-primary text-primary-foreground shadow-md' : 'text-gray-600'}`}
            >
              Mensuel
            </Button>
            <Button 
              variant={isAnnual ? 'primary': 'ghost'}
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium ${isAnnual ? 'bg-primary text-primary-foreground shadow-md' : 'text-gray-600'}`}
            >
              Annuel (Économisez 20%)
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`flex flex-col bg-card p-6 md:p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-primary/30 shadow-2xl' : 'border-border shadow-lg'} transition-all duration-300 hover:shadow-primary/20`}
            >
              <div className="flex-grow">
                {plan.icon}
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-gray-500 mb-6 text-sm h-10">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}FCFA
                  </span>
                  <span className="text-gray-500 ml-1">/{isAnnual ? 'an' : 'mois'}</span>
                  {isAnnual && plan.priceMonthly > 0 && (
                     <p className="text-xs text-gray-400">Soit {plan.priceMonthly}FCFA/mois facturé annuellement</p>
                  )}
                   {!isAnnual && plan.priceAnnual > 0 && plan.name !== 'Gratuit' && (
                     <p className="text-xs text-primary font-semibold">Économisez { (plan.priceMonthly * 12) - (plan.priceAnnual * 12) }FCFA/an avec l'offre annuelle!</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                size="lg"
                className={`w-full mt-auto ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppPricingPlans;
