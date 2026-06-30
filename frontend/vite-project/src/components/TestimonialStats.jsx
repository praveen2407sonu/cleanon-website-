import React from "react";
import {
  FaBroom,
  FaUsers,
  FaSmile,
  FaAward,
} from "react-icons/fa";

const TestimonialStats = () => {
  const stats = [
    {
      icon: <FaBroom />,
      number: "5.2K",
      label: "Spaces Cleaned",
    },
    {
      icon: <FaUsers />,
      number: "75+",
      label: "Trained Professionals",
    },
    {
      icon: <FaSmile />,
      number: "100%",
      label: "Happy Customers",
    },
    {
      icon: <FaAward />,
      number: "500K+",
      label: "Awards Won",
    },
  ];

  return (
    <section className="py-20  mb-8 bg-[#0e400e] rounded-2xl">
      <div className="max-w-7xl mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                rounded-3xl
                p-6
                overflow-hidden
                border border-gray-100
                shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
                group
              "
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

              <div className="flex items-center gap-5">
                {/* Icon Area */}
                <div className="relative shrink-0">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 scale-125 rounded-full bg-yellow-100"></div>

                  {/* Main Circle */}
                  <div
                    className="
                      relative
                      w-20 h-20
                      rounded-full
                      bg-yellow-400
                      flex
                      items-center
                      justify-center
                      text-white
                      text-3xl
                      shadow-lg
                      group-hover:scale-110
                      group-hover:rotate-6
                      transition-all
                      duration-500
                    "
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-4xl font-extrabold text-[#1c3526] leading-none">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-gray-600 font-medium">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Decorative Shape */}
              <div
                className="
                  absolute
                  -right-8
                  -bottom-8
                  w-24
                  h-24
                  rounded-full
                  bg-yellow-100
                  opacity-40
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialStats;