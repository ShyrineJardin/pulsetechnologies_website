import React from "react";

const Class = () => {
  const program = [
    {
      image: "/assets/fintech.png",
      title: "FinTech",
      description:
        "Easing payment processes, reducing fraud, saving users money, promoting financial planning, and ultimately moving the banking industry forward.",
    },
    {
      image: "/assets/mobility.jpg",
      title: "Mobility",
      description:
        "Moving something, or someone, from point A to point B with the most efficient way possible. Leveraging on location-based technologies, mobile devices, logistics, and crowdsourcing.",
    },
    {
      image: "assets/commerce.jpg",
      title: "Commerce",
      description:
        "Solving the biggest problems top brands and retailers face today by changing consumer behaviour, extending market reach, and combining entertainment and profitability.",
    },
    {
      image: "assets/bikram.jpeg",
      title: "Internet of Things",
      description:
        "We explore everything from delivery drones and 3d-printing to fan-speed controlling bots. We love to explore the intersection between hardware and software.",
    },
    {
      image: "assets/yin.jpg",
      title: "Health and Wellness",
      description:
        "Solving the biggest problems top brands and retailers face today by changing consumer behaviour, extending market reach, and combining entertainment and profitability.",
    },
    {
      image: "assets/restorative.jpg",
      title: "Education",
      description:
        "Finding ways to improve the reach and quality of education in society through the use of technology often runs through our innovation sessions.",
    },
  ];

  return (
    <div id="class" className="container mx-auto mt-20 text-center">
      <h1 className="pt-20 text-5xl font-semibold mb-5">Our <span className="text-[#189677]">Services</span></h1>
      <p className="mb-20 text-lg">Future-proof your business with cutting-edge IT solutions, ensuring seamless scalability, security, and digital transformation</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {program.map((yoga, index) => (
          <div data-aos="flip-left"
            key={index}
            className="relative h-72 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${yoga.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="text-lg font-bold">{yoga.title}</h2>
              <p className="text-sm">{yoga.description}</p>
              <div className="mt-2 flex items-center">
                <span className="text-xs bg-white text-black px-2 py-1 rounded-md">
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
