import { SectionHeader } from '../ui/SectionHeader';
import { PhotoGrid } from '../ui/PhotoGrid';
import { PHOTO_GALLERY_BATCH_1 } from '../../data';

export const Interests = () => (
  <section id="interests" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <SectionHeader title="Interests" />
    <div className="mb-8">
      <h3 className="text-3xl font-extrabold tracking-tight text-slate-100 italic">
        Capturing moments, <span className="text-teal-300">calculating moves.</span>
      </h3>
      <p className="mt-2 text-slate-400">When I'm not coding, I'm usually over-analyzing a chess position or hunting for the perfect light with my camera.</p>
    </div>
    
    <div className="overflow-hidden relative w-full pt-20 pb-32 -mx-6 md:-mx-12 lg:mx-0 lg:w-auto">
      <PhotoGrid columns={PHOTO_GALLERY_BATCH_1} />
    </div>
  </section>
);

