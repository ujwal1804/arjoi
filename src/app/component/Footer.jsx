import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white/80 py-20">
      <div className="w-[88vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-ciguatera text-white">Arjoi</h2>
            </div>
            <p className="text-sm max-w-xs">
              Curated corporate gifts that tell a story. We believe in building
              lasting relationships through thoughtful design and quality.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-white mt-1" />
                <span>hello@arjoi.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-white mt-1" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Stay Connected
            </h4>
            <p className="text-sm mb-4">
              Join our newsletter for exclusive offers and updates on new
              products.
            </p>
            <form>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-full bg-white/5 text-sm text-white/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium text-sm hover:bg-[#C99FB3] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Arjoi. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a
              href="#"
              className="hover:text-white/80 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-white/80 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
