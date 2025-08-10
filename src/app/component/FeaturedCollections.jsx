import React, { useState } from "react";
import {
  FaGift,
  FaBriefcase,
  FaFire,
  FaStar,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

const FeaturedCollections = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const collections = [
    {
      id: 1,
      title: "Festive Gift Boxes",
      description: "Curated collections for special occasions",
      gradient: "from-[#F5EFEA] to-[#FFF8F6]",
      icon: FaGift,
    },
    {
      id: 2,
      title: "Corporate Gifting Kits",
      description: "Thoughtful gifts for teams and clients",
      gradient: "from-[#F5EFEA] to-[#FFF8F6]",
      icon: FaBriefcase,
    },
    {
      id: 3,
      title: "Signature Candles",
      description: "Hand-poured with intention and care",
      gradient: "from-[#F5EFEA] to-[#FFF8F6]",
      icon: FaFire,
    },
    {
      id: 4,
      title: "Customer Reviews",
      description: "See what our customers are saying",
      gradient: "from-[#F5EFEA] to-[#FFF8F6]",
      icon: FaStar,
    },
  ];

  return (
    <section
      id="featured"
      className="py-20 mx-auto w-[88vw] relative overflow-hidden"
    >
      {/* Removed pink background glows */}
      <div className="absolute inset-0 opacity-0 pointer-events-none" />

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-serif text-[#5C4433] mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-[#7A5C4A] max-w-2xl mx-auto">
            Curated pieces that speak to the soul, each telling its own story of
            craftsmanship and care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#A88B6F] to-[#5C4433] mx-auto rounded-full mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => {
            const IconComponent = collection.icon;
            const isHovered = hoveredCard === collection.id;
            return (
              <div
                key={collection.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(collection.id)}
                onMouseLeave={() => setHoveredCard(null)}
                tabIndex={0}
                onFocus={() => setHoveredCard(collection.id)}
                onBlur={() => setHoveredCard(null)}
              >
                <div
                  className={`
                    bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden 
                    transform transition-transform duration-500 ease-out flex flex-col h-full border border-[#A88B6F]/50 cursor-pointer
                    ${isHovered ? "scale-[1.03] shadow-lg border-[#7A5C33]" : "scale-100"}
                  `}
                >
                  {/* Icon area */}
                  <div
                    className={`h-36 bg-gradient-to-br ${collection.gradient} flex items-center justify-center transition-colors duration-500 ${
                      isHovered ? "brightness-105" : "brightness-100"
                    }`}
                  >
                    <div
                      className={`
                        text-6xl text-[#5C4433] transition-transform duration-500
                        ${isHovered ? "scale-125 rotate-6" : "scale-100"}
                      `}
                    >
                      <IconComponent />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-[#5C4433] mb-3">
                        {collection.title}
                      </h3>
                      <p className="text-lg text-[#7A5C4A] mb-4">
                        {collection.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button
                        className={`
                          flex items-center gap-2 text-sm font-medium transition-transform duration-300
                          ${isHovered ? "translate-x-2 text-[#5C4433]" : "translate-x-0 text-[#7A5C4A]"}
                        `}
                        aria-label={`Explore ${collection.title}`}
                      >
                        Explore <FaArrowRight className="text-xs" />
                      </button>

                      <div
                        className={`
                          w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300
                          ${isHovered ? "scale-110 bg-[#7A5C33]" : "bg-[#5C4433]"}
                        `}
                      >
                        <FaChevronRight className="text-white text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            className="group relative px-8 py-4 border-2 border-[#5C4433] rounded-full overflow-hidden transition-colors duration-300 hover:bg-[#5C4433]"
            aria-label="View all collections"
          >
            <span className="relative z-10 text-[#5C4433] group-hover:text-white transition-colors duration-300 font-medium">
              View All Collections
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
