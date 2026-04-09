import React from "react";
import heroimg from '../assets/img/circle.png'
import Connect from "./Connect";
// import Disconnect from "./Disconnect";

const Hero = () => {
  return (
    <>
      <div className="relative flex lg:flex-row flex-col-reverse items-center justify-center h-[100vh] lg:px-20 md:px-6 px-3 lg:py-10 md:py-12 py-12 mx-auto lg:mt-10 md:mt-5 mt-0 gap-8 md:gap-12 lg:gap-0 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Flowing Liquid Blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-teal-500/30 to-cyan-400/20 rounded-full blur-3xl animate-float-md"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/25 to-indigo-600/15 rounded-full blur-3xl animate-float-fast"></div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

      <div className="relative z-10 flex lg:flex-row flex-col-reverse items-center justify-center h-[100vh] lg:px-0 md:px-6 px-3 lg:py-10 md:py-12 py-12 mx-auto lg:mt-10 md:mt-5 mt-0 gap-8 md:gap-12 lg:gap-[100px]">
        {/* Left Content Section */}
        <div className="w-full lg:w-[55%] text-center lg:text-start flex flex-col justify-center">
          <div className="flex flex-col lg:space-y-3 space-y-2 lg:mb-8 md:mb-6 mb-4 items-center lg:items-start">
            <div className="gradient-text bg-gradient-to-r pb-2 from-[#00BFA6] to-[#016179] text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-start font-bold glowtext leading-tight">
              Turn Your Content Into Scalable Growth
            </div>
          </div>
          
          <div className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[1.3rem] text-[#ffffff] text-center lg:text-start font-light mb-5 lg:mb-8 md:mb-7 lg:w-[90%] w-full leading-relaxed">
            Agentic Arc designs intelligent content workflows that turn a single idea into researched, structured, and ready-to-use scripts automatically.
          </div>
          
          {/* Button Section */}
          <div className="flex justify-center lg:justify-start">
            <Connect />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[45%] flex items-center justify-center">
          <img
            src={heroimg}
            className="w-64 sm:w-80 md:w-96 lg:w-full lg:max-w-2xl xl:max-w-3xl object-contain"
            alt="Agentic Arc Hero"
          />
        </div>
      </div>
      </div>

    </>
  );
};

export default Hero;
