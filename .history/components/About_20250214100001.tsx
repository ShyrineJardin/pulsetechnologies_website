import React from 'react';

const About = () => {
  return (
    <div id="about" className="container mt-20 px-6">
      <h1 className="text-center font-semibold text-5xl pt-20">
        About <span className="text-pink-500">Flex Clave</span>
      </h1>
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-7 items-center">
        
        {/* Text Section */}
        <div data-aos="fade-right" className="flex-1 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold">Flex Clave</span>, we believe that yoga is more than just movement&mdash;it is a journey to inner peace, strength, and self-discovery. Our studio is a sanctuary where individuals of all levels can reconnect with their mind, body, and spirit.  
            <br /><br />
            With expert instructors, a welcoming community, and a peaceful atmosphere, we offer a space for growth, mindfulness, and holistic well-being. Whether you&apos;re seeking to improve flexibility, build strength, or simply find a moment of stillness, our classes are designed to support you every step of the way.  
            <br /><br />
            <span className="font-semibold">Join us at Flex Clave</span> and embrace the harmony between movement and mindfulness.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="flex-1">
          <img 
            src="/yoga_mobile.jpg" 
            alt="Yoga about img" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default About;
