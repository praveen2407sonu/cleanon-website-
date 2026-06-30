import React from "react";

import img1 from "../assets/image/project1.jpg";
import img2 from "../assets/image/project2.jpg";
import img3 from "../assets/image/project3.jpg";
import img4 from "../assets/image/project4.jpg";
import img5 from "../assets/image/project5.jpg";
import img6 from "../assets/image/project6.jpg";
import img7 from "../assets/image/project7.jpg";
import img8 from "../assets/image/project8.jpg";

const projects = [
  { image: img1, title: "Office Cleaning", location: "Columbia SC, USA" },
  { image: img2, title: "Floor Cleaning", location: "Laurel Fork, USA" },
  { image: img3, title: "House Cleaning", location: "Pompano Beach, USA" },
  { image: img4, title: "Kitchen Cleaning", location: "Spring Valley, USA" },
  { image: img5, title: "Window Cleaning", location: "North Branford, USA" },
  { image: img6, title: "Domestic Cleaning", location: "Houston, USA" },
  { image: img7, title: "Restaurant Cleaning", location: "Washington, USA" },
  { image: img8, title: "Hospitals Cleaning", location: "Huntington, USA" },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-12">
          All Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition"
              />

              <div className="bg-green-800 text-white p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.location}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;