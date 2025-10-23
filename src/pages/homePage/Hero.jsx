import React from 'react';

const Hero = () => {
  return (
    <section 
      data-scroll
      data-scroll-speed="0.5"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 16, 13, 0.8), rgba(10, 16, 13, 1)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRer-3-vpPpP69ClvWVZ9-5JgE2WsC76kdYZvsoclyaYHM2L14Gwa8ictZQZANGnRd4mfVQWjyxKYe11Oi2c_nVzSK1H9oJctcjIyX0IsUCMhwpLyDcblMwo7f_lZ66ZzxhyT_IEtvtVEAv41DLBKSWr9e5qfrl3ZHkmoWTUwyp59qUaPd_RoFBhnAexpXOFn4yuETVVzW8m02tk3UH0OMBQaSQ--FaxEW_CWs6vClmVM105XFuuzNlcCZPu3gxSbt79M_dLssTRfc')`
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 grid md:grid-cols-2 items-center gap-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Empowering Farmers with Smart Automation
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Control your motor, monitor your farm — anytime, anywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button 
              className="bg-[#00A86B] text-white font-bold py-3 px-8 rounded-full shadow-[0_0_10px_2px_rgba(0,168,107,0.5)] hover:shadow-[0_0_20px_5px_rgba(0,168,107,0.7)] hover:translate-y-[-2px] transition-all duration-300"
            >
              Get Started
            </button>
            <button className="border-2 border-[#3ABEF9] text-[#3ABEF9] font-bold py-3 px-8 rounded-full hover:bg-[#3ABEF9] hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-[#00A86B]/20 rounded-full flex items-center justify-center relative shadow-[0_0_15px_5px_rgba(0,168,107,0.3),0_0_25px_10px_rgba(58,190,249,0.2)]">
            <span 
              className="material-symbols-outlined text-8xl text-[#3ABEF9] opacity-80"
              style={{ textShadow: '0 0 15px #3ABEF9' }}
            >
              memory
            </span>
            <div className="absolute inset-0 border-2 border-[#3ABEF9]/30 rounded-full animate-ping"></div>
            <div className="absolute inset-2 border border-[#00A86B]/30 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;