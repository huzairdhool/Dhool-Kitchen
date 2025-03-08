import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-80 backdrop-blur-lg shadow-lg text-white py-6 text-center">
      <div className="flex justify-center mb-4">
        <img src={assets.logo} alt="Dhool Kitchen Logo" className="w-28" />
      </div>

   
      <nav className="flex justify-center gap-6 text-gray-300 mb-4">
        <a href="#Home" className="hover:text-red-500 transition">Home</a>
        <a href="#About" className="hover:text-red-500 transition">About</a>
        <a href="#contact" className="hover:text-red-500 transition">Contact</a>
      </nav>

      <p className="text-sm text-gray-400">
        &copy; 2025 Dhool Kitchen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
