  import React, { useState, useEffect } from 'react';

  const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Interactive background elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-300 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-200 rounded-full animate-pulse delay-1000" />

        {/* Main content */}
        <div className="text-center max-w-4xl px-6">
          <div 
            className="mb-8 transition-all duration-700 ease-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className={`font-serif text-6xl md:text-8xl lg:text-9xl transition-all duration-500 ${
              isHovered ? 'text-pink-500 scale-105' : 'text-gray-800'
            }`}>
              Arjoi
            </h1>
            <div className={`h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent transition-all duration-500 ${
              isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
            } mx-auto mt-4`} />
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sabr. Shukr. Sukoon.
          </p>

          {/* Interactive CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-transparent border border-pink-400 rounded-full overflow-hidden transition-all duration-300 hover:border-pink-500">
              <span className="relative z-10 text-pink-600 group-hover:text-white transition-colors duration-300">
                Explore Collection
              </span>
              <div className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            
            <button className="text-gray-600 hover:text-pink-500 transition-colors duration-300 underline underline-offset-4">
              Custom Orders
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            {/* Animated text */}
            <span className="text-xs text-pink-400 opacity-70 group-hover:opacity-100 transition-all duration-300 tracking-[0.2em] uppercase font-light">
              Scroll
            </span>
            
            {/* Main indicator container */}
            <div className="relative flex flex-col items-center">
              {/* Background line */}
              <div className="w-px h-12 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-200 opacity-60" />
              
              {/* Animated moving dot */}
              <div className="absolute top-0 w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" 
                   style={{ animationDuration: '2s' }} />
              
              {/* Pulsing ring */}
              <div className="absolute top-0">
                <div className="w-4 h-4 border border-pink-300 rounded-full animate-ping opacity-40" 
                     style={{ animationDuration: '3s' }} />
              </div>
              
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 w-3 h-3 bg-pink-400 rounded-full opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            
            {/* Simplified chevron */}
            <div className="flex flex-col items-center space-y-0.5 opacity-50 group-hover:opacity-80 transition-all duration-300">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-pink-400 animate-pulse" />
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-pink-400 animate-pulse" 
                   style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
