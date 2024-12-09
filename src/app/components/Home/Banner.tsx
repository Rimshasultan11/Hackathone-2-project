import React from 'react'
import Image from 'next/image'
import p7 from '/public/p7.png'

const Banner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 bg-[#FFFFFF] flex flex-col justify-between">
        <div className="wrapper max-w-lg mx-auto mt-8 lg:mt-16 px-6 lg:px-12">
          <p className="text-[#2A254B] text-lg md:text-2xl font-semibold leading-relaxed">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="py-4 text-[#505977] text-sm md:text-base leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className="text-[#505977] text-sm md:text-base leading-relaxed">
            Handmade and lovingly crafted furniture and homeware is what we live, breathe, and design, making our Chelsea boutique the hotbed for the London interior design community.
          </p>
        </div>
        <div className="flex justify-start lg:justify-start mt-8 lg:mt-12 px-6 lg:px-12 mb-8 lg:mb-16">
          <button className="py-3 px-6 bg-[#F9F9F9] text-[#2A254B] text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 bg-[#FFFFFF]">
        <Image 
          src={p7} 
          alt="banner" 
          className="w-full h-full object-cover" 
          priority={true} 
        />
      </div>
    </div>
  )
}

export default Banner
