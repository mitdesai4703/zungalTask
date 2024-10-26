import { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const TopBar = () => {
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleRestaurantStatus = () => {
    setIsRestaurantOpen(!isRestaurantOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="flex w-full justify-between items-center p-4 bg-white shadow-md">
      <div className="font-bold text-xl">Zungal</div>

      <div className="flex items-center space-x-4 ml-[1000px]">
        <span className="font-bold text-gray-700 ">
          {isRestaurantOpen ? "Restaurant Open" : "Restaurant Closed"}
        </span>

        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            checked={isRestaurantOpen}
            onChange={toggleRestaurantStatus}
            className="sr-only peer"
          />
          <div
            className={`relative w-12 h-5 rounded-full peer transition-colors duration-300 ease-in-out 
            ${isRestaurantOpen ? "bg-green-500" : "bg-red-600"} 
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 
            after:transition-transform after:duration-300 after:ease-in-out 
            ${isRestaurantOpen ? "after:translate-x-7" : ""}`}
          ></div>
        </label>
      </div>

      <div className="flex items-center space-x-4 ">
        <button className="text-xl mr-4">
          <FaRegBell />
        </button>

        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="flex items-center bg-gray-200 px-3 py-1 rounded focus:outline-none"
          >
            <span className="font-semibold text-gray-800">Sachin</span>
            <span className="ml-1">
              <FaAngleDown />
            </span>
          </button>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
