// Assignment: Project 8 (React Tailwind CSS - Day 44) - Task 2: Responsive Navbar (Tailwind CSS)
import { useState } from "react";

function TailwindNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-400">
            TechBrand
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition">
              Services
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>

            {/* Login / Logout Toggle Button */}
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                isLoggedIn
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-gray-800 rounded-b-lg">
          <a href="#home" className="block text-gray-300 hover:text-white py-1">
            Home
          </a>
          <a href="#about" className="block text-gray-300 hover:text-white py-1">
            About
          </a>
          <a href="#services" className="block text-gray-300 hover:text-white py-1">
            Services
          </a>
          <a href="#contact" className="block text-gray-300 hover:text-white py-1">
            Contact
          </a>
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`w-full mt-2 px-4 py-2 rounded-lg font-medium ${
              isLoggedIn
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default TailwindNavbar;
