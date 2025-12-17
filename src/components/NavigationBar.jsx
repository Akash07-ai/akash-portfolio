import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Mail } from 'lucide-react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <User size={24} />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Mail size={24} />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
