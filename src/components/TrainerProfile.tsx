import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  BookOpen, 
  Star,
  Quote,
  Linkedin,
  Github,
  Youtube
} from 'lucide-react';

const TrainerProfile: React.FC = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Students Trained" },
    { icon: BookOpen, number: "500+", label: "Corporate Workshops" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "4.9/5", label: "Average Rating" }
  ];

  const certifications = [
    "Certified Kubernetes Administrator (CKA)",
    "Certified Kubernetes Application Developer (CKAD)",
    "AWS Solutions Architect Professional",
    "Google Cloud Professional Cloud Architect",
    "Microsoft Azure Solutions Architect Expert"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your <span className="text-k8s-blue">Trainer</span>
          </h2>
          <p className="text-xl text-gray-600">
            Learn from industry experts with real-world Kubernetes experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Trainer Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-k8s-blue to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 opacity-10">
                <div className="w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">VD</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Vimal Daga</h3>
                    <p className="text-blue-100">Senior DevOps Architect & Kubernetes Expert</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className="text-blue-200 mb-3" size={24} />
                  <blockquote className="text-lg italic text-blue-100">
                    "We don't just teach Kubernetes – we build future DevOps leaders."
                  </blockquote>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-blue-100">
                    With over 15 years of experience in DevOps and cloud technologies, Vimal has trained thousands of professionals in Kubernetes, Docker, and modern deployment practices.
                  </p>
                  <p className="text-blue-100">
                    He specializes in helping organizations transition to containerized architectures and implement robust CI/CD pipelines using Kubernetes.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/vimaldaga/" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/vimallinuxworld13" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200">
                    <Github size={20} />
                  </a>
                  <a href="https://www.youtube.com/@IIECconnect" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-k8s-blue/10 p-3 rounded-lg inline-flex mb-3">
                    <stat.icon className="text-k8s-blue" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-k8s-blue to-blue-600 rounded-xl p-6 text-white text-center"
            >
              <h4 className="text-lg font-semibold mb-2">Ready to Learn from the Best?</h4>
              <p className="text-blue-100 mb-4 text-sm">
                Join our 2-day bootcamp and learn Kubernetes directly from industry experts
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-k8s-blue font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;