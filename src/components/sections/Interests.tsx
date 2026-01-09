import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PhotoGrid } from '../ui/PhotoGrid';
import { PHOTO_GALLERY_BATCH_1, PHOTO_GALLERY_BATCH_2 } from '../../data';

export const Interests = () => {
  const [showMore, setShowMore] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowMore(!showMore);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <section id="interests" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Interests" />
      <div className="mb-8">
        <h3 className="text-2xl font-extrabold tracking-tight text-slate-100 italic">
          Capturing moments, <span className="text-teal-300">calculating moves.</span>
        </h3>
        <p className="mt-2 text-slate-400">When I'm not coding, I'm usually over-analyzing a chess position or hunting for the perfect light with my camera.</p>
      </div>
      
      <div className="overflow-hidden relative w-full pt-20 pb-8 -mx-6 md:-mx-12 lg:mx-0 lg:w-auto">
        <div className="relative">
          <div className={`transition-all duration-700 ease-in-out ${showMore ? 'opacity-0 translate-x-[-100%] pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <PhotoGrid columns={PHOTO_GALLERY_BATCH_1} />
          </div>
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${showMore ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%] pointer-events-none'}`}>
            <PhotoGrid columns={PHOTO_GALLERY_BATCH_2} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleToggle}
          disabled={isAnimating}
          className="inline-flex items-center font-medium leading-tight text-slate-200 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none flex items-center gap-2">
            {showMore ? (
              <>
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Previous shots
              </>
            ) : (
              <>
                More shots
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
        </button>
      </div>
    </section>
  );
};

