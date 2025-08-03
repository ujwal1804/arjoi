import React, { useState, useRef } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const CreativeCallToAction = () => {
  const contactMethods = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      description:
        "Get immediate answers to your questions and start a conversation right away.",
      color: "#25D366",
    },
    {
      id: "instagram",
      icon: FaInstagram,
      label: "Instagram",
      description:
        "Explore our latest creations, inspiration, and behind-the-scenes stories.",
      color: "#E4405F",
    },
    {
      id: "email",
      icon: FaEnvelope,
      label: "Email",
      description:
        "For detailed inquiries and comprehensive quotes, send us a message.",
      color: "#4285F4",
    },
    {
      id: "phone",
      icon: FaPhone,
      label: "Call Us",
      description:
        "Speak directly with our team for a personal consultation and tailored advice.",
      color: "#FF6B35",
    },
  ];

  const cardRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0A0A0A]">
      <div className="w-[88vw] mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-8xl font-ciguatera text-white mb-6 relative">
              Let's Connect
              <div className="absolute -top-4 -right-4">
                <HiSparkles className="text-3xl text-white animate-pulse" />
              </div>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose your preferred way to start our conversation and we'll be
              in touch shortly.
            </p>
          </div>
        </div>

        {/* Contact Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isHovered = hoveredCard === index;

            // Parallax effect values
            const parallaxX = isHovered
              ? (mousePos.x / (cardRefs.current[index]?.offsetWidth || 1) -
                  0.5) *
                20
              : 0;
            const parallaxY = isHovered
              ? (mousePos.y / (cardRefs.current[index]?.offsetHeight || 1) -
                  0.5) *
                20
              : 0;
            const bgParallaxX = parallaxX * 0.5;
            const bgParallaxY = parallaxY * 0.5;

            return (
              <div
                key={method.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`
                    relative p-8 h-[400px] rounded-3xl overflow-hidden cursor-pointer
                    transition-transform duration-300
                    ${isHovered ? "transform-gpu scale-105" : ""}
                  `}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    border: `1px solid rgba(255, 255, 255, 0.18)`,
                  }}
                >
                  {/* Glowing Effect on Hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${method.color}20, transparent 60%)`,
                    }}
                  />

                  <div
                    className="relative z-10 flex flex-col items-center h-full transition-transform duration-300"
                    style={{
                      transform: `translate(${parallaxX}px, ${parallaxY}px)`,
                    }}
                  >
                    <div
                      className={`
                        w-24 h-24 mb-6 rounded-full flex items-center justify-center
                        bg-white/10 transition-colors duration-300
                        ${isHovered ? "bg-white/20" : ""}
                      `}
                      style={{
                        transform: `translate(${bgParallaxX}px, ${bgParallaxY}px)`,
                      }}
                    >
                      <IconComponent className="text-4xl text-white" />
                    </div>

                    <h3 className="text-4xl font-ciguatera text-white mb-2">
                      {method.label}
                    </h3>
                    <p className="text-base text-white/60 text-center mb-6 max-w-xs">
                      {method.description}
                    </p>

                    <a
                      href="#"
                      className={`
                        mt-auto w-full py-3 rounded-full flex items-center justify-center gap-3
                        bg-white text-gray-800 font-medium transition-all duration-300
                        hover:bg-gray-100
                      `}
                    >
                      Get Started <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeCallToAction;
