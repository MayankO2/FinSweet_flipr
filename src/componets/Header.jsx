import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/IMAGES/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary flex justify-between items-center py-6 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-10" />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purpleAccent font-semibold"
                : "text-white font-semibold hover:text-purpleAccent"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-purpleAccent font-semibold"
                : "text-white font-semibold hover:text-purpleAccent"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive
                ? "text-purpleAccent font-semibold"
                : "text-white font-semibold hover:text-purpleAccent"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purpleAccent font-semibold"
                : "text-white font-semibold hover:text-purpleAccent"
            }
          >
            Contact Us
          </NavLink>

          <button className="bg-white font-bold py-2 px-6 hover:opacity-90">
            Subscribe
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
