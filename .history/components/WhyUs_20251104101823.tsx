import React from 'react';
import { DiCode } from "react-icons/di";
import { TbCloudComputing } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";


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
      icon: <GiArtificialIntelligence className="text-[#189677] text-5xl" />,
      title: "AI & Automation",
      description: "Leveraging artificial intelligence to streamline workflows and enhance productivity.",
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
