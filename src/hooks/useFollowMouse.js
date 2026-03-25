import { useState, useEffect, useCallback } from 'react';

export default function useFollowMouse(ref) {
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    // Calculate center-relative offsets (-0.5 to 0.5)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Normalize to -10 to 10 pixels for shadow shift
    const offsetX = (x - centerX) / centerX * 8;
    const offsetY = (y - centerY) / centerY * 8;

    setOffsets({ x: offsetX, y: offsetY });
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    setOffsets({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [ref, handleMouseMove, handleMouseLeave]);

  return offsets;
}
