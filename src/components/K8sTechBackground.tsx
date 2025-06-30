import React from 'react';
import { motion } from 'framer-motion';

// Helper SVGs for pods, hexagons, and containers
const Pod = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <circle cx={16} cy={16} r={14} stroke="#60A5FA" strokeWidth={3} fill="#326CE5" fillOpacity={0.7} />
    <circle cx={16} cy={16} r={6} fill="#fff" fillOpacity={0.7} />
  </svg>
);

const Hex = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
    <polygon points="18,3 33,12 33,28 18,35 3,28 3,12" stroke="#60A5FA" strokeWidth={2.5} fill="#326CE5" fillOpacity={0.5} />
  </svg>
);

const Container = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={24} viewBox="0 0 40 24" fill="none" {...props}>
    <rect x={2} y={4} width={36} height={16} rx={4} fill="#fff" fillOpacity={0.08} stroke="#60A5FA" strokeWidth={2} />
    <rect x={8} y={8} width={8} height={8} rx={2} fill="#60A5FA" fillOpacity={0.3} />
    <rect x={24} y={8} width={8} height={8} rx={2} fill="#60A5FA" fillOpacity={0.3} />
  </svg>
);

const lines = [
  // Example network lines (SVG paths)
  { d: 'M 80 120 Q 160 40 240 120', color: '#60A5FA', opacity: 0.12 },
  { d: 'M 60 200 Q 180 100 300 200', color: '#60A5FA', opacity: 0.10 },
  { d: 'M 120 300 Q 200 180 320 260', color: '#60A5FA', opacity: 0.08 },
];

const K8sTechBackground: React.FC = () => {
  // Floating elements config
  const elements = [
    { type: 'pod', x: '10%', y: '20%', delay: 0, duration: 10, size: 32 },
    { type: 'hex', x: '80%', y: '30%', delay: 2, duration: 12, size: 36 },
    { type: 'container', x: '20%', y: '70%', delay: 1, duration: 14, size: 40 },
    { type: 'hex', x: '70%', y: '60%', delay: 3, duration: 11, size: 36 },
    { type: 'pod', x: '90%', y: '80%', delay: 1.5, duration: 13, size: 32 },
    { type: 'container', x: '5%', y: '50%', delay: 2.5, duration: 15, size: 40 },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Network lines */}
      <svg className="absolute left-0 top-0 w-full h-full" width="100%" height="100%" viewBox="0 0 400 400" fill="none">
        {lines.map((line, i) => (
          <path
            key={i}
            d={line.d}
            stroke={line.color}
            strokeWidth={3}
            opacity={line.opacity}
            fill="none"
          />
        ))}
      </svg>
      {/* Floating technical elements */}
      {elements.map((el, i) => {
        const Comp = el.type === 'pod' ? Pod : el.type === 'hex' ? Hex : Container;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: el.x, top: el.y }}
            initial={{ opacity: 0.18, y: 0, scale: 1 }}
            animate={{
              opacity: [0.18, 0.28, 0.18],
              y: [0, -30, 0, 30, 0],
              scale: [1, 1.08, 1],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Comp width={el.size} height={el.size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default K8sTechBackground; 