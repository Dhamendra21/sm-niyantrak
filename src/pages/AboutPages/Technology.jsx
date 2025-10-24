import React from 'react';

const Technology = () => {
  const techItems = [
    {
      icon: 'sensors',
      title: 'IoT Sensors',
      description: 'Real-time data collection from the field for moisture, temperature, and nutrient levels.'
    },
    {
      icon: 'dashboard',
      title: 'Cloud Dashboard',
      description: 'Monitor and control your farm from anywhere with our intuitive web and mobile dashboard.'
    },
    {
      icon: 'wifi_tethering',
      title: 'GSM + WiFi Hybrid',
      description: 'Seamless connectivity ensures your system is always online, even in remote areas.'
    },
    {
      icon: 'schedule',
      title: 'Automated Scheduling',
      description: 'Set intelligent irrigation schedules based on crop type, weather, and soil data.'
    },
    {
      icon: 'hub',
      title: 'MQTT Protocol',
      description: 'Lightweight and efficient communication protocol for reliable IoT device messaging.'
    },
    {
      icon: 'notifications_active',
      title: 'Real-time Alerts',
      description: 'Instant notifications on your phone for critical events like power failure or motor issues.'
    }
  ];

  return (
    <section className="py-16 md:px-37" id="technology">
      <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-8 text-center">
        The Technology Behind Smart Farming
      </h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techItems.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-green-500/50 hover:bg-gray-800/60"
          >
            <span className="material-symbols-outlined text-green-500 text-4xl">
              {item.icon}
            </span>
            <h3 className="text-white text-lg font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;