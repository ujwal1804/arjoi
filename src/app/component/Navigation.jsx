import React from 'react';

const Navigation = () => {
  return (
    <nav className="sticky top-0    z-50 w-[80vw] mx-auto">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-serif text-4xl text-pink-500">Arjoi</h1>
          <p className="text-xs text-gray-500">Sabr. Shukr. Sukoon</p>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#featured" className="text-pink-500 hover:text-pink-400 transition">Featured</a>
          <a href="#candles" className="text-pink-500 hover:text-pink-400 transition">Candles</a>
          <a href="#corporate" className="text-pink-500 hover:text-pink-400 transition">Corporate</a>
          <a href="#about" className="text-pink-500 hover:text-pink-400 transition">About</a>
          <a href="#contact" className="text-pink-500 hover:text-pink-400 transition">Contact</a>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-pink-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
