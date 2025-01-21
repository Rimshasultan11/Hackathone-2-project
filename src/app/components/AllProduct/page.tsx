import React from "react";

import Image from "next/image";
import p9 from "/public/p9.jpg";
import { FaCaretDown } from "react-icons/fa";
import ProCards from "./productcards/page";
import Footer from "../Footer/Footer";
const page = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "209px",
          width: "100%",
          zIndex: -1,
        }}
        className="sm:h-[150vh] mt-10"
      >
        <Image
          src={p9}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ zIndex: -1 }}
        />
        <div>
          
          <h1 className="pt-[123px] pl-[80px] text-[#FFFFFF] text-4xl font-normal">
            All Product
          </h1>
        </div>
      </div>
      <div  className=" w-full h-[64px]  py-[16px] px-[24px] justify-between items-center hidden lg:flex">
        <div>
          <ul className="flex gap-6">
            <li className="flex items-center gap-2">
              Category
              <FaCaretDown />
            </li>
            <li className="flex items-center gap-2">
              Product type
              <FaCaretDown />
            </li>
            <li className="flex items-center gap-2">
              Price
              <FaCaretDown />
            </li>
            <li className="flex items-center gap-2">
              Brand
              <FaCaretDown />
            </li>
          </ul>
        </div>

        <div className="flex ">
          <ul className="flex gap-6">
            <li>Sorting by</li>
            <li className="flex items-center gap-2">
              Date Add
              <FaCaretDown />
            </li>
          </ul>
        </div>
      </div>
      <ProCards />
      <Footer />
    </div>
  );
};

export default page;
