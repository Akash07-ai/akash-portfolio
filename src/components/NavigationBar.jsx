import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Home, User, Mail } from 'lucide-react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Motion.span whileTap={{ scale: 0.86 }} whileHover={{ y: -2 }} className="nav-icon-wrap">
          <Home size={23} />
        </Motion.span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Motion.span whileTap={{ scale: 0.86 }} whileHover={{ y: -2 }} className="nav-icon-wrap">
          <User size={23} />
        </Motion.span>
        <span>Profile</span>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Motion.span whileTap={{ scale: 0.86 }} whileHover={{ y: -2 }} className="nav-icon-wrap">
          <Mail size={23} />
        </Motion.span>
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
