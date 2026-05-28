import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Screens.css';

const EMAILJS_SERVICE_ID = 'service_84d8dw7';
const EMAILJS_TEMPLATE_ID = 'template_upo533c';
const EMAILJS_PUBLIC_KEY = 'UslqLPQjmuOYPJSB1';

const ContactItem = ({ icon, label, value, href }) => (
  <Motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="contact-card glass-card ripple"
    whileHover={{ x: 4, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="contact-icon">
      {React.createElement(icon, { size: 20 })}
    </div>
    <div>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  </Motion.a>
);

const Contact = () => {
  const location = useLocation();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    window.setTimeout(() => setNotification(null), 3600);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (isSending) return;
    setIsSending(true);

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    )
      .then(() => {
        showNotification('success', 'Message Sent Successfully');
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);
        showNotification('error', 'Failed to Send Message');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <Motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="screen scroll-screen"
    >
      <AnimatePresence>
        {notification && (
          <Motion.div
            className={`contact-toast ${notification.type}`}
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          >
            <span className="contact-toast-dot" />
            <strong>{notification.message}</strong>
          </Motion.div>
        )}
      </AnimatePresence>

      <Motion.section id="info" className="screen-section" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="section-title">Contact Info</h2>
        <div className="contact-list">
          <ContactItem
            icon={Mail}
            label="Name"
            value="Akash Vaggannavar"
            href="mailto:akashvaggannavar9906@gmail.com"
          />
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
      </Motion.section>

      <Motion.section id="message" className="screen-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title">Send Message</h2>
        <form ref={form} onSubmit={sendEmail} className="message-form glass-card" style={{ padding: 16 }}>
          <input type="hidden" name="to_email" value="akashvaggannavar9906@gmail.com" />
          <input
            className="field"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            className="field"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="field"
            name="message"
            placeholder="Message"
            rows={5}
            required
          />
          <Motion.button
            type="submit"
            className={`send-button ripple ${isSending ? 'sending' : ''}`}
            whileHover={!isSending ? { scale: 1.02 } : undefined}
            whileTap={!isSending ? { scale: 0.96 } : undefined}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send'} <Send size={18} />
          </Motion.button>
        </form>
      </Motion.section>
    </Motion.div>
  );
};

export default Contact;
