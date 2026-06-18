import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/image/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-50 w-full bg-[#204230f1]">
      <div className="flex items-center justify-between px-2 py-4">

        {/* Left Side */}
        <div className="flex items-center px-4 md:px-12 gap-4 md:gap-8 w-full">

          {/* Logo */}
          <img src={logo} alt="Logo" className="h-12 w-auto" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center ml-10 gap-6 font-medium text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                Home
              </NavLink>
            </li>

            <li><a href="/">Pages</a></li>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Service</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto text-white text-2xl">
            {menuOpen ? (
              <FiX onClick={() => setMenuOpen(false)} />
            ) : (
              <FiMenu onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <FiSearch size={32} className="cursor-pointer hover:text-yellow-400" />
          <FiShoppingCart size={32} className="cursor-pointer hover:text-yellow-400" />

          <button className="relative overflow-hidden bg-yellow-500 text-white px-6 py-3 rounded-md group">
            <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Get A Quote
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-white font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/">Pages</a></li>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;