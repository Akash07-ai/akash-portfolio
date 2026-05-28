import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import './Screens.css';

const SplashScreen = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="splash-os"
    >
      <Motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Smartphone size={64} />
      </Motion.div>
      <Motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="splash-title"
      >
        Portfolio OS
      </Motion.h1>
    </Motion.div>
  );
};

export default SplashScreen;
