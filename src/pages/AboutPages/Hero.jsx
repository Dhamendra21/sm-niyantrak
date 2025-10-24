import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 text-center flex flex-col items-center justify-center">
      <div 
        className="flex min-h-[70vh] md:w-8/10 flex-col gap-8 rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 33, 25, 0.6) 0%, rgba(17, 33, 25, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1_Ax8o891FZuCmF4QodayvIVip2lTvWlSAdhp4TOecfBHODNlWrM8H289ZeXAwwVwmgMMxK54rntIRHVyboYVE3t6qHGYMVfha9BuXif6mQ5qHUPjw4q3btifDM-t_sNvs74zoZVrANC-DUK9PQ4-eFkCJdL1Hb94E6KYWZR3yF-EWkB0YWc02mPXnGt1J80klYKtux7XsQrHaH6__KszxlCKdVui1-gBfk71qNmE3RDMwoBzGAG17peqkn2YTCwzi9OiUIpEEUyn")`
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white text-4xl font-black sm:w-2/3 leading-tight tracking-tight md:text-6xl">
            Empowering Farmers Through Smart Technology
          </h1>
          <h2 className="text-gray-400 text-base font-light leading-normal md:text-lg max-w-2xl py-5 mx-auto">
            A storytelling-oriented journey from traditional irrigation to a smart, connected system with our hybrid GSM + WiFi motor controller.
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/register"
            className="flex min-w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-green-500 text-gray-900 text-base font-bold hover:bg-green-600 transition-colors"
          >
            <span className="truncate">Get Started</span>
          </Link>
          <button className="flex min-w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-gray-800 text-white text-base font-bold hover:bg-gray-700 transition-colors">
            <span className="truncate">Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;