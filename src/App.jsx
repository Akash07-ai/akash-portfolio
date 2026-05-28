import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import PhoneFrame from './components/PhoneFrame';
import StatusBar from './components/StatusBar';
import NavigationBar from './components/NavigationBar';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Contact from './screens/Contact';
import SplashScreen from './screens/SplashScreen';

const AppContent = () => {
  const location = useLocation();
  return (
    <main className="app-content">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setLoading(false), 2000);
    const notificationTimer = setTimeout(() => setShowNotification(true), 3200);
    const hideTimer = setTimeout(() => setShowNotification(false), 7600);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(notificationTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Router>
      <PhoneFrame>
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            <StatusBar />
            <AnimatePresence>
              {showNotification && (
                <Motion.div
                  className="system-notification"
                  initial={{ y: -28, opacity: 0, scale: 0.96 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                >
                  <span className="notification-dot" />
                  <div>
                    <strong>Portfolio OS</strong>
                    <p>Someone visited your portfolio</p>
                  </div>
                </Motion.div>
              )}
            </AnimatePresence>
            <AppContent />
            <NavigationBar />
          </>
        )}
      </PhoneFrame>
    </Router>
  );
};

export default App;
