import { SectionHeader } from '../ui/SectionHeader';
import { ProjectItem } from '../ui/ProjectItem';
import { SOFTWARE_PROJECTS, IOT_PROJECTS } from '../../data';

export const Projects = () => (
  <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <SectionHeader title="Projects" />
    
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
);

