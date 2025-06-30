import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Database, 
  Package, 
  Activity, 
  GitBranch, 
  Shield, 
  TrendingUp,
  Zap
} from 'lucide-react';

const LearningGrid: React.FC = () => {
  const learningTopics = [
    {
      icon: Server,
      title: "Deployments & Services",
      description: "Master pod management, replica sets, and service networking",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Network,
      title: "Ingress Controllers",
      description: "Learn routing, load balancing, and external access patterns",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Volumes & StatefulSets",
      description: "Handle persistent storage and stateful applications",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Package,
      title: "Helm Charts",
      description: "Package and deploy applications with Helm",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Activity,
      title: "Monitoring & Logging",
      description: "Set up observability with Prometheus, Grafana, and ELK",
      color: "from-red-500 to-red-600"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automate deployments with GitHub Actions and GitOps",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Security & Scaling",
      description: "Implement RBAC, network policies, and autoscaling",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Real-World Use Cases",
      description: "Deploy production-ready applications with best practices",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You Will <span className="text-k8s-blue">Learn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of Kubernetes from foundational concepts to advanced production patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${topic.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-k8s-blue transition-colors duration-300">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
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
          <div className="bg-gradient-to-r from-k8s-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Master Kubernetes?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our 2-day intensive bootcamp and transform your career with hands-on Kubernetes expertise
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-k8s-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningGrid;