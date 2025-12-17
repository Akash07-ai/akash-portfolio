import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Code, Terminal, Globe, Github, ExternalLink, BookOpen } from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon }) => (
  <div style={{
    minWidth: 160,
    background: 'var(--surface-color-light)',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flexShrink: 0
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--primary-color)' }}>
      <Icon size={18} />
      <span style={{ fontWeight: 'bold', fontSize: 13 }}>{title}</span>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {items.map((item, i) => (
        <span key={i} style={{ fontSize: 10, padding: '4px 8px', borderRadius: 8, backgroundColor: '#333' }}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, desc, stack }) => (
  <div style={{
    minWidth: 240,
    background: 'var(--surface-color-light)',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexShrink: 0
  }}>
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 10, lineHeight: 1.4 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {stack.map((tech, i) => (
          <span key={i} style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, backgroundColor: '#333', color: 'var(--accent-color)' }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <button style={{ flex: 1, padding: 8, borderRadius: 8, border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, fontSize: 11 }}>
        <Github size={12} /> Code
      </button>
      <button style={{ flex: 1, padding: 8, borderRadius: 8, border: 'none', backgroundColor: 'var(--primary-color)', color: '#000', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 'bold' }}>
        <ExternalLink size={12} /> View
      </button>
    </div>
  </div>
);

const AcademicProjectCard = ({ title, desc, category }) => (
  <div style={{
    background: 'var(--surface-color-light)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeft: '4px solid var(--accent-color)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
      <span style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: 0.5 }}>
        {category}
      </span>
    </div>
    <h3 style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#fff' }}>{title}</h3>
    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</p>
  </div>
);

const Profile = () => {
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
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://www.sdgyoungleaders.org/wp-content/uploads/2020/04/load-image-67.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Profile Header Image */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, marginTop: 10 }}>
        <div style={{
          width: 120, height: 120, borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--primary-color)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
          background: '#121212'
        }}>
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* About & Education Section */}
      <div id="about" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
        <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>About Me</h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>
          I am a final-year Computer Science & Engineering student passionate about building efficient software and web solutions.
        </p>

        <div style={{ background: 'var(--surface-color-light)', padding: 16, borderRadius: 12, borderLeft: '4px solid var(--primary-color)' }}>
          <h3 style={{ fontSize: 16, fontWeight: 'bold' }}>Education</h3>
          <p style={{ fontSize: 14, color: '#fff', marginTop: 4 }}>B.E. in Computer Science & Engineering</p>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Final Year Student</p>
        </div>
      </div>

      {/* Skills Section - Horizontal Scroll */}
      <div id="skills" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
        <h2 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>Skills</h2>
        <div style={{ display: 'flex', overflowX: 'auto', paddingBottom: 8 }}>
          <SkillCard title="Programming" items={['C', 'Python', 'Java']} icon={Terminal} />
          <SkillCard title="Web Dev" items={['HTML', 'CSS', 'JavaScript']} icon={Globe} />
          <SkillCard title="Tools" items={['Git', 'GitHub', 'VS Code']} icon={Code} />
        </div>
      </div>

      {/* Academic Projects Section */}
      <div id="academic" style={{ marginBottom: 24, scrollMarginTop: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <BookOpen size={20} color="var(--primary-color)" />
          <h2 style={{ fontSize: 18, fontWeight: 'bold' }}>Academic Projects (Real-Time)</h2>
        </div>

        <AcademicProjectCard
          category="Mini Project"
          title="Corner News (Web Application)"
          desc="A real-time news aggregation web application developed during my degree. It fetches live news using APIs and shows categories like Technology, Sports, Business, and Top Headlines. Built using HTML, CSS, JavaScript, and News API."
        />

        <AcademicProjectCard
          category="Major Project"
          title="Blockchain-Based E-Voting System"
          desc="A major degree project implementing a secure electronic voting system using blockchain technology. It ensures transparency, immutability, and security of votes through decentralized architecture and smart contracts, preventing vote tampering and fraud."
        />
      </div>

      {/* Other Projects Section - Horizontal Scroll */}
      <div id="projects" style={{ scrollMarginTop: 80 }}>
        <h2 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>Other Projects</h2>
        <div style={{ display: 'flex', overflowX: 'auto', paddingBottom: 8 }}>
          <ProjectCard
            title="Portfolio Website"
            desc="A personal portfolio designed like an Android mobile application."
            stack={['React', 'Vite', 'CSS']}
          />
          <ProjectCard
            title="E-Commerce App"
            desc="Full-stack shopping platform with payment integration."
            stack={['React', 'Node.js', 'MongoDB']}
          />
          <ProjectCard
            title="Task Manager"
            desc="Productivity tool for managing daily tasks."
            stack={['Flutter', 'Firebase']}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
