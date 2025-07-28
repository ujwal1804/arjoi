import React from 'react';

const CandlesGiftsSection = ({ activeTab, setActiveTab }) => {
  return (
    <section id="candles" className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-center text-pink-600">Candles & Gifts</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">Each candle is hand-poured with intention, crafted to bring warmth and presence to your space.</p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'featured' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 border border-pink-600'}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'lavender' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 border border-pink-600'}`}
            onClick={() => setActiveTab('lavender')}
          >
            Lavender
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'oud' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 border border-pink-600'}`}
            onClick={() => setActiveTab('oud')}
          >
            Oud
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'sandal' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 border border-pink-600'}`}
            onClick={() => setActiveTab('sandal')}
          >
            Sandal
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeTab === 'festive' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 border border-pink-600'}`}
            onClick={() => setActiveTab('festive')}
          >
            Festive Spice
          </button>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="card overflow-visible group glassmorphism">
            <div className="h-80 bg-pink-100 relative flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-pink-200 absolute transform group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium text-pink-600">Noor</h3>
                <span className="font-medium text-pink-600">AED 85</span>
              </div>
              <p className="italic text-sm text-gray-600 mb-4">For quiet mornings and prayers.</p>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Lavender & Vanilla</span>
                <span>40 hours</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">"A gentle light that guides you back to yourself."</p>
              <button className="w-full py-3 border border-pink-600 text-pink-600 rounded-md hover:bg-pink-600 hover:bg-opacity-10 transition-all duration-300 text-sm font-medium">
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product Card 2 */}
          <div className="card overflow-visible group glassmorphism">
            <div className="h-80 bg-pink-200 relative flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-pink-300 absolute transform group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium text-pink-600">Sukoon</h3>
                <span className="font-medium text-pink-600">AED 95</span>
              </div>
              <p className="italic text-sm text-gray-600 mb-4">For evenings of reflection.</p>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Oud & Amber</span>
                <span>35 hours</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">"In stillness, find the peace that was always there."</p>
              <button className="w-full py-3 border border-pink-400 text-pink-400 rounded-md hover:bg-pink-400 hover:bg-opacity-10 transition-all duration-300 text-sm font-medium">
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product Card 3 */}
          <div className="card overflow-visible group glassmorphism">
            <div className="h-80 bg-pink-300 relative flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-pink-400 absolute transform group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium text-pink-600">Shukr</h3>
                <span className="font-medium text-pink-600">AED 90</span>
              </div>
              <p className="italic text-sm text-gray-600 mb-4">For moments of gratitude.</p>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Sandalwood & Rose</span>
                <span>45 hours</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">"Every breath, a thank you to the universe."</p>
              <button className="w-full py-3 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:bg-opacity-10 transition-all duration-300 text-sm font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandlesGiftsSection;
