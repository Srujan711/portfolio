import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, Linkedin, Mail, ExternalLink, Calendar, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Backend": ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "RESTful APIs"],
    "Frontend": ["TypeScript", "React", "Vue.js", "HTML/CSS", "WebRTC"],
    "Data & Infrastructure": ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Elasticsearch"],
    "Machine Learning": ["PyTorch", "TensorFlow", "LSTM", "NLP", "OpenAI API", "CUDA"]
  };

  const projects = [
    {
      id: 1,
      title: "InclusiveHire - Accessible Video Platform",
      description: "WebRTC video conferencing with gender-neutral voice modulation and facial authentication for bias-free interviews",
      tech: ["Java", "TypeScript", "React", "WebRTC", "MongoDB"],
      metrics: "500+ concurrent users, Real-time masking",
      github: "https://github.com/Srujan711/",
    },
    {
      id: 2,
      title: "Annotate, Reflect & Repeat",
      description: "Interview prep tool using OpenAI API for real-time response analysis and personalized feedback generation",
      tech: ["React", "Java", "Spring Boot", "OpenAI", "NLP"],
      metrics: "Automated feedback loops",
      github: "https://github.com/Srujan711",
    },
    {
      id: 3,
      title: "ScrumAI",
      description: "An AI-powered Scrum Master assistant automating task management and sprint planning using NLP techniquesß",
      tech: ["TypeScript", "React", "Python", "Google ADK"],
      metrics: "Critical state management fix",
      github: "https://github.com/Srujan711/AI-Scrum-Master-Backend",
    },
    {
      id: 4,
      title: "Voldemort BookStore",
      description: "E-commerce platform with Elasticsearch integration for natural language search across 10K+ book inventory",
      tech: ["Vue.js", "Java", "Spring Boot", "Elasticsearch"],
      metrics: "Sub-second search, 35% inventory optimization",
      github: "https://github.com/Srujan711/Voldemort-Bookstore",
    }
  ];

  const experience = [
    {
      role: "Full Stack Software Engineer",
      company: "Webologix INC",
      period: "Oct 2024 - Present",
      highlights: [
        "Built JWT-based authentication reducing unauthorized access by 40%",
        "Optimized PostgreSQL queries and Redis caching, cutting response times from 10s to 3s",
        "Deployed Docker containers for microservices achieving 99.9% uptime"
      ]
    },
    {
      role: "Software Engineer",
      company: "Optum UnitedHealth Group",
      period: "Jun 2022 - Dec 2022",
      highlights: [
        "Developed claims processing platform handling 1,000+ daily transactions",
        "Built 35+ Spring Boot microservices with RESTful APIs",
        "Identified CI/CD bottlenecks saving 20% deployment time for 100+ dev team",
        "Implemented Python analytics models improving user engagement tracking"
      ]
    },
    {
      role: "Machine Learning Research Assistant",
      company: "Delhi Technological University",
      period: "May 2021 - May 2022",
      highlights: [
        "94% accuracy spam detection using bidirectional LSTM with attention",
        "Automated test environment setup with Python scripts (30% time reduction)",
        "Optimized data processing with CUDA parallelization (15% speed improvement)"
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a2e;
        }

        ::-webkit-scrollbar-thumb {
          background: #4a4a6e;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #5a5a7e;
        }

        .glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88; }
          to { text-shadow: 0 0 20px #00ff88, 0 0 30px #00ff88; }
        }

        .slide-in {
          animation: slideIn 0.8s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
        }

        .tech-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin: 4px;
        }

        .metric-highlight {
          background: linear-gradient(90deg, #00ff88, #00ffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
      `}</style>

      {/* Animated background elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: 0.05
      }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + i * 5}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`
          }}/>
        ))}
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transform: `translateY(${scrollY > 100 ? '-100%' : '0'})`,
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
            <span className="glow">SR</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['About', 'Skills', 'Projects', 'Experience'].map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.toLowerCase() ? '#00ff88' : '#e0e0e0',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  transition: 'color 0.3s ease'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="slide-in" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.1
          }}>
            Srujan Vithalani
            <span style={{
              display: 'block',
              fontSize: '0.3em',
              fontWeight: 300,
              marginTop: '0.5rem',
              opacity: 0.8
            }}>
              Full Stack Engineer • Open Source Contributor • Entrepreneurial mindset
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            MS Computer Science from Virginia Tech. Currently on STEM OPT.
            <span className="metric-highlight"> Java/Spring Boot</span>, <span className="metric-highlight">Python</span>, <span className="metric-highlight">TypeScript/React</span>.
            Shipping code that scales.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <button className="hover-lift" style={{
              background: 'linear-gradient(135deg, #00ff88 0%, #00ffff 100%)',
              color: '#0a0a0a',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'inherit'
            }}>
              Download Resume
            </button>
            <button className="hover-lift" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: 'transparent',
              color: '#00ff88',
              border: '2px solid #00ff88',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'inherit'
            }}>
              View Projects
            </button>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 255, 136, 0.3)'
            }}>
              <div className="metric-highlight" style={{ fontSize: '1.8rem', fontWeight: 800 }}>2+</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Years Experience</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 255, 136, 0.3)'
            }}>
              <div className="metric-highlight" style={{ fontSize: '1.8rem', fontWeight: 800 }}>15+</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Tech Stack</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 255, 136, 0.3)'
            }}>
              <div className="metric-highlight" style={{ fontSize: '1.8rem', fontWeight: 800 }}>94%</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>ML Accuracy</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 255, 136, 0.3)'
            }}>
              <div className="metric-highlight" style={{ fontSize: '1.8rem', fontWeight: 800 }}>1K+</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Daily Transactions</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {[
              { icon: <Github size={20}/>, link: 'https://github.com/Srujan711', label: 'GitHub' },
              { icon: <Linkedin size={20}/>, link: 'https://www.linkedin.com/in/srujan-vithalani/', label: 'LinkedIn' },
              { icon: <Mail size={20}/>, link: 'mailto:srujanvithlani@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <a key={i} href={social.link} className="hover-lift" style={{
                color: '#e0e0e0',
                textDecoration: 'none',
                padding: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'inline-flex',
                background: 'rgba(255, 255, 255, 0.05)'
              }} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <ChevronRight size={24} style={{ transform: 'rotate(90deg)', opacity: 0.5 }}/>
        </div>
      </section>

      {/* Skills Section */}
      <section id = "skills" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Tech Stack
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="hover-lift" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#00ff88',
                fontWeight: 600
              }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map(skill => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id = "projects" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Featured Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map(project => (
            <div
              key={project.id}
              className="hover-lift"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: hoveredProject === project.id 
                  ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {project.title}
              </h3>
              <p style={{
                marginBottom: '1rem',
                opacity: 0.9,
                lineHeight: 1.6
              }}>
                {project.description}
              </p>
              <p className="metric-highlight" style={{
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                {project.metrics}
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} style={{
                  color: '#00ff88',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  <Github size={16}/> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id = "experience" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Experience
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #00ff88 0%, #00ffff 100%)',
            transform: 'translateX(-50%)'
          }}/>

          {experience.map((exp, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div className="hover-lift" style={{
                width: '45%',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  {exp.role}
                </h3>
                <p style={{
                  color: '#00ff88',
                  marginBottom: '0.5rem'
                }}>
                  {exp.company}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.7,
                  marginBottom: '1rem'
                }}>
                  <Calendar size={14} style={{ marginRight: '0.5rem', display: 'inline' }}/>
                  {exp.period}
                </p>
                <ul style={{
                  listStyle: 'none',
                  paddingLeft: 0
                }}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} style={{
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      opacity: 0.9
                    }}>
                      <ChevronRight size={14} style={{
                        display: 'inline',
                        marginRight: '0.5rem',
                        color: '#00ff88'
                      }}/>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '2rem',
                width: '16px',
                height: '16px',
                background: '#00ff88',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                border: '4px solid #0a0a0a'
              }}/>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'rgba(0, 255, 136, 0.02)',
        borderRadius: '20px'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Education & Achievements
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div className="hover-lift" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Award size={24} style={{ color: '#00ff88', marginBottom: '1rem' }}/>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
              Virginia Tech
            </h3>
            <p style={{ opacity: 0.9 }}>
              MS Computer Science • 2023-2024
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
              STEM OPT Status • GPA: 3.7+
            </p>
          </div>

          <div className="hover-lift" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Award size={24} style={{ color: '#00ff88', marginBottom: '1rem' }}/>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
              Delhi Technological University
            </h3>
            <p style={{ opacity: 0.9 }}>
              BTech Computer Engineering • 2018-2022
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
              JEE: 99.7 percentile (Top 0.3%)
            </p>
          </div>

          <div className="hover-lift" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Award size={24} style={{ color: '#00ff88', marginBottom: '1rem' }}/>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
              Certifications
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                • NVIDIA Deep Learning Fundamentals
              </li>
              <li style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                • NVIDIA Transformer-Based NLP
              </li>
              <li style={{ opacity: 0.9 }}>
                • AWS Solutions Architect (In Progress)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <p style={{
          opacity: 0.7,
          marginBottom: '1rem'
        }}>
          Open to new opportunities in Full Stack & AI Engineering
        </p>
        <a href="mailto:srujanvithlani@gmail.com" className="glow" style={{
          color: '#00ff88',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 600
        }}>
          srujanvithlani@gmail.com
        </a>
        <p style={{
          marginTop: '2rem',
          fontSize: '0.8rem',
          opacity: 0.5
        }}>
          © 2025 Srujan Vithalani. Built with React & high performance standards.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;