import { motion } from "framer-motion";
import React from "react";

const PrivacyPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 py-12 text-gray-800"
    >
      <h1 className="text-3xl font-bold mb-4 mt-20">
        POLITIQUE DE CONFIDENTIALITÉ
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Application AlloMoove — Mise à jour le 12 mai 2025
      </p>

      <section className="space-y-6">
        <Article
          title="1. Introduction"
          content="Bienvenue sur AlloMoove. La protection de vos données personnelles est au cœur de nos préoccupations. Cette politique de confidentialité a pour but de vous informer de manière transparente sur la manière dont nous collectons, utilisons, partageons et protégeons vos informations."
        />

        <Article
          title="2. Informations que nous collectons"
          listItems={[
            "Données d'identification : nom, prénom, numéro de téléphone, adresse email",
            "Informations de localisation : pour vous proposer des services adaptés",
            "Données de navigation : interactions avec le chatbot, historique de recherches",
            "Données de paiement : informations nécessaires pour traiter les paiements",
            "Autres : préférences de voyage, notes et commentaires",
          ]}
        />

        <Article
          title="3. Utilisation de vos informations"
          listItems={[
            "Vous fournir nos services",
            "Gérer vos réservations et transactions",
            "Améliorer l'expérience utilisateur",
            "Assurer l'assistance client",
            "Respecter nos obligations légales",
          ]}
        />

        <Article
          title="4. Partage de vos données"
          listItems={[
            "Partenaires de services : hôtels, agences, etc.",
            "Fournisseurs techniques : hébergement, messagerie",
            "Autorités compétentes : si la loi l’exige",
          ]}
          content="Nous ne vendons pas vos données à des tiers."
        />

        <Article
          title="5. Sécurité de vos données"
          listItems={[
            "Cryptage des données sensibles",
            "Accès restreint au personnel autorisé",
            "Sauvegardes régulières",
          ]}
        />

        <Article
          title="6. Conservation de vos données"
          content="Vos données sont conservées aussi longtemps que nécessaire. Vous pouvez demander leur suppression à tout moment."
        />

        <Article
          title="7. Vos droits"
          listItems={[
            "Droit d’accès",
            "Droit de rectification",
            "Droit d’opposition ou de suppression",
            "Droit de portabilité",
            "Droit de limitation du traitement",
          ]}
          content={
            <>
              Pour exercer vos droits :{" "}
              <a
                href="mailto:contact@allomoove.com"
                className="text-blue-600 underline"
              >
                contact@allomoove.com
              </a>
            </>
          }
        />

        <Article
          title="8. Cookies et technologies similaires"
          listItems={[
            "Améliorer l’expérience utilisateur",
            "Analyser l’usage de l’application",
            "Personnaliser le contenu",
          ]}
          content="Vous pouvez gérer vos préférences de cookies dans les paramètres de l’application."
        />

        <Article
          title="9. Modifications de la politique"
          content="Nous nous réservons le droit de modifier cette politique. Toute modification sera notifiée via l’application et mise à jour sur cette page."
        />

        <Article
          title="10. Contact"
          content={
            <>
              Pour toute question :{" "}
              <a
                href="mailto:contact@allomoove.com"
                className="text-blue-600 underline"
              >
                contact@allomoove.com
              </a>
              <br />
              📍 AlloMoove SARL, Douala, Cameroun
            </>
          }
        />
      </section>

      <footer className="mt-10 text-center text-sm text-gray-500">
        AlloMoove — "Votre assistant de mobilité intelligent"
      </footer>
    </motion.main>
  );
};

// ✅ Version JS sans type
function Article({ title, content, listItems }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {content && <p className="mb-2">{content}</p>}
      {listItems && (
        <ul className="list-disc list-inside space-y-1">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default PrivacyPage;
