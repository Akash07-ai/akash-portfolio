import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', paddingTop: 32 }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Router>
      <PhoneFrame>
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            <StatusBar />
            <AppContent />
            <NavigationBar />
          </>
        )}
      </PhoneFrame>
    </Router>
  );
};

export default App;
