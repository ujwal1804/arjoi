"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

// Import all necessary components
import HeroSection from './component/HeroSection ';
import FeaturedCollections from './component/FeaturedCollections';
import CandlesGiftsSection from './component/CandlesGiftsSection';
import CorporateGiftingSection from './component/CorporateGiftingSection';
import UniqueCallToAction from './component/UniqueCallToAction';

export default function Home() {
  const [activeTab, setActiveTab] = useState('featured');

  // New URL with a warm, rosy, and subtle lavender color scheme
  const newGradientUrl = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23FDF6F8&bgColor2=%23FDF6F8&brightness=1.4&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23E0B0C4&color2=%23F4D6C6&color3=%23DDC4E0&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=true&type=plane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.2&uStrength=3.2&uTime=0&wireframe=false";

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative mx-auto scroll-smooth">
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
            urlString={newGradientUrl}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Creative elements added to the Hero Section background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <FeaturedCollections />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <CandlesGiftsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <CorporateGiftingSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <UniqueCallToAction />
      </motion.div>

     
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}