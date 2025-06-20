import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Workflow, Shield, Zap, GitBranch, Database, Cpu, Layers, Snowflake } from 'lucide-react';

const TechnologyStack = () => {
  const platforms = [
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud infrastructure with advanced analytics capabilities",
      icon: Cloud,
      features: ["Azure Synapse Analytics", "Data Factory", "Machine Learning", "Cognitive Services"],
      color: "from-blue-600 to-blue-800",
      logo: "/static_files/azure.png"
    },
    {
      name: "Amazon Web Services",
      description: "Scalable cloud computing with comprehensive data services ecosystem",
      icon: Server,
      features: ["Redshift", "EMR", "SageMaker", "Glue", "QuickSight"],
      color: "from-orange-500 to-orange-700",
      logo: "/static_files/aws.png"
    },
    {
      name: "Palantir Foundry",
      description: "Operational data platform for large-scale data transformation and analysis",
      icon: Workflow,
      features: ["Data Integration", "Modeling Layer", "Applications", "Pipeline Builder"],
      color: "from-gray-600 to-gray-800",
      logo: "/static_files/palantir.png"
    },
    {
      name: "Google Cloud",
      description: "High-performance infrastructure for data analytics and machine learning",
      icon: Cloud,
      features: ["BigQuery", "Dataflow", "AI Platform", "Looker"],
      color: "from-red-500 to-yellow-500",
      logo: "/static_files/google_cloud.png"
    },
    {
      name: "Snowflake",
      description: "Cloud data platform that enables data storage, processing, and analytics",
      icon: Snowflake,
      features: ["Data Warehousing", "Data Sharing", "Snowpark", "Data Marketplace"],
      color: "from-cyan-500 to-blue-500",
      logo: "/static_files/snowflake.png"
    }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliance with end-to-end encryption and access controls"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Stream processing capabilities handling millions of events per second"
    },
    {
      icon: GitBranch,
      title: "DataOps & MLOps",
      description: "Automated pipelines with CI/CD, version control, and monitoring"
    }
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
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
            Cutting-Edge
            <span className="block gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the most advanced cloud platforms and data technologies to build 
            scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
              className="group relative lg:last:col-start-2"
            >
              <div className="glass-dark rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 border border-white/10">
                {/* Platform Logo */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mr-4 p-2 ${platform.name === 'Palantir Foundry' || platform.name === 'Google Cloud' ? 'bg-white' : `bg-gradient-to-r ${platform.color}`}`}>
                    <img src={platform.logo} alt={`${platform.name} logo`} className="w-full h-full object-contain"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    <platform.icon className="w-5 h-5 text-gray-400 mt-1" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{platform.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-accent-400 uppercase tracking-wider">Key Services</h4>
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3"></div>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-dark rounded-3xl p-12 mb-20 border border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Modern Data Architecture</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our cloud-native architecture ensures scalability, reliability, and performance at enterprise scale
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Data Ingestion</h4>
              <p className="text-gray-400 text-sm">Real-time & batch processing</p>
            </div>

            <div className="hidden lg:block">
              <ArrowRight className="w-8 h-8 text-gray-500" />
            </div>

            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Processing & Analytics</h4>
              <p className="text-gray-400 text-sm">ML/AI powered insights</p>
            </div>

            <div className="hidden lg:block">
              <ArrowRight className="w-8 h-8 text-gray-500" />
            </div>

            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Secure Delivery</h4>
              <p className="text-gray-400 text-sm">Enterprise-grade security</p>
            </div>
          </div>
        </motion.div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
              <p className="text-gray-300 leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default TechnologyStack;