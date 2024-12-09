// import React from 'react'
// import Link from 'next/link'
// import { AiOutlineShoppingCart } from "react-icons/ai"
// import { CiSearch } from "react-icons/ci"
// import { FaRegCircleUser } from "react-icons/fa6"
// import { FaGripLines } from "react-icons/fa";
// const Navbar = () => {
//   return (
//     <div className="w-full bg-[#FFFFFF]">
//       {/* Top Bar */}
//       <div className="hidden lg:flex justify-between items-center py-5 px-8">
//         <div>
//           <CiSearch className="text-[#2A254B] text-2xl cursor-pointer" />
//         </div>
//         <h1 className="text-[#22202E] text-xl font-bold">Avion</h1>
//         <div className="flex gap-4 text-2xl">
//           <AiOutlineShoppingCart className="cursor-pointer" />
//           <FaRegCircleUser className="cursor-pointer" />
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="flex lg:hidden justify-between items-center py-4 px-4">
//         <h1 className="text-[#22202E] text-lg font-bold">Avion</h1>
//         <div className='flex items-center'>
//           <CiSearch className="text-[#2A254B] text-2xl cursor-pointer" />
//           <FaGripLines />
//         </div>
//       </div>

//       <hr className="border-t border-gray-300" />

//       {/* Navbar Links */}
//       <div className="mt-4">
//         <ul className="hidden lg:flex justify-center gap-6 text-sm text-[#726E8D] font-normal">
//           <li><Link href="/components/About">Plant pots</Link></li>
//           <li><Link href="/components/AllProduct">Ceramics</Link></li>
//           <li><Link href="/components/Productlisting">Tables</Link></li>
//           <li><Link href="/components/shoplist">Chairs</Link></li>
//           <li><Link href="#">Crockery</Link></li>
//           <li><Link href="#">Tableware</Link></li>
//           <li><Link href="#">Cutlery</Link></li>
//         </ul>

//       </div>
//     </div>
//   )
// }

// export default Navbar
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-5 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <CiSearch className="text-[#2A254B] text-2xl cursor-pointer" />
          <h1 className="text-[#22202E] text-xl font-bold lg:hidden">Avion</h1>
        </div>
        <h1 className="hidden lg:block text-[#22202E] text-xl font-bold">Avion</h1>
        <div className="flex gap-4 text-2xl">
          <AiOutlineShoppingCart className="cursor-pointer" />
          <FaRegCircleUser className="cursor-pointer" />
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
          <li><Link href="/components/About">Plant pots</Link></li>
          <li><Link href="/components/AllProduct">Ceramics</Link></li>
          <li><Link href="/components/Productlisting">Tables</Link></li>
          <li><Link href="/components/shoplist">Chairs</Link></li>
          <li><Link href="#">Crockery</Link></li>
          <li><Link href="#">Tableware</Link></li>
          <li><Link href="#">Cutlery</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


