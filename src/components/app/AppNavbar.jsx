
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageSquare } from 'lucide-react';

const AppNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
    { label: 'Aperçus', href: '#apercus' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a 
            href="#" 
            className="flex items-center text-2xl font-bold gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquare className="h-7 w-7 mr-2 text-primary" />
            AlloMoove
          </motion.a>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Télécharger
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-foreground hover:text-primary">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground">
                  Télécharger
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppNavbar;
