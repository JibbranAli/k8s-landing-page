import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/lwindia",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/lwindia",
      label: "GitHub"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@lwindia",
      label: "YouTube"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      value: "support@lwindia.com",
      href: "mailto:support@lwindia.com"
    },
    {
      icon: Phone,
      value: "+91 97722 01449",
      href: "tel:+919772201449"
    },
    {
      icon: MapPin,
      value: "Krishna Tower, Plot No. 5, Gopalpura Bypass Rd, next to Triveni Nagar, GopalNagar – A Flyover, Agrasen Nagar, Gopal Pura Mode, Jaipur, Rajasthan 302015",
      href: "#"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Kubernetes-themed background watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-k8s-blue rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-k8s-blue rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-k8s-blue transform rotate-45"></div>
        <div className="absolute bottom-10 right-1/3 w-16 h-16 border-2 border-k8s-blue rounded-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 border-2 border-k8s-blue rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">K8</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kubernetes Bootcamp</h3>
                <p className="text-blue-200">by LWIndia</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your career with our intensive 2-day Kubernetes bootcamp. 
              Learn from industry experts and master container orchestration with 
              hands-on practical training.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-white/10 hover:bg-k8s-blue p-3 rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-k8s-blue transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-300 hover:text-k8s-blue transition-colors duration-200">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-k8s-blue transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#trainer" className="text-gray-300 hover:text-k8s-blue transition-colors duration-200">
                  Trainer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-k8s-blue transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center text-gray-300 hover:text-k8s-blue transition-colors duration-200"
                  >
                    <contact.icon size={18} className="mr-3 flex-shrink-0" />
                    <span className="text-sm">{contact.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LWIndia. All rights reserved.
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="mx-2 text-red-500" size={16} />
              <span>for the Kubernetes community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;