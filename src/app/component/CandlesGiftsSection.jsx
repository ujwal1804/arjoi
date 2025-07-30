import React, { useState, useEffect } from 'react';

const CandlesGiftsSection = ({ activeTab, setActiveTab }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = document.getElementById('candles');
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      id: 1,
      name: "Noor",
      price: "AED 85",
      tagline: "For quiet mornings and prayers",
      scent: "Lavender & Vanilla",
      burnTime: "40 hours",
      quote: "A gentle light that guides you back to yourself",
      gradient: "from-pink-100 to-pink-200",
      category: "featured"
    },
    {
      id: 2,
      name: "Sukoon",
      price: "AED 95",
      tagline: "For evenings of reflection",
      scent: "Oud & Amber",
      burnTime: "35 hours",
      quote: "In stillness, find the peace that was always there",
      gradient: "from-pink-200 to-pink-300",
      category: "oud"
    },
    {
      id: 3,
      name: "Shukr",
      price: "AED 90",
      tagline: "For moments of gratitude",
      scent: "Sandalwood & Rose",
      burnTime: "45 hours",
      quote: "Every breath, a thank you to the universe",
      gradient: "from-pink-300 to-pink-400",
      category: "sandal"
    }
  ];

  const filters = [
    { id: 'featured', label: 'Featured', icon: '✨' },
    { id: 'lavender', label: 'Lavender', icon: '🌸' },
    { id: 'oud', label: 'Oud', icon: '🌿' },
    { id: 'sandal', label: 'Sandal', icon: '🪵' },
    { id: 'festive', label: 'Festive Spice', icon: '🎄' }
  ];

  return (
    <section id="candles" className="py-20 relative overflow-hidden">
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 opacity-10 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)`
        }}
      />

      <div className="container-custom relative">
        {/* Header with floating elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          <h2 className="text-5xl font-serif text-pink-600 mb-4">Candles & Gifts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each candle is hand-poured with intention, crafted to bring warmth and presence to your space.
          </p>
        </div>
        
        {/* Interactive Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter) => (
            <button 
              key={filter.id}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === filter.id 
                  ? 'bg-pink-600 text-white shadow-lg scale-105' 
                  : 'bg-white/80 text-pink-600 border border-pink-300 hover:border-pink-500 hover:scale-105'
              }`}
              onClick={() => setActiveTab(filter.id)}
            >
              <span className="flex items-center gap-2">
                <span className="text-sm">{filter.icon}</span>
                <span className="font-medium">{filter.label}</span>
              </span>
              {activeTab === filter.id && (
                <div className="absolute inset-0 bg-pink-600 rounded-full animate-pulse opacity-20" />
              )}
            </button>
          ))}
        </div>
        
        {/* Product Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="glassmorphism rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                {/* Product Image Area */}
                <div className={`h-80 bg-gradient-to-br ${product.gradient} relative flex items-center justify-center overflow-hidden`}>
                  {/* Candle representation */}
                  <div className="relative">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${product.gradient} transform transition-all duration-500 ${
                      hoveredCard === product.id ? 'scale-110 rotate-12' : 'scale-100'
                    }`} />
                    {/* Flame effect */}
                    <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full transition-all duration-300 ${
                      hoveredCard === product.id ? 'opacity-100 scale-110' : 'opacity-70'
                    }`} />
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-700 ${
                          hoveredCard === product.id ? 'opacity-100 animate-ping' : 'opacity-0'
                        }`}
                        style={{
                          top: `${20 + i * 20}%`,
                          left: `${15 + i * 25}%`,
                          animationDelay: `${i * 200}ms`
                        }}
                      />
                    ))}
                  </div>

                  {/* Heart icon */}
                  <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === product.id ? 'opacity-100 scale-110' : 'opacity-0'
                  }`}>
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif text-pink-600">{product.name}</h3>
                    <span className="text-lg font-semibold text-pink-600">{product.price}</span>
                  </div>
                  
                  <p className="italic text-sm text-gray-600 mb-4">{product.tagline}</p>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4 p-3 bg-pink-50 rounded-lg">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      {product.scent}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      {product.burnTime}
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-600 text-sm mb-6 italic border-l-2 border-pink-300 pl-3">
                    "{product.quote}"
                  </blockquote>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-pink-400 rounded-full overflow-hidden transition-all duration-300 hover:border-pink-500">
            <span className="relative z-10 text-pink-600 group-hover:text-white transition-colors duration-300 font-medium">
              Explore All Candles
            </span>
            <div className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CandlesGiftsSection;
