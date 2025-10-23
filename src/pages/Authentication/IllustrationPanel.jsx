import React from 'react';

const RegisterIllustration = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Abstract illustration of user registration with profile and connection nodes representing account creation"
        >
          <defs>
            <linearGradient id="registerGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#00a870', stopOpacity:1}}></stop>
              <stop offset="100%" style={{stopColor:'#3ABEF9', stopOpacity:1}}></stop>
            </linearGradient>
          </defs>

          {/* Main Circle */}
          <circle cx="100" cy="100" r="75" fill="url(#registerGrad1)" fillOpacity="0.1" stroke="url(#registerGrad1)" strokeWidth="2"/>
          
          {/* User Profile Silhouette */}
          <circle cx="100" cy="80" r="25" fill="none" stroke="#00a870" strokeWidth="2"/>
          <path 
            d="M70 130 Q100 160 130 130" 
            fill="none" 
            stroke="#3ABEF9" 
            strokeWidth="2"
          />
          
          {/* Connection Nodes */}
          <g>
            {/* Top Node */}
            <circle cx="100" cy="40" r="8" fill="#00a870" fillOpacity="0.8">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <line x1="100" y1="48" x2="100" y2="55" stroke="#00a870" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Left Node */}
            <circle cx="40" cy="100" r="6" fill="#3ABEF9" fillOpacity="0.8">
              <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <line x1="46" y1="100" x2="55" y2="100" stroke="#3ABEF9" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Right Node */}
            <circle cx="160" cy="100" r="6" fill="#00a870" fillOpacity="0.8">
              <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <line x1="154" y1="100" x2="145" y2="100" stroke="#00a870" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Bottom Node */}
            <circle cx="100" cy="160" r="6" fill="#3ABEF9" fillOpacity="0.8">
              <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite"/>
            </circle>
            <line x1="100" y1="154" x2="100" y2="145" stroke="#3ABEF9" strokeWidth="2" strokeLinecap="round"/>
          </g>

          {/* Data Flow Lines */}
          <g opacity="0.7">
            <path 
              d="M100 55 Q120 70 145 85" 
              fill="none" 
              stroke="#00a870" 
              strokeWidth="1.5" 
              strokeDasharray="4,4"
            >
              <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite"/>
            </path>
            <path 
              d="M100 55 Q80 70 55 85" 
              fill="none" 
              stroke="#3ABEF9" 
              strokeWidth="1.5" 
              strokeDasharray="4,4"
            >
              <animate attributeName="stroke-dashoffset" values="20;0" dur="2s" repeatCount="indefinite"/>
            </path>
          </g>

          {/* Plus Sign for Registration */}
          <g transform="translate(100, 100)">
            <rect x="-2" y="-10" width="4" height="20" fill="#00a870" fillOpacity="0.8">
              <animate attributeName="height" values="20;25;20" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="-10" y="-2" width="20" height="4" fill="#3ABEF9" fillOpacity="0.8">
              <animate attributeName="width" values="20;25;20" dur="1.5s" repeatCount="indefinite"/>
            </rect>
          </g>

          {/* Floating Elements */}
          <circle cx="170" cy="50" r="3" fill="#00a870">
            <animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="30" cy="150" r="3" fill="#3ABEF9">
            <animate attributeName="cx" values="30;35;30" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="150" r="2" fill="#00a870">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="30" cy="50" r="2" fill="#3ABEF9">
            <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
      
      <h1 className="font-poppins text-4xl font-semibold text-center mt-6 text-[#1A1A1A] dark:text-white">
        Smart Farming, Simplified Registration 
      </h1>
      <p className="text-center mt-2 max-w-sm text-[#666666] dark:text-gray-300">
       Join, SM-NIYANTRAK to automate monitor and optimize your farming operations with ease.
      </p>
    </div>
  );
};

export default RegisterIllustration;