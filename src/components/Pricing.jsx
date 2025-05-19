
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '5GB storage',
      'API access',
      'Email support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      '20GB storage',
      'API access',
      'Priority support',
      'Custom integrations',
      'Workflow automation'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      'Unlimited storage',
      'API access',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced automation',
      'SSO & advanced security',
      'Custom contract'
    ],
    cta: 'Contact Sales',
    popular: false
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

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-indigo-950/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-800"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 bg-indigo-900/50 text-indigo-300 text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border ${
                plan.popular ? 'border-indigo-600 gradient-border' : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="pricing-highlight">Most Popular</div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${isAnnual ? plan.price : Math.round(plan.price * 1.2)}</span>
                <span className="text-gray-400 ml-2">/month</span>
                {isAnnual && <p className="text-sm text-gray-400 mt-1">Billed annually</p>}
              </div>
              <Button 
                className={`w-full mb-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' 
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Need a custom plan? <a href="#" className="text-indigo-400 hover:underline">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
