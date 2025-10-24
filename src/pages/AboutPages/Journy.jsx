import React from 'react';

const Journy = () => {
  const timelineItems = [
    {
      icon: 'lightbulb',
      title: 'The Idea',
      description: 'The initial concept to solve modern agricultural challenges.'
    },
    {
      icon: 'memory',
      title: 'Prototype Development',
      description: 'Engineering a scalable hybrid GSM + WiFi motor control system.'
    },
    {
      icon: 'grass',
      title: 'First Field Test',
      description: 'Deploying our system in real-world farming conditions.'
    },
    {
      icon: 'rocket_launch',
      title: 'Hybrid System Launch',
      description: 'Bringing SM-Niyantrak to farmers everywhere.'
    }
  ];

  return (
    <section className="py-16" id="about flex flex-col justify-center items-center">
      <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-8 text-center">
        The Journey of SM-Niyantrak
      </h2>
      
      <div className=' flex flex-col items-center'>
        <div className="grid grid-cols-[40px_1fr] w-fit gap-x-4 px-4">
        {timelineItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center justify-center gap-1 pt-3">
              <div className="text-green-500">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              {index !== timelineItems.length - 1 && (
                <div className="w-0.5 bg-gray-700 h-2 grow"></div>
              )}
            </div>
            
            <div className={`flex flex-1 flex-col ${index === 0 ? 'pb-6 pt-2' : index === timelineItems.length - 1 ? 'pt-6' : 'py-6'}`}>
              <p className="text-white text-lg font-medium leading-normal">{item.title}</p>
              <p className="text-gray-400 text-base font-normal leading-normal">{item.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Journy;