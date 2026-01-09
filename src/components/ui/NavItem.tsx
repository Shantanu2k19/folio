interface NavItemProps {
  id: string;
  label: string;
  activeId: string;
}

export const NavItem = ({ id, label, activeId }: NavItemProps) => {
  const isActive = activeId === id;
  return (
    <a href={`#${id}`} className="group flex items-center py-3 outline-none">
      <span className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-500'}`} />
      <span className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
        {label}
      </span>
    </a>
  );
};

