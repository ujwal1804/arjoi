import React from 'react';

const FeaturedCollections = () => {
  return (
    <section id="featured" className="py-16 ">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12 text-pink-600">Featured Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Festive Gift Boxes */}
          <div className="glassmorphism rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="h-64 bg-pink-200"></div>
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-pink-600">Festive Gift Boxes</h3>
              <p className="text-gray-600 mb-4">Curated collections for special occasions</p>
              <a href="#" className="text-pink-600 hover:underline">View Collection</a>
            </div>
          </div>
          
          {/* Corporate Gifting Kits */}
          <div className="glassmorphism rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="h-64 bg-pink-300"></div>
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-pink-600">Corporate Gifting Kits</h3>
              <p className="text-gray-600 mb-4">Thoughtful gifts for teams and clients</p>
              <a href="#" className="text-pink-600 hover:underline">View Collection</a>
            </div>
          </div>
          
          {/* Signature Candles */}
          <div className="glassmorphism rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="h-64 bg-pink-400"></div>
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-pink-600">Signature Candles</h3>
              <p className="text-gray-600 mb-4">Hand-poured with intention and care</p>
              <a href="#" className="text-pink-600 hover:underline">View Collection</a>
            </div>
          </div>
          
          {/* Customer Review */}
          <div className="glassmorphism rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="h-64 bg-pink-500 flex items-center justify-center">
              <div className="text-4xl text-pink-600">★★★★★</div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-pink-600">Customer Reviews</h3>
              <p className="text-gray-600 mb-4">See what our customers are saying</p>
              <a href="#" className="text-pink-600 hover:underline">Read Reviews</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
