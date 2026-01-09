
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Twitter, ExternalLink, ArrowRight, ArrowLeft, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

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
    period: 'Feb 2025 — PRESENT',
    role: 'Full Stack Developer',
    company: 'HT Media',
    companyUrl: '#',
    summary: 'Building scalable backend systems and AI-driven solutions for Shine.com, a platform serving 100k+ daily active users.',
    points: [
      'Led the migration from a monolithic architecture to microservices, breaking down core components to improve scalability and reliability.',
      'Built a semantic search system using vector databases and LLMs that improved candidate matching and increased hiring conversion by 30%.',
      'Replaced old messaging systems with AWS SQS, cutting down message delivery time by 40% for WhatsApp and email notifications.',
      'Created an AI pipeline that automatically screens candidates and updates their profile rankings based on responses.',
      'Optimized database queries and refactored heavy background jobs, reducing overall system load by 35%.'
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'AWS SQS', 'Redis', 'Milvus', 'LLMs', 'PostgreSQL'],
  },
  {
    period: 'Jun 2022 — Oct 2024',
    role: 'Software Engineer',
    company: 'Samsung R&D Institute Delhi',
    companyUrl: '#',
    summary: 'Worked on Bluetooth and NFC systems for Samsung TVs, focusing on performance optimization and user experience.',
    points: [
      'Refactored legacy C++ Bluetooth code, improving CPU performance by 50% and reducing memory usage by 60%.',
      'Designed a quick settings feature that made device pairing 70% faster for users.',
      'Built secure ultrasound communication APIs as an alternative to Bluetooth for Samsung TVs.',
      'Automated the TV setup process using sound waves instead of manual PIN entry, saving 20% setup time.',
      'Maintained and fixed bugs in NFC and Bluetooth codebases to improve overall user experience.'
    ],
    technologies: ['C++', 'Bluetooth', 'NFC', 'Ultrasound', 'Linux'],
  },
  {
    period: 'Jun 2021 — Nov 2021',
    role: 'Software Engineer Intern',
    company: 'Teliolabs',
    companyUrl: '#',
    summary: 'Developed a full-stack analytics platform for visualizing SQL Server data.',
    points: [
      'Built an analytics dashboard from scratch using Python and React.js to visualize complex datasets.',
      'Optimized performance to ensure smooth rendering of graphs and data tables even with large datasets.'
    ],
    technologies: ['Python', 'React.js', 'SQL Server', 'JavaScript'],
  },
];

const SOFTWARE_PROJECTS: Project[] = [
  {
    title: 'MyMedic',
    description: 'A medical platform that analyzes prescriptions using OCR and AI. Extracts dosage and side-effect information from prescription images and provides real-time doctor consultations through chat.',
    technologies: ['Next.js', 'Django', 'OpenCV', 'LLMs', 'Tesseract OCR'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Project Rikarica',
    description: 'An analytics dashboard that visualizes SQL Server data with interactive graphs and tables. Built to handle complex datasets efficiently.',
    technologies: ['Python', 'React.js', 'SQL Server', 'JavaScript'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=400&auto=format&fit=crop',
  },
];

const IOT_PROJECTS: Project[] = [
  {
    title: 'Bluetooth Quick Settings',
    description: 'A streamlined device pairing system for Samsung TVs that reduced connection time by 70%. Designed protocols to make Bluetooth connections faster and more intuitive.',
    technologies: ['C++', 'Bluetooth', 'Linux'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Ultrasound Data Transfer',
    description: 'Secure communication APIs for Samsung TVs using high-frequency sound waves as an alternative to Bluetooth. Enabled automated TV setup without manual PIN entry.',
    technologies: ['C++', 'Ultrasound', 'Linux', 'API Design'],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=400&auto=format&fit=crop',
  },
];

// First page: 2, 3, 4, 5, 12, 11, 17, 19, 21
const BATCH_1 = [
  [
    '/media/2.jpeg',
    '/media/3.jpeg',
    '/media/4.jpeg',
  ],
  [
    '/media/5.jpeg',
    '/media/12.jpeg',
    '/media/11.jpeg',
  ],
  [
    '/media/17.jpeg',
    '/media/19.jpeg',
    '/media/21.jpeg',
  ]
];

// Second page: 1, 6, 7, 8, 9, 10, 13, 15, 18
const BATCH_2 = [
  [
    '/media/1.jpeg',
    '/media/6.jpeg',
    '/media/7.jpeg',
  ],
  [
    '/media/8.jpeg',
    '/media/9.jpeg',
    '/media/10.jpeg',
  ],
  [
    '/media/13.jpeg',
    '/media/15.jpeg',
    '/media/18.jpeg',
  ]
];

// --- Components ---

const NavItem = ({ id, label, activeId }: { id: string; label: string; activeId: string }) => {
  const isActive = activeId === id;
  return (
    <a
      href={`#${id}`}
      className="group flex items-center py-3 outline-none"
    >
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
  // Reduced grid padding (px-2 to px-6) to make photos naturally larger in the container
  <div className="grid grid-cols-3 gap-3 md:gap-5 items-start w-full px-4 lg:px-8">
    {columns.map((col, colIdx) => {
      const columnStyle = colIdx === 1 ? 'lg:-translate-y-10' : colIdx === 2 ? 'lg:translate-y-4' : '';
      return (
        <div key={colIdx} className={`relative flex flex-col gap-4 md:gap-6 transition-all duration-1000 ease-in-out hover:z-30 ${columnStyle}`}>
          {col.map((url, imgIdx) => (
            <div key={imgIdx} className="relative z-10 transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] hover:z-[100] hover:scale-[1.4] group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-800 shadow-2xl">
                <img src={url} alt={`Interest ${colIdx + 1}-${imgIdx + 1}`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

// Added key to props type to satisfy strict TypeScript checking when component is used in map()
const ProjectItem = ({ project }: { project: Project; key?: React.Key }) => (
  <li className="mb-12">
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.link} target="_blank" rel="noreferrer" aria-label={project.title}>
            <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
            <span>
              {project.title}
              <ArrowRight size={14} className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
          {project.technologies.map(tech => (
            <li key={tech} className="mr-1.5 mt-2">
              <Tag text={tech} />
            </li>
          ))}
        </ul>
      </div>
      <div className="z-10 sm:order-1 sm:col-span-2">
        <div className="aspect-video w-full overflow-hidden rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:w-full bg-slate-800">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500"
          />
        </div>
      </div>
    </div>
  </li>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showBatch2, setShowBatch2] = useState(false);

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
                <a href="/">Software Engineer</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Backend Systems & AI Solutions
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Building scalable systems, breaking down monoliths, and creating AI-driven solutions. 3.8 years of experience architecting backend systems that serve 100k+ users.
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
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs"><a className="block hover:text-slate-200 transition-colors" href="#"><Github size={24} /></a></li>
              <li className="mr-5 text-xs"><a className="block hover:text-slate-200 transition-colors" href="#"><Linkedin size={24} /></a></li>
              <li className="mr-5 text-xs"><a className="block hover:text-slate-200 transition-colors" href="#"><Twitter size={24} /></a></li>
            </ul>
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
              </div>
              <p className="mb-4">
                I'm a software engineer with 3.8 years of experience building scalable backend systems. I specialize in Python (Django/FastAPI) and C++, with a focus on breaking down monolithic architectures and optimizing distributed systems.
              </p>
              <p className="mb-4">
                Currently at HT Media, I'm working on Shine.com where I've architected the transition to microservices, built AI-driven search solutions using vector databases and LLMs, and optimized high-throughput async pipelines. I enjoy solving complex problems around system performance, scalability, and building maintainable code.
              </p>
              <p>When I'm not coding, I'm usually exploring new technologies, working on side projects, or capturing moments through photography.</p>
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
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group/link text-base" href={exp.companyUrl}>
                            <span>{exp.role} · <span className="inline-block">{exp.company}<ArrowRight size={14} className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></span></span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-300 font-medium">{exp.summary}</p>
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
                <p className="mt-2 text-slate-400">Exploring the world through a lens and 64 squares.</p>
              </div>
              
              {/* Adjusted padding (pt-12 to pt-20, pb-24 to pb-32) to accommodate the slightly larger scaled hover effect without clipping */}
              <div className="overflow-hidden relative w-full pt-20 pb-32 -mx-6 md:-mx-12 lg:mx-0 lg:w-auto">
                <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(${showBatch2 ? '-100%' : '0%'})` }}>
                  <div className="min-w-full"><PhotoGrid columns={BATCH_1} /></div>
                  <div className="min-w-full"><PhotoGrid columns={BATCH_2} /></div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button onClick={() => setShowBatch2(!showBatch2)} className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group outline-none">
                  {showBatch2 ? <><ArrowLeft size={16} className="mr-2 group-hover:-translate-x-2 transition-transform" />View earlier moments</> : <>View more shots<ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" /></>}
                </button>
              </div>
            </section>

            <section id="info" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Info</h2>
              </div>
              <div className="grid gap-12">
                <div>
                  <h3 className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2"><GraduationCap size={16} /> Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-slate-200 font-medium">B.Tech in Electronics and Communication</h4>
                      <p className="text-sm">Delhi Technological University · 2018 — 2022</p>
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-medium">Intermediate</h4>
                      <p className="text-sm">Kendriya Vidyalaya · 2018</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-4">Technical Skills</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Languages:</p>
                      <p className="text-slate-400">Python, C++, JavaScript (ES6+), SQL</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Frameworks:</p>
                      <p className="text-slate-400">Django, FastAPI, Flask, Next.js, React.js</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Databases & Storage:</p>
                      <p className="text-slate-400">MySQL, PostgreSQL, Redis, Milvus (Vector DB), AWS S3</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Tools & DevOps:</p>
                      <p className="text-slate-400">AWS SQS, RabbitMQ, Celery, Docker, Git, Linux Shell, Postman</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500">
              <p>Coded in VS Code. Built with React and Tailwind CSS.</p>
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
