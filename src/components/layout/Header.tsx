import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';

const menuItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Navegação principal">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-sky-400 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://ofertalimitada.pay.yampi.com.br/r/S6RLAM6JR0"
            className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:shadow-glow transition-all duration-200 font-semibold"
            aria-label="Garantir vaga no curso"
          >
            GARANTIR VAGA
          </a>
        </nav> 
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <nav className="container mx-auto px-4 py-4" aria-label="Menu mobile">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-sky-400 block py-2 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://ofertalimitada.pay.yampi.com.br/r/S6RLAM6JR0"
                  className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-lg block text-center hover:shadow-glow transition-all duration-200 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Garantir vaga no curso"
                >
                  GARANTIR VAGA
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;