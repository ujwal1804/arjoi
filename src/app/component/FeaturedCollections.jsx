import React, { useState } from 'react';

const FeaturedCollections = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const collections = [
    {
      id: 1,
      title: "Festive Gift Boxes",
      description: "Curated collections for special occasions",
      gradient: "from-pink-200 to-pink-300",
      icon: "🎁"
    },
    {
      id: 2,
      title: "Corporate Gifting Kits",
      description: "Thoughtful gifts for teams and clients",
      gradient: "from-pink-300 to-pink-400",
      icon: "💼"
    },
    {
      id: 3,
      title: "Signature Candles",
      description: "Hand-poured with intention and care",
      gradient: "from-pink-400 to-pink-500",
      icon: "🕯️"
    },
    {
      id: 4,
      title: "Customer Reviews",
      description: "See what our customers are saying",
      gradient: "from-pink-500 to-pink-600",
      icon: "⭐"
    }
  ];

  return (
    <section id="featured" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-pink-600 mb-4">
            Featured Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                glassmorphism rounded-2xl overflow-hidden 
                transform transition-all duration-500 ease-out
                ${hoveredCard === collection.id ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'}
                hover:shadow-2xl cursor-pointer
              `}>
                {/* Image/Icon Area */}
                <div className={`
                  h-64 bg-gradient-to-br ${collection.gradient} 
                  flex items-center justify-center relative overflow-hidden
                `}>
                  <div className={`
                    text-6xl transform transition-all duration-500
                    ${hoveredCard === collection.id ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
                  `}>
                    {collection.icon}
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    <div className={`
                      absolute top-4 right-4 w-2 h-2 bg-white rounded-full
                      transition-all duration-700
                      ${hoveredCard === collection.id ? 'opacity-100 animate-ping' : 'opacity-0'}
                    `} />
                    <div className={`
                      absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full
                      transition-all duration-700 delay-100
                      ${hoveredCard === collection.id ? 'opacity-100 animate-pulse' : 'opacity-0'}
                    `} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="font-serif text-xl mb-3 text-pink-600 group-hover:text-pink-700 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {collection.description}
                  </p>
                  
                  {/* Interactive CTA */}
                  <div className="flex items-center justify-between">
                    <button className={`
                      text-pink-600 text-sm font-medium
                      transform transition-all duration-300
                      ${hoveredCard === collection.id ? 'translate-x-2' : 'translate-x-0'}
                      hover:text-pink-700
                    `}>
                      Explore →
                    </button>
                    
                    <div className={`
                      w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center
                      transform transition-all duration-300
                      ${hoveredCard === collection.id ? 'scale-110 bg-pink-200' : 'scale-100'}
                    `}>
                      <span className="text-pink-600 text-xs">→</span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-pink-600/10 to-transparent
                  transition-opacity duration-300
                  ${hoveredCard === collection.id ? 'opacity-100' : 'opacity-0'}
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-pink-400 rounded-full overflow-hidden transition-all duration-300 hover:border-pink-500">
            <span className="relative z-10 text-pink-600 group-hover:text-white transition-colors duration-300 font-medium">
              View All Collections
            </span>
            <div className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
