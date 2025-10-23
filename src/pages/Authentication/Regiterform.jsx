import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailPhone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl bg-white/60 p-8 shadow-lg backdrop-blur-lg border border-[#e5e5e5]/50 dark:bg-[#0f231c]/40 dark:border-gray-100/10">
        <div className="flex flex-col">
          <h2 className="font-poppins text-[#101816] dark:text-white tracking-light text-[28px] font-bold leading-tight text-center pb-5">
            Create Your Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4" method="POST">
            {/* Full Name Field */}
            <div>
              <label className="flex flex-col flex-1">
                <p className="text-[#101816] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                  Full Name
                </p>
                <input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101816] focus:outline-0 border border-[#dae7e2] bg-white/80 focus:border-[#00a870] focus:ring-2 focus:ring-[#00a870]/50 h-12 placeholder:text-[#5e8d7d] px-4 py-3 text-base font-normal leading-normal dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </label>
            </div>

            {/* Email/Phone Field */}
            <div>
              <label className="flex flex-col flex-1">
                <p className="text-[#101816] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                  Email 
                </p>
                <input 
                  name="emailPhone"
                  value={formData.emailPhone}
                  onChange={handleChange}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101816] focus:outline-0 border border-[#dae7e2] bg-white/80 focus:border-[#00a870] focus:ring-2 focus:ring-[#00a870]/50 h-12 placeholder:text-[#5e8d7d] px-4 py-3 text-base font-normal leading-normal dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your email "
                  required
                />
              </label>
            </div>

            {/* Password Field */}
            <div>
              <label className="flex flex-col flex-1">
                <p className="text-[#101816] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="flex w-full flex-1 items-stretch">
                  <input 
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#101816] focus:outline-0 border border-r-0 border-[#dae7e2] bg-white/80 focus:border-[#00a870] focus:ring-2 focus:ring-[#00a870]/50 h-12 placeholder:text-[#5e8d7d] p-3 text-base font-normal leading-normal dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#5e8d7d] flex border border-l-0 border-[#dae7e2] bg-white/80 items-center justify-center px-3 rounded-r-lg dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </label>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="flex flex-col flex-1">
                <p className="text-[#101816] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <div className="flex w-full flex-1 items-stretch">
                  <input 
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#101816] focus:outline-0 border border-r-0 border-[#dae7e2] bg-white/80 focus:border-[#00a870] focus:ring-2 focus:ring-[#00a870]/50 h-12 placeholder:text-[#5e8d7d] p-3 text-base font-normal leading-normal dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-[#5e8d7d] flex border border-l-0 border-[#dae7e2] bg-white/80 items-center justify-center px-3 rounded-r-lg dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full h-12 px-6 text-white font-semibold bg-linear-to-r from-[#00a870] to-[#00E676] rounded-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a870] dark:focus:ring-offset-[#0f231c] shadow-md hover:shadow-lg hover:shadow-[#00a870]/40"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-[#666666] dark:text-gray-400 mt-6">
            Already have an account?
            <Link className="font-semibold text-[#00a870] hover:underline ml-1" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;