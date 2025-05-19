
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart3, 
  Lock, 
  RefreshCw, 
  Layers, 
  Users 
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    title: 'Lightning Fast',
    description: 'Experience unparalleled speed with our optimized infrastructure, ensuring your team never waits.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-400" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with comprehensive data visualization and reporting tools.'
  },
  {
    icon: <Lock className="h-6 w-6 text-indigo-400" />,
    title: 'Enterprise Security',
    description: 'Rest easy with bank-level encryption, regular security audits, and compliance certifications.'
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-indigo-400" />,
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools through our extensive API and pre-built integrations.'
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-400" />,
    title: 'Customizable Workflows',
    description: 'Tailor processes to your specific needs with our flexible and adaptable workflow engine.'
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-400" />,
    title: 'Team Collaboration',
    description: 'Foster teamwork with real-time collaboration features, comments, and shared workspaces.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-background to-indigo-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful features for <span className="gradient-text">modern teams</span>
          </h2>
          <p className="text-lg text-gray-400">
            Our platform combines powerful functionality with intuitive design to help your team work more efficiently.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="feature-card-hover bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
            >
              <div className="p-3 mb-5 w-fit rounded-lg bg-indigo-950/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 md:mt-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <img  className="w-full" alt="Feature showcase" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
