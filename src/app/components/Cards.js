"use client";
import { FaShieldAlt } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const services = [
  {
    title: "Web Development",
    desc: "Our world class web development team creates highly dynamic and fully responsive websites capable of outdoing your competition.",
    img: "/hover-bg.jpg",
  },
  {
    title: "App Development",
    desc: "Our professional iOS and Android development teams specialize in producing comprehensive apps catering to your specific business needs.",
    img: "/hover-bg.jpg",
  },
  {
    title: "Graphics Designing",
    desc: "Our highly skilled Graphic designers create unique logos, corporate profiles, mockups, cover/headers, Letterhead Pads, and other aesthetically appealing graphics to engage audience.",
    img: "/hover-bg.jpg",
  },
  {
    title: "Software Quality Assurance",
    desc: "Our Proficient SQA engineers are trained enough to develop, implement, and maintain test plans, cases, and scripts. Also performs end-to-end testing of applications by executing test cases and tracking test execution.",
    img: "/hover-bg.jpg",
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing team has a bag full of tricks to showcase your business to your target audience, turning leads into prospects effortlessly.",
    img: "/hover-bg.jpg",
  },
];

export default function Cards() {
  return (
    <section className="bg-[#060D1C] py-16">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="h-1 w-8 bg-blue-500 rounded"></div>
          <h2 className="text-xl font-semibold tracking-widest uppercase text-white">
            What We Do
          </h2>
          <div className="h-1 w-8 bg-blue-500 rounded"></div>
        </div>
  <div className="flex justify-center text-center">
  <h2 className="text-5xl text-white md:text-5xl font-bold leading-snug">
    <span>We Provide Best </span>
    <span className="text-blue-500">
      IT <br />Services
    </span>
  </h2>
</div>
        </div>

      {/* Cards */}
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-700">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-[#0A1A3A] p-6 border border-gray-700 flex flex-col justify-between overflow-hidden"
          >
            {/* Hover Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(/laptop.png)` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0A1A3A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <FaShieldAlt className="text-white text-3xl mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 flex-grow">{service.desc}</p>

              {/* Button */}
              <div className="mt-5">
                <button className="flex flex-col items-start text-blue-500 border border-blue-500 px-5 py-4 rounded-lg text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-500 hover:text-white">
                  <span className="leading-none font-semibold">Learn</span>
                  <span className="flex items-center gap-1 leading-none">
                    More <LuArrowUpRight className="text-lg" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
