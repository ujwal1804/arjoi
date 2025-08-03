import React from "react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-filter backdrop-blur-md  ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center w-[88vw]">
        {/* Logo and Tagline */}
        <div className="flex flex-col">
          <h1 className="text-5xl text-black">Arjoi</h1>
          <p className="text-base text-gray-700">Sabr. Shukr. Sukoon</p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#featured"
            className="text-lg text-black hover:text-[#E0B0C4] transition-colors duration-300"
          >
            Featured
          </a>
          <a
            href="#candles"
            className="text-lg text-black hover:text-[#E0B0C4] transition-colors duration-300"
          >
            Candles
          </a>
          <a
            href="#corporate"
            className="text-lg text-black hover:text-[#E0B0C4] transition-colors duration-300"
          >
            Corporate
          </a>
          <a
            href="#about"
            className="text-lg text-black hover:text-[#E0B0C4] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg text-black hover:text-[#E0B0C4] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
