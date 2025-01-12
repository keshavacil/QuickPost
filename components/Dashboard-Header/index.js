import {
  faBell,
  faCircleQuestion,
  faGear,
  faUserLarge,
  faTimes, 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useRouter } from "next/router";

const DashoardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenExpiry");
    router.push("/login");
  };

  const handleUpgrade = () => {
    router.push("/subscribe");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#173038] text-white">
      <div className="flex items-center cursor-pointer">
        <h2 className="text-gray-400">Coveify</h2>
      </div>
      {!isMenuOpen && (
        <div
          className="md:hidden flex items-center cursor-pointer z-10"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      )}
      <div
        className={`md:flex flex-1 justify-center ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex gap-8 cursor-pointer text-white">
          <li>Dashboard</li>
          <li>Calendar</li>
          <li>Analytics</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-6 cursor-pointer">
        <FontAwesomeIcon icon={faBell} size="1x" className="text-gray-500" />
        <FontAwesomeIcon
          icon={faCircleQuestion}
          size="1x"
          className="text-gray-500"
        />
        <FontAwesomeIcon icon={faGear} size="1x" className="text-gray-500" />
        <button
          onClick={handleUpgrade}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Upgrade
        </button>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
        <FontAwesomeIcon
          icon={faUserLarge}
          size="1x"
          className="text-gray-500"
        />
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-start items-center h-full bg-[#173038] text-white p-6">
          <div className="flex justify-end w-full">
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              className="text-gray-500 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="flex gap-8 mb-6">
            <FontAwesomeIcon icon={faBell} size="1x" className="text-gray-500" />
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size="1x"
              className="text-gray-500"
            />
            <FontAwesomeIcon icon={faGear} size="1x" className="text-gray-500" />
            <FontAwesomeIcon
              icon={faUserLarge}
              size="1x"
              className="text-gray-500"
            />
          </div>
          <ul className="flex flex-col gap-4 text-center text-white">
            <li className="cursor-pointer">Dashboard</li>
            <li className="cursor-pointer">Calendar</li>
            <li className="cursor-pointer">Analytics</li>
            <li className="cursor-pointer">Help</li>
            <li
              onClick={handleUpgrade}
              className="cursor-pointer"
            >
              Upgrade
            </li>
            <li
              onClick={handleLogout}
              className="cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashoardHeader;
