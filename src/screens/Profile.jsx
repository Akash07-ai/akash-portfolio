import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Code, Terminal, Globe, ExternalLink, BookOpen, Briefcase, Sparkles, Layers, GraduationCap } from 'lucide-react';
import './Screens.css';

const internshipSkills = [
  'Core Java',
  'OOP',
  'Interfaces',
  'Inheritance',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'MySQL',
  'API Integration',
  'Git & GitHub',
  'Full Stack Development',
  'Problem Solving',
  'DSA',
];

const projects = [
  {
    type: 'Mini Project',
    title: 'Corner News — Web Application',
    desc: 'Developed a real-time news aggregation web application that fetches live news using APIs and displays categories such as Technology, Business, Sports, and Headlines.',
    stack: ['HTML', 'CSS', 'JavaScript', 'News API'],
    features: ['Real-time news updates', 'API integration', 'Category filtering', 'Responsive UI'],
  },
  {
    type: 'Major Project',
    title: 'Blockchain-Based E-Voting System',
    desc: 'Developed a secure blockchain-powered electronic voting system ensuring transparency, immutability, and vote security using decentralized architecture and smart contracts.',
    stack: ['Blockchain', 'Smart Contracts', 'Web Technologies'],
    features: ['Vote encryption', 'Tamper-proof voting', 'Secure authentication', 'Decentralized architecture'],
  },
  {
    type: 'Frontend Web Project',
    title: 'Hindu Calendar Project',
    liveDemo: 'https://hinducalender.netlify.app/',
    desc: 'Developed a modern Hindu calendar web application with clean UI and responsive design for displaying calendar details and date information.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    features: ['Responsive frontend design', 'Calendar visualization', 'Mobile-friendly interface', 'Smooth UI experience'],
  },
  {
    type: 'Frontend Project',
    title: 'CineFlex — Movie Web Application',
    desc: 'Created a modern movie browsing platform inspired by OTT streaming services with interactive UI and responsive layouts.',
    stack: ['Frontend', 'Responsive Design', 'Animations'],
    features: ['Movie showcase sections', 'Responsive design', 'Interactive frontend', 'Smooth animations'],
  },
  {
    type: 'Full Stack Productivity Application',
    title: 'Job Tracker Project',
    desc: 'Built a job application tracking platform to manage job applications, statuses, and interview workflows efficiently.',
    stack: ['Full Stack', 'Dashboard UI', 'Workflow'],
    features: ['Application tracking dashboard', 'Status management', 'Organized workflow UI', 'Responsive layout'],
  },
  {
    type: 'Full Stack Utility Application',
    title: 'Resume Builder Project',
    desc: 'Developed a dynamic resume builder application with customizable templates and professional resume generation features.',
    stack: ['Full Stack', 'Templates', 'Forms'],
    features: ['Dynamic resume generation', 'Professional templates', 'Download-ready layout', 'Interactive forms'],
  },
  {
    type: 'Full Stack Learning Management System',
    title: 'LMS Model Project',
    desc: 'Created an LMS platform model for managing courses, educational content, and user dashboards.',
    stack: ['Full Stack', 'LMS', 'Dashboard'],
    features: ['Course management', 'User dashboard', 'Educational workflow', 'Responsive UI'],
  },
  {
    type: 'API-Based Web Application',
    title: 'Real-Time Weather Application',
    desc: 'Built a weather forecasting application using real-time APIs to display live weather conditions, temperature, and forecasts.',
    stack: ['Weather API', 'JavaScript', 'Dynamic UI'],
    features: ['Live weather updates', 'API integration', 'Dynamic UI', 'Responsive weather cards'],
  },
  {
    type: 'Personal Portfolio Project',
    title: 'Android OS Style Portfolio Website',
    desc: 'Developed a futuristic Android operating system-inspired portfolio website using React and Framer Motion with app-style navigation and immersive mobile interactions.',
    stack: ['React', 'React Router DOM', 'Framer Motion', 'CSS'],
    features: ['Android launcher UI', 'App-style navigation', 'Glassmorphism effects', 'Animated transitions', 'Interactive mobile experience', 'Responsive design'],
  },
];

const SkillCard = ({ title, items, icon }) => (
  <Motion.div
    className="skill-card glass-card"
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
  >
    <div className="skill-title">
      {React.createElement(icon, { size: 18 })}
      <span>{title}</span>
    </div>
    <div className="badge-row">
      {items.map((item, i) => (
        <span key={i} className="tech-badge">{item}</span>
      ))}
    </div>
  </Motion.div>
);

const ProjectCard = ({ title, desc, type, stack, features, liveDemo }) => (
  <Motion.details
    className="android-project-card glass-card ripple"
    whileHover={{ y: -4, boxShadow: '0 0 26px rgba(3,218,198,0.2)' }}
    initial={false}
  >
    <summary>
      <span className="category-pill">{type}</span>
      <div className="project-summary-row">
        <h3>{title}</h3>
        <Sparkles size={16} />
      </div>
    </summary>
    <p>{desc}</p>
    <div className="badge-row" style={{ marginTop: 12 }}>
      {stack.map((tech) => <span className="tech-badge" key={tech}>{tech}</span>)}
    </div>
    <ul className="feature-list">
      {features.map((feature) => <li key={feature}>{feature}</li>)}
    </ul>
    {liveDemo && (
      <a className="project-live-link" href={liveDemo} target="_blank" rel="noopener noreferrer">
        <ExternalLink size={13} /> Live Demo
      </a>
    )}
  </Motion.details>
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
    <Motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="screen scroll-screen"
    >
      <Motion.div className="profile-hero" initial={{ scale: 0.86, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <img
            src="/akashpromax.png"
            alt="Profile"
          />
      </Motion.div>

      <Motion.section id="about" className="screen-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title"><GraduationCap size={20} color="var(--primary-color)" /> About Me</h2>
        <Motion.div className="about-panel glass-card" whileHover={{ y: -4 }}>
          <span className="category-pill">Akash Vaggannavar</span>
          <h3>Computer Science Engineer | Java Full Stack Developer | Web Developer</h3>
          <p>
            Passionate Computer Science Engineering student with strong interest in software development, full stack development,
            web technologies, frontend UI/UX, APIs, and emerging technologies. Enthusiastic about building real-world applications
            and continuously improving problem-solving and development skills.
          </p>
        </Motion.div>

        <div className="education-card glass-card">
          <h3>Education</h3>
          <p style={{ color: '#fff', fontSize: 14 }}>B.E. in Computer Science & Engineering</p>
          <p>Final Year Student</p>
        </div>
      </Motion.section>

      <Motion.section id="internship" className="screen-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title"><Briefcase size={20} color="var(--primary-color)" /> Internship Experience</h2>
        <Motion.div
          className="internship-card glass-card"
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          <span className="category-pill">KodNest Institute of Technology</span>
          <h3>Java Full Stack Developer Intern</h3>
          <p>
            Completed hands-on internship training as a Java Full Stack Developer with practical experience in modern frontend,
            backend, database, API, and version-control workflows. Worked on real-time frontend and full stack projects using
            modern development practices and vibe coding concepts.
          </p>
          <div className="badge-row">
            {internshipSkills.map((skill) => <span className="tech-badge" key={skill}>{skill}</span>)}
          </div>
        </Motion.div>
      </Motion.section>

      <Motion.section id="skills" className="screen-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title">Skills</h2>
        <div className="horizontal-row">
          <SkillCard title="Programming" items={['C', 'Python', 'Java']} icon={Terminal} />
          <SkillCard title="Web Dev" items={['HTML', 'CSS', 'JavaScript']} icon={Globe} />
          <SkillCard title="Tools" items={['Git', 'GitHub', 'VS Code']} icon={Code} />
        </div>
      </Motion.section>

      <Motion.section id="academic" className="screen-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="section-title">
          <BookOpen size={20} color="var(--primary-color)" />
          <h2>Academic Projects</h2>
        </div>
        {projects.slice(0, 2).map((project) => <ProjectCard key={project.title} {...project} />)}
      </Motion.section>

      <Motion.section id="projects" className="screen-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title"><Layers size={20} color="var(--primary-color)" /> Project Galaxy</h2>
        <div className="project-stack">
          {projects.slice(2).map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </Motion.section>
    </Motion.div>
  );
};

export default Profile;
