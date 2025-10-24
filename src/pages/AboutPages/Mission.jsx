import React from 'react';

const Mission = () => {
  return (
    <section className="py-16 px-30" id="mission">
      <div 
        className="flex flex-col  min-h-[480px] gap-6 rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 md:p-16 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 33, 25, 0.8) 0%, rgba(17, 33, 25, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQnKNYefyBxcTsCxapfOMRgFKgNLmDCYlmzcKa7KykIQcNUjmmwvtXirw5CRcLvvMBA1TN1qA2FyiH7oMwF9bZSxsHOgLYv0z_S9cXxp1_05RpO-Wr3vybI37bN-vUKrVGBzHLB2tI6h_Wg-wQneDCG_ZiTK8CgIrrLKDXoyW_NuH7vmozeUTM3w2i_oo9Zr0NGqbp4rFlnHimPjBJFXvpQoZHbRhL-c7LkW7FUUJd6-ZRZGlLo1eDWSl9Zj1TXbguJ9oDxDu6j_wu")`
        }}
      >
        <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">
          Our Mission
        </h2>
        <p className="text-gray-200 text-xl font-medium leading-relaxed max-w-3xl">
          To bridge technology and agriculture, empowering farmers with intelligence, accessibility, and automation for a sustainable future.
        </p>
      </div>
    </section>
  );
};

export default Mission;