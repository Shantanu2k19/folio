
import { Experience, Project, NavItem, Photo } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'photos', label: 'Photos' },
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2024 — PRESENT',
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Solutions',
    description: 'Lead the development of a high-traffic SaaS platform, focusing on performance optimization and scalable React architectures. Mentored junior developers and established UI component standards.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: '#'
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Innovative Labs',
    description: 'Built and maintained multiple responsive web applications. Integrated third-party APIs and enhanced user engagement by 30% through intuitive UX design.',
    tech: ['Vue.js', 'JavaScript', 'SASS', 'Firebase'],
    link: '#'
  },
  {
    period: '2020 — 2022',
    role: 'Junior Web Designer',
    company: 'Creative Studio',
    description: 'Designed and implemented landing pages for various clients. Focused on mobile-first design and cross-browser compatibility.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    link: '#'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Analytics Dashboard',
    description: 'A comprehensive data visualization tool that tracks real-time business metrics using machine learning models to predict trends.',
    image: 'https://picsum.photos/400/250?random=1',
    tech: ['Next.js', 'D3.js', 'PyTorch', 'Tailwind'],
    link: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'A headless commerce solution with lightning-fast page transitions and a custom checkout experience.',
    image: 'https://picsum.photos/400/250?random=2',
    tech: ['React', 'Shopify API', 'Stripe', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Collaborative Editor',
    description: 'Real-time multi-user document editor with offline support and version history tracking.',
    image: 'https://picsum.photos/400/250?random=3',
    tech: ['WebSockets', 'Yjs', 'React', 'Lexical'],
    link: '#'
  }
];

export const PHOTOS: Photo[] = [
  { id: '1', src: 'https://picsum.photos/400/500?random=10', alt: 'Photography 1' },
  { id: '2', src: 'https://picsum.photos/400/500?random=11', alt: 'Photography 2' },
  { id: '3', src: 'https://picsum.photos/400/500?random=12', alt: 'Photography 3' },
  { id: '4', src: 'https://picsum.photos/400/500?random=13', alt: 'Photography 4' },
  { id: '5', src: 'https://picsum.photos/400/500?random=14', alt: 'Photography 5' },
  { id: '6', src: 'https://picsum.photos/400/500?random=15', alt: 'Photography 6' },
  { id: '7', src: 'https://picsum.photos/400/500?random=16', alt: 'Photography 7' },
  { id: '8', src: 'https://picsum.photos/400/500?random=17', alt: 'Photography 8' },
  { id: '9', src: 'https://picsum.photos/400/500?random=18', alt: 'Photography 9' },
];
