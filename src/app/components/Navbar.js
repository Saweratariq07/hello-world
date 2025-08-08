'use client';
import { useState } from 'react';
import Image from 'next/image';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-center text-white relative z-50 py-12 font-poppins">
        <div className="w-[80%] flex items-center justify-between z-50">
          <div className="w-44 h-auto cursor-pointer">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={176}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          <div className="flex items-center gap-4">
            {!menuOpen && (
              <button className="hidden sm:block px-6 py-3 bg-transparent hover:bg-white hover:text-blue-900 text-white border hover:border-blue-900 border-white rounded-lg text-sm transition-colors cursor-pointer">
                Get a Quote
              </button>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white flex items-center gap-2 text-sm focus:outline-none cursor-pointer"
            >
              <span>{menuOpen ? 'Close' : 'Menu'}</span>
              {menuOpen ? (
                <RxCross2 size={24} />
              ) : (
                <RiMenu3Line size={24} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat flex-col items-center justify-center space-y-10 text-white z-40`}
          style={{
            backgroundImage: `url('/particle.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

          <ul className="space-y-6 relative text-[#0d6efd] z-10 text-4xl">
            {["Home", "Who we are?", "Our Products","Services", "Hire Team", "06Project"].map((item, index) => (
              <li
                key={index}
                className="relative flex items-center hover:text-blue-400 transition duration-300 cursor-pointer pl-6"
              >
                <span className="absolute -left-6 -top-1 text-white text-xl font-bold">
                  {index + 1}.
                </span>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
