import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { LuSprout } from "react-icons/lu";

const Brandes = () => {
  return (
    <div className="wrapper w-full bg-[#FFFF] py-8">
      {/* Heading */}
      <div className="text-[#2A254B] text-center text-2xl font-medium mb-8">
        What makes our brand different
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
          <TbTruckDelivery className="text-3xl text-[#2A254B] mb-2" />
          <p className="text-lg text-[#2A254B] font-semibold mb-2">
            Next day as standard
          </p>
          <p className="text-sm text-[#2A254B]">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
          <FaRegCheckCircle className="text-3xl text-[#2A254B] mb-2" />
          <p className="text-lg text-[#2A254B] font-semibold mb-2">
            Made by true artisans
          </p>
          <p className="text-sm text-[#2A254B]">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
          <MdPayment className="text-3xl text-[#2A254B] mb-2" />
          <p className="text-lg text-[#2A254B] font-semibold mb-2">
            Unbeatable prices
          </p>
          <p className="text-sm text-[#2A254B]">
            For our materials and quality, you won’t find better prices anywhere
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
          <LuSprout className="text-3xl text-[#2A254B] mb-2" />
          <p className="text-lg text-[#2A254B] font-semibold mb-2">
            Recycled packaging
          </p>
          <p className="text-sm text-[#2A254B]">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brandes;
