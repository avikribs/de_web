import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Free 30-minute strategy consultation",
    "Custom architecture proposal within 48 hours",
    "ROI projection for your specific use case",
    "No obligation assessment of your current infrastructure"
  ];

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free consultation with our data architects",
      action: "Book Now",
      color: "from-blue-500 to-blue-600"
    },
    // {
    //   icon: MessageSquare,
    //   title: "Start a Conversation",
    //   description: "Get immediate answers to your technical questions",
    //   action: "Chat Now",
    //   color: "from-green-500 to-green-600"
    // },
    {
      icon: Phone,
      title: "Call Direct",
      description: "Speak with our technical team right away",
      action: "+1 (555) 123-4567",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready to Transform
            <span className="block gradient-text">Your Data?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can accelerate your data transformation journey. 
            Get started with a free consultation and custom proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-dark rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Industry</option>
                      <option value="roofing">Roofing & Construction</option>
                      <option value="pharmaceutical">Pharmaceutical</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="shipping">Shipping & Logistics</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Project Type</option>
                    <option value="data-warehouse">Data Warehouse & Analytics</option>
                    <option value="real-time">Real-time Data Processing</option>
                    <option value="ml-platform">ML/AI Platform</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="compliance">Compliance & Governance</option>
                    <option value="consultation">Strategic Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your data challenges, current infrastructure, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group flex items-center justify-center"
                >
                  Send the mail
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="glass-dark rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mr-4`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                        <div className="text-accent-400 font-medium text-sm group-hover:text-accent-300 transition-colors">
                          {method.action}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Info */}
            <div className="glass-dark rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-6">Global Presence</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">North America</div>
                    <div className="text-gray-300 text-sm">New York, San Francisco, Toronto</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Europe</div>
                    <div className="text-gray-300 text-sm">London, Amsterdam, Berlin</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Available 24/7</div>
                    <div className="text-gray-300 text-sm">Follow-the-sun support model</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Element */}
            {/* <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Limited Availability</h4>
              <p className="text-accent-100 text-sm mb-4">
                We only take on 3 new enterprise clients per quarter to ensure exceptional service quality.
              </p>
              <div className="text-2xl font-bold text-white">2 spots remaining for Q2 2025</div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;