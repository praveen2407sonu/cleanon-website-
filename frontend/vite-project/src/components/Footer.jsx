import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

import footerImg from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1c3526] text-white py-16  px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Section 1 */}
        <div>
          <img
            src={footerImg}
            alt="Farm"
            className="h-16 w-auto"
          />

          <p className="mt-8 text-xl text-gray-300 leading-7">
            Believe that great food starts with great farming. For 40 years,
            our farm has been committed to sustainable, eco-friendly and full
            of goodness.
          </p>
        </div>

        {/* Section 2 */}
        

        <div>
        <h2 className="text-2xl font-bold mb-8 relative inline-block text-white">
        Services
       <span className="absolute left-0 -bottom-2 w-14 h-1 bg-yellow-500 rounded-full"></span>
      </h2>

      <div className="grid gap-4">
       {[
      "House Cleaning",
      "Window Cleaning",
      "Room Cleaning",
      "Kitchen Cleaning",
      "Toilet Cleaning",
      "Outdoor Cleaning",
      ].map((service, index) => (
      <div
        key={index}
        className="
          relative
          h-10
          flex items-center
          px-5
          bg-gradient-to-r from-white to-slate-50
          rounded-xl
          border border-gray-100
          shadow-[0_8px_20px_rgba(0,0,0,0.08)]
          hover:-translate-y-1
          hover:shadow-[0_12px_25px_rgba(0,0,0,0.12)]
          transition-all duration-300
          overflow-hidden
          cursor-pointer
          group
        "
      >
        // {/* Dice Side Face */}
        <div
          className="
            absolute right-0 top-0
            h-full w-4
            bg-gradient-to-b
            from-yellow-400
            to-orange-400
          "
        />

        {/* Number Circle */}
        <div
          className="
            w-9 h-9
            rounded-full
           bg-yellow-400
            
            text-white
            flex items-center justify-center
            font-bold
            mr-4
            shadow-md
          "
        >
          {index + 1}
        </div>

        {/* Service Name */}
          <span className="font-semibold text-gray-700 text-[15px]">
          {service}
          </span>
          </div>
         ))}
        </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-8 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-14 h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          
          <div className="bg-[#618161]
           text-black p-5 rounded-2xl shadow-xl">

            <div className="bg-gray-100 p-4 rounded-xl flex items-start gap-4 mb-4">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <p className="text-sm">
                254, North City, Bulex Center, New York
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4 mb-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-sm">info@example.com</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4 mb-6">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <p className="text-sm">+1 987 654 3210</p>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="/"
                className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-full bg-green-500 not-last-of-type:flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaTwitter/>
              </a>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-8 relative inline-block">
            Subscribe Us
            <span className="absolute left-0 -bottom-2 w-14 h-1 bg-yellow-500 rounded-full"></span>
          </h2>

          <p className="text-gray-300 text-2xl
           leading-7 mb-6 mt-2">
            Subscribe for Special Discounts and Farm Updates!
          </p>

          {/* Email Input */}
          <div className="relative mb-5 mt-2 border-2 border-yellow-400 ">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full pl-12 pr-4 py-4 rounded-xl text-white outline-none"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 accent-yellow-500"
            />

            <span className="text-gray-300 text-sm">
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          {/* Button */}
          <button
            className="
            w-full
            bg-yellow-500
            hover:bg-yellow-600
            text-black
            font-semibold
            py-4 
            rounded-xl
            flex
            items-center
            justify-center
            gap-5
            transition
          "
          >
            <FaPaperPlane />
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center text-gray-400">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;