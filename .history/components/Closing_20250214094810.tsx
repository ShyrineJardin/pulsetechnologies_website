import React from 'react';

const Closing = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src="assets/ending.jpeg"
        alt="Closing background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Closing Quote */}
      <div data-aos="fade-down" className="relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold">
        &quot;Yoga is the journey of the self, through the self, to the self.&quot;
        </h2>
        <p className="text-lg mt-4 font-light">— The Bhagavad Gita</p>
      </div>
    </div>
  );
};

export default Closing;
