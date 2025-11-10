import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../Services/authService";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const username = localStorage.getItem("username");

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
    navigate('/login') // or use navigate if using react-router
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Name */}
        <div className="text-white font-bold text-2xl tracking-wide">
          Health<span className="text-yellow-300">Care+</span>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-8 text-white font-medium">
           <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
           Home 
          </Link>

          
          <Link
       to="/chatbot"
            className="hover:text-yellow-300 transition duration-300"
          >
            Chatbot
          </Link>
          <Link
           to="/takemedicine"
            className="hover:text-yellow-300 transition duration-300"
          >
            Medicine Recommendation
          </Link>
         
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          {auth ? (
            <>
              <span className="text-white font-semibold">
                👋 Hi, {username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
              >
                Login
              </Link>
              <Link
              to="/signup"
                className="border border-white text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
