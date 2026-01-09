interface SpotlightBackgroundProps {
  mousePos: { x: number; y: number };
}

export const SpotlightBackground = ({ mousePos }: SpotlightBackgroundProps) => (
  <div 
    className="pointer-events-none fixed inset-0 z-30 transition duration-300" 
    style={{ 
      background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` 
    }} 
  />
);

