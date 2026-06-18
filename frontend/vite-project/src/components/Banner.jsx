import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import banner1 from "../assets/image/slider-1.png";
import banner2 from "../assets/image/slider-2.png";
import banner3 from "../assets/image/slider-3.png";

const slides = [
  {
    id: 1,
    image: banner1,
  },
  {
    id: 2,
    image: banner2,
  },
  {
    id: 3,
    image: banner3,
  },
];

const Banner = () => {
  return (
    <section className="bg-[#204230] min-h-[85vh] flex items-center overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="max-w-7xl mx-auto px-8 lg:px-16">
              <div className="grid lg:grid-cols-2 items-center gap-10 relative">
                
                {/* LEFT CONTENT */}
                <div className="pt-10">
                  <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
                    Professional Cleaning Service
                  </p>
 
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="text-white">
                      Making Your Home
                    </span>
                    <br />
                    <span className="text-yellow-400">
                      Spotless & Fresh
                    </span>
                  </h1>

                  <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
                    We provide professional home cleaning services
                    that keep your living space fresh, healthy,
                    and sparkling clean. Trusted by hundreds of
                    happy families.
                  </p>

                  <div className="mt-8">
                    <button className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-8 py-4 rounded-md font-semibold">
                      Book Cleaning
                    </button>
                  </div>
                </div>

                {/* 50% Discount Circle */}
                <div className="hidden lg:flex absolute left-[48%] top-[42%] -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-32 h-32 rounded-full bg-yellow-500 border-[10px] border-white flex flex-col items-center justify-center shadow-2xl">
                    <span className="text-4xl font-bold text-white">
                      50%
                    </span>

                    <span className="text-sm text-white uppercase tracking-wide">
                      Discount
                    </span>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt="Cleaning Service"
                    className="w-[500px] h-[500px] object-contain"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;