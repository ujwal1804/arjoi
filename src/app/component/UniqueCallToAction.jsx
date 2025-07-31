import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaHeart, FaStar, FaGift, FaMagic } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';

const MagneticCallToAction = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);

  const contactMethods = [
    { 
      id: 'whatsapp',
      icon: FaWhatsapp, 
      label: 'WhatsApp', 
      subtitle: 'Instant Response',
      color: '#25D366',
      href: 'https://wa.me/971501234567',
      description: 'Get immediate answers to your questions'
    },
    { 
      id: 'instagram',
      icon: FaInstagram, 
      label: 'Instagram', 
      subtitle: 'Visual Journey',
      color: '#E4405F',
      href: 'https://instagram.com/arjoi',
      description: 'Explore our latest creations and stories'
    },
    { 
      id: 'email',
      icon: FaEnvelope, 
      label: 'Email', 
      subtitle: 'Detailed Inquiry',
      color: '#4285F4',
      href: 'mailto:hello@arjoi.com',
      description: 'Send us your detailed requirements'
    },
    { 
      id: 'phone',
      icon: FaPhone, 
      label: 'Call Us', 
      subtitle: 'Personal Touch',
      color: '#FF6B35',
      href: 'tel:+971501234567',
      description: 'Speak directly with our artisans'
    }
  ];

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        direction: Math.random() * 360
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + Math.cos(particle.direction) * particle.speed * 0.1) % 100,
        y: (particle.y + Math.sin(particle.direction) * particle.speed * 0.1) % 100
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  const handleMethodClick = (method, e) => {
    createRipple(e);
    setSelectedMethod(method.id);
    setTimeout(() => {
      window.open(method.href, '_blank');
      setSelectedMethod(null);
    }, 300);
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Magnetic Field Effect */}
        <div 
          className="absolute w-96 h-96 rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)`,
            filter: 'blur(20px)',
            opacity: isActive ? 1 : 0
          }}
        />

        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              animation: `float ${particle.speed * 3}s ease-in-out infinite`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Central Hub */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-8xl font-serif text-white mb-6 relative">
              Let's Connect
              <div className="absolute -top-4 -right-4">
                <HiSparkles className="text-2xl text-pink-300 animate-pulse" />
              </div>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent w-full mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose your preferred way to start our conversation
            </p>
          </div>
        </div>

        {/* Magnetic Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isSelected = selectedMethod === method.id;
            
            return (
              <div
                key={method.id}
                className="group relative"
                style={{
                  transform: isActive ? `translate(${(mousePos.x - 50) * 0.02}px, ${(mousePos.y - 50) * 0.02}px)` : 'none',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Ripple Effects */}
                {ripples.map(ripple => (
                  <div
                    key={ripple.id}
                    className="absolute rounded-full border-2 border-white/30 pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      transform: 'translate(-50%, -50%)',
                      animation: 'ripple 1s ease-out forwards'
                    }}
                  />
                ))}

                <div
                  className={`
                    glassmorphism relative p-8 rounded-3xl border cursor-pointer
                    transition-all duration-500 overflow-hidden
                    ${isSelected 
                      ? 'border-white/60 bg-white/30 scale-110' 
                      : 'border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20 hover:scale-105'
                    }
                  `}
                  onClick={(e) => handleMethodClick(method, e)}
                  onMouseEnter={() => setSelectedMethod(method.id)}
                  onMouseLeave={() => setSelectedMethod(null)}
                >
                  {/* Animated Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${method.color}20, transparent)`
                    }}
                  />

                  {/* Icon with Magnetic Effect */}
                  <div className="relative mb-6">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${method.color}30, ${method.color}10)`,
                        boxShadow: `0 0 30px ${method.color}20`
                      }}
                    >
                      <IconComponent 
                        className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    
                    {/* Floating indicator */}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <BsArrowUpRight className="text-white/60 text-base" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-pink-200 transition-colors duration-300">
                      {method.label}
                    </h3>
                    <p className="text-base text-white/60 mb-3">{method.subtitle}</p>
                    
                    {/* Expandable Description */}
                    <div className={`
                      transition-all duration-500 overflow-hidden
                      ${selectedMethod === method.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="text-base text-white/80 border-t border-white/20 pt-3 mt-3">
                        {method.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 50px ${method.color}10, 0 0 50px ${method.color}10`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glassmorphism inline-block p-6 rounded-2xl border border-white/20 mb-8">
            <div className="flex items-center gap-4 text-white/80">
              <HiLightningBolt className="text-yellow-400" />
              <span className="text-base">Usually respond within 2 hours</span>
              <FaMagic className="text-purple-400" />
            </div>
          </div>
          
          <p className="text-white/60 text-base max-w-md mx-auto">
            Every conversation starts with a simple hello. We're here to bring your vision to life.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default MagneticCallToAction;
