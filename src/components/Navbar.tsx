import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'What You Will Learn', href: '#learn' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 72, // offset for navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <a href="#hero" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <span className="bg-k8s-blue w-8 h-8 rounded-lg flex items-center justify-center mr-2">K8</span>
          <span className="hidden sm:inline">Kubernetes Bootcamp</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 rounded-lg text-gray-200 hover:text-k8s-blue hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="ml-4 px-5 py-2 rounded-lg bg-k8s-blue text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-200 text-sm"
          >
            Register
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 pb-6 pt-2 flex flex-col gap-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-lg text-gray-200 hover:text-k8s-blue hover:bg-white/10 transition-colors duration-200 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="mt-2 px-5 py-3 rounded-lg bg-k8s-blue text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-200 text-base text-center"
            >
              Register
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 