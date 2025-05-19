
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Quels types de services puis-je demander via AlloMoove ?",
    answer: "Vous pouvez demander une grande variété de services : réservation de restaurants, hôtels, vols, VTC, recherche de prestataires (plombier, électricien), aide pour des démarches administratives, organisation d'événements, commandes de repas, et bien plus encore. N'hésitez pas à nous soumettre votre requête !"
  },
  {
    question: "Les assistants sont-ils vraiment disponibles 24h/24 ?",
    answer: "Oui, absolument. Nos équipes d'assistants humains se relaient pour assurer une disponibilité continue, 7 jours sur 7, y compris les week-ends et jours fériés. Vos demandes peuvent être traitées à n'importe quelle heure."
  },
  {
    question: "Comment fonctionne l'abonnement personnalisé et illimité ?",
    answer: "Nos plans Standard et Premium vous offrent un nombre de demandes plus élevé ou illimité. Vous pouvez ainsi utiliser AlloMoove autant que vous le souhaitez pour toutes vos requêtes, sans compter. Le service devient un véritable prolongement de vous-même."
  },
  {
    question: "Comment garantissez-vous la qualité des assistants ?",
    answer: "Nos assistants sont rigoureusement sélectionnés et formés pour comprendre vos besoins et y répondre de manière efficace et professionnelle. Nous mettons un point d'honneur à la qualité du service et à la satisfaction de nos utilisateurs."
  },
  {
    question: "Mes informations personnelles sont-elles en sécurité ?",
    answer: "La sécurité et la confidentialité de vos données sont notre priorité absolue. Toutes les informations échangées sont cryptées et traitées dans le respect des normes de protection des données (RGPD). Vos demandes restent confidentielles."
  }
];

const AppFAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Vous avez des questions ? Nous avons les réponses. Si vous ne trouvez pas ce que vous cherchez, contactez-nous.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default AppFAQ;
