import { SectionHeader } from '../ui/SectionHeader';

export const About = () => (
  <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <SectionHeader title="About" />
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
);

