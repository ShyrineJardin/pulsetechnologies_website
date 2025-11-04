import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src="/coding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div data-aos="fade-up" className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-semibold uppercase">Innovate. Transform. Elevate</h1>
        <p className="mt-4 text-lg md:text-2xl font-light">Innovate with confidence. Grow without limits.</p>
        <button className="mt-6 px-6 py-3 className="w-full bg-[#189677] hover:bg-[#147a5f] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"">
          Contact Us
        </button>
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default Hero;
