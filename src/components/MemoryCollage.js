import React, { useState } from 'react';
import './MemoryCollage.css';

const MemoryCollage = ({ images, title, content, isActive, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  if (!isActive) return null;

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`memory-collage ${isActive ? 'active' : ''}`}>
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
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="collage-img"
                  style={{
                    transform: `rotate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 5}deg)`
                  }}
                />
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
