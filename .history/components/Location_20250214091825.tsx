import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Location = () => {
  return (
    <div id="location" className="container mt-20 mb-20">
      <h1 className="text-center font-semibold text-5xl pt-20 pb-10">
        Our <span className='text-pink-500'>Studios</span>
      </h1>

      {/* Las Piñas - Go Tan Building */}
      <div data-aos="fade-right" className="flex flex-col md:flex-row mt-10 justify-between gap-7 items-center">
        <Image
          src="/assets/studio1.jpg"
          alt="Go Tan Building Yoga Studio"
          width={600} height={350} 
          className="w-full md:w-1/2 h-[350px] rounded-lg shadow-lg object-cover"
          priority 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-2">Las Piñas - Go Tan Building</h2>
          <p>319 & 320 Alabang-Zapote Road, Talon Uno, Las Piñas City</p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-black transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Las Piñas - Colours Town Center */}
      <div data-aos="fade-left" className="flex flex-col md:flex-row-reverse mt-10 justify-between gap-7 items-center">
        <Image
          src="/assets/studio2.png"
          alt="Colours Town Center Yoga Studio"
          width={600} height={350}
          className="w-full md:w-1/2 h-[350px] rounded-lg shadow-lg object-cover"
          loading="lazy" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-2">Las Piñas - Colours Town Center</h2>
          <p>Alabang-Zapote Road, Pamplona Uno, Las Piñas City</p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-black transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Cavite - Grand Centennial Business Space */}
      <div data-aos="fade-right" className="flex flex-col md:flex-row mt-10 justify-between gap-7 items-center">
        <Image
          src="/assets/studio3.jpg"
          alt="Grand Centennial Business Space Yoga Studio"
          width={600} height={350}
          className="w-full md:w-1/2 h-[350px] rounded-lg shadow-lg object-cover"
          loading="lazy"
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-2">Cavite - Grand Centennial Business Space</h2>
          <p>Grand Centennial Homes, Kawit, Cavite</p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-black transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
