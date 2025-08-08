"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const clients = [
  "/client.png",
  "/clinets.png",
  "/client.png",
  "/clinets.png",
  "/client.png",
  "/clinets.png",
  "/client.png",
  "/clinets.png",
];

export default function Client() {
  const [centerIndex, setCenterIndex] = useState(0);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-16 min-h-[500px]">

        {/* LEFT: Slider */}
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: true, // Right to left
            }}
            loop={true}
            centeredSlides={true}
            onSlideChange={(swiper) =>
              setCenterIndex(swiper.realIndex % clients.length)
            }
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {clients.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className={` flex justify-center items-center p-10 transition rounded-md h-36 ${
                    index === centerIndex
                      ? "scale-110 "
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Client ${index + 1}`}
                    width={140}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Counter */}
          <div className="text-center text-sm font-semibold text-gray-600 mt-2">
            {centerIndex + 1} / {clients.length}
          </div>
        </div>

        {/* RIGHT: Text with Background */}
        <div className="relative flex flex-col justify-center z-10 min-h-[500px] lg:min-h-[600px]">
          <div
            className="absolute inset-0 -z-10 bg-no-repeat bg-right bg-contain"
            style={{
              backgroundImage: "url('/hello.png')",
              backgroundSize: "contain",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300 uppercase tracking-widest">
            <span className="inline-flex h-[3px] w-24 rounded overflow-hidden gap-[6px]">
              <span className="bg-blue-500" style={{ width: "20%" }}></span>
              <span className="bg-blue-500" style={{ width: "50%" }}></span>
            </span>
            <span className="text-sm text-black">Happy Clients <br /></span>
          </div>

          <h2 className="text-5xl font-bold  mt-4 mb-6 leading-tight max-w-[420px]">
            We’ve{" "}
            <span className="relative inline-block">
              150+
              <span className="absolute -inset-1 border-4 border-blue-500 rounded-full -z-10"></span>
            </span>{" "}
            Global Clients
          </h2>

          <p className="text-gray-600 max-w-sm text-lg">
            Trusted worldwide for delivering quality and innovation, building
            strong partnerships across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}
