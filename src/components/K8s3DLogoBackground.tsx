import React from 'react';
import { motion } from 'framer-motion';

const K8s3DLogoBackground: React.FC = () => {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0"
      initial={{ opacity: 0.08, scale: 1, rotateY: 0, rotateZ: 0, y: 0 }}
      animate={{
        opacity: 0.08,
        scale: [1, 1.08, 1],
        rotateY: [0, 20, 0, -20, 0],
        rotateZ: [0, 10, 0, -10, 0],
        y: [0, -20, 0, 20, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        willChange: 'transform',
        filter: 'blur(0.5px)',
      }}
    >
      <svg
        width="min(70vw, 700px)"
        height="min(70vw, 700px)"
        viewBox="0 0 226 226"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <g>
          <path d="M113 0c-2.7 0-5.3 0.7-7.5 2.1L13.5 59.1c-4.5 2.6-7.5 7.5-7.5 12.7v82.4c0 5.2 3 10.1 7.5 12.7l92 57c4.5 2.6 10.5 2.6 15 0l92-57c4.5-2.6 7.5-7.5 7.5-12.7V71.8c0-5.2-3-10.1-7.5-12.7l-92-57C118.3 0.7 115.7 0 113 0z" fill="#326CE5"/>
          <path d="M113 18.8c-1.2 0-2.4 0.3-3.4 0.9l-83.2 51.6c-2 1.2-3.4 3.6-3.4 6.1v77.2c0 2.5 1.4 4.9 3.4 6.1l83.2 51.6c2 1.2 4.8 1.2 6.8 0l83.2-51.6c2-1.2 3.4-3.6 3.4-6.1V77.4c0-2.5-1.4-4.9-3.4-6.1l-83.2-51.6c-1-0.6-2.2-0.9-3.4-0.9z" fill="#fff"/>
          <path d="M113 36.6c-1.1 0-2.2 0.3-3.1 0.8l-69.7 43.2c-1.8 1.1-3.1 3.2-3.1 5.4v69.2c0 2.2 1.3 4.3 3.1 5.4l69.7 43.2c1.8 1.1 4.4 1.1 6.2 0l69.7-43.2c1.8-1.1 3.1-3.2 3.1-5.4V86c0-2.2-1.3-4.3-3.1-5.4l-69.7-43.2c-0.9-0.5-2-0.8-3.1-0.8z" fill="#326CE5"/>
          <g>
            <circle cx="113" cy="113" r="38" fill="#fff"/>
            <path d="M113 75a38 38 0 1 1 0 76 38 38 0 0 1 0-76zm0 6a32 32 0 1 0 0 64 32 32 0 0 0 0-64z" fill="#326CE5"/>
            <g stroke="#326CE5" strokeWidth="6" strokeLinecap="round">
              <path d="M113 45v20"/>
              <path d="M113 161v20"/>
              <path d="M45 113h20"/>
              <path d="M161 113h20"/>
              <path d="M67.5 67.5l14.1 14.1"/>
              <path d="M144.4 144.4l14.1 14.1"/>
              <path d="M67.5 158.5l14.1-14.1"/>
              <path d="M144.4 81.6l14.1-14.1"/>
            </g>
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default K8s3DLogoBackground; 