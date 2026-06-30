import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";

import blog1 from "../assets/image/blog1.jpg";
import blog2 from "../assets/image/blog2.jpg";
import blog3 from "../assets/image/blog3.jpg";

const BlogSection = () => {
  return (
    <section className="py-20 mb-8 bg-[#fcfbf8]">
      <div className="max-w-7xl mx-auto px-4">
        
    
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FaStar className="text-yellow-500" />
            <span className="uppercase tracking-wider text-yellow-500 font-semibold text-2xl">
              Our Blogs
            </span>
            </div>

           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get Latest News & Updates
           </h2>
          </div>

        {/* Blog Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Large Blog */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
            
            <div className="relative overflow-hidden">
              <img
                src={blog1}
                alt="Blog"
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

              {/* Category Buttons */}
              <div className="absolute bottom-5 left-5 flex gap-3 z-20">

                <div className="relative">
                  <span className="absolute top-1 left-1 bg-yellow-400 w-full h-full rounded-r-2xl"></span>
                  <span className="relative bg-green-700 text-white px-5 py-2 rounded-r-2xl rounded-l-md font-semibold text-sm shadow-lg">
                    Home Cleaning
                  </span>
                </div>

                <div className="relative">
                  <span className="absolute top-1 left-1 bg-green-700 w-full h-full rounded-r-2xl"></span>
                  <span className="relative bg-yellow-400 text-green-900 px-5 py-2 rounded-r-2xl rounded-l-md font-semibold text-sm shadow-lg">
                    Deep Cleaning
                  </span>
                </div>

              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-700 transition cursor-pointer">
                10 Tips to Keep Your Home Sparkling & Cleanings
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Explore feeding techniques and modern tools that ensure better
                milk quality. Goat Farming for Sustainable Income.
              </p>

              <button className="bg-green-800 hover:bg-yellow-400 hover:text-green-900 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                Read More
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Side Blogs */}
          <div className="flex flex-col gap-8  h-full">

            {/* Top Blog */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-5 flex-1 hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-5">

                <div className="relative overflow-hidden rounded-2xl md:w-2/5 group">
                  <img
                    src={blog2}
                    alt="Blog"
                    className="w-full h-52 object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Button */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="relative">
                      <span className="absolute top-1 left-1 bg-yellow-400 w-full h-full rounded-r-2xl"></span>
                      <span className="relative bg-green-700 text-white px-4 py-2 rounded-r-2xl rounded-l-md font-semibold text-sm shadow-lg">
                        Quick Hacks
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-700 transition cursor-pointer">
                    Because Every Space Deserves a Fresh Start
                  </h3>

                  <p className="text-gray-600 mb-5">
                    Organic methods improve soil health and boost yields
                    naturally.
                  </p>

                  <button className="w-fit bg-green-800 hover:bg-yellow-400 hover:text-green-900 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Blog */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-5 flex-1 hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-5">

                <div className="relative overflow-hidden rounded-2xl md:w-2/5 group">
                  <img
                    src={blog3}
                    alt="Blog"
                    className="w-full h-52 object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Button */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="relative">
                      <span className="absolute top-1 left-1 bg-green-700 w-full h-full rounded-r-2xl"></span>
                      <span className="relative bg-yellow-400 text-green-900 px-4 py-2 rounded-r-2xl rounded-l-md font-semibold text-sm shadow-lg">
                        Spring Cleaning
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-700 transition cursor-pointer">
                    Your Guide to a Healthier, Cleaner Home
                  </h3>

                  <p className="text-gray-600 mb-5">
                    Practical tips for efficient feeding and disease management.
                  </p>

                  <button className="w-fit bg-green-800 hover:bg-yellow-400 hover:text-green-900 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;