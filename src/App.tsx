import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningGrid from './components/LearningGrid';
import CourseContent from './components/CourseContent';
import Outcomes from './components/Outcomes';
import TrainerProfile from './components/TrainerProfile';
import Testimonials, { K8sTerminalBody } from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

// Animated typewriter text for K8s commands
const k8sCommands = [
  '$ kubectl create deployment nginx-deploy --image=nginx',
  '$ kubectl get pods',
  '$ kubectl expose deployment nginx-deploy --port=80 --type=NodePort',
  '$ kubectl scale deployment nginx-deploy --replicas=3',
  '$ kubectl get services',
  '$ kubectl describe pod nginx-deploy-7c57f8657d-abcde',
  '$ kubectl logs nginx-deploy-7c57f8657d-abcde',
];

function K8sCommandPopup({ command, style }: { command: string, style: React.CSSProperties }) {
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let idx = 0;
    let timeout: ReturnType<typeof setTimeout>;
    function typeNext() {
      if (idx < command.length) {
        setTyped((prev) => prev + command[idx]);
        idx++;
        timeout = setTimeout(typeNext, 30);
      }
    }
    typeNext();
    return () => clearTimeout(timeout);
  }, [command]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        background: '#0f172a',
        color: '#fff',
        fontFamily: 'monospace',
        fontSize: '1.1rem',
        borderRadius: 8,
        boxShadow: '0 4px 24px #0007',
        border: '1px solid #334155',
        padding: '16px 24px',
        zIndex: 10000,
        ...style,
      }}
    >
      <span>{typed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{ display: 'inline-block', marginLeft: 2 }}
      >
        █
      </motion.span>
    </motion.div>
  );
}

function CreativeLoaderText({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  const duration = 4;
  const text = 'LW'; // Change to 'Linux World' if you want the full name

  // SVG path for block-style 'LW' (improved, more clear 'L')
  // L: vertical line down, then horizontal line right. W: zigzag.
  const lwPath = "M60,60 L60,160 L100,160 M140,60 L155,160 L170,100 L185,160 L200,60";

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #0f172a 60%, #1e293b 100%)',
      }}
    >
      <div style={{ position: 'relative', width: 'min(90vw, 700px)', height: 160, marginBottom: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Linux World logo centered in the loader */}
        <motion.img
          src="/linuxworld-logo.png"
          alt="Linux World Logo"
          initial={{ opacity: 0, scale: 0.7, y: -30, filter: 'brightness(1) drop-shadow(0 0 0 #60A5FA)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'brightness(1.15) drop-shadow(0 0 24px #60A5FA)' }}
          transition={{ duration: 1.1, delay: 0.3, type: 'spring', stiffness: 120 }}
          style={{ width: 140, height: 'auto', marginBottom: 10 }}
        />
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Generate random positions for popups
  const popupCount = 4;
  const [popups] = useState(() => {
    const usedIndexes: number[] = [];
    return Array.from({ length: popupCount }).map(() => {
      let idx;
      do {
        idx = Math.floor(Math.random() * k8sCommands.length);
      } while (usedIndexes.includes(idx));
      usedIndexes.push(idx);
      // Random position (avoid edges)
      const top = Math.random() * 60 + 10; // 10% to 70%
      const left = Math.random() * 60 + 10; // 10% to 70%
      return {
        command: k8sCommands[idx],
        style: { top: `${top}%`, left: `${left}%` },
      };
    });
  });

  useEffect(() => {
    if (!loading) return;
    // fallback in case onDone not called
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <div className="font-inter">
      {/* Loader */}
      {loading && <CreativeLoaderText onDone={() => setLoading(false)} />}
      {/* Main App Content */}
      {!loading && (
        <>
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
          <section id="learn">
            <LearningGrid />
          </section>
          <section id="curriculum">
            <CourseContent />
          </section>
          <section id="outcomes">
            <Outcomes />
          </section>
          <section id="trainer">
            <TrainerProfile />
          </section>
          {/* Kubernetes in Action Terminal Section */}
          <section className="flex flex-col items-center justify-center py-12 bg-gray-50 px-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Kubernetes in Action</h3>
            <p className="text-gray-600 text-center mb-6 max-w-xl text-base md:text-lg">
              See how easy it is to deploy and manage applications with Kubernetes! Below is a real command-line session showing a deployment, pod status, and service exposure—just like you'll do in our bootcamp.
            </p>
            <div id="k8s-terminal-window" className="w-full max-w-[98vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 10, fontFamily: 'monospace', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <div className="terminal-header" style={{ background: '#1e293b', padding: 10, display: 'flex', alignItems: 'center' }}>
                <span className="dot red" style={{ width: 10, height: 10, borderRadius: '50%', marginRight: 6, background: '#f87171' }}></span>
                <span className="dot yellow" style={{ width: 10, height: 10, borderRadius: '50%', marginRight: 6, background: '#facc15' }}></span>
                <span className="dot green" style={{ width: 10, height: 10, borderRadius: '50%', marginRight: 6, background: '#4ade80' }}></span>
                <span className="title" style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 14, color: '#94a3b8' }}>root@k8s-master:~</span>
              </div>
              <K8sTerminalBody />
            </div>
          </section>
          <Testimonials />
          <section id="pricing">
            <Pricing />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;