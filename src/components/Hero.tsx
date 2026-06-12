import { motion } from 'motion/react';

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-5xl md:text-7xl text-white mb-6"
        >
          Le Délice Béninois
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light"
        >
          Cuisine française authentique avec saveurs africaines
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu" className="bg-white text-brand-brown px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Voir Menu
          </a>
          <button onClick={onBookClick} className="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-lg cursor-pointer">
            Réserver
          </button>
        </motion.div>
      </div>
    </div>
  );
}
