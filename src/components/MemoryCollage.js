import React, { useState } from 'react';
import './MemoryCollage.css';

// Lightbox component for displaying clicked images
const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img 
          src={image.url} 
          alt={image.alt} 
          className="lightbox-image"
        />
        {image.caption && (
          <div className="lightbox-caption">{image.caption}</div>
        )}
        <button className="lightbox-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

const MemoryCollage = ({ images, title, content, isActive, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  if (!isActive) return null;

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`memory-collage ${isActive ? 'active' : ''}`}>
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
      <h1 className="memory-title">{title}</h1>
      
      <div className="collage-container">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`collage-item item-${index + 1} ${img.className || ''}`}
            style={{
              '--rotation': `${img.rotation || 0}deg`,
              '--z-index': index + 1,
              '--delay': `${index * 0.1}s`,
              '--x-offset': `${img.xOffset || 0}px`,
              '--y-offset': `${img.yOffset || 0}px`,
              width: img.width || 'auto',
              maxWidth: img.maxWidth || 'none'
            }}
          >
            <div className="polaroid">
              {img.video ? (
                <div className="video-container">
                  <video 
                    className="collage-video"
                    controls
                    onPlay={handleVideoPlay}
                    poster={img.poster}
                  >
                    <source src={img.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!isPlaying && (
                    <div className="play-button">▶️</div>
                  )}
                </div>
              ) : (
                <div 
                  className="image-container"
                  onClick={() => handleImageClick(img)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="collage-img"
                    style={{
                      transform: `rotate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 5}deg)`
                    }}
                  />
                </div>
              )}
              {img.caption && (
                <div className="polaroid-caption">{img.caption}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="memory-content">
        {content}
      </div>
    </div>
  );
};

export default MemoryCollage;
