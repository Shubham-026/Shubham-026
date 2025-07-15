// You need to install lucide-react: npm install lucide-react
// Make sure you have a Next.js project with Tailwind CSS configured.
// This code goes into your `app/page.js` file.
'use client';

import { Github, Linkedin, Instagram, Mail, Briefcase, School, ExternalLink, Menu, X } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// --- Reusable Components ---

// A card with a color-filling effect on hover for the timeline
const JourneyCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    // Set the CSS variables for the radial gradient's position
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card-interactive bg-white/10 backdrop-blur-sm border border-gray-200/20 rounded-xl shadow-lg p-6 transition-all duration-300 relative overflow-hidden ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// A new card component specifically for projects with a lift and shadow glow effect
const ProjectCard = ({ children, className }) => (
  <div className={`bg-slate-900/60 backdrop-blur-sm border border-gray-200/20 rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 ${className}`}>
    {children}
  </div>
);


// A standard, non-animated card for static content like forms
const StaticCard = ({ children, className }) => (
  <div className={`bg-white/10 backdrop-blur-sm border border-gray-200/20 rounded-xl shadow-lg p-6 transition-all duration-300 ${className}`}>
    {children}
  </div>
);


// A reusable tag component for skills and technologies
const Tag = ({ children }) => (
  <span className="bg-sky-500/20 text-sky-300 text-xs font-medium px-3 py-1 rounded-full">
    {children}
  </span>
);

// --- Page Sections ---

const HeroSection = () => (
  <section id="home" className="py-20 md:py-32 text-center">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative inline-block mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/207007354?v=4"
            alt="Shubham Gupta"
            width={128}
            height={128}
            className="rounded-full object-cover border-4 border-sky-500/50 shadow-lg"
          />
          <span className="absolute bottom-2 right-2 block h-6 w-6 rounded-full bg-green-500 border-2 border-slate-900"></span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Shubham Gupta
        </h1>
        <p className="text-lg md:text-2xl text-sky-300 mb-8">
          Student & Aspiring Developer
        </p>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12 px-4">
          I am a passionate learner, exploring the world of software development with a strong foundation in Java and Python. Eager to solve real-world problems and contribute to innovative projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a href="#contact" className="w-full sm:w-auto bg-sky-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-sky-600 transition-all duration-300 shadow-lg">
            Contact Me
          </a>
          <a href="#projects" className="w-full sm:w-auto border border-sky-500 text-sky-300 font-semibold px-8 py-3 rounded-full hover:bg-sky-500/20 transition-all duration-300">
            View My Work
          </a>
        </div>
        <div className="flex justify-center gap-6 text-gray-400">
          <a href="https://www.linkedin.com/in/shubham-gupta-569576362" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Linkedin size={24} /></a>
          <a href="https://github.com/Shubham-026" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Github size={24} /></a>
          <a href="https://www.instagram.com/_.sg._00_" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Instagram size={24} /></a>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => {
  const skills = ["Java", "Python", "MySQL", "PostgreSQL", "Git", "Linux", "Pandas"];
  return (
    <section id="about" className="py-20 md:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <img
              src="https://avatars.githubusercontent.com/u/207007354?v=4"
              alt="About Shubham Gupta"
              width={600}
              height={800}
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg mb-6">
              Hello! I&apos;m Shubham, a computer science student with a strong desire to build meaningful technology. My coursework and personal projects have provided me with a solid understanding of core programming concepts and database management.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              I enjoy the challenge of learning new things and applying my skills to different problems. I&apos;m proficient with the Linux command line and have experience with the Pandas framework for data manipulation. I am actively seeking opportunities to grow as a developer.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => <Tag key={skill}>{skill}</Tag>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Command-Line Banking System",
      description: "A console-based application to simulate basic banking operations like deposits, withdrawals, and transfers, built using core Java principles.",
      tags: ["Java", "OOP", "Console App"],
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=Java+Project",
      liveUrl: "#",
      githubUrl: "https://github.com/Shubham-026"
    },
    {
      title: "Sales Data Analysis",
      description: "A Python script that uses the Pandas library to clean, process, and derive insights from a sample sales dataset, identifying trends and best-selling products.",
      tags: ["Python", "Pandas", "Data Analysis"],
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=Python+Project",
      liveUrl: "#",
      githubUrl: "https://github.com/Shubham-026"
    },
    {
      title: "Employee Database Management",
      description: "A simple database schema and a set of SQL scripts for managing employee records, departments, and roles using PostgreSQL.",
      tags: ["PostgreSQL", "SQL", "Database Design"],
      image: "https://placehold.co/600x400/1e293b/38bdf8?text=SQL+Project",
      liveUrl: "#",
      githubUrl: "https://github.com/Shubham-026"
    }
  ];

  const bgImage = "data:image/jpeg;base64,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"

  return (
    <section
      id="projects"
      className="py-20 md:py-24 relative"
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} className="flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </div>
              <div className="mt-auto flex justify-between items-center">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 flex items-center gap-2">
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Github size={20} />
                </a>
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <School />,
      role: "Class 10th (ICSE)",
      company: "Your School Name",
      date: "Completed 2023",
      description: "Successfully completed secondary education, building a strong academic foundation."
    },
    {
      icon: <School />,
      role: "Class 12th (CBSE)",
      company: "Your School Name",
      date: "2023 - 2025",
      description: "Focusing on science and mathematics, preparing for higher education in computer science."
    },
    {
      icon: <Briefcase />,
      role: "Self-Directed Learning",
      company: "Personal Projects",
      date: "Ongoing",
      description: "Actively developing projects using Java and Python to solve practical problems and expand my skill set."
    },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom on initial render to show the latest item
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <section id="experience" className="py-20 md:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">My Journey</h2>
        <div className="max-w-3xl mx-auto relative">
          <div
            ref={scrollContainerRef}
            className="max-h-[70vh] sm:max-h-[60vh] overflow-y-auto hide-scrollbar"
          >
            <div className="relative max-w-2xl mx-auto py-4">
              {/* The timeline bar */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-sky-500/30 transform -translate-x-1/2"></div>
              {experiences.map((item, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute left-1/2 top-2 transform -translate-x-1/2 w-8 h-8 bg-slate-800 rounded-full border-2 border-sky-500 flex items-center justify-center">
                    <span className="text-sky-400">{item.icon}</span>
                  </div>
                  <JourneyCard className={`w-full md:w-5/6 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <p className="text-sky-400 text-sm mb-1">{item.date}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <p className="text-gray-400 font-semibold mb-3">{item.company}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </JourneyCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To display success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            I&apos;m open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <StaticCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-slate-700/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full bg-slate-700/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="5"
                className="w-full bg-slate-700/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              ></textarea>
              <button type="submit" className="w-full bg-sky-500 text-white font-semibold p-3 rounded-lg hover:bg-sky-600 transition-all duration-300 shadow-lg disabled:bg-sky-800" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && <p className={`mt-4 text-sm ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}
            </form>
          </StaticCard>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-slate-800">
    <div className="container mx-auto px-4 text-center text-gray-500">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://www.linkedin.com/in/shubham-gupta-569576362" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Linkedin size={20} /></a>
        <a href="https://github.com/Shubham-026" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Github size={20} /></a>
        <a href="https://www.instagram.com/_.sg._00_" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Instagram size={20} /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Shubham Gupta. All Rights Reserved.</p>
    </div>
  </footer>
);


// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* This style tag hides the scrollbar and adds the card hover effect */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .card-interactive::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at var(--x) var(--y),
            rgba(34, 211, 238, 0.2),
            rgba(34, 211, 238, 0) 50%
          );
          opacity: 0;
          transition: opacity 0.4s ease-out;
          border-radius: 0.75rem; /* 12px */
        }
        .card-interactive:hover::before {
          opacity: 1;
        }
      `}</style>
      <div className="bg-slate-900 min-h-screen font-sans">
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <a href="#home" className="text-2xl font-bold text-white">
                S<span className="text-sky-500">G</span>
              </a>
              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8 items-center text-gray-300">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="hover:text-sky-400 transition-colors">{link.label}</a>
                ))}
              </div>
              <a href="mailto:shubhamgupta2406@outlook.com" className="hidden md:inline-block bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-500/40 transition-colors">
                Email Me
              </a>
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(true)} className="text-white p-1">
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-slate-900 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>
              S<span className="text-sky-500">G</span>
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-1">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] -mt-10">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-3xl font-semibold text-white py-5 hover:text-sky-400 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:shubhamgupta2406@outlook.com" className="mt-10 bg-sky-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-sky-600 transition-all duration-300 shadow-lg">
              Email Me
            </a>
          </div>
        </div>

        <main className="pt-16"> {/* Add padding to main to offset fixed header */}
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
