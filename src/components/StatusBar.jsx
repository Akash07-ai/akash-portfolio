import React, { useState, useEffect } from 'react';
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
        <span className="status-time">{formatTime(time)}</span>
        <span className="status-name">Akash</span>
      </div>

      <div className="status-right">
        <span className="status-date">{formatDate(time)}</span>
        <Signal size={14} className="status-icon" />
        <Wifi size={14} className="status-icon" />
        <div className="battery-container">
          <span className="battery-text">{batteryLevel}%</span>
          <Battery size={14} className="status-icon" />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
