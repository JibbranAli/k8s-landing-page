import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, CheckCircle, Calendar } from 'lucide-react';

const CourseContent: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [openModule, setOpenModule] = useState<number | null>(null);

  const day1Modules = [
    {
      title: "Kubernetes Introduction & Architecture",
      topics: [
        "What is Kubernetes?",
        "Why Kubernetes in DevOps and Industry",
        "Key components: API Server, Scheduler, etcd, Controllers",
        "Node architecture: kubelet, kube-proxy, container runtime"
      ]
    },
    {
      title: "Kubernetes Installation & Cluster Setup",
      topics: [
        "Minikube, KIND, or kubeadm basics",
        "Installing Kubernetes CLI tools (kubectl, kubeadm)",
        "Starting your first single-node cluster",
        "Basic troubleshooting tips"
      ]
    },
    {
      title: "Pods – The Basic Execution Unit",
      topics: [
        "What is a Pod?",
        "Running single & multi-container Pods",
        "Pod lifecycle and restart policies",
        "YAML file structure for Pods"
      ]
    },
    {
      title: "Deployments & ReplicaSets",
      topics: [
        "Understanding Deployments",
        "Scaling using ReplicaSets",
        "Declarative Management using YAML",
        "Rolling updates concept"
      ]
    },
    {
      title: "Services & Networking Basics",
      topics: [
        "ClusterIP, NodePort, LoadBalancer – Differences",
        "Exposing applications via Services",
        "DNS-based service discovery",
        "Internal vs external access"
      ]
    },
    {
      title: "Namespaces, Labels & Selectors",
      topics: [
        "Organizing resources using Namespaces",
        "Label-based grouping and selection",
        "Using Selectors in Services and Deployments",
        "Namespace scoping for multi-team setups"
      ]
    },
    {
      title: "Mini Project: Static Web App Deployment",
      topics: [
        "Deploy an Nginx container",
        "Expose using NodePort Service",
        "Scale and verify availability",
        "Use kubectl to inspect Pod, Service, and Deployment"
      ]
    }
  ];

  const day2Modules = [
    {
      title: "ConfigMaps & Secrets",
      topics: [
        "Externalizing configurations",
        "Creating and mounting ConfigMaps",
        "Securing credentials with Secrets"
      ]
    },
    {
      title: "Persistent Storage: Volumes, PV, PVC",
      topics: [
        "Kubernetes Volumes vs Docker volumes",
        "PersistentVolume and PersistentVolumeClaim",
        "Mounting storage into Pods"
      ]
    },
    {
      title: "Health Probes – Liveness & Readiness",
      topics: [
        "Liveness vs Readiness probes",
        "Implementing probes via YAML",
        "Simulating container failures",
        "Observing behavior in Deployments"
      ]
    },
    {
      title: "Rolling Updates & Rollbacks",
      topics: [
        "Updating Deployments with zero downtime",
        "Manual & automated rollouts",
        "Rollback mechanism and use-case",
        "Update strategy configuration"
      ]
    },
    {
      title: "Resource Limits & Quotas",
      topics: [
        "Setting CPU and memory requests/limits",
        "Importance in production environments",
        "Namespace-based ResourceQuotas"
      ]
    },
    {
      title: "Helm – Kubernetes Package Manager",
      topics: [
        "What is Helm and why use it?",
        "Charts, Repositories, and Values",
        "Installing applications using Helm"
      ]
    },
    {
      title: "Mini Project: WordPress + MySQL Deployment",
      topics: [
        "Deploy a WordPress frontend and MySQL backend",
        "Use Persistent Volumes for MySQL storage",
        "Configure with Secrets and ConfigMaps",
        "Expose WordPress using NodePort or LoadBalancer",
        "Test Multi-tier application functionality"
      ]
    }
  ];

  const currentModules = activeDay === 'day1' ? day1Modules : day2Modules;

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
            Complete Course <span className="text-k8s-blue">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600">
            2-day comprehensive bootcamp covering foundational to advanced Kubernetes
          </p>
        </motion.div>

        {/* Day Selection Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-xl p-2 flex">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                activeDay === 'day1'
                  ? 'bg-k8s-blue text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="mr-2" size={20} />
              Day 1: Foundational Kubernetes
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                activeDay === 'day2'
                  ? 'bg-k8s-blue text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="mr-2" size={20} />
              Day 2: Advanced Kubernetes
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {currentModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
                >
                  <div className="flex items-center">
                    <div className="bg-k8s-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{module.title}</h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${
                      openModule === index ? 'transform rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                
                <AnimatePresence>
                  {openModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white"
                    >
                      <div className="px-6 py-4 border-t border-gray-200">
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center text-gray-700">
                              <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CourseContent;