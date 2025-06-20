import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp,
  Cloud,
  BarChart3
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    solutions: [
      { name: "Data Warehousing", href: "#" },
      { name: "Real-time Analytics", href: "#" },
      { name: "ML/AI Platforms", href: "#" },
      { name: "Cloud Migration", href: "#" },
      { name: "Data Governance", href: "#" }
    ],
    industries: [
      { name: "Roofing & Construction", href: "#" },
      { name: "Pharmaceutical", href: "#" },
      { name: "Manufacturing", href: "#" },
      { name: "Shipping & Logistics", href: "#" },
      { name: "Retail & E-commerce", href: "#" }
    ],
    platforms: [
      { name: "Microsoft Azure", href: "#" },
      { name: "Amazon Web Services", href: "#" },
      { name: "Palantir Foundry", href: "#" },
      { name: "Google Cloud", href: "#" },
      { name: "Snowflake", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  const certifications = [
    "Azure Solutions Architect Expert",
    "AWS Certified Data Analytics",
    "Palantir Foundry Certified",
    "SOC 2 Type II Compliant"
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Data Transformation Today
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that trust us with their most critical data infrastructure projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started Now
              </button>
              <button className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
                Download Our Capabilities Deck
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mr-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-white">Impressico Data Engineering</div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Enterprise data engineering solutions that deliver measurable ROI through cutting-edge cloud platforms and AI-powered analytics.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">hello@impressico.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">New York, London, Sydney</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Solutions</h4>
                  <ul className="space-y-3">
                    {footerLinks.solutions.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Industries</h4>
                  <ul className="space-y-3">
                    {footerLinks.industries.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Platforms</h4>
                  <ul className="space-y-3">
                    {footerLinks.platforms.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-white font-semibold mb-4 text-center">Certifications & Compliance</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-gray-400 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Impressico Business Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Data Processing Agreement
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-primary-500 hover:bg-primary-600 flex items-center justify-center transition-colors group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;