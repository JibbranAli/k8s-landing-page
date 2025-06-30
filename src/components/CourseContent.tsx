import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, CheckCircle, Calendar } from 'lucide-react';

const CourseContent: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [openModule, setOpenModule] = useState<number | null>(null);

  const day1Modules = [
    {
      title: "Kubernetes Introduction & Architecture",
      duration: "2 hours",
      topics: [
        "What is Kubernetes?",
        "Why Kubernetes in DevOps and Industry",
        "Key components: API Server, Scheduler, etcd, Controllers",
        "Node architecture: kubelet, kube-proxy, container runtime"
      ]
    },
    {
      title: "Kubernetes Setup",
      duration: "1.5 hours",
      topics: [
        "Using Minikube, Kind, or K3s",
        "Introduction to EKS/GKE/AKS",
        "Working with kubeconfig and kubectl",
        "Understanding Namespaces and Contexts"
      ]
    },
    {
      title: "Pods, ReplicaSets, Deployments",
      duration: "2 hours",
      topics: [
        "Pod lifecycle and behaviors",
        "ReplicaSet vs ReplicationController",
        "Deployments: rolling updates, rollbacks",
        "Labels, selectors, annotations",
        "Writing and applying YAML manifests"
      ]
    },
    {
      title: "Services and Networking",
      duration: "2 hours",
      topics: [
        "Understanding ClusterIP, NodePort, LoadBalancer",
        "DNS and Service Discovery",
        "Ingress Controller and ingress routing",
        "TLS and HTTPS with ingress"
      ]
    },
    {
      title: "Configuration Management",
      duration: "1.5 hours",
      topics: [
        "ConfigMaps vs Secrets",
        "Injecting environment variables",
        "Mounting secrets and configs",
        "Security best practices for secrets"
      ]
    },
    {
      title: "Persistent Storage",
      duration: "2 hours",
      topics: [
        "Kubernetes Volumes: emptyDir, hostPath",
        "PersistentVolume and PersistentVolumeClaim",
        "StorageClass and dynamic provisioning",
        "Hands-on deployment with MySQL and WordPress"
      ]
    },
    {
      title: "Real-World Use Case Deployment",
      duration: "1 hour",
      topics: [
        "Deploy a multi-tier app using K8s",
        "Use Ingress, Volumes, and ConfigMaps",
        "Troubleshooting and monitoring basics"
      ]
    }
  ];

  const day2Modules = [
    {
      title: "Advanced Workloads",
      duration: "2 hours",
      topics: [
        "Using StatefulSets and DaemonSets",
        "Working with Init containers and Sidecars",
        "Jobs and CronJobs for background and scheduled tasks"
      ]
    },
    {
      title: "Security and Policies",
      duration: "2 hours",
      topics: [
        "RBAC: ClusterRoles, Roles, ServiceAccounts",
        "Pod Security Standards (PSS)",
        "Network Policies with Calico",
        "Image security using Trivy",
        "Security audit tools: Kube-bench, Kubescape"
      ]
    },
    {
      title: "Helm – The Package Manager for Kubernetes",
      duration: "2 hours",
      topics: [
        "What is Helm and why use it",
        "Helm chart structure and templating",
        "Installing apps using Helm (e.g., Prometheus)",
        "Creating a basic Helm chart and managing versions"
      ]
    },
    {
      title: "CI/CD with Kubernetes",
      duration: "2 hours",
      topics: [
        "Building pipelines using GitHub Actions",
        "Automating Docker build, push, and deployment",
        "Handling imagePullSecrets",
        "Implementing canary deployments using rollout strategies"
      ]
    },
    {
      title: "Monitoring, Logging, and Observability",
      duration: "2 hours",
      topics: [
        "Setting up Prometheus and Grafana",
        "Creating dashboards and alerts",
        "Logging with Loki or ELK stack",
        "Distributed tracing with OpenTelemetry"
      ]
    },
    {
      title: "Auto-Scaling and Optimization",
      duration: "1.5 hours",
      topics: [
        "Horizontal Pod Autoscaler (HPA)",
        "Vertical Pod Autoscaler (VPA)",
        "Cluster Autoscaler (conceptual overview)",
        "Resource requests, limits, and tuning"
      ]
    },
    {
      title: "Production Patterns & Wrap-Up",
      duration: "1.5 hours",
      topics: [
        "Production-ready cluster layouts",
        "CI/CD best practices",
        "Disaster recovery and backups",
        "Final Q&A and interview prep tips"
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