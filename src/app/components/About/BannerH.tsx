import React from 'react'
import Image from 'next/image'
import banner2 from '/public/banner2.png'

const BannerH = () => {
  return (
    <div>
      <div className='wrapper w-full flex flex-col sm:flex-col lg:flex-row gap-4 justify-center items-center'>
        {/* Text Section */}
        <div className='my-8 w-full sm:w-full lg:w-[630px] h-[478px] bg-[#2A254B]'>
          <h1 className='text-[32px] text-[#FFFF] py-12 px-14 font-normal'>
            It started with a small idea
          </h1>
          <p className='px-14 text-[#FFFFFF] text-lg'>
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className='w-[170px] h-[56px] mt-10 lg:mt-[30%] ml-14 py-[16px] px-[32px] bg-[#F9F9F926] text-sm text-white'>
            View Collection
          </button>
        </div>

        {/* Image Section */}
        <div className='w-full sm:w-full lg:w-[630px] h-[478px]'>
          <Image src={banner2} alt='banner' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default BannerH
