import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Pill, Factory, Ship, ShoppingCart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IndustrySolutions = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Building2,
      title: "Roofing & Construction",
      description: "Optimize project timelines, material costs, and workforce allocation through predictive analytics",
      image: "https://images.pexels.com/photos/9875680/pexels-photo-9875680.jpeg",
      benefits: ["30% cost reduction", "25% faster delivery", "Real-time project tracking"],
      color: "from-orange-500 to-red-600",
      link: "/case-study/roofing"
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      description: "Accelerate drug discovery and ensure regulatory compliance with advanced data processing",
      image: "https://images.pexels.com/photos/7723198/pexels-photo-7723198.jpeg",
      benefits: ["40% faster trials", "99.9% compliance", "Advanced R&D insights"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Implement predictive maintenance and quality control through IoT data integration",
      image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a",
      benefits: ["50% less downtime", "35% quality improvement", "Smart automation"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Ship,
      title: "Shipping & Logistics",
      description: "Optimize supply chain efficiency with real-time tracking and demand forecasting",
      image: "https://images.pexels.com/photos/32508279/pexels-photo-32508279.jpeg",
      benefits: ["20% cost savings", "95% on-time delivery", "Route optimization"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Personalize customer experiences and optimize inventory with behavioral analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      benefits: ["60% higher conversions", "Personalized experiences", "Inventory optimization"],
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-900 mb-6">
            Industry-Specific
            <span className="block gradient-text">Data Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand that every industry has unique challenges. Our tailored data engineering solutions 
            deliver measurable results across diverse sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-premium hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-80`}></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                
                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={() => industry.link ? navigate(industry.link) : null}
                  className="group/btn flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Discuss Your Industry Needs
            </button>
            <button className="btn-secondary">
              View All Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;