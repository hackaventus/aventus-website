import React from "react";
import "./css/NewAventusLanding.css";

const NewAventusLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-grid-green flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-[250px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mb-12 md:mb-16">
        <img
          src="aventus.gif"
          alt="Aventus Animation"
          className="w-full h-auto bg-transparent transition-transform duration-300"
        />
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 md:mb-6 tracking-wider">
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            A
          </span>
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            V
          </span>
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            E
          </span>
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            N
          </span>
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            T
          </span>
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            U
          </span>
          <span className="letter-animation text-white hover:text-[#00FF3C] transition-colors duration-300">
            S
          </span>
          <span className="mx-2"></span>
          <span className="text-[#00FF3C] letter-animation">3.0</span>
        </h1>
        <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#00FF3C] font-orbitron font-medium typewriter tracking-widest">
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default NewAventusLanding;