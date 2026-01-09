import { Github, Linkedin, Twitter, Youtube, Code2 } from 'lucide-react';
import { SocialIcon } from '../ui/SocialIcon';
import { Navigation } from './Navigation';
import { ChessIcon } from '../../icons/ChessIcon';

interface HeaderProps {
  activeSection: string;
}

export const Header = ({ activeSection }: HeaderProps) => (
  <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Shantanu Singh</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        I create systems to make experiences better.
      </p>
      <Navigation activeSection={activeSection} />
    </div>
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      <SocialIcon href="https://github.com/Shantanu2k19" icon={Github} title="GitHub" />
      <SocialIcon href="https://www.linkedin.com/in/shantanusingh2k19/" icon={Linkedin} title="LinkedIn" />
      <SocialIcon href="https://leetcode.com/u/shan2k19/" icon={Code2} title="LeetCode" />
      <SocialIcon href="https://twitter.com" icon={Twitter} title="Twitter" />
      <SocialIcon href="https://www.youtube.com/@shan_singh" icon={Youtube} title="YouTube" />
      <SocialIcon href="https://lichess.org/@/zodiac2000" icon={ChessIcon} title="Lichess" />
    </ul>
  </header>
);

