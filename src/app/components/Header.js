'use client';

import React from 'react';
import Image from 'next/image';  

const features = [
  {
    imgSrc: '/bulb.png',
    title: 'Inspiration',
  },
  {
    imgSrc: '/star.png',
    title: 'Innovation',
  },
  {
    imgSrc: '/success.png',
    title: 'Success',
  },
];

const Header = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center text-white px-4 pb-20 z-10">
      <h1 className="text-[48px] md:text-[52px] font-bold leading-snug">
        Moving Business to <br />
        <span className="text-blue-500">Growth</span>
      </h1>
      <p className="text-gray-300 text-sm md:text-sm max-w-2xl mt-4">
        An IT company with a Difference! Building the Future by Serving technology better
      </p>

      <div className="max-w-4xl w-full mt-12 flex flex-wrap justify-center gap-8 px-4">
        {features.map(({ imgSrc, title }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 min-w-[150px] justify-center"
          >
            <Image
              src={imgSrc}
              alt={title}
              width={20}      
              height={20}     
              className="object-contain"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
