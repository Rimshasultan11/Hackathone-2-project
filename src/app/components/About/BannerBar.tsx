import React from "react";
import Image from "next/image";
import p14 from "/public/p14.png";

const BannerBar = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row sm:mb-40">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-[603px] bg-[#FFFFFF]">
        <Image src={p14} alt="banner" className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-auto bg-[#FFFFFF] flex flex-col justify-between">
        <div className="w-full px-6 lg:px-16 py-8 lg:py-16">
          <p className="text-[#2A254B] text-xl lg:text-3xl leading-[28px] lg:leading-[40px]">
            Our service isn t just personal its actually hyper personally
            exquisite
          </p>
          <p className="py-4 lg:py-8 text-[#505977] text-base">
            When we started Avion, the idea was simple Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[#505977] text-base">
            Handmade and lovingly crafted furniture and homeware is what we live
            breathe and design so our Chelsea boutique became the hotbed for the
            London interior design community.
          </p>
        </div>

        <div className="w-full px-6 lg:px-16 py-4 lg:py-8">
          <button className="w-[150px] h-[56px] py-[16px] px-[32px] bg-[#F9F9F9] text-[#2A254B] text-sm">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerBar;
