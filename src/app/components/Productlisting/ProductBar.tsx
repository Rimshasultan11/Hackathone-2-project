import React from 'react';
import Image from 'next/image';
import left from '/public/left.png';

const ProductBar = () => {
  return (
    <div className="w-full bg-[#FFFFFF] py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-16 px-6 lg:px-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={left}
            alt="left/image"
            className="w-full max-w-[390px] lg:max-w-[721px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Product Title and Price */}
          <div>
            <p className="text-[#2A254B] mb-4 text-xl lg:text-4xl mt-4 lg:mt-0">
              The Dandy Chair
            </p>
            <p className="text-[#12131A] text-lg lg:text-2xl">£250</p>
          </div>

          {/* Description Section */}
          <div className="mt-6 lg:mt-10 flex flex-col gap-5">
            <p className="text-[#2A254B] text-lg">Description</p>
            <p className="text-[#505977] text-base">
              A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>

            <ul className="list-disc pl-6 text-[#505977] text-base">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions Section */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-[#2A254B] text-lg">Dimensions</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col text-base text-[#505977]">
                <p>Height</p>
                <p>110cm</p>
              </div>
              <div className="flex flex-col text-base text-[#505977]">
                <p>Width</p>
                <p>75cm</p>
              </div>
              <div className="flex flex-col text-base text-[#505977]">
                <p>Depth</p>
                <p>65cm</p>
              </div>
            </div>
          </div>

          {/* Amount and Add to Cart Section */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-4 items-center text-[#2A254B]">
              <p>Amount</p>
              <p>1</p>
            </div>
            <button className="bg-[#2A254B] text-white py-3 px-6 text-sm lg:text-base">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
