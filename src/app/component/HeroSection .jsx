"use client";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen w-[88vw] mx-auto flex flex-col items-center justify-between relative overflow-hidden text-center z-20">
      {/* Main content pushed to center */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div
          className="mb-8 transition-all duration-700 ease-out z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1
            className={`text-7xl md:text-9xl lg:text-[12rem] transition-all duration-500 ${
              isHovered ? "text-white scale-105" : "text-gray-800"
            }`}
            style={{
              textShadow: isHovered ? "white" : "none",
            }}
          >
            Arjoi
          </h1>
          <div
            className={`h-px bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 ${
              isHovered ? "w-full opacity-100" : "w-0 opacity-0"
            } mx-auto mt-4`}
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed z-10">
          Sabr. Shukr. Sukoon.
        </p>

        {/* Interactive CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center z-10">
          <button className="hover:border-white group relative px-10 py-5 bg-transparent border-2 border-black rounded-full overflow-hidden transition-all duration-300 hover:border-[#E0B0C4] hover:shadow-lg hover:shadow-[#F4D6C6]/50">
            <span className="relative text-lg z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
              Explore Collection
            </span>
          </button>

          <button className="text-lg md:text-xl text-gray-800 transition-all duration-300 hover:text-white hover:-translate-y-1 underline underline-offset-4">
            Custom Orders
          </button>
        </div>
      </div>

      {/* Scroll indicator - fixed position for proper layout */}
      <div className="p-8 z-10">
        <div className="group cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-base text-gray-800 opacity-70 group-hover:opacity-100 transition-all duration-300 tracking-[0.2em] uppercase font-light">
              Scroll
            </span>
            <div className="relative flex flex-col items-center">
              <div className="w-px h-12 bg-gray-800 opacity-60" />
              <div
                className="absolute top-0 w-1.5 h-1.5 bg-gray-800 rounded-full animate-bounce"
                style={{ animationDuration: "2s" }}
              />
              <div className="absolute top-0">
                <div
                  className="w-4 h-4 border border-gray-800 rounded-full animate-ping opacity-40"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <div className="absolute bottom-0 w-3 h-3 bg-gray-800 rounded-full opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col items-center space-y-0.5 opacity-50 group-hover:opacity-80 transition-all duration-300">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-800 animate-pulse" />
              <div
                className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-800 animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
