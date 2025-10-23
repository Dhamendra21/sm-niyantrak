import React from 'react';

const LoginIllustration = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Abstract illustration of a secure login system with shield and key symbols representing authentication and security"
        >
          <defs>
            <linearGradient id="loginGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#00a870', stopOpacity:1}}></stop>
              <stop offset="100%" style={{stopColor:'#3ABEF9', stopOpacity:1}}></stop>
            </linearGradient>
            <linearGradient id="loginGrad2" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#3ABEF9', stopOpacity:1}}></stop>
              <stop offset="100%" style={{stopColor:'#00a870', stopOpacity:1}}></stop>
            </linearGradient>
          </defs>

          {/* Main Shield Background */}
          <circle cx="100" cy="100" r="80" fill="url(#loginGrad1)" fillOpacity="0.1" stroke="url(#loginGrad1)" strokeWidth="2"/>
          
          {/* Shield Shape */}
          <path 
            d="M100 40 Q140 60 140 100 Q140 140 100 160 Q60 140 60 100 Q60 60 100 40Z" 
            fill="none" 
            stroke="url(#loginGrad1)" 
            strokeWidth="3"
          />
          
          {/* Keyhole */}
          <circle cx="100" cy="100" r="20" fill="none" stroke="#3ABEF9" strokeWidth="2"/>
          <rect x="95" y="80" width="10" height="15" rx="2" fill="#3ABEF9" fillOpacity="0.7"/>
          
          {/* Security Lines */}
          <line x1="60" y1="70" x2="80" y2="70" stroke="#00a870" strokeWidth="2" strokeLinecap="round"/>
          <line x1="120" y1="70" x2="140" y2="70" stroke="#00a870" strokeWidth="2" strokeLinecap="round"/>
          <line x1="70" y1="130" x2="90" y2="130" stroke="#3ABEF9" strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="130" x2="130" y2="130" stroke="#3ABEF9" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Floating Security Dots */}
          <circle cx="75" cy="55" r="3" fill="#00a870" fillOpacity="0.8">
            <animate attributeName="cy" values="55;65;55" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="125" cy="145" r="3" fill="#3ABEF9" fillOpacity="0.8">
            <animate attributeName="cy" values="145;135;145" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="145" cy="85" r="2" fill="#00a870" fillOpacity="0.6">
            <animate attributeName="cx" values="145;135;145" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="55" cy="115" r="2" fill="#3ABEF9" fillOpacity="0.6">
            <animate attributeName="cx" values="55;65;55" dur="3.5s" repeatCount="indefinite"/>
          </circle>

          {/* Digital Particles */}
          <g opacity="0.7">
            <circle cx="160" cy="60" r="2" fill="#00a870">
              <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="140" r="2" fill="#3ABEF9">
              <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="160" cy="140" r="1.5" fill="#00a870">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="60" r="1.5" fill="#3ABEF9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Check Mark inside Shield */}
          <path 
            d="M90 100 L95 110 L110 90" 
            fill="none" 
            stroke="#00a870" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            opacity="0.8"
          >
            <animate attributeName="stroke-dasharray" values="0,30;30,0" dur="1.5s" fill="freeze" begin="1s"/>
          </path>
        </svg>
      </div>
      
      <h1 className="font-poppins text-4xl font-semibold text-center mt-6 text-[#1A1A1A] dark:text-white">
        Secure Access
      </h1>
      <p className="text-center mt-2 max-w-sm text-[#666666] dark:text-gray-300">
        Welcome back! Securely access your farm monitoring dashboard and control systems.
      </p>
    </div>
  );
};

export default LoginIllustration;