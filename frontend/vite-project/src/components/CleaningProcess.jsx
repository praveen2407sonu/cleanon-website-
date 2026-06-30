import React from "react";
import {
  FaRegFileAlt,
  FaClock,
  FaBroom,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Apply Now",
    icon: <FaRegFileAlt />,
    description:
      "Enjoy a hassle-free booking process with our user-friendly platform, and conveniently.",
  },
  {
    id: "02",
    title: "Fix The Date",
    icon: <FaClock />,
    description:
      "We provide customized cleaning solutions that address your unique needs.",
  },
  {
    id: "03",
    title: "Starting Cleaning",
    icon: <FaBroom />,
    description:
      "Enjoy a hassle-free booking process with our user-friendly platform, and conveniently.",
  },
  {
    id: "04",
    title: "Final Inspection",
    icon: <FaHandshake />,
    description:
      "Before we leave, we inspect every corner to ensure your full satisfaction.",
  },
];

const CleaningProcess = () => {
  return (
    <section className="py-16 mb-10 bg-[#F9F6EE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-3">
            <FaStar className="text-yellow-500 text-lg" />
            <span className="text-green-700 font-semibold uppercase tracking-wider">
              Our Cleaning Process
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Transparent & Effective Steps
          </h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Single Connecting Line */}
          <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[1px] bg-green-800 z-0"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="text-center px-4">
                {/* Circle Section */}
                <div className="relative flex justify-center items-center mb-6">
                  {/* Outer Ring */}
                  <div className="absolute w-28 h-28 rounded-full border-2 border-green-800 bg-[#ded8cf]"></div>

                  {/* Inner Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-[#799866] border-2 border-yellow-300 flex items-center justify-center text-green-950 text-4xl z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="w-12 h-12 mt-10 rounded-full bg-green-800 text-white flex items-center justify-center font-bold mx-auto">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mt-5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 leading-relaxed text-[16px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;