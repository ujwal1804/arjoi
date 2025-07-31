import React, { useState } from 'react';
import { FaGift, FaBriefcase, FaFire, FaStar, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const FeaturedCollections = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const collections = [
    {
      id: 1,
      title: "Festive Gift Boxes",
      description: "Curated collections for special occasions",
      gradient: "",
      icon: FaGift
    },
    {
      id: 2,
      title: "Corporate Gifting Kits",
      description: "Thoughtful gifts for teams and clients",
      gradient: "",
      icon: FaBriefcase
    },
    {
      id: 3,
      title: "Signature Candles",
      description: "Hand-poured with intention and care",
      gradient: "",
      icon: FaFire
    },
    {
      id: 4,
      title: "Customer Reviews",
      description: "See what our customers are saying",
      gradient: "",
      icon: FaStar
    }
  ];

  return (
    <section id="featured" className="py-20 relative overflow-hidden ">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-300 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-serif text-white mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Curated pieces that speak to the soul, each telling its own story of craftsmanship and care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-gray-300 mx-auto rounded-full" />
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
                <div className={`
                  glassmorphism rounded-2xl overflow-hidden 
                  transform transition-all duration-500 ease-out
                  ${hoveredCard === collection.id ? 'scale-105' : 'scale-100'}
                  hover:shadow-2xl cursor-pointer border border-white/20
                `}>
                  {/* Icon Area */}
                  <div className={`
                    h-64 bg-gradient-to-br ${collection.gradient} h-[30vh]
                    flex items-center justify-center relative overflow-hidden
                  `}>
                    <div className={`
                      text-6xl text-white transform transition-all duration-500
                      ${hoveredCard === collection.id ? 'scale-125' : 'scale-100'}
                    `}>
                      <IconComponent />
                    </div>
                    
                    {/* Subtle particles */}
                    <div className="absolute inset-0">
                      <div className={`
                        absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full
                        transition-all duration-700
                        ${hoveredCard === collection.id ? 'opacity-100 animate-ping' : 'opacity-0'}
                      `} />
                      <div className={`
                        absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full
                        transition-all duration-700 delay-100
                        ${hoveredCard === collection.id ? 'opacity-100 animate-pulse' : 'opacity-0'}
                      `} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative h-[30vh]">
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                      {collection.title}
                    </h3>
                    <p className="text-lg text-white/80 mb-4">
                      {collection.description}
                    </p>
                    
                    {/* Interactive CTA */}
                    <div className="flex items-center justify-between">
                      <button className={`
                        text-white text-sm font-medium flex items-center gap-2
                        transform transition-all duration-300
                        ${hoveredCard === collection.id ? 'translate-x-2' : 'translate-x-0'}
                        hover:text-gray-200
                      `}>
                        Explore <FaArrowRight className="text-xs" />
                      </button>
                      
                      <div className={`
                        w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
                        transform transition-all duration-300
                        ${hoveredCard === collection.id ? 'scale-110 bg-white/30' : 'scale-100'}
                      `}>
                        <FaChevronRight className="text-white text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                    transition-opacity duration-300
                    ${hoveredCard === collection.id ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 rounded-full overflow-hidden transition-all duration-300 hover:border-white/50 glassmorphism">
            <span className="relative z-10 text-white group-hover:text-gray-900 transition-colors duration-300 font-medium">
              View All Collections
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
