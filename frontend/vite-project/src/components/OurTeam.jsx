import React from "react";
import { FaStar, FaShareAlt } from "react-icons/fa";

import team1 from "../assets/image/team1.jpg";
import team2 from "../assets/image/team2.jpg";
import team3 from "../assets/image/team3.jpg";
import team4 from "../assets/image/team4.jpg";

const teamMembers = [
  {
    image: team1,
    exp: "25+ Years Of Cleaning",
    name: "Robert Michale",
    role: "Home Cleaner",
  },
  {
    image: team2,
    exp: "15+ Years Of Cleaning",
    name: "Alisha Martin",
    role: "Kitchen Cleaner",
  },
  {
    image: team3,
    exp: "12+ Years Of Cleaning",
    name: "Adam Smith",
    role: "Window Cleaner",
  },
  {
    image: team4,
    exp: "16+ Years Of Cleaning",
    name: "Olivia Brown",
    role: "Office Cleaner",
  },
];

const OurTeam = () => {
  return (
    <section className="relative py-20 mb-8 overflow-hidden bg-gradient-to-br from-[#fffdf8] via-[#f3ede2] to-[#ece5d8]">
   
     {/* Dot Pattern */}
     <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:24px_24px]"></div>

    {/* Yellow Glow - Top Left */}  
    <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-yellow-300/20 rounded-full blur-[130px]"></div>

    {/* Green Glow - Full Right Side */}
    <div className="absolute -top-32 -right-44 w-[520px] h-[780px] bg-green-300/20 rounded-full blur-[160px]"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-14">

          <div className="flex justify-center items-center gap-2 text-yellow-500 font-bold text-2xl uppercase tracking-wider">
            <FaStar className="text-lg" />
            <span>We've Awesome Team Members</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 mt-5 leading-tight">
            Meet Our Experienced <br />
            & Professional Team
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">

          {teamMembers.map((member, index) => (
           

           <div
               key={index}
               className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 p-4 hover:-translate-y-2"
              >

              {/* Image */}
              <div className="relative">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[380px] object-cover rounded-xl"
                />

                {/* Dice Button */}
                <div className="absolute -bottom-5 ">

                  <div className="relative inline-block">

                    {/* Bottom Shadow */}
                    <div className="absolute left-1 top-1.5 w-full h-full bg-yellow-500 rounded-r-2xl"></div>

                    {/* Main Button */}
                    <button className="relative z-10 bg-green-700 text-white px-6 py-3 rounded-r-2xl font-semibold text-sm whitespace-nowrap">
                      {member.exp}
                    </button>

                  </div>

                </div>

              </div>

              {/* Text */}
              <div className="mt-14 flex justify-between items-start">

                <div>

                  <h3 className="group relative inline-block overflow-hidden h-8 cursor-pointer">
                  <span className="block text-2xl font-bold text-green-900 transition-all duration-500 group-hover:-translate-y-8">
                 {member.name}
                 </span>

                <span className="absolute left-0 top-8 text-2xl font-bold text-yellow-500 transition-all duration-500 group-hover:top-0">
               {member.name}
              </span>
               </h3>

                  <p className="text-gray-500 mt-2">
                    {member.role}
                  </p>

                </div>

                <button className="w-11 h-11 rounded-full bg-yellow-400 hover:bg-green-700 hover:text-white duration-300 flex items-center justify-center">
                  <FaShareAlt />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeam;    