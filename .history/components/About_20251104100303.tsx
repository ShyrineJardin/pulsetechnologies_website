import React from 'react';

const About = () => {
  return (
    <div id="about" className="container mt-20 px-6">
      <h1 className="text-center font-semibold text-5xl pt-20">
        About <span className="text-[#189677]">Pulse Technologies</span>
      </h1>
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-7 items-center">
        
        {/* Text Section */}
        <div data-aos="fade-right" className="flex-1 text-lg leading-relaxed">
          <p className='md'>
            With a deep commitment to innovation, efficiency, and scalability, our expert team delivers tailored solutions that drive growth, streamline operations, and enhance customer experiences. Whether it’s custom enterprise software, AI-powered analytics, or next-gen fintech solutions, we provide the tools and technologies that keep businesses ahead of the curve. At Pulse Technologies, we believe in pushing boundaries, embracing disruption, and building smarter solutions for a connected world. Join us as we redefine the digital landscape—one breakthrough at a time.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="flex-1">
          <img 
            src="/about.jpg" 
            alt="about img" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default About;
