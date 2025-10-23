import React from 'react';

const CTA = () => {
  return (
    <>
      <section 
        className="py-20 md:py-40 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 16, 13, 0.9), rgba(10, 16, 13, 1)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAojg4XvW6dXXmsgKY0aLel_I4PAVU7HNTQwA1f76wzAkbdgedkbmYI-RR5FbS1xLkzh1OeFCCmSgAZfMtur23EA2DPvSm5zfEqoIKhhvu9-tr7KaWC59OS1Y7yLMVwczbaaFAViSWrDYTaAe7yoikTFNeh_2IfrX6buys2WcqjB3qHQLrp27nnNH79VBWRqYQ_ULXPTUxC3eTF4CAX2Zj9FdIMyU2b1Twwr0f-P34rx7VNW_YzKY4cxItHl01dmDVNu6fcb0BbAjGc')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-[#3ABEF9]">
            Saving Water. Saving Energy.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Empowering Farmers.
          </h2>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Smart Farming Revolution
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Take the first step towards a more efficient, profitable, and sustainable farm. Order your SM-Niyantrak today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00A86B] to-[#10B981] text-white font-bold py-3 px-8 rounded-full shadow-[0_0_10px_2px_rgba(0,168,107,0.5)] hover:shadow-[0_0_20px_5px_rgba(0,168,107,0.7)] hover:translate-y-[-2px] transition-all duration-300">
              Buy Now
            </button>
            <button className="border-2 border-white/50 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#0a100d] transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;