import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaClock, FaLeaf, FaStar, FaFire, FaGift, FaSprayCan } from 'react-icons/fa';

const CandlesGiftsSection = ({ activeTab, setActiveTab }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Noor",
      price: "AED 85",
      tagline: "For quiet mornings and prayers",
      scent: "Lavender & Vanilla",
      burnTime: "40 hours",
      quote: "A gentle light that guides you back to yourself",
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
      category: "sandal"
    }
  ];

  const filters = [
    { id: 'featured', label: 'Featured', icon: FaStar },
    { id: 'lavender', label: 'Lavender', icon: FaSprayCan },
    { id: 'oud', label: 'Oud', icon: FaLeaf },
    { id: 'sandal', label: 'Sandal', icon: FaFire },
    { id: 'festive', label: 'Festive Spice', icon: FaGift }
  ];

  return (
    <section id="candles" className="py-20 relative overflow-hidden">
      <div className="container-custom relative">
        {/* Floating Header */}
        <div className="text-center mb-16 relative">
          <div className=" inline-block ">
            <h2 className="text-6xl md:text-7xl font-serif text-white mb-2">Candles & Gifts</h2>
            <p className="text-xl text-white/80 max-w-md mx-auto">
              Hand-poured with intention, crafted to bring warmth to your space
            </p>
          </div>
        </div>
        
        {/* Floating Filters */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button 
                key={filter.id}
                className={`glassmorphism px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === filter.id 
                    ? 'border-white/40 bg-white/20 text-white scale-105' 
                    : 'border-white/20 bg-white/10 text-white/70 hover:bg-white/15 hover:scale-105'
                }`}
                onClick={() => setActiveTab(filter.id)}
              >
                <span className="flex items-center gap-2 text-lg">
                  <IconComponent className="text-lg" />
                  <span className="font-medium">{filter.label}</span>
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Floating Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
            >
              {/* Main Card */}
              <div className={`glassmorphism rounded-3xl border border-white/20 overflow-hidden cursor-pointer transition-all duration-500 ${
                hoveredCard === product.id ? 'scale-105 border-white/30' : 'scale-100'
              } ${selectedProduct === product.id ? 'ring-2 ring-white/30' : ''}`}>
                
                {/* Candle Visual */}
                <div className="h-64 relative flex items-center justify-center p-8">
                  <div className="relative">
                    {/* Candle Body */}
                    <div className={`w-24 h-32 bg-gradient-to-b from-white/30 to-white/10 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-500 ${
                      hoveredCard === product.id ? 'scale-110' : 'scale-100'
                    }`} />
                    
                    {/* Flame */}
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gradient-to-t from-orange-400/80 to-yellow-300/80 rounded-full transition-all duration-300 ${
                      hoveredCard === product.id ? 'opacity-100 scale-110 animate-pulse' : 'opacity-70'
                    }`} />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-lg transition-opacity duration-500 ${
                      hoveredCard === product.id ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                  
                  {/* Floating Heart */}
                  <button className={`absolute top-4 right-4 glassmorphism w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === product.id ? 'opacity-100 scale-110' : 'opacity-0'
                  }`}>
                    <FaHeart className="text-white/70 text-sm" />
                  </button>
                </div>
                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif text-white mb-2">{product.name}</h3>
                    <p className="text-lg text-white/70 mb-1">{product.tagline}</p>
                    <p className="text-xl font-bold text-pink-300 mb-3">{product.price}</p>
                  </div>
                  
                  <p className="text-base text-white/60 mb-4 italic">"{product.quote}"</p>
                  
                  {/* Product Details */}
                  <div className="text-base text-white/80 space-y-2">
                    <p><span className="font-medium">Scent:</span> {product.scent}</p>
                    <p><span className="font-medium">Burn Time:</span> {product.burnTime}</p>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button className="w-full glassmorphism py-3 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <FaShoppingCart className="text-xs group-hover:scale-110 transition-transform duration-300" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating CTA */}
        <div className="text-center mt-16">
          <button className="glassmorphism px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 group">
            <span className="flex items-center gap-2">
              Explore All Candles
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CandlesGiftsSection;

