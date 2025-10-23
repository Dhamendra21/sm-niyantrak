import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 h-56 w-56 animate-pulse rounded-full bg-[#00a870]/10 blur-3xl filter dark:bg-[#00a870]/20"></div>
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-pulse rounded-full bg-[#3ABEF9]/10 blur-3xl filter dark:bg-[#3ABEF9]/20"></div>
    </>
  );
};

export default AnimatedBackground;