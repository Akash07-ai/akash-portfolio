import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    background: 'var(--surface-color-light)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    textDecoration: 'none',
    color: 'inherit'
  }}>
    <div style={{
      width: 40, height: 40, borderRadius: '50%',
      backgroundColor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <Icon size={20} color="var(--primary-color)" />
    </div>
    <div>
      <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</p>
      <p style={{ fontSize: 14, fontWeight: '500' }}>{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        padding: 20,
        height: '100%',
        overflowY: 'auto',
        paddingBottom: 80,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://www.sdgyoungleaders.org/wp-content/uploads/2020/04/load-image-67.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Contact Info Section */}
      <div id="info" style={{ scrollMarginTop: 80 }}>
        <h2 style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Contact Info</h2>
        <ContactItem
          icon={Mail}
          label="Email"
          value="akashvaggannavar9906@gmail.com"
          href="mailto:akashvaggannavar9906@gmail.com"
        />
        <ContactItem
          icon={Phone}
          label="Phone"
          value="6364739906"
          href="tel:6364739906"
        />
        <ContactItem
          icon={Linkedin}
          label="LinkedIn"
          value="Akash Vaggannavar"
          href="https://www.linkedin.com/in/akash-vaggannavar-651193261/"
        />
        <ContactItem
          icon={Github}
          label="GitHub"
          value="Akash07-ai"
          href="https://github.com/Akash07-ai"
        />
      </div>

      {/* Message Form Section */}
      <div id="message" style={{ scrollMarginTop: 80 }}>
        <h2 style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Send Message</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: 16, borderRadius: 12, border: 'none',
              backgroundColor: 'var(--surface-color-light)', color: '#fff', outline: 'none', fontSize: 14
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: 16, borderRadius: 12, border: 'none',
              backgroundColor: 'var(--surface-color-light)', color: '#fff', outline: 'none', fontSize: 14
            }}
          />
          <textarea
            placeholder="Message"
            rows={5}
            style={{
              padding: 16, borderRadius: 12, border: 'none',
              backgroundColor: 'var(--surface-color-light)', color: '#fff', outline: 'none', resize: 'none', fontSize: 14, fontFamily: 'inherit'
            }}
          />
          <button
            type="button"
            style={{
              padding: 16, borderRadius: 12, border: 'none',
              backgroundColor: 'var(--primary-color)', color: '#000', fontWeight: 'bold', fontSize: 16,
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, cursor: 'pointer'
            }}
          >
            Send <Send size={18} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
