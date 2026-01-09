
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Twitter, ExternalLink, ArrowRight, ArrowLeft, Mail, Phone, MapPin, GraduationCap, Youtube, FileText, Code2, Tent } from 'lucide-react';

// Custom Chess Pawn Icon since Lucide doesn't have a standard one that fits perfectly
const ChessIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 2a3 3 0 0 0-3 3c0 1.1.4 2.1 1 2.8L8 14h8l-2-6.2c.6-.7 1-1.7 1-2.8a3 3 0 0 0-3-3z" />
    <path d="M19 22H5c0-2 1-4 3-5h8c2 1 3 3 3 5z" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

// --- Types ---
interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  summary: string;
  points: string[];
  technologies: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
}

// --- Data ---
const EXPERIENCE_DATA: Experience[] = [
  {
    period: 'FEB 2025 — PRESENT',
    role: 'Full Stack Developer',
    company: 'HT Media (Shine.com)',
    companyUrl: 'https://recruiter.shine.com/',
    summary: 'Helping scale a job platform with 100k+ daily users by moving to microservices.',
    points: [
      'Breaking down the monolith so the site stays up even when one part fails.',
      'Launched a Semantic Search engine using Vector DBs—finding candidates is now way smarter.',
      'Speeded up WhatsApp and Email alerts by 40% using AWS SQS.',
      'Built an AI screener that auto-ranks profiles so recruiters see the best ones first.',
      'Refactored heavy background jobs to cut server load by a solid 35%.'
    ],
    technologies: ['Python', 'Django', 'Milvus', 'AWS SQS', 'LLMs', 'Microservices'],
  },
  {
    period: 'JUN 2022 — OCT 2024',
    role: 'Software Engineer',
    company: 'Samsung R&D Institute',
    companyUrl: 'https://research.samsung.com/sri-d',
    summary: 'Spent two years deep in C++ and Bluetooth code to make device connections "just work".',
    points: [
      'Refactored Bluetooth apps to double CPU performance and save 60% memory.',
      'Built a "Quick Settings" menu that made pairing 70% faster for users.',
      'Created a way for TVs to transfer data securely using Ultrasound sound waves.',
      'Automated TV setup with a sound "handshake"—no more typing in manual PINs.',
      'Cleaned up NFC and Bluetooth code to keep the user experience smooth and bug-free.'
    ],
    technologies: ['C++', 'Bluetooth Stack', 'Ultrasound Tech', 'NFC', 'Memory Management'],
  },
  {
    period: 'JUN 2021 — NOV 2021',
    role: 'Software Engineer Intern',
    company: 'Teliolabs',
    companyUrl: 'https://teliolabs.com/',
    summary: 'Learned the ropes by building data dashboards from the ground up.',
    points: [
      'Built "Project Rikarica" to turn SQL data into interactive React charts.',
      'Optimized dashboard rendering so complex data views stay snappy.'
    ],
    technologies: ['Python', 'React.js', 'SQL Server', 'Data Visualization'],
  },
];

const SOFTWARE_PROJECTS: Project[] = [
  {
    title: 'MyMedic',
    description: 'A smart medical platform that reads your prescriptions using OCR and uses AI to explain dosages and side effects in plain English.',
    technologies: ['Next.js', 'Django', 'OpenCV', 'Tesseract', 'LLMs'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Aether Dashboard',
    description: 'A high-performance monitoring tool for distributed systems with real-time WebSocket updates.',
    technologies: ['React', 'D3.js', 'Node.js', 'WebSockets'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400&auto=format&fit=crop',
  },
];

const IOT_PROJECTS: Project[] = [
  {
    title: 'Ultrasound Data Bridge',
    description: 'A secure alternative to Bluetooth using high-frequency sound waves for device-to-device communication.',
    technologies: ['C++', 'Digital Signal Processing', 'Android'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'SmartGrid Monitor',
    description: 'Industrial IoT platform for tracking energy across facilities via ESP32 clusters and Grafana.',
    technologies: ['MQTT', 'InfluxDB', 'Grafana', 'C++'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop',
  },
];

const BATCH_1 = [
  [
    'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop', // Chess
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', // Tech/Photography
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', // Camera
  ],
  [
    'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800&auto=format&fit=crop', // Chess moves
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', // Mountains
    'https://images.unsplash.com/photo-1511140592763-f3b3009681ad?q=80&w=800&auto=format&fit=crop', // Lenses
  ],
  [
    'https://images.unsplash.com/photo-1586165361295-7834208a17a4?q=80&w=800&auto=format&fit=crop', // Minimalist chess
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800&auto=format&fit=crop', // Street photog
    'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800&auto=format&fit=crop', // Peaks
  ]
];

// --- Components ---

const NavItem = ({ id, label, activeId }: { id: string; label: string; activeId: string }) => {
  const isActive = activeId === id;
  return (
    <a href={`#${id}`} className="group flex items-center py-3 outline-none">
      <span className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-500'}`} />
      <span className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
        {label}
      </span>
    </a>
  );
};

const Tag = ({ text }: { text: string }) => (
  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
    {text}
  </span>
);

const PhotoGrid = ({ columns }: { columns: string[][] }) => (
  <div className="grid grid-cols-3 gap-3 md:gap-5 items-start w-full px-4 lg:px-8">
    {columns.map((col, colIdx) => {
      const columnStyle = colIdx === 1 ? 'lg:-translate-y-10' : colIdx === 2 ? 'lg:translate-y-12' : '';
      return (
        <div key={colIdx} className={`relative flex flex-col gap-4 md:gap-6 transition-all duration-1000 ease-in-out hover:z-30 ${columnStyle}`}>
          {col.map((url, imgIdx) => (
            <div key={imgIdx} className="relative z-10 transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] hover:z-[100] hover:scale-[1.4] group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-800 shadow-2xl">
                <img src={url} alt="Gallery" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

const ProjectItem = ({ project, key }: { project: Project; key?: React.Key }) => (
  <li className="mb-12" key={key}>
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.link} target="_blank" rel="noreferrer">
            <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
            <span>
              {project.title}
              <ArrowRight size={14} className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
          {project.technologies.map(tech => <li key={tech} className="mr-1.5 mt-2"><Tag text={tech} /></li>)}
        </ul>
      </div>
      <div className="z-10 sm:order-1 sm:col-span-2">
        <div className="aspect-video w-full overflow-hidden rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 bg-slate-800">
          <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500" />
        </div>
      </div>
    </div>
  </li>
);

const SocialIcon = ({ href, icon: IconComponent, title }: { href: string, icon: any, title: string }) => (
  <li className="relative group">
    <a 
      className="block hover:text-slate-200 transition-colors" 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      aria-label={title}
    >
      <IconComponent size={24} />
    </a>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-slate-900 bg-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-tighter">
      {title}
    </span>
  </li>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'interests', 'info'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 font-sans">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300" style={{ background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }} />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Shantanu Singh</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I create systems to make experiences better.
              </p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li><NavItem id="about" label="About" activeId={activeSection} /></li>
                  <li><NavItem id="experience" label="Experience" activeId={activeSection} /></li>
                  <li><NavItem id="projects" label="Projects" activeId={activeSection} /></li>
                  <li><NavItem id="interests" label="Interests" activeId={activeSection} /></li>
                  <li><NavItem id="info" label="Info" activeId={activeSection} /></li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <SocialIcon href="https://github.com/Shantanu2k19" icon={Github} title="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/shantanusingh2k19/" icon={Linkedin} title="LinkedIn" />
              <SocialIcon href="https://leetcode.com/u/shan2k19/" icon={Code2} title="LeetCode" />
              <SocialIcon href="https://twitter.com" icon={Twitter} title="Twitter" />
              <SocialIcon href="https://www.youtube.com/@shan_singh" icon={Youtube} title="YouTube" />
              <SocialIcon href="https://lichess.org/@/zodiac2000" icon={ChessIcon} title="Lichess" />
            </ul>
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
              </div>
              <p className="mb-4">
                I'm a <span className="text-slate-50 font-semibold">Software Engineer</span> with nearly 4 years of experience building things that scale. My bread and butter is <span className="text-slate-50">Python (Django/FastAPI) and C++</span>, but I really thrive when I'm decomposing messy monoliths into clean, distributed systems.
              </p>
              <p className="mb-4">
                Beyond pure web dev, I <span className="text-slate-50 font-semibold">love to build software and IoT projects</span>. There's something magical about seeing your code <span className="text-slate-50">performing in hardware</span>—it's amazing to see your logic in action in the physical world. I find it much more amusing and satisfying than just solving DSA problems; <span className="text-slate-50 font-semibold italic">that's what I do for fun</span>.
              </p>
              <p className="mb-4 text-slate-400">
                Currently, I'm at <strong className="text-slate-200">HT Media</strong> working on Shine.com, where I'm helping move the needle for 100k+ daily users. I spend my days engineering AI search solutions with Vector DBs and ensuring our async pipelines are lightning fast.
              </p>
              <p>
                To keep my motivation high and get that occasional <span className="text-slate-50 font-medium">dose of adrenaline</span>, I <span className="text-slate-50">play chess</span>, <span className="text-slate-50">click pictures</span>, and <span className="text-slate-50 font-semibold">climb mountains</span>.
              </p>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
              </div>
              <ol className="group/list">
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <li key={idx} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{exp.period}</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group/link text-base" href={exp.companyUrl} target="_blank" rel="noreferrer">
                            <span>{exp.role} · <span className="inline-block">{exp.company}<ArrowRight size={14} className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></span></span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-300 font-medium italic">{exp.summary}</p>
                        <ul className="mt-3 list-disc list-outside ml-4 space-y-2 text-sm">
                          {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                        <ul className="mt-4 flex flex-wrap">
                          {exp.technologies.map(tech => <li key={tech} className="mr-1.5 mt-2"><Tag text={tech} /></li>)}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12">
                <a className="inline-flex items-center font-medium leading-tight text-slate-200 group" href="/resume.pdf" target="_blank" rel="noreferrer">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none flex items-center gap-2">
                    View Full Résumé <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
              </div>
              
              <div className="mb-12">
                <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-teal-300/50"></span> Software Projects
                </h3>
                <ul className="group/list">
                  {SOFTWARE_PROJECTS.map((project, idx) => (
                    <ProjectItem key={idx} project={project} />
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-teal-300/50"></span> IoT Projects
                </h3>
                <ul className="group/list">
                  {IOT_PROJECTS.map((project, idx) => (
                    <ProjectItem key={idx} project={project} />
                  ))}
                </ul>
              </div>
            </section>

            <section id="interests" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Interests</h2>
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold tracking-tight text-slate-100 italic">
                  Capturing moments, <span className="text-teal-300">calculating moves.</span>
                </h3>
                <p className="mt-2 text-slate-400">When I'm not coding, I'm usually over-analyzing a chess position or hunting for the perfect light with my camera.</p>
              </div>
              
              <div className="overflow-hidden relative w-full pt-20 pb-32 -mx-6 md:-mx-12 lg:mx-0 lg:w-auto">
                <PhotoGrid columns={BATCH_1} />
              </div>
            </section>

            <section id="info" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Info</h2>
              </div>
              <div className="grid gap-12">
                <div>
                  <h3 className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2"><GraduationCap size={16} /> Education</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-slate-200 font-medium">Delhi Technological University</h4>
                      <p className="text-sm">B.Tech in Electronics and Communication · 2018 — 2022</p>
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-medium">Kendriya Vidyalaya</h4>
                      <p className="text-sm">Intermediate · 2018</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2"><Mail size={16} /> Contact</h3>
                  <div className="space-y-3 text-sm">
                    <a href="mailto:shansingh2k19@gmail.com" className="flex items-center gap-3 hover:text-teal-300 transition-colors">
                      <Mail size={14} /> shansingh2k19@gmail.com
                    </a>
                    <p className="flex items-center gap-3">
                      <Phone size={14} /> +91-8368877045
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin size={14} /> Gurugram / Noida, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500">
              <p>Designed in the spirit of Brittany Chiang. Built with React and Tailwind CSS.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
