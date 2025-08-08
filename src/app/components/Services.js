'use client';
import Image from 'next/image';

export default function Services() {
  return (
    <section className="bg-[#060D1C] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto w-[85%] flex flex-col md:flex-row items-center gap-16 relative">
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300 uppercase tracking-widest">
            <span className="inline-flex h-[3px] w-20 rounded overflow-hidden gap-[6px]">
              <span className="bg-blue-500" style={{ width: '20%' }}></span>
              <span className="bg-blue-500" style={{ width: '50%' }}></span>
            </span>
            <span>Best Feature</span>
          </div>

          <h2 className="text-5xl md:text-5xl font-bold leading-snug">
            <span className="text-blue-500">Astonishing</span> the <br />
            <span>World</span>
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Hello World Technology is different from other IT companies because our team of
            experts has a deep understanding of the latest IT trends and technologies. By offering
            customized IT solutions tailored to meet the specific needs of our clients, we have a
            proven track record of delivering quality IT projects on time and within budget. We
            offer a comprehensive range of IT services, from website design and development to
            e-commerce solutions and digital marketing — we are a one-stop shop for all your IT
            needs.
          </p>

          <h3 className="text-4xl md:text-4xl mt-6 font-signature">
            Hello World Technologies
          </h3>
        </div>

        <div className="flex-1 relative">
          <Image
            src="/2.png"
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
