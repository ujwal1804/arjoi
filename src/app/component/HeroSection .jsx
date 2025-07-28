  import React from 'react';

  const HeroSection = () => {
    return (
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-2xl glassmorphism p-8 rounded-lg">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-pink-600">
              Gifts crafted with intention, candles poured with presence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              For celebrations. For stillness. For healing. For love.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#candles" className="btn-primary bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-500 transition">
                Explore Candles
              </a>
              <a href="#contact" className="btn-primary bg-pink-400 text-white rounded-full shadow-lg hover:bg-pink-300 transition">
                Custom Orders
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
