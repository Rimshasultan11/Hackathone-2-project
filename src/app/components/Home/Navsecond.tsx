"use client"
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";

const Navsecond = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="w-full h-[134px] bg-[#FFFFFF] flex justify-between items-center px-4 lg:px-16">
        <div className="text-[#22202E] text-xl font-bold">Avion</div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#22202E] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
          <li><Link href="/components/About">About</Link></li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          
          </ul>
          <div className="flex gap-4 text-lg text-[#2A254B]">
            <CiSearch />
            <Link href="/shoplist">
              <AiOutlineShoppingCart />
            </Link>
            <FaRegCircleUser/>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFFFF] px-4 py-4">
          <ul className="flex flex-col gap-4">
          <li><Link href="/components/About">About</Link></li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            
          </ul>
          <div className="flex gap-4 mt-4 text-lg text-[#2A254B]">
            <CiSearch />
            <Link href="/components/shoplist">
              <AiOutlineShoppingCart />
            </Link>
           
          </div>
        </div>
      )}

      {/* Bottom Navbar */}
      <div className="w-full h-[64px] bg-[#F9F9F9] px-4 lg:px-[250px] mb-14 mt-0 py-4 items-center justify-center hidden lg:block">
        <ul className="flex gap-[30px] text-[14px] text-[#726E8D] text-center font-normal">
        <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components/AllProduct">All Products</Link>
          </li>
          <li><Link href="/components/About">Plant pots</Link></li>
          <li><Link href="/components/AllProduct">Ceramics</Link></li>
          <li><Link href="/components/Productlisting">Tables</Link></li>
          <li><Link href="/components/shoplist">Chairs</Link></li>
          <li>
            <Link href="#">Crockery</Link>
          </li>
          <li>
            <Link href="#">Tableware</Link>
          </li>
          <li>
            <Link href="#">Cutlery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navsecond;
