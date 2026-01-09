import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SpotlightBackground } from './components/layout/SpotlightBackground';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Interests } from './components/sections/Interests';
import { Info } from './components/sections/Info';
import { useActiveSection } from './hooks/useActiveSection';
import { useMousePosition } from './hooks/useMousePosition';

const App = () => {
  const activeSection = useActiveSection();
  const mousePos = useMousePosition();

  return (
    <div className="relative min-h-screen bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 font-sans">
      <SpotlightBackground mousePos={mousePos} />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} />

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Interests />
            <Info />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;

