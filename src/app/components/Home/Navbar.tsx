"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Retrieve the cart count from localStorage on component mount
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cartItems.length);
  }, []);
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-5 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <CiSearch className="text-[#2A254B] text-2xl cursor-pointer hidden lg:block" />
          <h1 className="text-[#22202E] text-xl font-bold lg:hidden">Avion</h1>
        </div>
        <h1 className="hidden lg:block text-[#22202E] text-xl font-bold">Avion</h1>
        <div className="flex gap-4 text-2xl ">

        <Link href="/components/shoplist">
               <div className='relative'>
              <AiOutlineShoppingCart className=' text-3xl' />
              {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        )}</div>
            </Link>
          <FaRegCircleUser className="cursor-pointer hidden lg:block" />
          <CiSearch className="text-[#2A254B] text-2xl cursor-pointer  lg:hidden " />
          {/* Mobile Menu Toggle */}
          <FaGripLines
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Navbar Links */}
      <div className={`lg:flex lg:justify-center mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 text-sm text-[#726E8D] font-normal">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/components/About">About</Link></li>
          <li>
            <Link href="/components/AllProduct">All Products</Link>
          </li>
          <li><Link href="#">Tables</Link></li>
          <li><Link href="">Chairs</Link></li>
          <li><Link href="#">Crockery</Link></li> 
          <li><Link href="#">Tableware</Link></li>
          <li><Link href="#">Cutlery</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


