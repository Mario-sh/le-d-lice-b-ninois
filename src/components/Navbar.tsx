import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Menu', href: '#menu' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#accueil" className={`font-display font-bold text-2xl tracking-tight transition-colors ${isScrolled ? 'text-brand-brown' : 'text-white'}`}>
          Le Délice Béninois
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-medium hover:text-brand-orange transition-colors ${isScrolled ? 'text-brand-brown' : 'text-white drop-shadow-sm'}`}>
              {link.name}
            </a>
          ))}
          <button onClick={onBookClick} className="bg-brand-orange text-white px-5 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors shadow-lg cursor-pointer">
            Réserver
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-brand-brown w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center p-2 cursor-pointer shadow-sm hover:bg-white transition-colors" 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-50 bg-white shadow-2xl flex flex-col pt-20 px-6 pb-6"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="absolute top-6 right-6 text-brand-brown p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fermer le menu"
              >
                <X size={28} />
              </button>
              
              <div className="flex flex-col space-y-6 flex-1 mt-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-2xl font-medium text-brand-brown hover:text-brand-orange border-b border-gray-100 pb-4 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-8"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition-colors shadow-md"
                >
                  Réserver une Table
                </button>
                <p className="text-center text-gray-500 text-sm mt-6">
                  Le Délice Béninois &copy; {new Date().getFullYear()}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
