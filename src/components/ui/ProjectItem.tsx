import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { Tag } from './Tag';

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => (
  <li className="mb-12">
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

