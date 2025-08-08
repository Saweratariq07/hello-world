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
    <>
      <section className="bg-blue-950 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-[80%] w-full px-6 flex flex-col items-center">
          {/* Slider */}
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
            spaceBetween={10} // Reduced space between slides
            slidesPerView={5} // Show 5 slides on larger screens
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 5 },
              640: { slidesPerView: 2, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 8 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
            }}
            className="pb-12 w-full"
          >
            {clients.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex justify-center items-center p-6 transition rounded-md h-36 border-none outline-none ${
                    index === centerIndex ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Client ${index + 1}`}
                    width={140}
                    height={100}
                    className="object-contain text-white"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Counter */}
          <div className="text-center text-sm font-semibold text-white mt-1">
            {centerIndex + 1} / {clients.length}
          </div>
        </div>
      </section>

      <style jsx>{`
        .swiper-slide {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        .swiper-slide:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        .swiper-slide-active,
        .swiper-slide-active:focus,
        .swiper-slide-active:hover {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}
