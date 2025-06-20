import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart3, Database, Cloud } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800 pt-20">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
          alt="Data Analytics Dashboard"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-primary-900/80 to-dark-800/90"></div>
      </div> */}

      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass text-white font-medium text-sm"
          >
            <Database className="w-4 h-4 mr-2 text-accent-400" />
            Trusted by Fortune 500 Companies
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight"
          >
            Transform Your
            <span className="block gradient-text">Data Into</span>
            <span className="block text-accent-400">Competitive Advantage</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We architect enterprise-grade data solutions using cutting-edge cloud platforms. 
            From Azure to AWS to Palantir Foundry, we deliver measurable ROI through intelligent data engineering.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-center py-8"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400">$50M+</div>
              <div className="text-gray-400">Value Generated</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button className="btn-primary group flex items-center">
              Start Your Data Transformation
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group flex items-center">
              <BarChart3 className="mr-2 w-5 h-5" />
              View Case Studies
            </button>
          </motion.div> */}

          {/* Technology Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center items-center gap-8 pt-12 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <img src="/static_files/azure.png" alt="Azure" className="w-6 h-6 object-contain"/>
              <span className="text-sm font-medium">Azure</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/static_files/aws.png" alt="AWS" className="w-6 h-6 object-contain"/>
              <span className="text-sm font-medium">AWS</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/static_files/palantir.png" alt="Palantir" className="w-6 h-6 object-contain"/>
              <span className="text-sm font-medium">Palantir</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/static_files/google_cloud.png" alt="Google Cloud" className="w-6 h-6 object-contain"/>
              <span className="text-sm font-medium">Google Cloud</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/static_files/snowflake.png" alt="Snowflake" className="w-6 h-6 object-contain"/>
              <span className="text-sm font-medium">Snowflake</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;