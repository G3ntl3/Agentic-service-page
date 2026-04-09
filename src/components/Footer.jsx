import React from "react";
import bgLogo from "../assets/img/logo.png"; // adjust path if needed
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#004D2B]/80 backdrop-blur-md text-white py-10 px-6 lg:px-20 overflow-hidden relative">
      {/* background logo */}
      <img
        src={bgLogo}
        alt="AgenticArc background logo"
        className="absolute inset-0 m-auto opacity-10 w-[500px] h-auto object-contain"
      />

      <div className="relative z-10">
        {/* Brand section */}
        
      <div className="md:col-span-2 lg:hidden space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={bgLogo}
                alt="AgenticArc Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-xl font-semibold">The Agentic ARC</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering businesses and individuals with human-like AI agents that
              simplify workflows, enhance collaboration, and accelerate innovation.
            </p>
            <div className="flex gap-4 text-xl mt-3 mb-3">
              <a href="#" className="hover:text-green-300">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaWhatsapp />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        {/* Mobile: 2 column grid */}
        <div className="grid grid-cols-2 gap-8 md:hidden mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Services</a></li>
              <li><a href="#" className="hover:text-green-300">Projects</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-green-300">AI Agents</a></li>
              <li><a href="#" className="hover:text-green-300">Documentation</a></li>
              <li><a href="#" className="hover:text-green-300">Help Center</a></li>
              <li><a href="#" className="hover:text-green-300">Education Hub</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile: 2 column grid for Contact and Legal */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-3">Contact Information</h3>
            <p className="text-sm text-white/80 mb-2">
              Phone: <span className="text-white font-medium block">+234123456789</span>
            </p>
            <p className="text-sm text-white/80">
              Email:{" "}
              <a
                href="mailto:info@Agenticarc.com"
                className="text-white font-medium hover:text-green-300 block"
              >
                info@Agenticarc.com
              </a>
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-3">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-green-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-300">FAQ's</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop: Original 6 column layout */}
        <div className="hidden md:grid md:grid-cols-6 gap-4">
          {/* Brand section (desktop only - spans 2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={bgLogo}
                alt="AgenticArc Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-xl font-semibold">The Agentic ARC</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering businesses and individuals with human-like AI agents that
              simplify workflows, enhance collaboration, and accelerate innovation.
            </p>
            <div className="flex gap-4 text-xl mt-3">
              <a href="#" className="hover:text-green-300">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaWhatsapp />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Services</a></li>
              <li><a href="#" className="hover:text-green-300">Projects</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-green-300">AI Agents</a></li>
              <li><a href="#" className="hover:text-green-300">Documentation</a></li>
              <li><a href="#" className="hover:text-green-300">Help Center</a></li>
              <li><a href="#" className="hover:text-green-300">Education Hub</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
            <p className="text-sm text-white/80">
              Phone: <span className="text-white font-medium">+234123456789</span>
            </p>
            <p className="text-sm text-white/80 mt-2">
              Email:{" "}
              <a
                href="mailto:info@Agenticarc.com"
                className="text-white font-medium hover:text-green-300"
              >
                info@Agenticarc.com
              </a>
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-green-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-300">FAQ's</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-10 border-t border-white/30 pt-4 text-center text-white/70 text-sm">
        © 2025 TheAgenticArc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;