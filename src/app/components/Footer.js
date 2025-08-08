import Image from "next/image";
import { FaLinkedin, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Footer() {
  return (
    <div className="w-full">
      {/* Wanna Talk Section */}
      <section
        className="w-full bg-[#0d2049] bg-cover bg-center py-16 px-4 md:px-20"
        style={{ backgroundImage: "url('/your-background-image.png')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Wanna talk to an <span className="text-sky-400">Expert?</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0">
              Select the professionals wisely so that your company can soar to new heights.
            </p>
          </div>

          {/* Arrow + Button */}
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 relative">
              <Image
                src="/arrow.png"
                alt="Arrow"
                fill
                className="object-contain"
                priority
              />
            </div>
            <a
              href="#"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium shadow-md"
            >
              Let&apos;s Go <HiArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full bg-cover bg-center text-white pt-16 pb-12"
        style={{ backgroundImage: "url('/particle.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Incubator</li>
                <li>IoT&apos;s</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Services</li>
                <li>Products</li>
                <li>Projects</li>
                <li>Technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Hire a team</li>
                <li>Careers</li>
                <li>Get Hired</li>
                <li>Benefits to join</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-white" /> +92-303-0279447
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-white" /> info@hwryk.com
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white" /> Rahim Yar Khan, Pakistan
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white" /> Lahore, Pakistan
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>Copyright 2016 Hello World Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0 text-lg">
              <a href="#" aria-label="LinkedIn" className="hover:text-sky-500 transition">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-sky-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-sky-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
