"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen w-[88vw] mx-auto flex flex-col items-center justify-between relative overflow-hidden text-center z-20 bg-[#F9F5F0]">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div
          className="mb-8 transition-all duration-700 ease-out z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1
            className={`text-7xl text-[#5C4433] md:text-9xl lg:text-[12rem] font-[Ciguatera] transition-all duration-500`}
            style={{
              textShadow: isHovered
                ? "0 0 15px rgba(92, 68, 51, 0.6)" // warm brown glow instead of pink
                : "none",
            }}
          >
            Arjoi
          </h1>
          <div
            className={`h-px bg-gradient-to-r from-transparent via-[#A88B6F] to-transparent transition-all duration-500 ${
              isHovered ? "w-full opacity-100" : "w-0 opacity-0"
            } mx-auto mt-4`}
          />
        </div>

        <p className="text-xl md:text-2xl text-[#5C4433]/80 mb-12 max-w-2xl mx-auto leading-relaxed z-10">
          Sabr. Shukr. Sukoon.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center z-10">
          <button className="group relative px-10 py-5 bg-transparent border-2 border-[#5C4433] rounded-full overflow-hidden transition-all duration-300 hover:border-[#A88B6F] hover:shadow-lg hover:shadow-[#A88B6F]/40">
            <span className="relative text-lg z-10 text-[#5C4433] group-hover:text-[#5C4433] transition-colors duration-300">
              Explore Collection
            </span>
          </button>

          <button className="text-lg md:text-xl text-[#5C4433] transition-all duration-300 hover:text-[#5C4433]/60 hover:-translate-y-1 underline underline-offset-4">
            Custom Orders
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="p-8 z-10">
        <div className="group cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-base text-[#5C4433]/70 group-hover:opacity-100 transition-all duration-300 tracking-[0.2em] uppercase font-light">
              Scroll
            </span>
            <div className="relative flex flex-col items-center">
              <div className="w-px h-12 bg-[#5C4433]/60" />
              <div
                className="absolute top-0 w-1.5 h-1.5 bg-[#5C4433] rounded-full animate-bounce"
                style={{ animationDuration: "2s" }}
              />
              <div className="absolute top-0">
                <div
                  className="w-4 h-4 border border-[#5C4433] rounded-full animate-ping opacity-40"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <div className="absolute bottom-0 w-3 h-3 bg-[#5C4433] rounded-full opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col items-center space-y-0.5 opacity-50 group-hover:opacity-80 transition-all duration-300">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#5C4433] animate-pulse" />
              <div
                className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#5C4433] animate-pulse"
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
