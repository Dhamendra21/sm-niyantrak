import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link className="text-2xl font-bold tracking-wider" to="/">
          SM-Niyantrak
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link className="hover:text-[#00A86B] transition-colors duration-300" to="/">
            Home
          </Link>
          <Link className="hover:text-[#00A86B] transition-colors duration-300" to="#">
            About
          </Link>
          <Link className="hover:text-[#00A86B] transition-colors duration-300" to="#">
            Products
          </Link>
          <Link className="hover:text-[#00A86B] transition-colors duration-300" to="/dashboard">
            Dashboard
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link className="hover:text-[#00A86B] transition-colors duration-300 bg-[#00A86B] hover:bg-transparent rounded-full px-7 py-3" to="/Login">
            Login 
          </Link>
          <Link className="hover:text-[#00A86B] transition-colors duration-300 border border-[#00A86B] rounded-full px-7 py-3" to="/register">
            Register
          </Link>
        </div>
        
        <button className="md:hidden">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Nav