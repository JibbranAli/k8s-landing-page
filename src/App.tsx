import React from 'react';
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

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <LearningGrid />
      <CourseContent />
      <Outcomes />
      <TrainerProfile />
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
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;