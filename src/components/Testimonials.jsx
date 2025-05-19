
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Nexus has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by over 40%.",
    author: "Sarah Johnson",
    position: "Product Manager at Acme Inc.",
    rating: 5
  },
  {
    content: "I've tried many productivity tools, but Nexus stands out with its seamless integrations and customizable workflows. It's become indispensable to our daily operations.",
    author: "Michael Chen",
    position: "CTO at TechForward",
    rating: 5
  },
  {
    content: "The analytics capabilities alone are worth the investment. We've gained insights that have directly impacted our bottom line. The customer support is also exceptional.",
    author: "Emily Rodriguez",
    position: "Marketing Director at Globex",
    rating: 5
  },
  {
    content: "Implementing Nexus was surprisingly easy, and the ROI has been remarkable. Our team onboarded quickly and we saw immediate improvements in our process efficiency.",
    author: "David Kim",
    position: "Operations Lead at Initech",
    rating: 5
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="gradient-text">industry leaders</span>
          </h2>
          <p className="text-lg text-gray-400">
            See what our customers have to say about their experience with our platform.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 relative"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-indigo-400 text-indigo-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img  className="w-full h-full object-cover" alt={`${testimonial.author} avatar`} src="https://images.unsplash.com/photo-1696960190591-60d693f4d50d" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
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
          <p className="text-xl text-gray-300 font-medium">
            Join over <span className="text-indigo-400">2,000+</span> companies already growing with Nexus
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {['Acme Inc.', 'Globex', 'Soylent Corp', 'Initech'].map((company) => (
              <div key={company} className="text-gray-500 font-medium text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
