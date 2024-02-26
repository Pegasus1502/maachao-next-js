"use client";

import {
  FiUser,
  FiBell,
  FiShoppingCart,
  FiSearch,
  FiFilter,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center md:h-18">
      {/* Upper section */}
      <div className="flex items-center w-full">
        {/* Mobile view - Profile, Deliver To, Notification, and Cart icons on the left */}
        <div className="md:hidden flex items-center w-full">
          {/* Left div */}
          <div className="w-1/2 flex items-center justify-start ">
            <div className="mr-4">
              {/* Profile icon */}
              <FiUser
                size={48}
                className=" mx-2 border border-gray-300 rounded-lg p-2"
              />
            </div>
            {/* Deliver To text, location icon, and dropdown arrow */}
            <div className="flex flex-col">
              <span className="text-black-500">Deliver To</span>
              <div className="flex items-center">
                <FiMapPin size={16} className="text-gray-500 mr-1" />
                <div className="flex items-center">
                  <span className="text-gray-500">My Home</span>
                  <FiChevronDown size={16} className="text-gray-500 mr-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right div */}
          <div className="w-1/2 flex items-center justify-end ">
            <FiBell
              size={48}
              className=" mx-2 border border-gray-300 rounded-lg p-2"
            />
            <FiShoppingCart
              size={48}
              className="mx-2 border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Desktop view - Profile icon */}
        <div className="hidden md:flex items-center">
          <div className="mr-4">
            {/* Profile icon */}
            <FiUser
              size={48}
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Deliver To text, location icon, and dropdown arrow */}
          <div className="flex flex-col">
            <span className="text-sm">Deliver To</span>
            <div className="flex items-center">
              <FiMapPin size={12} className="text-gray-500 mr-1" />
              <div className="flex items-center">
                <span className="text-gray-500">My Home</span>
                <FiChevronDown size={16} className="text-gray-500 mr-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center ml-auto">
        {/* Search bar with search and filter icons in desktop view */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
            <FiSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md pl-8 py-3 pr-10 outline-none focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {/* Grey border line for the filter icon */}
            <div className="border-l border-gray-300 h-6 mr-2"></div>
            <FiFilter
              size={34}
              color="#999999"
              className="p-1"
            />
          </div>
        </div>

        {/* Notification icon */}
        <FiBell
          size={48}
          className="mx-4 border border-gray-300 rounded-lg p-2"
        />

        {/* Cart icon */}
        <FiShoppingCart
          size={48}
          className="border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Mobile view */}
      <div className="md:hidden w-full mt-4">
        {/* Search bar with search and filter icons in mobile view */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
            <FiSearch size={24} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md w-full pl-8 py-4 pr-10 outline-none focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {/* Grey border line for the filter icon */}
            <div className="border-l border-gray-300 h-6 mr-2"></div>
            <FiFilter
              size={34}
              color="#999999"
              className="p-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
