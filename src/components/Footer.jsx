
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Guides', 'API Reference', 'Community', 'Templates']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Contact', 'Media Kit']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security']
    }
  ];

  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text mb-4 inline-block">
              Nexus
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Streamline your business processes, boost productivity, and unlock new insights with our powerful SaaS platform.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
