import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Clock, Users, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const day1Features = [
    "8 hours of foundational Kubernetes training",
    "7 comprehensive modules",
    "Hands-on labs and real-world projects",
    "Certificate of completion for Day 1",
    "Access to Day 1 recordings",
    "Community support",
    "Interview preparation tips"
  ];

  const fullBootcampFeatures = [
    "16 hours of intensive live training",
    "14 comprehensive modules",
    "Hands-on labs and projects",
    "Real-world deployment scenarios",
    "Certificate of completion",
    "1-year access to all recordings",
    "Private Discord community",
    "Resume and interview guidance",
    "Job placement assistance",
    "Money-back guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-k8s-blue">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-600">
            Start with Day 1 or go all-in with the complete 2-day bootcamp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Day 1 Only Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Day 1 Only</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-k8s-blue mb-2">₹2,500</div>
                <p className="text-gray-600">One-time payment</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Foundational Kubernetes</h4>
                <p className="text-gray-600 text-sm">Perfect for beginners starting their K8s journey</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {day1Features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-k8s-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              Register for Day 1
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </motion.div>

          {/* Full Bootcamp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-k8s-blue to-blue-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-white relative overflow-hidden"
          >
            {/* Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-bl-lg font-semibold text-sm">
                Most Popular
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 opacity-10">
              <div className="w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
            </div>
            <div className="absolute bottom-0 left-0 opacity-10">
              <div className="w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Day 1 & Day 2</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">₹4,500</div>
                  <p className="text-blue-100">Save ₹500 with bundle</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-2">Complete Kubernetes Mastery</h4>
                  <p className="text-blue-100 text-sm">From foundational to advanced production-ready skills</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {fullBootcampFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-blue-100">
                    <Check className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-k8s-blue font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Register for Full Bootcamp
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="flex justify-center items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Clock className="mr-2" size={16} />
              <span className="text-sm">Next batch starts soon</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={16} />
              <span className="text-sm">Limited to 25 students</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;