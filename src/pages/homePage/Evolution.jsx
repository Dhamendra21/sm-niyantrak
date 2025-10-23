import React from 'react';

const Evolution = () => {
  const evolutionSteps = [
    {
      icon: 'agriculture',
      title: 'Traditional Farming',
      description: 'Manual pump operation, time-consuming and inefficient.',
      color: '#00A86B'
    },
    {
      icon: 'phonelink_setup',
      title: 'Remote Control',
      description: 'Control pumps with a simple call or SMS, anytime.',
      color: '#3ABEF9'
    },
    {
      icon: 'dashboard',
      title: 'Smart IoT Farming',
      description: 'Full control and real-time monitoring via an intelligent dashboard.',
      color: '#00A86B'
    }
  ];

  return (
    <section data-scroll data-scroll-speed="" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">From Tradition to Transformation</h2>
          <p className="mt-4 text-white/70">
            Witness the evolution of irrigation, simplified for the modern farmer.
          </p>
        </header>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-white/20 -translate-y-1/2"></div>
          
          {evolutionSteps.map((step, index) => (
            <article key={index} className="text-center relative z-10 flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-full bg-green-500/10 border flex items-center justify-center mb-4"
                style={{ borderColor: step.color }}
              >
                <span 
                  className="material-symbols-outlined text-5xl"
                  style={{ color: step.color }}
                >
                  {step.icon}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-white/60 max-w-xs">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evolution;