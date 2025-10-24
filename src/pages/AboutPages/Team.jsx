import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3TVzqg9osgN9gwrZjX54ip7BFwTRXiyUhz-RlYn-mKvJT7VQUG3OIYS3mejOjfVwJaRes5lA9M-m4prtwtBl5ySoZ-eLUnnhm1b1AjqemlCGWfXLyg6MUn9na6dhwHyu6UDiSOJluFx0Q7ZpOEYSYVgYoTk0Mlya5U2YsQTbdmBa8g4EPXNOO6GB5KU9dQt5D7TFGOylkmYvQbRJadriFoa4lzv2In4glUL0IOOZtGUC-HcH3tMNc9kz_hKGBlyg3DUuKSOSjORWV",
      name: "Dr. A. Sharma",
      role: "Mentor",
      description: "Guiding our vision with decades of agricultural and tech expertise."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNvPQUSXducZ0iVzSwCIhOD6mnV8i0j1uFG-TNPFGD6AcQKYAS2DHpRZYI4ZE0ysCwugxFf1HvhU_hPbYxJzxGQZd3UqUE5e-V_7ictswHzTezJq2AWVC-BVeQNnaQ-IO8gS30zxwCC3grgtGAlGYWEJYKAllUETyUohCAQIk1zArG4NkUQPC412qBO52hVOyoW0eirPfy1Xjh7FkQAsbhzSCDuPjfhp6eGO88q_RaEazaP9qCt0IP9yGbZmFakVL8U7Q2gNzHUj17",
      name: "R. Verma",
      role: "Electronics Expert",
      description: "Architecting the robust hardware that powers our smart system."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1XtRCCDaWMnPYSLAYSNlbhtcaIeHSRGWPxlFW-gyu1DSk3m6PSRdmGzTLofmUcrwUx1g_X9TWSNdUNtyf3ubPy0kiLVpbJbVjgttrMz9f0uzUjpVHF-TdbKwEICklbnhKcvBLg6oThkEBivPe3-UcWh8rK-JdltsjPFP3zt5b5kE3XgtUvGssQ1QkN7DJTLFY_yhafZ-Q8DESQVDM8cl3VX1sBLpOK97xunv_KGjTgK_AKxjK-PY3PtQV4vaymfTXvFXE2a-phX2l",
      name: "Dhamendra Sahu",
      role: "Founder & Developer",
      description: "The driving force, turning a powerful idea into a revolutionary product."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU9UgqEtaF8x8_ZiXd1uKfPDI6aj4PM1Sfc2Rbag0iCu48AyfLcdu4bX5g39juqaV2wZYjazlYFkFzYgHAm3vvzJImG_SI3wEVYl-7orDrTsm1nBwlpdTXvEjnp1G69EE0FMo_FwJZ5zAbqfecx2djX1F1aHHPVlJzL0dSAA-wMNC7s-1x8zKDocUP9pvFwQ96CrD8CNx9lxuNLJ8sfLKzMIga0FRGRX77TdruYnQ1l5xRgsybDjIj85kv6fosYFiPN09beP0SN38E",
      name: "S. Kumar",
      role: "Field Worker",
      description: "Ensuring our technology meets the real-world needs of farmers."
    }
  ];

  return (
    <section className="py-16 md:px-37" id="team">
      <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-12 text-center">
        Meet the Minds Behind SM-Niyantrak
      </h2>
      
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center gap-4 text-center">
            <img 
              className="w-32 h-32 rounded-full object-cover border-2 border-green-500/50"
              src={member.image}
              alt={`Profile picture of ${member.name}`}
            />
            <div>
              <h4 className="text-white text-lg font-bold">{member.name}</h4>
              <p className="text-green-500 text-sm font-medium">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;