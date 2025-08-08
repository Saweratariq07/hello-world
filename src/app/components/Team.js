'use client';
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";

export default function Team() {
    return (
        <section className="bg-[#060D1C] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto w-[85%] flex flex-col md:flex-row items-center gap-16 relative">

                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300 uppercase tracking-widest">
                        <span className="inline-flex h-[3px] w-20 rounded overflow-hidden gap-[6px]">
                            <span className="bg-blue-500" style={{ width: '20%' }}></span>
                            <span className="bg-blue-500" style={{ width: '50%' }}></span>
                        </span>
                        <span>Your IT Team</span>
                    </div>

                    <h2 className="text-5xl md:text-5xl font-bold leading-snug">
                        <span >Hire a Pro </span>
                        <span className="text-blue-500">Team</span>
                    </h2>

                    <p className="text-sm text-gray-300 leading-relaxed">
                        We at HW Technologies are quite proud of our staff of highly informed and skilled individuals, which includes both seasoned veterans and bright newcomers to the industry. We connect you with just the most reliable IT support companies. depending on your needs and budget, you can pick from a wide range of high-quality resources. The dedication they show to their work and their insatiable appetite for learning new things are what make us successful in providing the highest quality service to our customers.
                    </p>
    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-lg font-semibold bg-blue-500 hover:bg-blue-950 transition-colors text-white px-6 py-3 rounded-lg mt-4 text-base"
                    >
                        Read More
                        <LuArrowUpRight className='font-bold' />
                    </a>
                  
                </div>

                <div className="flex-1 relative">
                    <Image
                        src="/team.png"
                        alt="Team working with charts"
                        width={600}
                        height={400}
                        className="rounded-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
