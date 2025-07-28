import React from 'react';

const CorporateGiftingSection = () => {
  return (
    <section id="corporate" className="section-spacing py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4  font-serif text-pink-600">Corporate Gifting</h2>
          <p className="text-gray-600 text-lg">
            For teams, clients, and milestones that matter — Arjoi crafts elegant gifts that feel personal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Customization Options */}
          <div className="card p-8 md:p-10 glassmorphism shadow-lg rounded-lg transition-transform transform hover:scale-105 text-pink-600">
            <h3 className="text-xl mb-6 font-medium text-pink-600">What You Can Customize</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium block mb-1">Branding</span>
                  <span className="text-sm text-gray-600">Add your logo to packaging</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium block mb-1">Inserts</span>
                  <span className="text-sm text-gray-600">Custom messages and cards</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium block mb-1">Bulk packaging</span>
                  <span className="text-sm text-gray-600">Efficient delivery solutions</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium block mb-1">Delivery dates</span>
                  <span className="text-sm text-gray-600">Scheduled to your timeline</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Budget Options */}
          <div className="card p-8 md:p-10 glassmorphism shadow-lg rounded-lg transition-transform transform hover:scale-105 text-pink-600">
            <h3 className="text-xl mb-6 font-medium text-pink-600">Packages by Budget</h3>
            <div className="space-y-6">
              <div className="pb-5 border-b border-pink-600">
                <h4 className="font-medium mb-2">Under AED 50</h4>
                <p className="text-sm text-gray-600 mb-3">Small tokens of appreciation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mini candle sets</li>
                  <li>• Personalized gift tags</li>
                  <li>• Branded matches</li>
                </ul>
              </div>
              <div className="pb-5 border-b border-pink-600">
                <h4 className="font-medium mb-2">AED 50–100</h4>
                <p className="text-sm text-gray-600 mb-3">Mid-range gift options</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Signature candles</li>
                  <li>• Gift sets with 2-3 items</li>
                  <li>• Custom packaging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">AED 100+</h4>
                <p className="text-sm text-gray-600 mb-3">Premium gift experiences</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Luxury gift boxes</li>
                  <li>• Complete gift experiences</li>
                  <li>• VIP customization</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="card p-8 md:p-10 glassmorphism shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl mb-6 font-medium text-pink-600">Trusted By</h3>
            <p className="mb-6 text-gray-600">"Trusted by kind-hearted teams & thoughtful leaders."</p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-black">
              <div className="h-16 bg-white border border-gray-100 rounded-md flex items-center justify-center shadow-soft ">Logo 1</div>
              <div className="h-16 bg-white border border-gray-100 rounded-md flex items-center justify-center shadow-soft">Logo 2</div>
              <div className="h-16 bg-white border border-gray-100 rounded-md flex items-center justify-center shadow-soft">Logo 3</div>
              <div className="h-16 bg-white border border-gray-100 rounded-md flex items-center justify-center shadow-soft">Logo 4</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-lg">
              <p className="text-sm italic text-gray-600 mb-2">"The attention to detail and quality of Arjoi's corporate gifts made our client appreciation event truly special."</p>
              <p className="text-sm font-medium">— Sarah K., Marketing Director</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#contact" className="btn-secondary bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-500 transition">
            <span>Inquire About Corporate Orders</span>
           
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateGiftingSection;
