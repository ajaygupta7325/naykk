"use client";
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaStore } from "react-icons/fa";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-md py-4">
      {/* Top Bar */}
      <div className="bg-pink-100 text-center text-sm py-1">
        <span className="text-gray-600">50% off on Making Charges</span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          NAYKK<span className="text-pink-500">♦</span>
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow max-w-lg">
          <input
            type="text"
            placeholder='Search "Pendants"'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-gray-600">
          <FaStore className="text-xl cursor-pointer hover:text-pink-500" />
          <FaUser className="text-xl cursor-pointer hover:text-pink-500" />
          <FaHeart className="text-xl cursor-pointer hover:text-pink-500" />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-pink-500" />
        </div>
      </div>

      {/* Menu Links */}
      <div className="container mx-auto mt-4 px-4 md:px-8">
        <ul className="flex space-x-6 text-gray-700 text-sm">
          <li className="cursor-pointer hover:text-pink-500">Shop by Category</li>
          <li className="cursor-pointer hover:text-pink-500">Gold with Lab Diamonds</li>
          <li className="cursor-pointer hover:text-pink-500">Personalised Jewellery</li>
          <li className="cursor-pointer hover:text-pink-500">Gift Store</li>
          <li className="cursor-pointer hover:text-pink-500">Mens Jewellery</li>
          <li className="cursor-pointer hover:text-pink-500">Latest Collections</li>
        </ul>
      </div>
    </nav>
  );
}

