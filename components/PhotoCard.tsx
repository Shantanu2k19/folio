
import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  index: number;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate position in row (0, 1, or 2)
  const positionInRow = index % 3;
  
  // Determine vertical offset based on position
  // Left (0): no offset, Middle (1): up, Right (2): down
  const getVerticalOffset = () => {
    if (positionInRow === 0) return '0'; // Left - no offset
    if (positionInRow === 1) return '-translate-y-4'; // Middle - up
    return 'translate-y-4'; // Right - down
  };

  return (
    <div 
      className={`relative overflow-visible rounded-lg aspect-[4/5] ${getVerticalOffset()} transition-all duration-300 ${
        isHovered ? 'z-50' : 'z-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle background fade on hover */}
      <div 
        className={`absolute -inset-4 bg-black/40 backdrop-blur-sm rounded-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      {/* Image that zooms out of frame */}
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-[1.30]' : 'scale-100'
        }`}
      />
    </div>
  );
};

