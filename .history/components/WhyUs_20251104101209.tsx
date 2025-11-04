import React from 'react';
import { FaDollarSign, FaStar, FaHeart, FaUsers } from 'react-icons/fa';
import { DiCode } from "react-icons/di";


const WhyUs = () => {
  const reasons = [
    {
      icon: <DiCode className="text-[#189677] text-5xl" />,
      title: "Innovative IT Solutions",
      description: "Empowering businesses with cutting-edge technology and digital transformation.",
    },
    {
      icon: <FaStar className="text-[#189677] text-5xl" />,
      title: "Expert Instructors",
      description: "Train with certified yoga professionals dedicated to guiding you at every step of your journey.",
    },
    {
      icon: <FaHeart className="text-[#189677] text-5xl" />,
      title: "Holistic Wellness",
      description: "Experience a perfect blend of physical, mental, and spiritual well-being in our serene studio.",
    },
    {
      icon: <FaUsers className="text-[#189677] text-5xl" />,
      title: "The Community",
      description: "Join a supportive and friendly community that encourages personal growth and mindfulness.",
    },
  ];

  return (
    <div id="why-us" className="container mt-20 px-6 text-center">
      <h2 className="text-5xl font-semibold mb-20">Why Choose <span className="text-[#189677]">Us?</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map((reason, index) => (
          <div data-aos="zoom-in" key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4">
            {reason.icon}
            <h3 className="text-2xl font-semibold">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
