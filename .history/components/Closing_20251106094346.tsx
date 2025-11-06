import React from 'react';

const Closing = () => {
  return (
  <div className="relative py-32 overflow-hidden">
    {/* Video Background */}
    <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
    >
        <source src="/closing.mp4" type="video/mp4" />
    </video>
                
    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
                
    {/* Content */}
    <div className="relative container mx-auto px-6 max-w-4xl text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Turn Your Ideas Into <span>Reality</span>
        </h2>
        <p className="text-white text-lg md:text-xl opacity-90">
            Ready to take the next step? Let{"'"}s work together to bring your vision to life and achieve your goals.
        </p>
    </div>
    </div>
        
  );
};

export default Closing;
