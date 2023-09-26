// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Landcss.css';


const LandingPage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = [
    '/expresst.png',
    'expresst.png',
    '/images/expresst.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <div className="landing-page">
      <div
        className="content9"
        style={{
          backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        }}
      >
        <animated.h1 style={contentProps}>Welcome to Our Website</animated.h1>
        <animated.p style={contentProps}>Your awesome content goes here.</animated.p>
      </div>
    </div>
  );
};

export default LandingPage;
