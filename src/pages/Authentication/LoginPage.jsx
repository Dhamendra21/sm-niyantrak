import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import IllustrationPanel from './IllustrationPanel';
import RegistrationForm from './Regiterform';
import Nav from '../components/Nav';
import LoginForm from './LoginForm';
import LoginIllustration from './LoginIllustration';


const LoginPage = () => {
  
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4 bg-gradient-to-br from-[#E6FFE6] to-[#F9FFF9] dark:from-[#0f231c] dark:to-[#0a1a14] text-[#1A1A1A] dark:text-gray-200">
     <header>
        <Nav/>
     </header>
     
      <AnimatedBackground />
      
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Illustration Panel (Desktop Only) */}
        
        <LoginIllustration/>

        {/* Right Side: Registration Form */}
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;