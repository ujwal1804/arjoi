import React, { useState } from 'react';
import { FaTarget, FaPalette, FaBoxOpen, FaRocket, FaArrowRight, FaQuoteLeft, FaCheck } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { MdBusiness, MdStar } from 'react-icons/md';

const CorporateGiftingSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const processSteps = [
    { icon: 'FaTarget', title: 'Consultation', desc: 'Understanding your brand goals' },
    { icon: 'FaPalette', title: 'Customization', desc: 'Tailored brand integration' },
    { icon: 'FaBoxOpen', title: 'Curation', desc: 'Hand-selected products' },
    { icon: 'FaRocket', title: 'Delivery', desc: 'White-glove service' }
  ];

  const packages = [
    { 
      range: 'AED 25-50', 
      title: 'Starter', 
      icon: 'HiSparkles',
      features: ['5-20 items', 'Basic branding', 'Standard packaging'],
      popular: false
    },
    { 
      range: 'AED 50-100', 
      title: 'Professional', 
      icon: 'MdBusiness',
      features: ['20-50 items', 'Custom branding', 'Premium packaging', 'Dedicated support'],
      popular: true
    },
    { 
      range: 'AED 100+', 
      title: 'Executive', 
      icon: 'MdStar',
      features: ['50+ items', 'Full customization', 'Luxury packaging', 'Account manager', 'Priority delivery'],
      popular: false
    }
  ];

  const getIcon = (iconName) => {
    const icons = {
      FaTarget,
      FaPalette,
      FaBoxOpen,
      FaRocket,
      HiSparkles,
      MdBusiness,
      MdStar
    };
    return icons[iconName];
  };

  return (
    <section id="corporate" className="py-32 relative overflow-hidden">
      <div className="container-custom">
        {/* Floating Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-6xl md:text-7xl font-serif text-white mb-4">
              Corporate Gifting
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Elevate your business relationships with thoughtfully curated gift collections
            </p>
          </div>
        </div>

        {/* Interactive Process Timeline */}
        <div className="mb-24">
          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-white/20" />
            <div 
              className="absolute top-10 left-0 h-0.5 bg-white/60 transition-all duration-1000"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = getIcon(step.icon);
                return (
                  <div
                    key={index}
                    className="text-center group cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className={`
                      glassmorphism w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                      border transition-all duration-500 relative z-10
                      ${activeStep >= index 
                        ? 'border-white/60 bg-white/30 scale-110' 
                        : 'border-white/20 bg-white/10 group-hover:bg-white/20 group-hover:scale-105'
                      }
                    `}>
                      {Icon && <Icon className="text-2xl text-white" />}
                      {activeStep >= index && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <FaCheck className="text-xs text-gray-800" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Package Cards with Hover Details */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif text-white text-center mb-12">Choose Your Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => {
              const Icon = getIcon(pkg.icon);
              return (
                <div 
                  key={index} 
                  className={`
                    glassmorphism relative p-8 rounded-3xl border cursor-pointer
                    transition-all duration-500 group
                    ${selectedPackage === index 
                      ? 'border-white/60 bg-white/25 scale-105' 
                      : 'border-white/20 bg-white/10 hover:bg-white/20 hover:scale-102'
                    }
                    ${pkg.popular ? 'ring-2 ring-white/30' : ''}
                  `}
                  onClick={() => setSelectedPackage(selectedPackage === index ? null : index)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="glassmorphism px-4 py-1 rounded-full border border-white/30 bg-white/20">
                        <span className="text-xs text-white font-medium">Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    {Icon && <Icon className="text-4xl text-white mx-auto mb-4" />}
                    <div className="text-2xl font-serif text-white mb-2">{pkg.range}</div>
                    <div className="text-white/80 text-lg">{pkg.title}</div>
                  </div>

                  {/* Expandable Features */}
                  <div className={`
                    transition-all duration-500 overflow-hidden
                    ${selectedPackage === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="border-t border-white/20 pt-6 mt-6">
                      <h4 className="text-white font-medium mb-4">What's included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                            <FaCheck className="text-white/60 text-xs" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button className="glassmorphism w-full py-3 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/15 transition-all duration-300">
                      {selectedPackage === index ? 'Selected' : 'Select Package'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Testimonial */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="glassmorphism p-8 rounded-3xl border border-white/20 relative">
            <FaQuoteLeft className="text-3xl text-white/40 mb-4 mx-auto" />
            <blockquote className="text-xl text-white mb-6 font-light">
              "Arjoi transformed our client appreciation strategy with beautifully crafted gifts that truly represent our brand values."
            </blockquote>
            <cite className="text-white/80">— Sarah Chen, Head of Partnerships</cite>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group glassmorphism px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/15 transition-all duration-300">
            <span className="flex items-center gap-3">
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
