import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Code, BookOpen, FolderGit2, Phone, Send, Cpu, Briefcase, MessageSquare } from 'lucide-react';

const AppIcon = ({ icon: Icon, label, onClick, color = '#fff', bg = '#333' }) => (
  <motion.div
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      width: 80
    }}
  >
    <div style={{
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: bg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}>
      <Icon size={28} color={color} />
    </div>
    <span style={{
      fontSize: 12,
      color: '#fff',
      textAlign: 'center',
      textShadow: '0 1px 2px rgba(0,0,0,0.8)',
      lineHeight: 1.2
    }}>
      {label}
    </span>
  </motion.div>
);

const Home = () => {
  const [time, setTime] = useState(new Date());
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
    { label: 'About Me', icon: User, path: '/profile#about', color: '#4285F4', bg: '#fff' },
    { label: 'Skills', icon: Cpu, path: '/profile#skills', color: '#EA4335', bg: '#fff' },
    { label: 'Academic', icon: BookOpen, path: '/profile#academic', color: '#FBBC05', bg: '#fff' },
    { label: 'Projects', icon: FolderGit2, path: '/profile#projects', color: '#34A853', bg: '#fff' },
    { label: 'Contact', icon: Phone, path: '/contact#info', color: '#0F9D58', bg: '#fff' },
    { label: 'Message', icon: MessageSquare, path: '/contact#message', color: '#673AB7', bg: '#fff' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://www.sdgyoungleaders.org/wp-content/uploads/2020/04/load-image-67.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Top Left Profile Photo & Name */}
      <div style={{
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/profile')}
          style={{ cursor: 'pointer' }}
        >
          <div style={{
            width: 50, height: 50, borderRadius: '50%',
            padding: 2,
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#121212',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              overflow: 'hidden'
            }}>
              <img src="/profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </motion.div>
        <span style={{
          color: '#fff',
          fontSize: 12,
          fontWeight: 'bold',
          textShadow: '0 1px 3px rgba(0,0,0,0.9)',
          whiteSpace: 'nowrap'
        }}>
          Akash Vaggannavar
        </span>
      </div>

      {/* Time & Date Widget */}
      <div style={{
        marginTop: 100,
        marginBottom: 60,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 5
      }}>
        <h1 style={{ fontSize: 64, fontWeight: '200', margin: 0, lineHeight: 1, letterSpacing: -2, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {formatTime(time)}
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginTop: 4, fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
          {formatDate(time)}
        </p>
      </div>

      {/* App Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        width: '100%',
        maxWidth: 320,
        zIndex: 10
      }}>
        {apps.map((app, index) => (
          <AppIcon
            key={index}
            label={app.label}
            icon={app.icon}
            color={app.color}
            bg={app.bg}
            onClick={() => navigate(app.path)}
          />
        ))}
      </div>

    </motion.div>
  );
};

export default Home;
