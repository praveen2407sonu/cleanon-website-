import React from "react";

import leftImage from "../assets/image/enquires-left.jpg";

// Services Images
import img1 from "../assets/image/enq-home.jpg";
import img2 from "../assets/image/enq-office.jpg";
import img3 from "../assets/image/enq-restaurants.jpg";

import img4 from "../assets/image/enq-hospital.jpg";
import img5 from "../assets/image/enq-hotel.jpg";
import img6 from "../assets/image/enq-event.jpg";
import img7 from "../assets/image/enq-factories.jpg";
import img8 from "../assets/image/enq-construction.jpg";

const services = [
  { image: img1, title: "Home Clean" },
  { image: img2, title: "Office Clean" },
  { image: img3, title: "Restaurants" },
  { image: img4, title: "Hospitals" },
  { image: img5, title: "Hotels" },
  { image: img6, title: "Event Venues" },
  { image: img7, title: "Factories" },
  { image: img8, title: "Construction" },
];

const EnquirySection = () => {
  return (
    <section className="w-full pb-8 bg-[#f8f8f8] py-20 ">
      <div className="max-w-7x1 mx-auto px-6">

        <div className="max-w-full flex gap-6 ">

          {/* LEFT PART */}

          <div className="relative">
            <img
              src={leftImage}
              alt=""
              className="w-full h-[650px] object-cover rounded-lg"
            />

            {/* Corner Shape Box */}

            <div
              className="absolute bottom-0 right-0 bg-yellow-500 text-white p-6 w-48 h-40 flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(20% 0%,100% 0%,100% 100%,0% 100%,0% 25%)",
              }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold">Share</h3>
                <p className="font-medium">Your Ideas</p>
                <p className="font-medium">With Us</p>
              </div>
            </div>
          </div>

          {/* CENTER FORM */}

          
          <div className="bg-gradient-to-br from-[#204230] via-[#2c533e] to-[#1a2f24] shadow-2xl rounded-2xl p-8 border border-[#3e6a53]">

            {/* <h2 className="text-3xl font-bold text-white mb-8">
              Enquiry Form
            </h2> */}

            <div className="grid grid-cols-2 gap-4 mb-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#355c47] border border-[#4d7a62] text-white placeholder:text-gray-300 p-4 rounded-xl outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#355c47] border border-[#4d7a62] text-white placeholder:text-gray-300 p-4 rounded-xl outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 "
              />

            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <input
                type="date"
                className="w-full bg-[#355c47] border border-[#4d7a62] text-white placeholder:text-gray-300 p-4 rounded-xl outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 "
              />

              <input
                type="time"
                className="w-full bg-[#355c47] border border-[#4d7a62] text-white placeholder:text-gray-300 p-4 rounded-xl outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 "
              />

            </div>

           <select className="w-full bg-[#355c47] border border-[#4d7a62] text-white p-4 rounded-xl outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 pt-2 pb-8 mb-4">

              <option>Select Service</option>
              <option>Home Clean</option>
              <option>Office Clean</option>
              <option>Restaurants</option>
              <option>Hospitals</option>
              <option>Hotels</option>

            </select>

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full bg-[#355c47] border border-[#4d7a62] text-white placeholder:text-gray-300 p-4 rounded-xl outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 mb-10"
             />

            <button className="relative overflow-hidden bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl group shadow-lg"> 

            <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

           <span className="relative z-10 transition-colors duration-500 group-hover:text-[#204230]">
           Request A Call
          </span>

         </button>
          </div>

          {/* RIGHT PART */}

          <div className="bg-[#1d2318f9] w-[500px] p-6 rounded-xl">

            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Services
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">

              {services.map((item, index) => (
                <div
                key={index}
               className="flex flex-col items-center text-center group cursor-pointer"
  >
           {/* Service Image */}

          <div className="overflow-hidden rounded-full border-4 border-yellow-500 w-28 h-28 shadow-lg">
         <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
       </div>

        {/* Service Name Box */}

       <div className="mt-3 w-full min-h-[60px] bg-[#6b6862] rounded-lg px-3 py-3 shadow-md flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300">
      
      <h4 className="text-white text-sm font-semibold leading-5 text-center break-words group-hover:text-black">
        {item.title}
       </h4>
       </div>
      </div>
      ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EnquirySection;