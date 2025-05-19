
import React from 'react';
import { MessageSquare, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "AlloMoove",
      links: [
        { name: "Fonctionnalités", href: "#fonctionnalites" },
        { name: "Comment ça marche", href: "#comment-ca-marche" },
        { name: "Tarifs", href: "#tarifs" },
        { name: "FAQ", href: "#faq" },
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Politique de Confidentialité", href: "#" },
        { name: "Conditions d'Utilisation", href: "#" },
        { name: "Politique Cookies", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Nous Contacter", href: "mailto:contact@AlloMoove.com" },
        { name: "Centre d'Aide", href: "#" },
        { name: "Signaler un problème", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-100 pt-12 md:pt-16 pb-8 text-gray-500 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 md:mb-12">
          <div className="md:col-span-1 mb-6 md:mb-0">
            <a href="#" className="flex items-center text-2xl font-bold gradient-text mb-3">
              <MessageSquare className="h-7 w-7 mr-2 text-primary" />
              AlloMoove
            </a>
            <p className="text-sm leading-relaxed text-gray-600">
              Votre assistant personnel, disponible 24h/24 pour simplifier votre quotidien.
            </p>
          </div>

          {footerSections.map(section => (
            <div key={section.title}>
              <h3 className="text-md font-semibold text-gray-800 uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-primary transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-gray-600">
              &copy; {currentYear} AlloMoove. Tous droits réservés.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(social => (
                 <a key={social.name} href={social.href} aria-label={social.name} className="hover:text-primary transition-colors duration-200">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
