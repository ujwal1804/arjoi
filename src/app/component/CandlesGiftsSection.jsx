import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const CandlesGiftsSection = () => {
  // State to track the hovered card on desktop screens.
  // This is not used for mobile/tablet layouts.
  const [hoveredCard, setHoveredCard] = useState(1);

  const products = [
    {
      id: 1,
      name: "Noor",
      price: "AED 85",
      tagline: "For quiet mornings and prayers",
      scent: "Lavender & Vanilla",
      burnTime: "40 hours",
      image: "/assets/noor.jpg",
      quote: "A gentle light that guides you back to yourself",
    },
    {
      id: 2,
      name: "Sukoon",
      price: "AED 95",
      tagline: "For evenings of reflection",
      scent: "Oud & Amber",
      burnTime: "35 hours",
      image: "/assets/sukoon.jpg",
      quote: "In stillness, find the peace that was always there",
    },
    {
      id: 3,
      name: "Shukr",
      price: "AED 90",
      tagline: "For moments of gratitude",
      scent: "Sandalwood & Rose",
      burnTime: "45 hours",
      image: "/assets/shukr.jpg",
      quote: "Every breath, a thank you to the universe",
    },
    {
      id: 4,
      name: "Serene",
      price: "AED 88",
      tagline: "A breath of fresh air",
      scent: "Eucalyptus & Mint",
      burnTime: "42 hours",
      image: "/assets/serene.jpg",
      quote: "Find your quiet corner in a busy world",
    },
  ];

  return (
    <section id="candles" className="py-20 relative w-[90vw] mx-auto">
      <div className="relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-6xl md:text-7xl font-ciguatera text-gray-800 mb-2">
            Candles & Gifts
          </h2>
          <p className="text-xl text-gray-700 max-w-md mx-auto">
            Hand-poured with intention, crafted to bring warmth to your space
          </p>
        </div>

        {/* This layout is for Desktop screens and above (lg and up).
          It features the complex hover effect with expanding cards.
        */}
        <div className="hidden lg:flex  flex-row items-center justify-center gap-8 group"
          onMouseLeave={() => setHoveredCard(1)} // Revert to the first card on mouse leave
        >
          {products.map((product) => {
            const isHovered = hoveredCard === product.id;
            const cardClass = isHovered ? "w-[45vw] " : "w-[12vw]";

            return (
              <div
                key={product.id}
                className={`
                  ${cardClass} h-[95vh]
                  bg-gray-50 rounded-[2rem] shadow-sm
                  flex-shrink-0 relative overflow-hidden
                  transition-all duration-500 ease-in-out
                  cursor-pointer
                `}
                onMouseEnter={() => setHoveredCard(product.id)}
              >
                {/* Content for the Expanded Card (Desktop) */}
                <div
                  className={`
                    p-6 flex flex-col h-full absolute inset-0
                    transition-all duration-500 ease-in-out
                    ${
                      isHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }
                  `}
                >
                  <div className="relative overflow-hidden h-64 rounded-[2rem] mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-300 transform-gpu group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between text-center">
                    <div>
                      <h3 className="text-3xl font-ciguatera text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-2">
                        {product.tagline}
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-black mb-4">
                        {product.price}
                      </p>
                      <button className="w-full px-4 py-3 border-2 border-black text-black rounded-full font-medium text-base hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <FaShoppingCart className="text-sm" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content for the Collapsed Card (Desktop) */}
                <div
                  className={`
                    flex items-center justify-center h-full absolute inset-0
                    transition-all duration-500 ease-in-out
                    ${isHovered ? "opacity-0 translate-x-full" : "opacity-100"}
                  `}
                >
                  <h3 className="text-3xl font-ciguatera text-gray-800 -rotate-90 origin-center whitespace-nowrap">
                    {product.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* This layout is for Mobile and Tablet screens (hidden on lg and up).
          It uses a clean grid for better usability on touch devices.
        */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full  h-[450px] bg-gray-50 rounded-[2rem] shadow-sm relative overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="relative overflow-hidden h-64 rounded-[2rem] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between text-center">
                  <div>
                    <h3 className="text-3xl font-ciguatera text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-2">
                      {product.tagline}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black mb-4">
                      {product.price}
                    </p>
                    <button className="w-full px-4 py-3 border-2 border-black text-black rounded-full font-medium text-base hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <FaShoppingCart className="text-sm" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-black rounded-full overflow-hidden transition-all duration-300 hover:border-white backdrop-filter backdrop-blur-sm">
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 font-medium">
              Explore All Candles
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CandlesGiftsSection;
