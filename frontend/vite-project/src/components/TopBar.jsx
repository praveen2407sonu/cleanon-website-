import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="hidden lg:block  bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
      {/* <div className="max-w-7xl mx-auto px-4 py-3"> */}
      <div className="w-full px-12 lg:px-20 py-3">

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">

          {/* Left Side */}
          <div className="flex flex-wrap items-center gap-6">

            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@Cleanon25.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>4124 Cimmaron Road, CA 92806</span>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-wrap items-center gap-6">

            <span className="text-2xl">
              Welcome to Cleanon Our Best Cleaning
            </span>

            <div className="flex items-center gap-3 ">
              <span className="text-2xl">Follow Us On:</span>

              <div className="flex gap-2">

                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
                >
                  <FaInstagram />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TopBar;