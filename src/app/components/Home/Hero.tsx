

import React from 'react';
import Image from 'next/image';
import p1 from '/public/p1.png';

const Hero = () => {
  return (
    <div className="wrapper w-full h-[704px] bg-[#FFFFFF]">
      <div className="mt-[60px] mx-[20px] md:mx-[80px] h-[584px] flex flex-col md:flex-row bg-[#2A254B]">
        {/* Text Section */}
        <div className="mt-[60px] mx-[20px] md:mx-[70px] w-full md:w-[513px] text-center md:text-left">
          <p className="text-white py-10 font-normal font-sans text-4xl leading-10">
            The furniture brand for the future, with timeless designs
          </p>
          <button className="w-[170px] h-[56px] py-[16px] px-[32px] bg-[#F9F9F926] text-sm text-white mb-4 md:mb-0">
            View Collection
          </button>
          <p className="lg:mt-[35%] text-sm leading-[30px] text-white">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-[50%]">
          <Image src={p1} alt="banner" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

