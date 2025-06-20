import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Clock, DollarSign, Users, Building2, Wrench, BarChart3, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Data (can be moved to a separate file for cleanliness) ---

const navLinks = [
  { name: 'Challenges', href: '#challenges' },
  { name: 'Solution', href: '#solution' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Impact', href: '#impact' },
];

const impactMetrics = [
  { icon: DollarSign, value: "30%", label: "Cost Reduction" },
  { icon: TrendingUp, value: "45%", label: "Efficiency Gain" },
  { icon: Clock, value: "60%", label: "Reduced Emergency Calls" },
  { icon: Users, value: "25%", label: "Revenue Growth" }
];

const challenges = [
  "Manual resource allocation leading to 30% inefficiency in workforce deployment",
  "Limited visibility into inventory levels causing 25% stockout situations",
  "No predictive maintenance system resulting in 40% emergency service calls",
  "Disconnected customer data preventing personalized service offerings",
  "Lack of real-time analytics for decision making"
];

const dataCollectionFeatures = [
  "IoT sensors for roof condition monitoring",
  "Mobile app for field service data collection",
  "ERP system integration",
  "Weather data API integration",
  "Customer feedback system"
];

const cloudInfrastructure = [
  "Azure Synapse Analytics for data warehousing",
  "Azure Data Factory for ETL pipelines",
  "Azure ML for predictive maintenance",
  "Power BI for real-time dashboards",
  "Azure IoT Hub for device management"
];

const comparisonData = [
  { feature: "Implementation Time", ourSolution: "3 months", traditional: "6-8 months", competitor: "4-5 months" },
  { feature: "Infrastructure Cost", ourSolution: "40% lower", traditional: "Base cost", competitor: "20% lower" },
  { feature: "Scalability", ourSolution: "Auto-scaling", traditional: "Manual scaling", competitor: "Limited scaling" },
  { feature: "Maintenance Cost", ourSolution: "30% lower", traditional: "Base cost", competitor: "15% lower" },
  { feature: "Data Processing Speed", ourSolution: "Real-time", traditional: "Batch processing", competitor: "Near real-time" }
];

const keyComponents = [
    { title: "Data Ingestion Layer", description: "Azure IoT Hub, API Gateway, and Data Factory for seamless data collection" },
    { title: "Processing Layer", description: "Azure Synapse Analytics for data transformation and analytics" },
    { title: "AI/ML Layer", description: "Azure Machine Learning for predictive maintenance and resource optimization" },
    { title: "Visualization Layer", description: "Power BI for real-time dashboards and reporting" }
];


// --- Sub-components for better structure ---

const CaseStudyNav = ({ isMobileMenuOpen, onToggleMenu, onLinkClick }) => {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-dark-900 text-white py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => navigate('/')} className="flex items-center text-white hover:text-primary-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Back to Main</span>
            <span className="sm:hidden">Main</span>
          </button>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); onLinkClick(link.href); }} className="hover:text-primary-300 transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={onToggleMenu} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/10 py-6 shadow-lg mt-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); onLinkClick(link.href); }} className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-4 px-4 rounded-lg hover:bg-white/5">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const CaseStudyHero = () => (
    <section className="bg-gradient-to-br from-dark-900 via-primary-700 to-accent-600 text-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-semibold mb-6">
          <Building2 className="w-4 h-4 mr-2" />
          Construction & Roofing
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Roofing Industry
          <span className="block">Transformation</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          How we helped a leading US roofing company achieve operational excellence through data engineering
        </p>
      </motion.div>
    </div>
  </section>
);

const CaseStudySection = ({ id, title, gradientTitle, children }) => (
    <section id={id} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-900 mb-6">
                    {title}
                    <span className="block gradient-text">{gradientTitle}</span>
                </h2>
            </motion.div>
            {children}
        </div>
    </section>
);

const ArchitectureDiagramPlaceholder = () => (
    <div className="bg-gray-100 p-8 rounded-xl text-center border border-gray-200">
        <h4 className="text-lg font-bold text-gray-800 mb-4">Solution Architecture Diagram</h4>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            For optimal performance, this dynamic diagram has been replaced with this placeholder. A static SVG image of the architecture should be used here.
        </p>
        <div className="text-left font-mono text-xs text-blue-900 bg-blue-50 p-4 rounded-lg inline-block">
            <p><strong>[IoT Sensors]</strong> --&gt; Azure IoT Hub</p>
            <p><strong>[Mobile App]</strong> --&gt; Azure API Gateway</p>
            <p><strong>[ERP System]</strong> --&gt; Azure Data Factory</p>
            <p><strong>[Azure IoT Hub]</strong> --&gt; Azure Event Hub</p>
            <p><strong>[Azure API Gateway]</strong> --&gt; Azure Event Hub</p>
            <p><strong>[Azure Event Hub]</strong> --&gt; Azure Synapse Analytics</p>
            <p><strong>[Azure Data Factory]</strong> --&gt; Azure Synapse Analytics</p>
            <p><strong>[Azure Synapse Analytics]</strong> --&gt; Azure ML Service &amp; Power BI</p>
        </div>
    </div>
);


const RoofingCaseStudy = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
        // Adjust for sticky nav height
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyNav 
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onLinkClick={scrollToSection}
      />

      <CaseStudyHero />

      <CaseStudySection id="challenges" title="Business" gradientTitle="Challenges">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-xl">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Problem Statement</h3>
            <p className="text-red-700 mb-6 text-lg">
              A leading US roofing company with operations across 25 states faced significant challenges in:
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start text-red-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
      </CaseStudySection>

      <div className='bg-gradient-to-b from-gray-50 to-white'>
        <CaseStudySection id="solution" title="Our" gradientTitle="Solution">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-3xl shadow-premium p-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">Technical Implementation</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-xl font-semibold text-primary-700 mb-4 flex items-center"><Wrench className="w-5 h-5 mr-2" />Data Collection & Integration</h4>
                    <ul className="space-y-3">
                    {dataCollectionFeatures.map((feature, index) => (
                        <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                        </motion.li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-primary-700 mb-4 flex items-center"><BarChart3 className="w-5 h-5 mr-2" />Cloud Infrastructure</h4>
                    <ul className="space-y-3">
                    {cloudInfrastructure.map((feature, index) => (
                        <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                        </motion.li>
                    ))}
                    </ul>
                </div>
                </div>
            </motion.div>
        </CaseStudySection>
      </div>

      <CaseStudySection id="architecture" title="Solution" gradientTitle="Architecture">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-3xl shadow-premium p-8 mb-12">
            <ArchitectureDiagramPlaceholder />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Key Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyComponents.map((component, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-primary-700 mb-3">{component.title}</h4>
                  <p className="text-gray-600 text-sm">{component.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
      </CaseStudySection>

    <div className='bg-gradient-to-b from-gray-50 to-white'>
      <CaseStudySection id="impact" title="Business" gradientTitle="Impact">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <metric.icon className="w-8 h-8 text-accent-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-dark-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
            <h3 className="text-3xl font-bold text-dark-900 mb-8 text-center">Competitive Advantage</h3>
            <div className="bg-white rounded-3xl shadow-premium overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold text-primary-700">Our Solution</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Traditional Solutions</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Competitor Solutions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-primary-700 font-semibold">{row.ourSolution}</td>
                        <td className="px-6 py-4 text-gray-700">{row.traditional}</td>
                        <td className="px-6 py-4 text-gray-700">{row.competitor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
      </CaseStudySection>
    </div>

      <section className="py-24 bg-gradient-to-br from-dark-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how our data engineering solutions can drive similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-dark-900 hover:bg-gray-100">
                Discuss Your Project
              </button>
              <button onClick={() => navigate('/')} className="btn-secondary border-white text-white hover:bg-white hover:text-dark-900">
                Back to Main
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoofingCaseStudy; 