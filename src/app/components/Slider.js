"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

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
  "/client.png",
  "/clinets.png",
];

export default function Client() {
  const [centerIndex, setCenterIndex] = useState(0);

  return (
    <>
      <section className="bg-blue-950 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-[80%] w-full px-6 flex flex-col items-center relative">
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

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: true, // Right to left
            }}
            loop={true}
            centeredSlides={true}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            onSlideChange={(swiper) =>
              setCenterIndex(swiper.realIndex % clients.length)
            }
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 5 },
              640: { slidesPerView: 2, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 8 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
            }}
            className="pb-12 w-full relative"
          >
            {clients.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex justify-center items-center p-6 transition rounded-md h-36  ${
                    index === centerIndex ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Client ${index + 1}`}
                    width={140}
                    height={100}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center gap-6 mt-2 select-none">
            <button
              aria-label="Previous slide"
              className="custom-swiper-button-prev text-white  hover:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center"
            >
              &#8592;
            </button>

            <div className="text-center text-sm font-semibold text-white">
              {centerIndex + 1} / {clients.length}
            </div>

            <button
              aria-label="Next slide"
              className="custom-swiper-button-next text-white  hover:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center"
            >
              &#8594;
            </button>
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
