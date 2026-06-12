import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-brand-brown z-50 flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full mb-6"
      />
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-display font-bold text-3xl text-white tracking-widest"
      >
        LE DÉLICE
      </motion.h1>
    </div>
  );
}
