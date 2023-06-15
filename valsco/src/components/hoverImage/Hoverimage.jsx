import React, { useRef, useEffect, useState } from 'react';
import gif from './valscogif.gif';
import bg from './bgimgvalsco.jpg';

const HoverImage = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;
      setPosition({ x, y });
      setIsHovered(
        x >= 0 && x <= containerRect.width && y >= 0 && y <= containerRect.height
      );
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageStyle = {
    position: 'absolute',
    width: '350px',
    height: '350px',
    left: `${position.x - 175}px`,
    top: `${position.y - 175}px`,
    transition: 'transform .4s ease',
    transform: isHovered ? 'scale(1)' : 'scale(0)',
  };

  return (
    <div style={{display:'flex',justifyContent:'center',margin:'100px'}}>
    <div
      ref={containerRef}
      style={{
        cursor: 'none',
        position: 'relative',
        width: '100%',
        height: '85vh',
        borderRadius:'10px',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <img
        src={gif}
        alt="HoverImage"
        style={imageStyle}
      />
    </div>
    </div>
  );
};

export default HoverImage;
