import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Wifi, Battery, Signal } from 'lucide-react';
import './StatusBar.css';

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Get real battery level
    if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        setBatteryLevel(Math.round(battery.level * 100));

        const updateLevel = () => setBatteryLevel(Math.round(battery.level * 100));
        battery.addEventListener('levelchange', updateLevel);

        return () => {
          battery.removeEventListener('levelchange', updateLevel);
        };
      });
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
  };

  return (
    <div className="status-bar">
      <div className="status-left">
        <AnimatePresence mode="wait">
          <Motion.span
            key={formatTime(time)}
            className="status-time"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.18 }}
          >
            {formatTime(time)}
          </Motion.span>
        </AnimatePresence>
        <span className="status-name">Akash</span>
      </div>

      <div className="status-right">
        <span className="status-date">{formatDate(time)}</span>
        <Signal size={14} className="status-icon signal-icon" />
        <Wifi size={14} className="status-icon" />
        <div className="battery-container charging">
          <span className="battery-text">{batteryLevel}%</span>
          <Battery size={14} className="status-icon" />
          <span className="battery-pulse" />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
