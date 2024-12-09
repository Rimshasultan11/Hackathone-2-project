import React from 'react';

const Join = () => {
  return (
    <div className="w-full bg-[#F9F9F9] mt-[52px] py-[56px]">
      <div className="wrapper max-w-[1200px] mx-auto bg-[#FFFFFF] text-center items-center rounded-md shadow-md py-12 px-6 md:px-16">
        <div>
          {/* Heading */}
          <h1 className="text-[24px] md:text-[36px] font-normal text-[#2A254B] leading-[40px] md:leading-[70px] mb-4">
            Join the club and get the benefits
          </h1>
          {/* Paragraph */}
          <p className="text-[#2A254B] text-[14px] md:text-[16px] px-4 md:px-[300px]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more.
          </p>
          {/* Input and Button */}
          <div className="flex  sm:flex-row justify-center items-center  mt-10">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="bg-[#F9F9F9] w-full sm:w-[354px] h-[56px] px-4 text-sm border border-gray-300  focus:outline-none"
            />
            <button className="bg-[#2A254B] py-[16px] px-[32px] w-[150px] h-[56px] text-sm text-white  hover:bg-[#1d1b40]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
