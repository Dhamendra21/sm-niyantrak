import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link className="text-2xl font-bold tracking-wider text-white" to="/" onClick={closeMenu}>
            SM-Niyantrak
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link className="text-white text-md hover:text-green-500 transition-colors duration-300" to="/">
              Home
            </Link>
            <Link className="text-white text-md hover:text-green-500 transition-colors duration-300" to="/about">
              About
            </Link>
            <Link className="text-white text-md hover:text-green-500 transition-colors duration-300" to="#">
              Products
            </Link>
            <Link className="text-white text-md hover:text-green-500 transition-colors duration-300" to="/dashboard">
              Dashboard
            </Link>
          </nav>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              className="text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full px-6 py-2 text-sm font-medium" 
              to="/login"
            >
              Login 
            </Link>
            <Link 
              className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 rounded-full px-6 py-2 text-sm font-medium" 
              to="/register"
            >
              Register
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="container mx-auto px-6 py-4">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 mb-6">
                <Link 
                  className="text-gray-300 hover:text-green-500 transition-colors duration-300 py-2 text-lg font-medium" 
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  className="text-gray-300 hover:text-green-500 transition-colors duration-300 py-2 text-lg font-medium" 
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link 
                  className="text-gray-300 hover:text-green-500 transition-colors duration-300 py-2 text-lg font-medium" 
                  to="#"
                  onClick={closeMenu}
                >
                  Products
                </Link>
                <Link 
                  className="text-gray-300 hover:text-green-500 transition-colors duration-300 py-2 text-lg font-medium" 
                  to="/dashboard"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
              </nav>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <Link 
                  className="text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-lg px-6 py-3 text-center font-medium" 
                  to="/login"
                  onClick={closeMenu}
                >
                  Login 
                </Link>
                <Link 
                  className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 rounded-lg px-6 py-3 text-center font-medium" 
                  to="/register"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Add padding to body when mobile menu is open to prevent scrolling */}
      {isMenuOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  )
}

export default Nav