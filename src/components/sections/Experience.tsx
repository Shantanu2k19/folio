import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { EXPERIENCE_DATA } from '../../data';

export const Experience = () => (
  <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <SectionHeader title="Experience" />
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
);

