import { motion } from 'framer-motion';
import SkeletonImage from '../SkeletonImage';

const MotionSection = motion.section;

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function GallerySection({ data, number, onImageClick }) {
  if (!data || data.length === 0) return null;
  return (
    <MotionSection className="case-section" variants={variants}>
      <div className="section-header">
        <p className="section-number">{number} / Gallery</p>
        <h2 className="case-section-title">Screenshots</h2>
      </div>
      <div className="gallery-grid">
        {data.map(({ src, alt, caption }) => (
          <div key={alt} className="gallery-item-container">
            <div 
              className="image-tray" 
              onClick={() => onImageClick && onImageClick({ src, alt })}
            >
              <SkeletonImage 
                src={src} 
                alt={alt} 
                aspectRatio="auto" 
                className="gallery-image-wrapper"
                imgClassName="gallery-image"
              />
            </div>
            {caption && <div className="gallery-caption">{caption}</div>}
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
