import React from 'react';

const Abhero = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF]">
      <div className="wrapper flex flex-col lg:flex-row gap-8 lg:gap-24 items-center px-4 lg:px-0 py-8 lg:py-0">
        {/* Text Section */}
        <div className="w-full lg:w-[704px] text-center lg:text-left lg:ml-[120px] mt-[16px] lg:mt-[88px]">
          <p className="text-[#2A254B] text-lg leading-[30px] lg:leading-[60px] lg:text-[34px]">
            A brand built on the love of craftsmanship, quality, and outstanding customer service
          </p>
        </div>
        
        {/* Button Section */}
        <div className="mt-4 lg:mt-[88px]">
          <button className="text-[#2A254B] text-[16px] w-[170px] h-[56px] py-[16px] px-[32px] bg-[#F9F9F9]">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abhero;
