
import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS, EXPERIENCES, PROJECTS, PHOTOS } from './constants';
import { SectionWrapper } from './components/SectionWrapper';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { PhotoCard } from './components/PhotoCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    
    // Adjusted observer for high-precision activation
    // We want the section to highlight when it's the primary content in the upper-middle of the screen
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0% -65% 0%',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Spotlight Background - Fixed to viewport for consistent mouse tracking */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 spotlight" 
        style={{ '--x': '0px', '--y': '0px' } as React.CSSProperties}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Header Section (Left on Desktop) */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">John Doe</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Senior Frontend Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <a 
                        className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''}`} 
                        href={`#${item.id}`}
                      >
                        <span className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                        <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === item.id ? 'text-slate-200' : 'text-slate-500'}`}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="#" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                </a>
              </li>
            </ul>
          </header>

          {/* Content Sections (Right on Desktop) */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            
            <SectionWrapper id="about" title="About">
              <div className="space-y-4 text-slate-400">
                <p>
                  Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web design. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                </p>
                <p>
                  My main focus these days is building products and leading projects for our clients at TechCorp. I most enjoy building software in the intersection of design and engineering — things that look good but are also built well under the hood.
                </p>
                <p>
                  When I’m not at the computer, I’m usually rock climbing, reading, or hanging out with my dog, Cooper.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper id="experience" title="Experience">
              <div className="group/list">
                {EXPERIENCES.map((exp, idx) => (
                  <ExperienceCard key={idx} experience={exp} />
                ))}
              </div>
              <div className="mt-12">
                <a className="inline-flex items-center font-semibold leading-tight text-slate-200 group" href="#">
                  <span>View Full Résumé</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </SectionWrapper>

            <SectionWrapper id="projects" title="Projects">
              <div className="group/list">
                {PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
              <div className="mt-12">
                <a className="inline-flex items-center font-semibold leading-tight text-slate-200 group" href="#">
                  <span>View Full Project Archive</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </SectionWrapper>

            <SectionWrapper id="photos" title="Photos">
              <div className="grid grid-cols-3 gap-2">
                {PHOTOS.map((photo, idx) => (
                  <PhotoCard key={photo.id} photo={photo} index={idx} />
                ))}
              </div>
            </SectionWrapper>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Built with <a href="https://reactjs.org/" className="font-medium text-slate-400 hover:text-teal-300 transition-colors">React</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 transition-colors">Tailwind CSS</a>. 
                Deployed with Vercel. All text is set in the Inter typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
