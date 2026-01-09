import { NavItem } from '../ui/NavItem';

interface NavigationProps {
  activeSection: string;
}

export const Navigation = ({ activeSection }: NavigationProps) => (
  <nav className="nav hidden lg:block" aria-label="In-page jump links">
    <ul className="mt-16 w-max">
      <li><NavItem id="about" label="About" activeId={activeSection} /></li>
      <li><NavItem id="experience" label="Experience" activeId={activeSection} /></li>
      <li><NavItem id="projects" label="Projects" activeId={activeSection} /></li>
      <li><NavItem id="interests" label="Interests" activeId={activeSection} /></li>
      <li><NavItem id="info" label="Info" activeId={activeSection} /></li>
    </ul>
  </nav>
);

