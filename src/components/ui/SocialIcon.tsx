import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: LucideIcon | React.ComponentType<{ size: number }>;
  title: string;
}

export const SocialIcon = ({ href, icon: IconComponent, title }: SocialIconProps) => (
  <li className="relative group">
    <a 
      className="block hover:text-slate-200 transition-colors" 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      aria-label={title}
    >
      <IconComponent size={24} />
    </a>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-slate-900 bg-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-tighter">
      {title}
    </span>
  </li>
);

