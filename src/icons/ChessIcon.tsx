interface ChessIconProps {
  size: number;
}

export const ChessIcon = ({ size }: ChessIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 2a3 3 0 0 0-3 3c0 1.1.4 2.1 1 2.8L8 14h8l-2-6.2c.6-.7 1-1.7 1-2.8a3 3 0 0 0-3-3z" />
    <path d="M19 22H5c0-2 1-4 3-5h8c2 1 3 3 3 5z" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

