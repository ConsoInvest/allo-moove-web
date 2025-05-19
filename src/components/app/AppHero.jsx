import React from "react";
import { motion } from "framer-motion";

const AppHero = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-background via-muted to-background"
    >
      {/* FOND GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
              <span className="block">Votre assistant personnel,</span>
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                disponible 24h/24
              </span>
            </motion.h1>

            <motion.p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-6">
              AlloMoove vous connecte à des assistants humains prêts à vous
              aider au quotidien : logement, repas, transport, et plus encore.
              Téléchargez l'application
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-row sm:flex-row justify-center md:justify-start gap-4"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/appstore.png"
                  alt="Télécharger sur l'App Store"
                  className="h-14 w-auto"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/playstore.png"
                  alt="Disponible sur Google Play"
                  className="h-14 w-auto"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-auto max-h-[calc(100vh-120px)] flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10 transform-gpu"></div>
            <img
              className="max-h-[500px] sm:max-h-[600px] md:max-h-[700px] w-full object-contain rounded-[2rem] shadow-2xl border-[3px] border-white dark:border-gray-700"
              alt="Maquette de l'application AlloMoove"
              src="/images/phone.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
