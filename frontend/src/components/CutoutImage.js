import React from 'react';

const CutoutImage = ({ src, alt, className = '', cutoutStyle = 'modern' }) => {
  const getCutoutStyles = () => {
    const styles = {
      modern: {
        clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
        borderRadius: '20px'
      },
      circular: {
        clipPath: 'circle(45% at 50% 50%)',
        borderRadius: '50%'
      },
      hexagon: {
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
      },
      rounded: {
        clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)',
        borderRadius: '20px'
      },
      wave: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 25% 100%, 0% 75%)'
      }
    };
    
    return styles[cutoutStyle] || styles.modern;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        style={getCutoutStyles()}
      />
      {/* Overlay para dar mais profundidade */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-100 opacity-20 transition-opacity duration-300 hover:opacity-10"
        style={getCutoutStyles()}
      ></div>
    </div>
  );
};

export default CutoutImage;