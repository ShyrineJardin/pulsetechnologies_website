import React from 'react';
import { FaDollarSign, FaStar, FaHeart, FaUsers } from 'react-icons/fa';
import { DiCode } from "react-icons/di";
import { TbCloudComputing } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";



const WhyUs = () => {
  const reasons = [
    {
      icon: <DiCode className="text-[#189677] text-5xl" />,
      title: "IT Solutions",
      description: "Empowering businesses with cutting-edge technology and digital transformation.",
    },
    {
      icon: <TbCloudComputing className="text-[#189677] text-5xl" />,
      title: "Cloud Computing",
      description: "Scalable, secure, and efficient cloud solutions tailored for your business growth.",
    },
    {
      icon: <MdOutlineSecurity className="text-[#189677] text-5xl" />,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions to protect your data and infrastructure.",
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
