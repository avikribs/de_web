import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const navigate = useNavigate();

  const caseStudies = [
    {
      title: "Leading US Roofing Company",
      industry: "Construction",
      challenge: "Manual resource allocation leading to 30% inefficiency in workforce deployment, limited inventory visibility causing 25% stockout situations, and no predictive maintenance system resulting in 40% emergency service calls",
      solution: "Implemented comprehensive IoT-based data engineering solution with Azure Synapse Analytics, Azure ML for predictive maintenance, and real-time dashboards",
      architecture: "IoT Sensors → Azure IoT Hub → Event Hub → Synapse Analytics → ML Models → Power BI",
      results: [
        { icon: DollarSign, value: "30%", label: "Cost Reduction" },
        { icon: TrendingUp, value: "45%", label: "Efficiency Gain" },
        { icon: Clock, value: "60%", label: "Reduced Emergency Calls" }
      ],
      image: "https://images.unsplash.com/photo-1705579602256-1525c9d17144",
      testimonial: "This solution transformed our operations completely. We now predict and prevent issues before they impact our bottom line.",
      client: "VP of Operations",
      hasDetailedCase: true,
      detailedLink: "/case-study/roofing"
    },
    {
      title: "Global Pharmaceutical Leader",
      industry: "Healthcare",
      challenge: "Drug trials taking 18+ months longer than competitors due to data silos",
      solution: "Built unified data platform using Palantir Foundry for clinical trial optimization",
      architecture: "Multi-source Integration → Foundry → ML Models → Regulatory Dashboards",
      results: [
        { icon: Clock, value: "40%", label: "Faster Trials" },
        { icon: TrendingUp, value: "99.9%", label: "Compliance Rate" },
        { icon: DollarSign, value: "$50M", label: "Cost Reduction" }
      ],
      image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a",
      testimonial: "The platform gave us unprecedented visibility into our clinical operations. We're now the fastest to market in our category.",
      client: "Chief Data Officer"
    },
    {
      title: "International Shipping Conglomerate",
      industry: "Logistics",
      challenge: "Supply chain disruptions causing $2M monthly losses and customer churn",
      solution: "Deployed AWS-based real-time tracking and demand forecasting system",
      architecture: "GPS/RFID → Kinesis → Lambda → SageMaker → QuickSight → Customer Portal",
      results: [
        { icon: DollarSign, value: "$24M", label: "Annual Savings" },
        { icon: TrendingUp, value: "98%", label: "On-time Delivery" },
        { icon: Users, value: "25%", label: "Customer Growth" }
      ],
      image: "https://images.pexels.com/photos/7857526/pexels-photo-7857526.jpeg",
      testimonial: "Our customers now have real-time visibility they've never had before. It's been a game-changer for retention.",
      client: "Head of Digital Transformation"
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Proven
            <span className="block gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how we've transformed businesses across industries 
            with our data engineering expertise.
          </p>
        </motion.div>

        {/* Case Study Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
                    {caseStudies[activeCase].industry}
                  </div>
                  <h3 className="text-3xl font-bold text-dark-900 mb-4">
                    {caseStudies[activeCase].title}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                  <p className="text-red-700">{caseStudies[activeCase].challenge}</p>
                </div>

                {/* Solution */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
                  <p className="text-blue-700 mb-3">{caseStudies[activeCase].solution}</p>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-mono text-blue-800">{caseStudies[activeCase].architecture}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {caseStudies[activeCase].results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                    >
                      <result.icon className="w-8 h-8 text-accent-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-dark-900">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent-400">
                  <p className="text-gray-700 italic mb-3">"{caseStudies[activeCase].testimonial}"</p>
                  <p className="text-sm font-semibold text-gray-800">— {caseStudies[activeCase].client}</p>
                </div>

                {/* View Full Case Study Button */}
                {caseStudies[activeCase].hasDetailedCase && (
                  <motion.button
                    onClick={() => navigate(caseStudies[activeCase].detailedLink)}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Case Study
                  </motion.button>
                )}
              </div>

              {/* Image */}
              <div className="relative">
                <motion.img
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].title}
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevCase}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeCase ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCase}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <button className="btn-primary">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;