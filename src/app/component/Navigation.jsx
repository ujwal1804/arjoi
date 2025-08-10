import React from "react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F9F5F0]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center w-[88vw]">
        {/* Logo and Tagline */}
        <div className="flex flex-col">
          <h1 className="text-5xl text-[#5C4433] tracking-wide">
            Arjoi
          </h1>
          <p className="text-base  text-[#A77D6D]">
            Sabr. Shukr. Sukoon
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {[
            { label: "Featured", href: "#featured" },
            { label: "Candles", href: "#candles" },
            { label: "Corporate", href: "#corporate" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#5C4433] hover:text-[#C58B7B] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-[#E7C9B1]/30 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-[#5C4433]"
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
