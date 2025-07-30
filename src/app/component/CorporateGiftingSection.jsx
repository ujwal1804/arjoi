import React, { useState } from 'react';
import { FaTarget, FaPalette, FaBoxOpen, FaRocket, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { MdBusiness, MdStar } from 'react-icons/md';

const CorporateGiftingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    { icon: FaTarget, title: 'Consultation', desc: 'Understanding your brand goals' },
    { icon: FaPalette, title: 'Customization', desc: 'Tailored brand integration' },
    { icon: FaBoxOpen, title: 'Curation', desc: 'Hand-selected products' },
    { icon: FaRocket, title: 'Delivery', desc: 'White-glove service' }
  ];

  const budgetOptions = [
    { range: 'AED 25-50', title: 'Starter', icon: HiSparkles },
    { range: 'AED 50-100', title: 'Professional', icon: MdBusiness },
    { range: 'AED 100+', title: 'Executive', icon: MdStar }
  ];

  return (
    <section id="corporate" className="py-32 ">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif text-pink-600 mb-4">
            Corporate Gifting
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughtfully curated gifts that reflect your brand's values
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${activeStep === index 
                      ? 'bg-pink-600 text-white' 
                      : 'bg-pink-100 text-pink-600 group-hover:bg-pink-200'
                    }
                  `}>
                    {step.icon}
                  </div>
                  <h3 className="font-serif text-lg text-pink-600 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget Options */}
        <div className="mb-24">
          <h3 className="text-2xl font-serif text-pink-600 text-center mb-12">Investment Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {budgetOptions.map((option, index) => {
              return (
                <div key={index} className="text-center p-6 border border-pink-200 rounded-lg hover:border-pink-400 transition-colors duration-300">
                  <div className="text-2xl text-pink-600 mx-auto mb-3" >
                    {option.icon}
                  </div>
                  <div className="text-xl font-serif text-pink-600 mb-1">{option.range}</div>
                  <div className="text-gray-600">{option.title}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <blockquote className="text-lg text-gray-700 mb-4">
            "Arjoi transformed our client appreciation strategy with beautifully crafted gifts."
          </blockquote>
          <cite className="text-pink-600">— Sarah Chen, Head of Partnerships</cite>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300">
            <span className="flex items-center gap-2">
              Start Your Journey
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorporateGiftingSection;