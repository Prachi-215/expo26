import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    // Auto-complete after animation finishes (3 seconds total: 1.5s display + 1.5s fade)
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-title">STARTUP EXPO' 26</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
