'use client';
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";
export default function About() {
    return (
        <section className="bg-[#060D1C] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto w-[85%] flex flex-col md:flex-row items-center gap-16 ">

                <div className="flex-1 ">
                    <Image
                        src="/1.png"
                        alt="Team working with charts"
                        width={600}
                        height={400}
                        className="rounded-lg w-full object-cover"
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300 uppercase tracking-widest">
                        <span className="inline-flex h-[3px] w-24 rounded overflow-hidden gap-[6px]">
                            <span className="bg-blue-500" style={{ width: '20%' }}></span>
                            <span className="bg-blue-500" style={{ width: '50%' }}></span>
                        </span>
                        <span className='text-sm'>About Us</span>
                    </div>

                    <h2 className="text-[42px] md:text-[46px] font-bold leading-snug">
                        <span className="text-blue-500">Justifications</span> for why <br />
                        we are the best
                    </h2>

                    <p className="text-sm text-gray-300 leading-relaxed">
                        Hello World is one of the brightest stars in the universe of IT solutions and consultation in Pakistan. 
                        It took five years to expand from a modest startup built in 2016 to a global digital agency with over a dozen 
                        locations on 3 continents. It all started in a small city in Pakistan but our dedication and blessed fate gave 
                        us worldwide recognition and took the Hello World to the USA, UK, Australia, Switzerland, China, Canada, Iceland, 
                        Norway, Pakistan, UAE, Dominican Republic, and Nepal. Our professionals, backed by hundreds of successful projects, 
                        provide highly customized and innovative solutions and products for the better growth of your business in the online world. 
                        From Web Development, Apps Development, and Software Quality Assurance to UI/UX and Digital Marketing, you will get every IT 
                        solution under one roof of Hello World Technologies.
                    </p>

                
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-lg font-semibold bg-blue-500 hover:bg-blue-950 transition-colors text-white px-6 py-3 rounded-lg mt-4 text-base"
                    >
                        Read More
                        <LuArrowUpRight className='font-bold' />
                    </a>
                </div>
            </div>
        </section>
    );
}
