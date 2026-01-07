
export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

export interface NavItem {
  id: string;
  label: string;
}
