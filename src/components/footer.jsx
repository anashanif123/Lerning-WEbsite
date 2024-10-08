import React from "react";
import Group from '../assets/Group 112.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center space-x-2 mb-2">
          <img src={Group} alt="TOTC Logo" className="w-15 h-8" /><span></span> |
            <span className="font-bold text-lg">TOTC</span>
          </div>
          <p className="text-sm text-gray-400">Virtual Class for Zoom</p>
        </div>
        <div className="mb-6">
          <p className="text-sm mb-4">Subscribe to get our Newsletter</p>
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-md border-none focus:outline-none text-gray-900"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-4">
          <a href="#" className="hover:text-white">Careers</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
        <p className="text-xs text-gray-500">© 2024 Clown Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
