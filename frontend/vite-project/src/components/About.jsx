import React from "react";
import aboutImg from "../assets/image/about1.jpg";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#c7ba92]/50 via-white/30 to-[#a89b74]/60 backdrop-blur-sm">

    
      <div className=" max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* ========== LEFT SECTION ========== */}
          <div className="flex-1 relative">
            {/* Image Container */}
            <div className="rounded-3xl overflow-hidden h-full">
              <img
                src={aboutImg}
                alt="About"
                // className="w-full h-[600px] object-cover object-top"
                  className="w-full h-auto"
              />
            </div>

            {/* Experience Box */}
            <div className="
             from-orange-200/30 via-yellow-200/30 to-green-200/30
            backdrop-blur-lg absolute left-1/2  bottom-[10px] -translate-x-1/2 bg-white shadow-2xl rounded-3xl px-8 py-6 w-[80%] border border-green-100 text-center">
              <h3 className="text-6xl font-bold text-[#204230]">
                35+
              </h3>

              <p className="text-gray-600 text-3xl font-medium mt-1">
                Years Experience
              </p>

              <div className="mt-3 h-[2px] w-16 bg-green-500 mx-auto rounded-full"></div>

              <p className="text-xl text-gray-500 mt-2">
                Trusted Cleaning Experts Since 35+ Years
              </p>
            </div>
          </div>

          {/* ========== MIDDLE SECTION ========== */}
          <div className="flex-[1.8] bg-[#204230] text-white rounded-3xl p-10 flex flex-col justify-center shadow-xl">
            <p className="text-yellow-400 font-semibold uppercase tracking-[3px]">
              About Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Focused by Care, Crafted for Perfection
            </h2>

            <p className="text-gray-200 mt-6 leading-7">
              At Cleanon we believe a clean space is the first step to a clear
              mind. From tough stains to everyday dust, our solutions combine
              efficiency, safety, and eco-friendliness.
            </p>

            {/* Bullet Points */}
            <div className="mt-6 space-y-3 text-gray-200 text-sm">
              <p>
                • Materials, ingredients, non-toxic or hypoallergenic
                properties.
              </p>
              <p>
                • How products save time and are easy to use.
              </p>
              <p>
                • Clean spaces improve mood, health, and comfort.
              </p>
              <p>
                • Certifications, awards, customer satisfaction.
              </p>
            </div>

            <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition w-fit">
              About Us
            </button>
          </div>

          {/* ========== RIGHT SECTION ========== */}
          <div className="flex-1 space-y-6">

            {/* Image */}
            <div>
              <img
                src={aboutImg}
                alt="Staff"
                className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Staff Box */}
            <div className="bg-gradient-to-r from-[#204230] to-[#2d5c42] text-white rounded-2xl px-8 py-6 shadow-xl border border-green-300 text-center">
              <h3 className="text-4xl font-bold text-yellow-400">
                85+
              </h3>

              <p className="font-semibold tracking-wide mt-2 text-lg">
                Active Staff
              </p>

              <div className="w-14 h-[2px] bg-yellow-400 mx-auto my-3 rounded-full"></div>

              <p className="text-sm text-gray-200">
                Professional & Skilled Team Members Dedicated to Quality Service
              </p>
            </div>

            {/* Award Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100 text-center h-[225px] flex flex-col justify-center bg-gradient-to-r from-orange-500/30 via-yellow-600/50 to-green-700/60
            backdrop-blur-lg">
              <div className="text-4xl mb-2">🏆</div>

              <div className="text-2xl text-[#204230]">
                2015
              </div>

              <p className="text-grey-800 font-semibold mt-2">
                Top-Rated Cleaning Company in The World
              </p>

              <p className="text-grey-600 text-xl mt-1">
                by WPO Association
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

