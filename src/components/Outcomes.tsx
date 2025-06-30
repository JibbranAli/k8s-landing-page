import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Shield, BarChart3, GitBranch, Award, Briefcase } from 'lucide-react';

const Outcomes: React.FC = () => {
  const outcomes = [
    {
      icon: Rocket,
      title: "Deploy Real-World Microservices",
      description: "Build and deploy production-ready applications with confidence"
    },
    {
      icon: GitBranch,
      title: "Automate CI/CD Pipelines",
      description: "Master GitHub Actions for seamless deployment automation"
    },
    {
      icon: GitBranch,
      title: "Implement GitOps with ArgoCD",
      description: "Set up declarative, Git-based deployment workflows"
    },
    {
      icon: BarChart3,
      title: "Monitor Production Clusters",
      description: "Implement comprehensive monitoring with Prometheus & Grafana"
    },
    {
      icon: Shield,
      title: "Apply Security Best Practices",
      description: "Secure your clusters with RBAC, policies, and scanning tools"
    },
    {
      icon: Briefcase,
      title: "Be Job-Ready for DevOps Roles",
      description: "Gain the skills employers are looking for in DevOps and SRE positions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-k8s-blue to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Course <span className="text-blue-200">Outcomes</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            What you'll achieve after completing this intensive bootcamp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4 flex-shrink-0">
                  <outcome.icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="font-semibold text-white text-lg">{outcome.title}</h3>
                  </div>
                  <p className="text-blue-100">{outcome.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <Award className="text-yellow-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Industry Recognition</h3>
            <p className="text-blue-100 mb-6">
              Get a certificate of completion and join our network of successful Kubernetes professionals
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-blue-200 text-sm">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-blue-200 text-sm">Student Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Alumni Network</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Outcomes;