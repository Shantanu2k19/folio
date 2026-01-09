import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const Info = () => (
  <section id="info" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <SectionHeader title="Info" />
    <div className="grid gap-12">
      <div>
        <h3 className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
          <GraduationCap size={16} /> Education
        </h3>
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
        <h3 className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
          <Mail size={16} /> Contact
        </h3>
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
);

