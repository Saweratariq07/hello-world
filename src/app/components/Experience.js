import Image from 'next/image';
import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";

export default function Experience() {
  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col items-center mb-12 px-4 sm:px-6 md:px-0">
        <div className="flex items-center gap-4">
          <div className="h-1 w-8 bg-blue-500 rounded"></div>
          <h2 className="text-sm tracking-widest uppercase text-gray-800">
            Success Story
          </h2>
          <div className="h-1 w-8 bg-blue-500 rounded"></div>
        </div>

        <div className="flex justify-center text-center mt-4">
          <h2 className="text-5xl text-black md:text-5xl font-bold leading-snug">
            <span>
              Our <span className="text-blue-500">Successive <br /></span> Journey
            </span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 items-center px-4 sm:px-6 md:px-0">

        <div className="flex gap-6 items-center flex-wrap sm:flex-nowrap">
          <div className="flex-shrink-0 w-[150px] md:w-[220px]">
            <Image
              src="/6.png"
              alt="Years of Experience"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-sky-600 text-sm font-semibold uppercase tracking-wide">
              Years of Experience
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Over the past six years, our IT company has assisted countless companies in streamlining
              their processes and increasing their productivity. As a company that began in a single bedroom,
              watching it grow into a global powerhouse is a truly amazing feat. Without the trust and
              confidence of our customers, this would not be possible.
            </p>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Image src="/tick.png" alt="icon1" width={20} height={20} />
                <span>By providing exceptional customer service manner.</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src="/tick.png" alt="icon2" width={20} height={20} />
                <span>Through sharing positive feedback from satisfied customers.</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src="/tick.png" alt="icon3" width={20} height={20} />
                <span>Keeping everyone informed and accessible for smooth project flow.</span>
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-lg font-semibold bg-blue-500 hover:bg-blue-950 transition-colors text-white px-6 py-3 rounded-lg mt-4 text-base"
            >
              Explore More
              <LuArrowUpRight className='font-bold' />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 h-full min-h-[450px]">

          <div className="relative flex flex-col items-center justify-center p-8 border-r border-b border-gray-600 text-center">
            <Image
              src="/ex.png"
              alt="Projects Icon"
              width={100}
              height={100}
              className="absolute"
            />
            <h4 className="text-3xl font-bold relative z-10">200+</h4>
            <p className="text-gray-600 relative z-10">Successful Projects</p>
          </div>

          <div className="relative flex flex-col items-center justify-center p-8 border-b border-gray-600 text-center">
            <Image
              src="/coffee.png"
              alt="Coffee Icon"
              width={100}
              height={100}
              className="absolute"
            />
            <h4 className="text-3xl font-bold relative z-10">2K+</h4>
            <p className="text-gray-600 relative z-10">Cup of Coffees</p>
          </div>

          <div className="relative flex flex-col items-center justify-center p-8 border-r border-gray-600 text-center">
            <Image
              src="/build.png"
              alt="Offices Icon"
              width={100}
              height={100}
              className="absolute"
            />
            <h4 className="text-3xl font-bold relative z-10">02</h4>
            <p className="text-gray-600 relative z-10">Fully Managed Offices</p>
          </div>

          <div className="relative flex flex-col items-center justify-center p-8 text-center">
            <Image
              src="/user.png"
              alt="Employees Icon"
              width={100}
              height={100}
              className="absolute"
            />
            <h4 className="text-3xl font-bold relative z-10">100+</h4>
            <p className="text-gray-600 relative z-10">Experienced Employees</p>
          </div>
        </div>

      </div>
    </section>
  );
}
