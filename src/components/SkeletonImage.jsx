import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * SkeletonImage Component
 * Handles image loading states with a shimmer skeleton effect.
 * Can be used as a standalone image or wrapped in a Link.
 */
export default function SkeletonImage({ 
  src, 
  alt, 
  link, 
  className = '', 
  imgClassName = '',
  aspectRatio = '16/10',
  fetchPriority = 'auto',
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if image is already cached/loaded
    if (imgRef.current && imgRef.current.complete) {
      Promise.resolve().then(() => setIsLoaded(true));
    }
  }, []);

  const ImageElement = (
    <img 
      ref={imgRef} 
      src={src} 
      alt={alt} 
      loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
      fetchpriority={fetchPriority}
      decoding="async" 
      onLoad={() => setIsLoaded(true)}
      className={`${imgClassName} ${isLoaded ? 'loaded' : ''}`}
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease',
        display: 'block'
      }}
      {...props}
    />
  );

  return (
    <div 
      className={`skeleton-image-wrapper ${className}`}
      style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden',
        aspectRatio: aspectRatio,
        background: 'var(--muted)',
        borderBottom: '1px solid var(--border)' 
      }}
    >
      {/* Skeleton Shimmer */}
      <div 
        className="skeleton-shimmer" 
        style={{ 
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, var(--muted) 25%, var(--border) 50%, var(--muted) 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-loading 1.5s infinite',
          zIndex: 1,
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: isLoaded ? 'none' : 'auto'
        }} 
      />
      
      {/* Conditional Link Wrapping */}
      {link ? (
        <Link to={link}>{ImageElement}</Link>
      ) : (
        ImageElement
      )}
    </div>
  );
}
