import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, BookOpen, FolderGit2, Phone, Cpu, MessageSquare } from 'lucide-react';
import './Screens.css';

const AppIcon = ({ icon, label, onClick, gradient, glow }) => (
  <Motion.div
    whileTap={{ scale: 0.85 }}
    whileHover={{ scale: 1.05, y: -4 }}
    onClick={onClick}
    className="launcher-icon ripple"
  >
    <div className="icon-orb" style={{ '--icon-bg': gradient, '--icon-glow': glow }}>
      {React.createElement(icon, { size: 28, color: '#fff' })}
    </div>
    <span>{label}</span>
  </Motion.div>
);

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [launching, setLaunching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' });
  };

  const apps = [
    { label: 'About Me', icon: User, path: '/profile#about', gradient: 'linear-gradient(135deg, #3ddc84, #169f66)', glow: 'rgba(61,220,132,0.44)' },
    { label: 'Skills', icon: Cpu, path: '/profile#skills', gradient: 'linear-gradient(135deg, #03dac6, #1976d2)', glow: 'rgba(3,218,198,0.42)' },
    { label: 'Academic Projects', icon: BookOpen, path: '/profile#academic', gradient: 'linear-gradient(135deg, #fbbc05, #ff6f00)', glow: 'rgba(251,188,5,0.34)' },
    { label: 'Other Projects', icon: FolderGit2, path: '/profile#projects', gradient: 'linear-gradient(135deg, #8e7cff, #3f51b5)', glow: 'rgba(142,124,255,0.36)' },
    { label: 'Contact Info', icon: Phone, path: '/contact#info', gradient: 'linear-gradient(135deg, #34a853, #03dac6)', glow: 'rgba(52,168,83,0.36)' },
    { label: 'Send Message', icon: MessageSquare, path: '/contact#message', gradient: 'linear-gradient(135deg, #ff4d8d, #673ab7)', glow: 'rgba(255,77,141,0.34)' },
  ];

  const handleLaunch = (path) => {
    setLaunching(true);
    setTimeout(() => navigate(path), 180);
  };

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="screen launcher"
    >
      <div className="particle-field">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            className="particle"
            key={index}
            style={{
              '--left': `${(index * 17) % 96}%`,
              '--speed': `${7 + (index % 6)}s`,
              '--alpha': `${0.3 + (index % 5) * 0.12}`,
            }}
          />
        ))}
      </div>

      <div className="profile-shortcut">
        <Motion.button
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleLaunch('/profile')}
          className="story-ring ripple"
          aria-label="Open profile"
        >
          <img src="/akashpromax.png" alt="Akash Vaggannavar" />
        </Motion.button>
        <span>Akash Vaggannavar</span>
      </div>

      <Motion.div
        className="clock-widget"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <h1>
          {formatTime(time)}
        </h1>
        <p>
          {formatDate(time)}
        </p>
      </Motion.div>

      <div className="app-grid">
        {apps.map((app, index) => (
          <AppIcon
            key={index}
            label={app.label}
            icon={app.icon}
            gradient={app.gradient}
            glow={app.glow}
            onClick={() => handleLaunch(app.path)}
          />
        ))}
      </div>

      <AnimatePresence>
        {launching && (
          <Motion.span
            className="launch-flash"
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 80, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.34, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default Home;
