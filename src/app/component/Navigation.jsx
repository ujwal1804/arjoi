"use client"
import React, { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Featured", href: "#featured" },
    { label: "Candles", href: "#candles" },
    { label: "Corporate", href: "#corporate" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F9F5F0] shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center w-[88vw]">
        {/* Logo and Tagline */}
        <div className="flex flex-col">
          <h1 className="text-5xl text-[#5C4433] tracking-wide">Arjoi</h1>
          <p className="text-base text-[#A77D6D]">Sabr. Shukr. Sukoon</p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
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
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#E7C9B1]/30 transition-colors duration-300"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {!menuOpen ? (
            // Hamburger Icon
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
          ) : (
            // Close Icon
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#F9F5F0] overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-[#5C4433] hover:text-[#C58B7B] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
