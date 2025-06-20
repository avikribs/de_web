import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Rocket, 
  Brain, 
  Target,
  Clock,
  Star
} from 'lucide-react';

const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "Deploy production-ready solutions 3x faster than traditional agencies",
      stats: "Average 6-week delivery vs 18-week industry standard",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI-Native Approach",
      description: "Every solution built with machine learning and AI capabilities from day one",
      stats: "100% of projects include predictive analytics",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Cloud Expertise",
      description: "Certified specialists across all major cloud platforms and regions",
      stats: "50+ cloud certifications across the team",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security First",
      description: "Built-in compliance for GDPR, HIPAA, SOX, and other regulatory requirements",
      stats: "Zero security incidents in 500+ projects",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Target,
      title: "ROI-Focused Results",
      description: "Every project designed with clear KPIs and measurable business outcomes",
      stats: "Average 300% ROI within first year",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Dedicated Team Model",
      description: "Senior-level experts assigned to your project, not junior developers",
      stats: "8+ years average team experience",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const differentiators = [
    {
      title: "vs Traditional Consultancies",
      points: [
        "No lengthy discovery phases - we start building immediately",
        "Fixed-price projects with guaranteed delivery dates",
        "Direct access to senior engineers, not account managers"
      ]
    },
    {
      title: "vs In-House Teams",
      points: [
        "Immediate access to latest tools and methodologies",
        "No hiring, training, or retention challenges",
        "Scalable expertise across multiple cloud platforms"
      ]
    },
    {
      title: "vs Other Data Agencies",
      points: [
        "Industry-specific solutions, not generic templates",
        "End-to-end ownership from architecture to deployment",
        "Ongoing optimization and performance monitoring"
      ]
    }
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
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
            Why We're
            <span className="block gradient-text">Different</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver projects - we transform businesses. Here's what sets us apart 
            from every other data engineering firm.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-dark rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 border border-white/10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center mb-6`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{advantage.description}</p>
                
                {/* Stats */}
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-sm text-accent-400 font-semibold">{advantage.stats}</p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-dark rounded-3xl p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Head-to-Head Comparison</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how we stack up against traditional alternatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-6 border-b border-white/20 pb-3">
                  {diff.title}
                </h4>
                <div className="space-y-4">
                  {diff.points.map((point, idx) => (
                    <div key={idx} className="flex items-start text-left">
                      <Star className="w-4 h-4 text-accent-400 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-400 mb-2">98%</div>
            <div className="text-gray-400">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-400 mb-2">6 Weeks</div>
            <div className="text-gray-400">Avg. Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-400 mb-2">300%</div>
            <div className="text-gray-400">ROI Average</div>
          </div>
          {/* <div className="text-center">
            <div className="text-4xl font-bold text-accent-400 mb-2">0</div>
            <div className="text-gray-400">Security Incidents</div>
          </div> */}
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Experience the Difference
            </button>
            <button className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Compare Our Approach
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;