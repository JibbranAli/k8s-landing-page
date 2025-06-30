import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Circle, Square } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Hexagon, delay: 0, x: '10%', y: '20%', duration: 8 },
    { Icon: Circle, delay: 2, x: '80%', y: '30%', duration: 6 },
    { Icon: Square, delay: 1, x: '20%', y: '70%', duration: 7 },
    { Icon: Hexagon, delay: 3, x: '70%', y: '60%', duration: 9 },
    { Icon: Circle, delay: 1.5, x: '90%', y: '80%', duration: 5 },
    { Icon: Square, delay: 2.5, x: '5%', y: '50%', duration: 8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(({ Icon, delay, x, y, duration }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={24} className="text-k8s-blue" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;