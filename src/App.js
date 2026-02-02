import React, { useState, useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import Aboutsection from './components/About';
import Register from "./components/Register";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Timeline from "./components/Timeline";
import SplashScreen from "./components/SplashScreen";
import Particles from "./components/Particles";

function App() 
{
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Always show splash on mount for now (can add sessionStorage later)
    setShowSplash(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashSeen', 'true');
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Particles />
      <BrowserRouter>
        <Homepage/>
        <Aboutsection/>
        <Timeline/>
        <Register/>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
