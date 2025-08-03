import React, { useState } from "react";
import {
  FaAngleDown,
  FaCheck,
  FaQuoteLeft,
  FaGift,
  FaBriefcase,
  FaCrown,
  FaMagic,
  FaRocket,
} from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";

const CorporateGiftingSection = () => {
  const [expandedStep, setExpandedStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(1);

  const processSteps = [
    {
      id: 0,
      title: "Consultation",
      desc: "We begin with a detailed consultation to understand your brand identity, objectives, and specific gifting needs. Our goal is to align the gifts with your company's values and vision.",
      icon: MdCorporateFare,
    },
    {
      id: 1,
      title: "Curation",
      desc: "Our experts will hand-select a range of products that fit your budget and brand. We focus on quality and elegance, ensuring each item leaves a lasting impression.",
      icon: FaGift,
    },
    {
      id: 2,
      title: "Customization",
      desc: "From branded packaging to personalized notes, we offer extensive customization options to make each gift uniquely yours. We seamlessly integrate your brand identity into every detail.",
      icon: FaMagic,
    },
    {
      id: 3,
      title: "Delivery",
      desc: "Our white-glove service ensures your gifts are perfectly packaged and delivered on time, every time. We handle all logistics, so you can focus on your business.",
      icon: FaRocket,
    },
  ];

  const packages = [
    {
      id: 1,
      range: "AED 25-50",
      title: "Starter",
      icon: FaGift,
      features: ["5-20 items", "Basic branding", "Standard packaging"],
    },
    {
      id: 2,
      range: "AED 50-100",
      title: "Professional",
      icon: FaBriefcase,
      features: [
        "20-50 items",
        "Custom branding",
        "Premium packaging",
        "Dedicated support",
      ],
    },
    {
      id: 3,
      range: "AED 100+",
      title: "Executive",
      icon: FaCrown,
      features: [
        "50+ items",
        "Full customization",
        "Luxury packaging",
        "Account manager",
        "Priority delivery",
      ],
    },
  ];

  const currentPackage = packages.find((pkg) => pkg.id === selectedPackage);
  const PackageIcon = currentPackage.icon;

  return (
    <section
      id="corporate"
      className="py-24 w-[88vw] mx-auto relative overflow-hidden "
    >
      <div className="  ">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-ciguatera text-gray-800 mb-4">
            Corporate Gifting
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Elevate your business relationships with thoughtfully curated gift
            collections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Process Accordion */}
          <div>
            <h3 className="text-4xl font-ciguatera text-gray-800 mb-8">
              Our Process
            </h3>
            <div className="space-y-6">
              {processSteps.map((step) => {
                const Icon = step.icon;
                const isExpanded = expandedStep === step.id;
                return (
                  <div key={step.id} className="border-b border-gray-200">
                    <button
                      onClick={() =>
                        setExpandedStep(isExpanded ? null : step.id)
                      }
                      className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                    >
                      <span className="flex items-center">
                        <Icon className="text-2xl text-black mr-4" />
                        <span className="text-xl font-medium text-gray-800 font-serif">
                          {step.title}
                        </span>
                      </span>
                      <FaAngleDown
                        className={`text-gray-500 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? "max-h-40 py-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600 pl-10">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Dynamic Package Selection */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
              <h3 className="text-4xl font-ciguatera text-gray-800 mb-6 text-center">
                Choose a Package
              </h3>

              {/* Package Selector Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`
                      flex-1 py-3 px-6 rounded-xl border-2 transition-all duration-300
                      ${
                        selectedPackage === pkg.id
                          ? "bg-black text-white border-black scale-105 shadow-md"
                          : "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black"
                      }
                    `}
                  >
                    <span className="font-medium text-lg">{pkg.title}</span>
                  </button>
                ))}
              </div>

              {/* Display Current Package Details */}
              <div className="text-center">
                <PackageIcon className="text-5xl text-black mx-auto mb-4" />
                <h4 className="text-3xl font-ciguatera text-gray-800 mb-1">
                  {currentPackage.title} Package
                </h4>
                <p className="text-2xl font-bold text-black mb-6">
                  {currentPackage.range}
                </p>

                <ul className="space-y-3 text-left max-w-sm mx-auto">
                  {currentPackage.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-gray-700 text-lg"
                    >
                      <FaCheck className="text-black text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full py-4 rounded-full border-2 border-black bg-black text-white font-medium text-lg hover:bg-transparent hover:text-black transition-all duration-300">
                  Get a Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Testimonial */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl relative bg-white shadow-lg border border-gray-200">
            <FaQuoteLeft className="text-3xl text-gray-300 mb-4 mx-auto" />
            <blockquote className="text-xl text-gray-800 mb-6 font-light">
              "Arjoi transformed our client appreciation strategy with
              beautifully crafted gifts that truly represent our brand values."
            </blockquote>
            <cite className="text-gray-500">
              — Sarah Chen, Head of Partnerships
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGiftingSection;
