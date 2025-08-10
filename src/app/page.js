"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Import all necessary components
import FeaturedCollections from "./component/FeaturedCollections";
import CandlesGiftsSection from "./component/CandlesGiftsSection";
import CorporateGiftingSection from "./component/CorporateGiftingSection";
import UniqueCallToAction from "./component/UniqueCallToAction";
import HeroSection from "./component/HeroSection ";

export default function Home() {
  const [activeTab, setActiveTab] = useState("featured");

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="mx-auto scroll-smooth bg-[#F9F5F0] text-[#5C4433]">
      {/* Soft romantic floating background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D7A6A0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E7C9B1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#F4D6C6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      {/* Featured Collections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <FeaturedCollections />
      </motion.div>

      {/* Candles & Gifts Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CandlesGiftsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </motion.div>

      {/* Corporate Gifting */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CorporateGiftingSection />
      </motion.div>

      {/* Unique CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <UniqueCallToAction />
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
