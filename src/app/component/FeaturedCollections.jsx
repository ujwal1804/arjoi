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
      gradient: "from-[#F4D6C6] to-[#FDF6F8]",
      icon: FaGift,
    },
    {
      id: 2,
      title: "Corporate Gifting Kits",
      description: "Thoughtful gifts for teams and clients",
      gradient: "from-[#E0B0C4] to-[#FDF6F8]",
      icon: FaBriefcase,
    },
    {
      id: 3,
      title: "Signature Candles",
      description: "Hand-poured with intention and care",
      gradient: "from-[#DDC4E0] to-[#FDF6F8]",
      icon: FaFire,
    },
    {
      id: 4,
      title: "Customer Reviews",
      description: "See what our customers are saying",
      gradient: "from-gray-200 to-gray-100", // A neutral gradient for reviews
      icon: FaStar,
    },
  ];

  return (
    <section
      id="featured"
      className="py-20 mx-auto w-[88vw] relative overflow-hidden perspective-1000"
    >
      {/* Subtle background elements updated with new colors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#E0B0C4] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#F4D6C6] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative ">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-ciguatera text-gray-800 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Curated pieces that speak to the soul, each telling its own story of
            craftsmanship and care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F4D6C6] to-[#E0B0C4] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => {
            const IconComponent = collection.icon;
            return (
              <div
                key={collection.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(collection.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`
                  bg-[#FDF6F8]/60 backdrop-filter backdrop-blur-sm rounded-2xl overflow-hidden 
                  transform-gpu transition-all duration-500 ease-out flex flex-col h-full
                  ${
                    hoveredCard === collection.id
                      ? "scale-[1.03] rotate-x-3 rotate-y-3 shadow-xl"
                      : "scale-100 rotate-x-0 rotate-y-0"
                  }
                  cursor-pointer border border-[#F4D6C6]/50
                `}
                >
                  {/* Icon Area with fixed height */}
                  <div
                    className={`
                    h-36 bg-gradient-to-br ${collection.gradient} flex items-center justify-center relative overflow-hidden
                  `}
                  >
                    <div
                      className={`
                      text-6xl text-gray-800 transform-gpu transition-all duration-500
                      ${
                        hoveredCard === collection.id
                          ? "scale-125 rotate-6 "
                          : "scale-100 rotate-0"
                      }
                    `}
                    >
                      <IconComponent />
                    </div>
                  </div>

                  {/* Content area that grows to fit remaining space */}
                  <div className="p-4 relative flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-2xl font-ciguatera text-gray-800 mb-3 transition-colors duration-300">
                        {collection.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        {collection.description}
                      </p>
                    </div>

                    {/* Interactive CTA */}
                    <div className="flex items-center justify-between">
                      <button
                        className={`
                        text-black text-sm font-medium flex items-center gap-2
                        transform transition-all duration-300
                        ${
                          hoveredCard === collection.id
                            ? "translate-x-2 text-black"
                            : "translate-x-0"
                        }
                      `}
                      >
                        Explore <FaArrowRight className="text-xs" />
                      </button>

                      <div
                        className={`
                        w-8 h-8 rounded-full bg-black backdrop-blur-sm flex items-center justify-center
                        transform transition-all duration-300
                        ${
                          hoveredCard === collection.id
                            ? "scale-110 bg-[#E0B0C4]"
                            : "scale-100"
                        }
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

        {/* Bottom CTA updated with new colors */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-black rounded-full overflow-hidden transition-all duration-300 hover:border-white backdrop-filter backdrop-blur-sm">
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 font-medium">
              View All Collections
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
