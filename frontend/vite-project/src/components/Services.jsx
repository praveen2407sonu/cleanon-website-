import React from "react";

const services = [
  {
    number: "1",
    title: "Commercial",
    subtitle: "Hygiene for Workspaces",
    description:
      "Professional cleaning solutions for offices, restaurants and commercial facilities, ensuring a clean, healthy and productive environment every day.",
  },
  {
    number: "2",
    title: "Residential",
    subtitle: "Home Cleaning Made Simple",
    description:
      "Reliable and detailed home cleaning services designed to keep every room fresh, organized and comfortable for your family.",
  },
  {
    number: "3",
    title: "Specialised",
    subtitle: "Deep & Targeted Cleaning",
    description:
      "Expert deep cleaning for kitchens, bathrooms, sofas, carpets, glass surfaces and other high-use areas requiring extra care.",
  },
  {
    number: "4",
    title: "Event Venues",
    subtitle: "Clean Spaces for Moments",
    description:
      "Complete venue cleaning and preparation services to ensure your events look polished, welcoming and ready for guests.",
  },
];

const Services = () => {
  return (
    <section className="py-14 bg-[#f6faf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold uppercase tracking-[4px]">
            Services
          </span>

          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-yellow-400">
            Our Cleaning Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-gradient-to-b from-white to-green-50 border border-green-100 rounded-3xl p-6 hover:bg-[#204230] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Top Content */}
              <div className="flex gap-5 items-start mb-5">
                
                {/* Number */}
                <div className="shrink-0">
                  <span className="text-5xl font-bold text-green-600 group-hover:text-yellow-400">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-400 transition">
                    {service.title}
                  </h3>

                  <h4 className="mt-1 font-semibold text-green-600 group-hover:text-yellow-400 transition">
                    {service.subtitle}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-7 group-hover:text-green-600 transition">
                {service.description}
              </p>

              {/* Bottom Area */}
              <div className="mt-6 pt-5 border-t border-green-100 group-hover:border-green-700 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-400 transition">
                  Learn More
                </span>

                <div className="w-10 h-10 rounded-full bg-[#204230] text-white flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;