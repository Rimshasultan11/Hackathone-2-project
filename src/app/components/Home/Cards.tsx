import React from "react";
import Image from "next/image";

const Cards = ({
  pic,
  description,
  tittle,
}: {
  pic: any;
  description: string;
  tittle: any;
}) => {
  return (
    <div className="relative group w-full hover:bg-[#2A254B] md:w-[305px] h-[462px] hover:text-white bg-white text-[#2A254B]  overflow-hidden shadow-md">
      {/* Image */}
      <Image
        src={pic}
        alt="images"
        width={300}
        height={300}
         className="w-[305px] h-[375px]
          transition-transform duration-300 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-4">
        <p>{description}</p>
        <p>{tittle}</p>
      </div>

      {/* Blur Overlay */}
      <div className="absolute  inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className=" w-full bg-[#2A254B] text-white px-6 py-3  shadow-md font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Cards;
