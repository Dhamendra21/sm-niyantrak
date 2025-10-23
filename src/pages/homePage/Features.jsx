import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'wifi_tethering',
      title: 'GSM + WiFi Hybrid Control',
      description: 'Seamlessly switch between network modes for 100% uptime.'
    },
    {
      icon: 'monitoring',
      title: 'Real-time Motor Monitoring',
      description: 'Track voltage, current, and operational status live.'
    },
    {
      icon: 'schedule',
      title: 'Smart Scheduling',
      description: 'Automate irrigation cycles to save time and resources.'
    },
    {
      icon: 'sim_card_alert',
      title: 'SIM Change Alert',
      description: 'Receive instant notifications for unauthorized SIM swaps.'
    },
    {
      icon: 'power',
      title: 'Power Indicators',
      description: 'Stay informed about power availability at your farm.'
    },
    {
      icon: 'signal_cellular_alt',
      title: 'Network Indicators',
      description: 'Know your device\'s connectivity status at all times.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Intelligent Features, Simplified</h2>
          <p className="mt-4 text-white/70">
            Everything you need for smart irrigation management in one powerful device.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-8 text-center hover:translate-y-[-8px] hover:shadow-[0_10px_20px_rgba(0,168,107,0.1)] transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-[#00A86B]/20 to-[#3ABEF9]/20 mb-6 shadow-[0_0_12px_3px_rgba(58,190,249,0.4)]">
                <span className="material-symbols-outlined text-4xl text-[#3ABEF9]">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;