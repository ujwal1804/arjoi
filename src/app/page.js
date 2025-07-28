"use client";
import React, { useState } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

// import AboutSection from './AboutSection';
// import ContactSection from './ContactSection';
// import Footer from './Footer';
import HeroSection from './component/HeroSection ';
import FeaturedCollections from './component/FeaturedCollections';
import CandlesGiftsSection from './component/CandlesGiftsSection';
import CorporateGiftingSection from './component/CorporateGiftingSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="relative w-[80vw] mx-auto">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23FAF7F4&bgColor2=%23FAF7F4&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23D8C4E3&color2=%23C1A1D3&color3=%23E8C4C4&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=true&type=plane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.2&uStrength=3.2&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>

      <HeroSection />
      <FeaturedCollections />
      <CandlesGiftsSection activeTab={activeTab} setActiveTab={setActiveTab} />
       <CorporateGiftingSection />
      {/*
      <AboutSection />
      <ContactSection />
      <Footer /> */}
    </div>
  );
}
