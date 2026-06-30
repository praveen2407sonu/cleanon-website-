import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/image/project1.jpg";
import img2 from "../assets/image/project2.jpg";
import img3 from "../assets/image/project3.jpg";
import img4 from "../assets/image/project4.jpg";
import img5 from "../assets/image/project5.jpg";
import img6 from "../assets/image/project6.jpg";
import img7 from "../assets/image/project7.jpg";
import img8 from "../assets/image/project8.jpg";

const projects = [
  {
    image: img1,
    title: "Office Cleaning",
    location: "Columbia SC, USA",
  },
  {
    image: img2,
    title: "Floor Cleaning",
    location: "Laurel Fork, USA",
  },
  {
    image: img3,
    title: "House Cleaning",
    location: "Pompano Beach, USA",
  },
  {
    image: img4,
    title: "Kitchen Cleaning",
    location: "Spring Valley, USA",
  },
  {
    image: img5,
    title: "Window Cleaning",
    location: "North Branford, USA",
  },
  {
    image: img6,
    title: "Domestic Cleaning",
    location: "Houston, USA",
  },
  {
    image: img7,
    title: "Restaurant Cleaning",
    location: "Washington, USA",
  },
  {
    image: img8,
    title: "Hospitals Cleaning",
    location: "Huntington, USA",
  },
];

const OurProjects = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex justify-between items-end flex-wrap gap-5 mb-12">

          <div>

            <p className="text-yellow-400 text-2xl font-semibold uppercase tracking-widest">
              Our Projects
            </p>

            <h2 className="text-5xl font-bold mt-3 text-gray-900 leading-snug">
              Keep Your Vision to Our
              <br />
              Latest Projects
            </h2>

          </div>

          
          {/* <button 
    className="relative overflow-hidden px-8 py-3 bg-green-800 text-white rounded-md
    before:absolute before:left-0 before:top-0 before:h-full before:w-0
    before:bg-yellow-400 before:transition-all before:duration-500
    before:ease-in-out hover:before:w-full hover:text-black before:-z-0">

  <span className="relative z-10">View All Project</span>

 </button> */}


     <Link
       to="/projects"
     className="relative overflow-hidden px-8 py-3 bg-green-800 text-white rounded-md
     before:absolute before:left-0 before:top-0 before:h-full before:w-0
    before:bg-yellow-400 before:transition-all before:duration-500
   before:ease-in-out hover:before:w-full hover:text-black before:-z-0"
     >
     <span className="relative z-10">View All Project</span>
    </Link>


        </div>

        {/* Slider */}

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white group">

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                <div className="bg-green-800 text-white p-5">

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/90">
                    {item.location}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
                           
    </section>
  );
};

export default OurProjects;   