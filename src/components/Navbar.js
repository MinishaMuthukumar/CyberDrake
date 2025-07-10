import React, { useState } from "react";
import cyberdrakeLogo from "../assets/cyberdrake-logo.png";
import { FaShieldAlt, FaUserTie } from "react-icons/fa";

const Navbar = ({ toggleTheme, theme }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-200"} px-4 py-3 flex items-center justify-between shadow-md transition duration-500`}>
        <div className="flex items-center space-x-3">
          <img
            src={cyberdrakeLogo}
            alt="CyberDrake Logo"
            className="h-10 w-10 rounded-full shadow cursor-pointer hover:scale-110 transition duration-300"
            onClick={() => setShowModal(true)}
          />
          <h1 className="text-xl font-extrabold text-white">CyberDrake</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded transition duration-300"
        >
          {theme === "dark" ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 max-w-sm w-full shadow-lg transform scale-95 hover:scale-100 transition duration-500">
            <div className="flex flex-col items-center space-y-3">
              <img src={cyberdrakeLogo} alt="CyberDrake" className="h-16 w-16 rounded-full shadow" />
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <FaShieldAlt className="text-pink-500" /> <span>CyberDrake</span>
              </h2>
              <p className="text-sm italic text-center">Empowering Hackers, Developers & Innovators</p>

              <div className="space-y-1 text-center mt-2">
                <p><FaUserTie className="inline text-green-400 mr-1" /> CEO & Founder: <span className="font-semibold">Minisha Muthukumar</span></p>
                <p><FaUserTie className="inline text-yellow-400 mr-1" /> CO-CEO & Co-Founder: <span className="font-semibold">Sweethashree</span></p>
              </div>

              <p className="text-xs text-gray-400 mt-3">Contact: cyberdraketech@gmail.com</p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full w-32"
              >
                Close ✖️
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
